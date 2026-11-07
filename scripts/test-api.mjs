// Production-build journeys in a disposable database. Never reuse a learner server.
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { existsSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:net';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
if (!existsSync(join(root, '.next/BUILD_ID'))) {
  throw new Error('Run npm run build before npm run test:api:isolated.');
}
const directory = mkdtempSync(join(tmpdir(), 'speakup-api-test-'));
const config = join(directory, 'test.env');
writeFileSync(config, 'SPEAKUP_DEMO=true\n', { mode: 0o600 });
const env = {
  ...process.env,
  NEXT_TELEMETRY_DISABLED: '1',
  SPEAKUP_CONFIG_FILE: config,
  SPEAKUP_DB_PATH: join(directory, 'test.sqlite'),
  SPEAKUP_DEMO: 'true',
  SPEAKUP_HTTPS: 'false',
  LLM_API_KEY: 'scripted-test-placeholder',
};
let server;
let tests;
let signalCode = 0;
let startupError;
let logs = '';
const signalHandlers = new Map(['SIGINT', 'SIGTERM'].map((signal, index) => {
  const handler = () => {
    signalCode = index === 0 ? 130 : 143;
    tests?.kill(signal);
    server?.kill(signal);
  };
  process.on(signal, handler);
  return [signal, handler];
}));

async function freePort() {
  const socket = createServer();
  socket.listen(0, '127.0.0.1');
  await once(socket, 'listening');
  const port = socket.address().port;
  await new Promise((done, reject) => socket.close(error => error ? reject(error) : done()));
  return port;
}

try {
  const base = `http://127.0.0.1:${await freePort()}`;
  server = spawn(process.execPath, [join(root, 'node_modules/next/dist/bin/next'), 'start', '--hostname', '127.0.0.1', '--port', new URL(base).port], { cwd: root, env, stdio: ['ignore', 'pipe', 'pipe'] });
  server.on('error', error => { startupError = error; });
  for (const output of [server.stdout, server.stderr]) {
    output.on('data', chunk => { logs = (logs + chunk.toString()).slice(-12000); });
  }
  const deadline = Date.now() + 30000;
  while (true) {
    if (signalCode) throw new Error('Interrupted.');
    if (startupError) throw startupError;
    if (server.exitCode !== null || server.signalCode) throw new Error('Isolated server stopped during startup.');
    try {
      const response = await fetch(`${base}/api/health`, { signal: AbortSignal.timeout(500) });
      const health = await response.json();
      if (response.ok && health.app === 'speakup-ai' && health.status === 'ok') break;
    } catch { /* The new server may not be listening yet. */ }
    if (Date.now() > deadline) throw new Error('Isolated server did not become ready within 30 seconds.');
    await new Promise(done => setTimeout(done, 200));
  }
  console.log(`Running scripted API journeys against isolated server ${base}`);
  tests = spawn(process.execPath, [join(root, 'node_modules/tsx/dist/cli.mjs'), '--test', 'tests/api.integration.ts'], { cwd: root, env: { ...env, TEST_BASE_URL: base }, stdio: 'inherit' });
  const [code] = await once(tests, 'exit');
  process.exitCode = signalCode || code || (code === 0 ? 0 : 1);
  if (process.exitCode) console.error(logs);
} catch (error) {
  console.error(error.message);
  if (logs) console.error(logs);
  process.exitCode = signalCode || 1;
} finally {
  if (server && server.exitCode === null && !server.signalCode && !startupError) {
    const closed = once(server, 'close');
    const force = setTimeout(() => server.kill('SIGKILL'), 3000);
    server.kill('SIGTERM');
    await closed;
    clearTimeout(force);
  }
  for (const [signal, handler] of signalHandlers) process.off(signal, handler);
  rmSync(directory, { recursive: true, force: true });
}
