# Contributing

Fork the repository, clone your fork, and install dependencies with `npm ci` using Node.js 22.13 or newer.

Create a branch for your change:

```bash
git switch -c improve-my-feature
```

Use your own local `.env.local` only if the change requires a live model. Demo mode and mocked tests work without a key. Keep all configuration, learner data, local databases, logs, private drafts and supplied publication originals out of commits.

Run relevant checks:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

For API changes, also use the isolated test server described in the README, or run `npm run test:api:isolated` after building. Never point mutation/deletion tests at data you need to retain.

Open a pull request explaining the problem, resulting behavior and validation. Describe known limits. Clearly distinguish authored rules, generated AI responses and learner self-reports. Do not claim educational effectiveness from technical tests or software demonstration records.
