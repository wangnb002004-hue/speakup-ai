import { spawn } from 'node:child_process';
import { createServer } from 'node:net';
import { existsSync, openSync, closeSync, mkdirSync, statSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(root);
const background = process.argv.includes('--background');
const shouldOpen = process.argv.includes('--open');
const requestedPort = Number(process.env.SPEAKUP_PORT || 4311);
if (!Number.isInteger(requestedPort) || requestedPort < 1024 || requestedPort > 65525) {
  throw new Error('SPEAKUP_PORT must be an integer between 1024 and 65525.');
}
const [major, minor] = process.versions.node.split('.').map(Number);
if (major < 22 || (major === 22 && minor < 13)) {
  throw new Error('SpeakUp AI needs Node.js 22.13 or newer. Please install Node.js 24 LTS.');
}
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
async function command(args) {
  await new Promise((resolve, reject) => {
    const child = spawn(npm, args, { cwd: root, stdio: 'inherit' });
    child.on('error', reject);
    child.on('exit', code => code === 0 ? resolve() : reject(new Error(`npm ${args.join(' ')} failed (${code}).`)));
  });
}
async function isSpeakUp(port) {
  try {
    const response = await fetch(`http://127.0.0.1:${port}/api/health`, { signal: AbortSignal.timeout(800) });
    if (!response.ok) return false;
    const body = await response.json();
    return body.app === 'speakup-ai' && body.status === 'ok';
  } catch { return false; }
}
async function available(port) {
  return new Promise(resolve => {
    const server = createServer();
    server.once('error', () => resolve(false));
    server.listen(port, '127.0.0.1', () => server.close(() => resolve(true)));
  });
}
function latestChange(path) {
  if (!existsSync(path)) return 0;
  const stat = statSync(path);
  if (!stat.isDirectory()) return stat.mtimeMs;
  return Math.max(stat.mtimeMs, ...readdirSync(path).map(name => latestChange(join(path, name))));
}
function openBrowser(url) {
  if (!shouldOpen) return;
  if (process.platform === 'darwin') spawn('open', [url], { stdio: 'ignore' }).unref();
  else console.log(`Open this address in your browser: ${url}`);
}
let port;
for (let candidate = requestedPort; candidate < requestedPort + 10; candidate++) {
  if (await isSpeakUp(candidate)) {
    const url = `http://127.0.0.1:${candidate}`;
    console.log(`SpeakUp AI is already running: ${url}`);
    openBrowser(url);
    process.exit(0);
  }
  if (await available(candidate)) { port = candidate; break; }
}
if (!port) throw new Error('No free port found. Set SPEAKUP_PORT to another port and try again.');
if (!existsSync(join(root, 'node_modules/next/package.json'))) await command(['ci']);
const buildId = join(root, '.next/BUILD_ID');
const sourceTime = Math.max(...['src', 'next.config.ts', 'package.json', 'postcss.config.mjs'].map(name => latestChange(join(root, name))));
if (!existsSync(buildId) || statSync(buildId).mtimeMs < sourceTime) await command(['run', 'build']);
const args = [join(root, 'node_modules/next/dist/bin/next'), 'start', '--hostname', '127.0.0.1', '--port', String(port)];
let log;
if (background) {
  mkdirSync(join(root, 'data'), { recursive: true });
  log = openSync(join(root, 'data/speakup-server.log'), 'a', 0o600);
}
const child = spawn(process.execPath, args, {
  cwd: root, detached: background, stdio: background ? ['ignore', log, log] : 'inherit',
  env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1' },
});
let launchError;
child.on('error', error => { launchError = error; });
if (background) { closeSync(log); child.unref(); }
for (let attempt = 0; attempt < 60; attempt++) {
  if (launchError || child.exitCode !== null) throw launchError || new Error('Server stopped during startup. Check the terminal or data/speakup-server.log.');
  if (await isSpeakUp(port)) {
    const url = `http://127.0.0.1:${port}`;
    console.log(`\nSpeakUp AI is ready: ${url}`);
    console.log(background ? `Background server PID: ${child.pid}. Logs: data/speakup-server.log` : 'Keep this window open. Press Ctrl+C to stop the server.');
    openBrowser(url);
    if (background) process.exit(0);
    for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => { child.kill(signal); });
    child.on('exit', code => { process.exitCode = code || 0; });
    break;
  }
  await new Promise(resolve => setTimeout(resolve, 250));
  if (attempt === 59) { child.kill('SIGTERM'); throw new Error('Server did not become ready. Check startup logs.'); }
}
