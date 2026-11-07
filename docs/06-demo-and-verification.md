# Demonstration and actual verification record

**Current revision, 4 November:** the literature-informed functions and presentation are implemented. See [the current evidence and verification record](09-literature-driven-upgrade.md) and [all 30 paper audits](08-literature-evidence-matrix.md). The 2 November record below and the [3 November API record](07-live-ai-upgrade.md) are retained with their original dates.

## A reproducible local demonstration

1. Install Node 22.13+ and run `npm ci`, then `npm run dev`. Open http://127.0.0.1:4311 . No key is required. If the port is occupied, append `-- --port 4312`.
2. Create a nickname such as “Demo learner.” Select confidence, personal apprehension, contexts and a goal. Acknowledge local storage. Optional voice and remote AI can remain off.
3. The dashboard has no seeded progress. Choose “Join the discussion.”
4. Type “Could I add a thought? AI could help us rehearse questions before class.” Send it, inspect the scenario follow-up, and send another reply if desired. Scripted demo prompts use simple branches and turn order; they do not assess semantics.
5. Finish and inspect clarity, pragmatics, phrases and next step. The demo feedback states that it is scripted coaching.
6. Choose a level-one quest. Accept it and inspect the instructions. A willing human interaction would happen outside the app at the learner’s chosen time.
7. During a software/classroom demonstration, choose **Not yet**, record “This is a software walkthrough; no human interaction occurred,” and select a next step. Never manufacture a completed interaction to make the analytics look better.
8. Save the reflection, read the updated recommendation and inspect My progress. The practice count increases, but the real-world attempt count remains zero for a not-yet reflection.
9. Refresh the page and open Practice studio → recent practice → View feedback to verify persistence. Reflection history and confidence records also persist.
10. Settings supports export and a separate deletion confirmation. Export before deletion if you want to retain your demonstration records. Use test data only.

## Offline presentation fallback

The app itself needs a running local Node server. Deterministic demo does not need internet or an LLM key after dependencies have been installed. If the server cannot be started during class, use the screenshots below and the editable slide deck; say it is a recorded interface demonstration. Browser speech services may require internet and are not part of the offline guarantee.

- `screenshots/dashboard.jpg`: full desktop dashboard.
- `screenshots/dashboard-overview.jpg`: upper dashboard used in the presentation.
- `screenshots/practice-feedback.jpg`: persisted practice and scripted feedback.
- `screenshots/mobile.jpg`: default mobile preview after the skip-to-main keyboard action.

**Every screenshot shows a test-only demonstration profile.** One completed software practice and a “not yet” reflection do not constitute stakeholder findings, authentic speaking attempts, an experiment or a measured learning effect.

## Checks actually executed on 2 November 2026

Environment: macOS, Node 26.7.0, Next.js 16.4.3, npm install/locked dependencies. The privately supplied course PDFs were read before application implementation; they are omitted from the public repository; the syllabus general grade descriptor was visually inspected. The focused scholarly references and technical limitations were checked against the source register.

| Check | Actual result and boundary |
|---|---|
| ESLint | Passed, no errors or warnings in the final run |
| TypeScript | `tsc --noEmit` passed |
| Unit tests | 9 passed: domain policy, validation, analytics, deterministic behavior, provider contract with mock fetch, session isolation, rollback and deletion |
| Next production build | Passed; page, three learning API routes and the health endpoint compiled |
| API integration | Complete multi-step test passed against isolated `work/qa.sqlite`; includes forbidden origin, invalid input, session isolation, feedback prerequisites, finished-practice rejection, duplicate quest/reflection and deletion |
| Browser journey | Profile saved → scenario started → message sent → feedback → quest accepted → not-yet reflection saved → recommendation updated; progress accurately shows zero human attempts |
| Persistence | After server restart and browser refresh, the saved profile, test practice, reflection and feedback remained available |
| Responsive layout | Desktop 1440px inspected; 390px layout width equals document width (no horizontal overflow); default mobile preview visually inspected |
| Keyboard/accessibility | Native form labels, dialog focus, Enter activation of saved practice, skip-to-main focus transfer and navigation inspected; not a formal WCAG audit |
| PowerPoint | 13 slides: 10 main + 3 backup; notes embedded; every slide rendered and visually inspected; package/layout/import validation passed. No native PowerPoint execution claimed |

## Issues found and fixed

- Legal local requests initially failed origin checks because Next’s internal URL used a different hostname from the public loopback host. The check now validates the browser origin against the HTTP Host and effective protocol. A regression integration check rejects an unrelated origin.
- The compact sidebar note overlapped mobile bottom navigation; it is now hidden at compact widths. The final mobile screenshot shows unobstructed navigation.
- A database test initially used top-level await in CommonJS mode; the project is explicitly ESM and the final test suite passes.
- The reflection form initially defaulted to “completed.” It now requires the learner to choose an outcome explicitly, avoiding an accidental claim of completion.

## Verification limits

No paid/live model endpoint or API key was used. Provider success, failure and feedback-format behavior were tested with controlled mocked responses. Actual browser microphone capture and synthesis audio were not exercised; availability detection and text fallback are implemented. No third-party conversation was recorded. No stakeholder interview, participant recruitment, effectiveness evaluation, Moodle upload, public hosting or production deployment occurred. The report scaffold intentionally requires real interview findings.


## Access recovery — 2 November 2026

The earlier temporary preview server had been stopped. Port 3000 was subsequently occupied by the Xunfei Tingjian application, whose root returned an Express 404. That unrelated process was left running.

SpeakUp now defaults to port 4311. A health endpoint identifies the app; the macOS double-click launcher checks dependencies/build freshness, reuses an existing SpeakUp instance and selects an alternative local port when needed. The active server was started as an independent background process and was confirmed to remain available after the launcher exited. Page HTTP 200, health response, browser rendering, all 9 unit tests, the full API integration test, lint, type checking and production build passed after the change. The background service remains running for this handoff. No login account is required; the initial form is learner onboarding.
