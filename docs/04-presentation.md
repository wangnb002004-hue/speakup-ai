# SpeakUp AI: literature-informed presentation

The [7 November rehearsal guide](11-presentation-rehearsal-zh-en.md) adds Chinese explanations, concise English speaking scripts, exact UI actions and fallback narration. Use it for timed rehearsal; this document retains the original slide-note text.

Revised 4 November 2026. Ten main slides, 600 seconds total, followed by five backup slides for Q&A. Timings are rehearsal targets. The presentation is on 16 November. Materials remain due 9 November 2026 at 23:59 Hong Kong time. No submission has occurred.

The deck is editable. It describes a full-stack local prototype and distinguishes literature-informed design, actual software verification and educational impact. Real DeepSeek V4 Pro access was verified on 3 November. No real stakeholder interview or learning-impact study has been conducted. Add the four members’ real names/IDs and the required AI acknowledgment before personal submission.

## Allocation and timing

| Member | Main slides | Time | Focus |
|---|---|---:|---|
| A | 1–2 | 120 s | English introduction, the academic participation problem and scope |
| B | 3–4 | 150 s | Literature interpretation and education design |
| C | 5–7 | 180 s | Live software walkthrough, AI and architecture |
| D | 8–10 | 150 s | Agency, privacy, evaluation and limitations |

## Slide 1: SpeakUp AI

**Speaker A, 40 seconds.**

SpeakUp AI is a university English participation and help-seeking prototype. A student can prepare for an academic interaction, rehearse with AI, examine feedback, and decide whether to contact a real person. Our literature review changed the project. We now make hidden expectations explicit and connect practice to useful academic support. We will demonstrate the working system and distinguish technical verification from educational impact. We have not conducted a learning-effect study.

## Slide 2: Academic participation and support

**Speaker A, 80 seconds.**

The thirty-paper review is broader than speaking confidence. Zhou and colleagues report difficulties with productive academic tasks, especially writing, alongside gaps in language support. Needs vary by task and group, so we do not claim that writing is always the greatest difficulty. Wang and Moskal show that classroom silence can reflect limited speaking space, or a deliberate form of participation. These findings changed our scope. We focus on access to academic participation and help: asking for specific assignment feedback, clarifying a missed lecture point, and understanding how to approach a lecturer or mentor. A learner may know the words yet still be unsure what kind of question to ask or whether an interruption is appropriate. We make those expectations discussable while retaining choice. These studies identify design needs. They do not establish that our AI tool works.

**Sources and limits**

- Zhou, S., McKinley, J., Rose, H., & Xu, X. (2022). English medium higher education in China: Challenges and ELT support. ELT Journal, 76(2), 261–271. https://doi.org/10.1093/elt/ccab082. Supplied PDF pp. 3–5: methods, participant counts and reported task difficulties.
- Wang, S., & Moskal, M. (2019). What is wrong with silence in intercultural classrooms? An insight into international students’ integration at a UK university. Journal of Comparative & International Higher Education, 11, 52–58. Supplied PDF pp. 2–5: ethnographic context, ten focal students, intentional and unintentional silence.

## Slide 3: Evidence and design decisions

**Speaker B, 75 seconds.**

We translated selected findings into specific, testable design decisions. Kowkabi and colleagues describe explicit support for academic norms, so each scenario now explains an academic move and helps a student prepare an intention. Their small design project is not an effectiveness trial. Ravichandran and colleagues report graduate students wanting more specific feedback, so our coaching quotes a learner turn and offers a rewrite with a reason. Exact quotation checking establishes attribution, not the quality of the advice. Research on help-seeking informed the Support hub, where a learner can plan a contact and record whether follow-up proved useful. A cross-sectional association does not show that contacting support causes academic success. Finally, the silence research informed reflection options for chosen listening and lack of speaking space. Each connection gives us a question to investigate rather than a guaranteed outcome.

**Sources and limits**

- Kowkabi, N., Yamamoto, M., & Lin, T.-Y. (2025). Harnessing multilingual international students’ English academic socialization through asynchronous interactive online orientation. TESL Canada Journal, 42(2), 65–78. https://doi.org/10.18806/tesl.v42i2/1432. Teaching/design account with small groups of 4 and 9 providing input, not a controlled trial.
- Ravichandran, S., Kretovics, M., Kirby, K., & Ghosh, A. (2017). Strategies to address English language writing challenges faced by international graduate students in the US. Journal of International Students, 7(3), 764–785. https://doi.org/10.5281/zenodo.570033. Fifteen qualitative interviews. Supplied PDF pp. 12–14: feedback, office hours and mentoring.
- Bastien, G., Seifen-Adkins, T., & Johnson, L. R. (2018). Striving for success: Academic adjustment of international students in the U.S. Journal of International Students, 8(2), 1198–1219. https://doi.org/10.5281/zenodo.1250421. Cross-sectional survey of 122 students, association rather than causal evidence.
- Wang & Moskal (2019), pp. 53–56. Design interpretation by the project team.

## Slide 4: The learner journey

**Speaker B, 75 seconds.**

The learner first chooses a scenario and a purpose. A private plan can include a strategy or Chinese planning note. That note and personal check-ins stay local and do not enter the AI prompt. During rehearsal, the learner chooses guided, natural or stretch support and can control hints. After coaching, the learner reviews a specific suggestion and decides what to try again. A voluntary human task includes an opening, a suitable time, and a way to close or leave. Reflection separates an attempt from no opportunity or chosen listening, and asks whether feedback helped. Academic discourse socialization explains the focus on local norms. WTC explains attention to readiness in a particular situation. Experiential learning motivates reflection and another attempt, while self-determination theory motivates choice. The presence of this loop does not prove transfer, and we do not infer a learner’s ability from their selected support style.

**Sources and limits**

- Kowkabi et al. (2025), https://doi.org/10.18806/tesl.v42i2/1432.
- MacIntyre, P. D., Clément, R., Dörnyei, Z., & Noels, K. A. (1998). Conceptualizing willingness to communicate in a L2: A situational model of L2 confidence and affiliation. The Modern Language Journal, 82(4), 545–562. https://doi.org/10.1111/j.1540-4781.1998.tb05543.x.
- Kolb, D. A. (1984). Experiential learning: Experience as the source of learning and development. Prentice-Hall. Design framework, not evidence of this intervention’s effectiveness.
- Ryan, R. M., & Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. American Psychologist, 55(1), 68–78. https://doi.org/10.1037/0003-066X.55.1.68.

## Slide 5: A request for assignment feedback

**Speaker C, 90 seconds.**

This walkthrough uses a software test profile. It is not a stakeholder result. We choose the assignment-feedback scenario and prepare one specific question. We send: ‘Could you show me which part of my argument needs stronger evidence?’ The live model responds to the request. We inspect a feedback quotation, its suggested rewrite and the reason. We then save a takeaway or rehearse again. Next, we prepare an opening and a suitable time for an actual lecturer or mentor. The Support hub can record contact and follow-up, but the app cannot confirm that a person replied or that advice helped. For the classroom demonstration we do not report a human interaction that did not occur. We can show ‘no opportunity’ instead. If the live API fails, we use the saved software demonstration and explain the switch. A scripted response must keep its Demo label.

**Walkthrough actions**

1. Before the talk: open the app, verify the real provider status, select an isolated software demonstration profile, and keep a saved response/feedback ready.
2. Open Practice studio and select the assignment-feedback scenario. Show the academic move and private planning area.
3. Send the prepared request, show the practice’s own Live AI/model label, then inspect quoted feedback and the learner self-review.
4. Show the matching human task plan and Support hub follow-up. Avoid entering a completed human event that did not happen.
5. At 70 seconds, use the saved feedback if a live call has not completed. End the walkthrough by 90 seconds.

**Sources and limits**

- Project screenshot: actual local assignment-feedback software demonstration, 4 November 2026. Three learner turns used real DeepSeek V4 Pro calls. Both evidence quotations matched the stored learner turns. A transient network failure retained the draft and retry recovered. No human interaction or participant study result is implied.
- Educational rationale: Ravichandran et al. (2017), https://doi.org/10.5281/zenodo.570033.

## Slide 6: Where the AI works

**Speaker C, 45 seconds.**

DeepSeek V4 Pro generates consented dialogue and structured feedback. The server supplies scenario context, selected support, the consented goal and recent dialogue. A second rehearsal can use earlier coaching. The server validates structure and matches each quote to a learner turn. That verifies attribution, not educational quality. Norm explanations and support planning are authored. Recommendations use explicit rules. Private plans and personal ratings stay outside the prompt. A successful API call demonstrates integration. Learning effects remain unknown.

**Sources and limits**

- Implementation evidence: project source and technical verification record, docs/07-live-ai-upgrade.md. Exact-quote checks verify attribution only. Current literature-informed features are described in docs/08-literature-evidence-matrix.md and the current verification record.

## Slide 7: System and data flow

**Speaker C, 45 seconds.**

This is a full-stack local app. React runs the interface. Next.js routes validate requests, keep the key server-side and save session records in SQLite. With opt-in, HTTPS sends permitted practice context and dialogue to DeepSeek. Private plans and check-ins remain local. Browser speech may process audio externally, so typed input always remains available. Cancellation, retained drafts and safe retries support reliability. Current delivery runs on one computer. Institutional accounts, shared hosting and protected production operations remain future work.

**Sources and limits**

- Project implementation and technical verification, docs/02-system-design.md and docs/07-live-ai-upgrade.md. This describes the local prototype, not a deployed institutional service.

## Slide 8: Learner choice and context

**Speaker D, 50 seconds.**

A pause can mean chosen listening or a lack of speaking space. Learners can adjust challenge and report the context. We separate AI rehearsal, self-reported human attempts and support contacts. Optional ratings are personal check-ins, not validated WTC scales or clinical measures. Browser transcripts cannot justify pronunciation scores. Chinese planning can support thinking without imposing an English-only rule. Local export and deletion cannot retract text already sent to a provider. We still need to ask users whether goals feel pressuring and whether feedback respects their intended meaning.

**Sources and limits**

- Wang & Moskal (2019), pp. 53–56, on situated silence and participation.
- Garska, J., & O’Brien, S. (2019). Power, identity, and culture in international students’ perceptions of academic writing. Trabalhos em Linguística Aplicada, 58(1), 62–95. https://doi.org/10.1590/010318138653426454991. Multilingual and identity-sensitive interpretation, not evidence that one planning method works for everyone.

## Slide 9: Evaluation and evidence boundaries

**Speaker D, 65 seconds.**

We separate three kinds of evidence. Technical checks establish that the app saves data, makes real model calls and handles the tested failure paths. One real stakeholder can describe whether the scenario fits their context, whether advice feels useful, and whether they can find appropriate support. This matches the individual course evaluation, but one interview cannot establish impact. A later proportionate pilot would examine a chosen academic interaction over time. It should record opportunities alongside voluntary attempts, use of feedback and follow-up usefulness. Pre/post check-ins alone do not establish causation. Most studies in the supplied review are observational or small qualitative studies, and none validates SpeakUp AI. We will keep contradictory accounts, document who we interviewed, and distinguish a participant’s statement from our interpretation.

**Sources and limits**

- Course assessment documents: group materials due 9 November 2026 at 23:59 Hong Kong time. Individual 1,500-word English evaluation requires a real stakeholder interview, due 6 December 2026 at 23:59 Hong Kong time.
- Supplied literature audit, docs/08-literature-evidence-matrix.md. Research context, design and causal limits must accompany each cited finding.

## Slide 10: Contribution and next step

**Speaker D, 35 seconds.**

Our contribution is a working academic participation and help-seeking workflow with an explicit literature rationale. The review changed the features and how we interpret activity. The next step is a real stakeholder interview and a documented revision. A later pilot can examine sustained use and transfer. We currently claim a functioning prototype and a testable educational design. Learning impact remains unknown.

## Backup slides 11–15

11. Literature claims and limits: Zhou student/institution sampling distinction, Sari cross-sectional synthesis, Wang’s cross-sectional SEM and the small Kowkabi design project.
12. Full research and design references: Zhou, Ravichandran, Kowkabi, Wang & Moskal, Bastien.
13. Multilingual interpretation and design theory: Garska & O’Brien, MacIntyre, Kolb, Ryan & Deci.
14. Q&A: writing-related scope, general chatbot comparison, evidence boundaries and quotation validation.
15. Implementation boundaries: what works locally, technical checks, unknown educational effects and future shared hosting.

Backup slides are outside the ten-minute main presentation. Cite only papers you actually explain. The complete collection and page-level evidence audit provide context, not a claim that all 30 papers validate every feature.

## Live demonstration and fallback

Use a software demonstration profile. Open the app before the talk, verify the practice’s own Live AI/model label and have a saved complete reply and feedback ready. A connection test is a real API request. It proves provider connectivity only.

Use this input: “Could you show me which part of my argument needs stronger evidence?” Show the academic-move explanation, a private plan, a real model response, the quote/rewrite/reason and a learner self-review. Keep the whole sequence to 90 seconds. At 70 seconds, use the saved response if the live request has not completed. Describe the switch plainly. Historical Demo practices remain scripted.

The human interaction happens outside the app. During a software walkthrough choose an honest not-yet/no-opportunity outcome if no interaction took place. Do not claim that the presenter contacted a lecturer, received feedback or changed learning behaviour unless that event really occurred.

The local address works on the demonstration computer. Do not present it as a public link for four remote users. Browser speech remains optional and browser-dependent. Typed input must work throughout.

## Five-minute Q&A responsibilities

| Topic | Lead | Core answer |
|---|---|---|
| Why retain a speaking/participation project after this review? | A, B supports | Writing-related needs motivate rehearsal for useful feedback and support. The project does not claim to solve all academic literacy problems. |
| What does the literature establish? | B | Needs and design tensions, with methodological/contextual limits. It contains no validation of SpeakUp AI. |
| Where is the AI? | C | Consented DeepSeek dialogue and structured feedback. Norms, support planning and recommendations remain authored/rule based. |
| Is quoted feedback reliable? | C, B supports | The server can verify attribution to a stored turn. Human review still matters for accuracy, meaning and pedagogy. |
| Did the project improve WTC or lower anxiety? | D | Unknown. Activity and optional check-ins are descriptive, not validated outcome measures or a causal study. |
| Could goals pressure learners? | D, B supports | Chosen listening, no-opportunity and adjustable challenge reduce some pressure. Ask stakeholders whether they actually experience choice. |
| What leaves the local server? | C, D supports | Only consented practice context/dialogue reaches the provider. Private plans/check-ins stay local. Optional browser recognition may process audio externally. |
| Why one stakeholder interview? | D | It meets the formative individual assignment and can inform a revision. It does not represent a population or estimate effects. |

Keep the first answer to 20–40 seconds. The next speaker adds one necessary point. Do not promise production security, universal accessibility, first-of-its-kind novelty or superior learning outcomes.
