# Public-source release verification

Verified on 7 November 2026 in a fresh project directory, using Node.js 26.7.0 and npm 11.19.0 on macOS. The repository also includes an optional [Node 24 GitHub Actions example](ci-example.yml). It is not an active workflow: the GitHub credential used for this publication lacks the `workflow` scope. These are local results; no remote CI pass is claimed.

| Check | Local result |
|---|---|
| `npm ci` from the committed lockfile | Passed |
| `npm run lint` | Passed |
| `npm run typecheck` | Passed |
| `npm test` | 20 passed |
| `npm run build` | Passed; page and five API routes generated |
| `npm run test:api:isolated` | 3 journeys passed against a fresh production server with a disposable database |
| `npm audit --omit=dev` | No reported production dependency vulnerabilities at this check |

The API runner forces scripted mode, starts its own server on a free loopback port and removes its temporary database. It neither reuses the author's learning session nor requires a paid provider key. The unit tests mock AI responses. No new live-model call, microphone test, stakeholder interview or learning-effect study was performed for this publication check. Historical live calls are documented separately in [the API upgrade record](07-live-ai-upgrade.md) and [the literature upgrade record](09-literature-driven-upgrade.md).

The full dependency audit reported eight moderate findings in the development lint-tool dependency chain, originating in a transitive `minimatch` package. It suggested changing the Next ESLint configuration to another major version. That compatibility-changing update was not applied as an automatic publication fix. Production audit and passing checks do not constitute a complete security review.

Publication preparation excluded real environment configuration, learner databases, local logs, working files and privately supplied source publications. The public documentation retains bibliographic references and paraphrased design reasoning. Demo screenshots and the editable presentation describe software demonstrations rather than participant results.

For the actual system explanation, use [the Chinese walkthrough](10-project-walkthrough-zh.md); for the four-person talk, use [the rehearsal guide](11-presentation-rehearsal-zh-en.md). Public GitHub source hosting does not deploy the Node backend or provide a shared online classroom service.
