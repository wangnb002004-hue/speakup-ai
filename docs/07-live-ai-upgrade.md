# DeepSeek V4 Pro upgrade — dated technical record and literature revision

The real-API observations below are a historical record from **3 November 2026**. The learning workflow was revised on **4 November 2026** using the supplied literature. Do not present the older run, test count or screenshots as verification of every later feature. Current validation belongs in the latest README and revision record. Older 2 November screenshots describe the initial scripted prototype.

## Live AI capabilities established in the 3 November version

- Full-stack Next.js interface, same-origin Node API handlers and persistent local SQLite. No separate login is needed for this local course prototype.
- Real DeepSeek `deepseek-v4-pro` calls using a server-only key and official HTTPS endpoint. Thinking is explicitly disabled for short conversational replies. Chat and feedback have separate token budgets and timeouts.
- Streamed replies, a Stop control, tab-local draft retention and request UUIDs that prevent duplicate turns when a completed response is retried after a lost connection. Failed, truncated, cancelled or empty replies are not committed as successful turns.
- Guided, natural or stretch support chosen by the learner. With current opt-in, a new practice includes the selected learning goal. Nickname, confidence and nervousness ratings are excluded from the model prompt.
- Feedback quotes the learner's actual words, identifies the turn, offers an alternative and explains it. The server rejects a quotation that does not match the stored user turn. This verifies attribution; it does **not** prove that every suggestion is correct.
- A second rehearsal carries forward the previous coaching focus, and useful phrases can be saved in My progress.
- Accepted quests retain their chosen scenario and challenge. Completed rehearsal points toward a matching human interaction before moving to another context.
- An immutable starting-confidence record, opportunity/strategy reflection fields and an optional willingness check-in. These are personal reflections, not validated WTC scales.
- Settings exposes actual provider/model status and a small real connection test. Historical demo practices keep their demo label; enable current consent and start a new practice for live AI.

## Actual technical verification — 3 November 2026

On 3 November 2026 the user's locally configured DeepSeek API returned `READY` from `deepseek-v4-pro`. The first connection check took 1.954 seconds, with 10 input and 2 output tokens.

A browser software demonstration then sent two seminar contributions. DeepSeek responded to their specific meaning and retained context: rehearsing a seminar contribution, starting with a short answer, and inviting a classmate's view. The observed replies took approximately 2.2 and 2.3 seconds. Actual feedback took approximately 5.3 seconds and 273 output tokens. Both evidence quotations matched the stored learner turns. A phrase saved successfully to the notebook. The second rehearsal also completed a real reply and feedback. The browser Stop → retry path preserved its draft and saved exactly one turn. One feedback response was lost by the browser after the server had saved it; retry retrieved the stored feedback without another model call. Error copy now explains how to retry after a lost connection. Desktop 1440px and mobile 390px had no horizontal overflow. A software-only not-yet reflection retained zero human attempts and zero completed quests. These are technical observations from this run, not guaranteed future latency or learning gains.

Checks: ESLint, generated Next route types/TypeScript, 15 unit tests, production build, and two integration journeys against isolated `work/qa-v2.sqlite`. Integration covers the transfer loop, isolation, validation, origin checks, duplicate protection, NDJSON streaming, safe retry, phrase persistence and immutable baseline. Mock tests cover rate/key/balance errors, truncation, invalid JSON, unmatched quotes, stream chunk boundaries and cancellation. The browser also checks real model calls and the interface separately.

## Literature-informed workflow — 4 November 2026

The supplied corpus motivates academic relevance and learner agency rather than a claim that AI has already improved speaking. The source-by-source [evidence matrix](08-literature-evidence-matrix.md) records discrepancies, methods and limits. The papers mostly concern academic language experiences, strategies and support; they are not 30 effectiveness trials of this AI system.

- **Six tasks:** the original four situations plus asking for specific writing feedback and clarifying a missed lecture point. Visible communicative moves, strategy suggestions and participation notes make example expectations discussable. The writing scenario rehearses a feedback question rather than producing an essay.
- **Private preparation:** intention, selected strategy, an optional note in any language and optional contextual ratings remain on the local server. None of these new fields is automatically sent to the model. The separately consented profile goal and messages deliberately sent in a live practice still can be shared.
- **Learner-controlled support:** guided/natural/stretch choice and show/hide phrase hints. There is no inferred proficiency level or automatic scaffold-fading algorithm.
- **Critical self-review:** save a takeaway and next try, optionally checking confidence/willingness in the same context. These are personal records, not validated WTC measures or evidence of an AI effect.
- **Human planning and barriers:** optional opening, timing/place and respectful exit; reflection can distinguish opportunity, speaking space, language difficulty and chosen listening. Saving a plan, reading slides or listening intentionally does not count as a human speaking attempt. The learner's chosen challenge is preserved, including after “not yet.”
- **Support hub:** prepare a question and next action for a lecturer, a willing disciplinary peer, or language/writing support. Official EdUHK consultation and peer-mentoring information is linked with eligibility/availability cautions. Planned/contacted/followed-up status and optional usefulness are self-reported. The app books no service and sends no request.
- **Narrower AI coaching:** emphasize communicative purpose, respect varieties of English, avoid treating silence or clarification as a deficit, and keep exact quotation checks. A matched quote still does not prove a proposed rewrite is correct.

The new domain/AI checks include private-field exclusion, preserved learner challenge, valid listening/no-opportunity records and same-scenario transfer linkage. Record the complete integration/build/browser result separately after that verification actually runs. The 15-test figure above belongs to 3 November.

## Try the revised project

1. Open the local launcher address, normally [SpeakUp AI](http://127.0.0.1:4311/). This is a local address, not a public group-sharing URL.
2. In Settings & privacy, refresh status and optionally test the connection. A successful test shows the actual model and time; it sends a short fixed prompt, not a learning profile.
3. Set up or edit the learning profile and review remote-AI permission. A new practice can use the separately consented profile goal. Check the practice's own Live AI / `deepseek-v4-pro` label; old demo history remains scripted.
4. Select a relevant scenario, read its example communicative move and make a private plan. Optional multilingual notes and personal ratings stay local.
5. Rehearse a contribution or feedback/clarification request. Show or hide hints as useful. Finish, inspect the quotation and proposed alternative, save a phrase, and write what you would keep or question in your self-review.
6. When ready, choose a matching task with a willing person and an opening/timing/exit plan, or prepare a question in Support hub. A software demonstration should leave human activity “not yet” and support contact “planned”; it must not invent an interaction or service use.
7. After a real chosen interaction, report what happened and any opportunity/participation barrier. Follow up on support only if it actually occurred. Compare records as personal experiences, not established gains.

During the dated local verification, a separate “Live demo” session was used. It was software test activity, not real participant data. Those browser sessions and their databases are not distributed in the public repository.

## Local key and launch

The original author's local configuration and learner database are not included in this public repository. Copy the blank `.env.example` to `.env.local` and supply your own provider key if you choose live AI. Never put a key into chat, presentation slides, browser code or a public repository.

Changing a nonempty key or other environment settings requires a server restart because Next loads environment variables at startup. Start your own local service following the README. Foreground launches require their terminal to remain open. A loopback address is accessible from the computer running the service; it is not a public link for simultaneous remote users.

## Remaining limits

No cloud hosting, institutional login, cross-device sync, completed real stakeholder interview, validated learning-effect evaluation or automatic pronunciation assessment is claimed. The optional check-ins are not shortened validated scales, and a pre/post difference does not establish transfer or causation. The corpus's correlations, participant accounts and recommendations are design inputs, not product outcomes. Browser microphone recognition and audible synthesis still depend on the browser and were not tested with the user's own voice. Real-world attempts remain self-reported. AI coaching can be imperfect even with exact quotations. The next priority for a shared class trial is authenticated hosting with protected storage and global usage limits, followed by a real consented stakeholder evaluation.

Official API references: [chat completion and thinking control](https://api-docs.deepseek.com/api/create-chat-completion/), [JSON output](https://api-docs.deepseek.com/guides/json_mode/).
