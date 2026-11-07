# SpeakUp AI: Preparing for Chosen Academic Participation through AI Rehearsal, Human Support and Reflection

**INT7115 Artificial Intelligence in Education · The Education University of Hong Kong**  
Group: [insert the four real members and student IDs]  
Status: functional local prototype; no educational-effectiveness findings or stakeholder interviews reported  
Group materials: **9 November 2026, 23:59 Hong Kong time**  
Group presentation: **16 November 2026 · 10 minutes + 5 minutes Q&A**  
Individual evaluation: **1,500 English words, real stakeholder interview, due 6 December 2026, 23:59 Hong Kong time**

## Abstract

SpeakUp AI supports multilingual university learners who want to prepare for a particular English-medium interaction. The literature-informed revision broadens its focus from speaking confidence to academic participation, explicit expectations, strategies and help-seeking. Six scenarios include asking for specific writing feedback and clarifying a missed lecture point. Learners make a private plan, rehearse with optional AI, inspect attributed coaching, judge what to keep or question, and choose a human task or support request. Authored recommendations preserve learner-selected challenge rather than inferring ability from confidence or silence. The supplied literature motivates these choices through studies of academic language needs, self-efficacy, participation and support; it does not test this application or demonstrate an AI effect. WTC, experiential learning and self-determination theory remain design frameworks. A real stakeholder interview and formative walkthrough will examine academic relevance, usability, autonomy, support access, feedback quality and feasibility before any claim of educational benefit.

## 1. Educational problem and boundaries

The supplied review shifts the problem beyond a simple gap between knowing English and daring to speak. Zhou et al. (2022) investigated language demands in China. The methods report 364 valid student responses, 88 teachers from 29 institutions, and interviews with 26 senior faculty from eight universities. Student institution information was not collected, so the survey sample should not be described as students from those eight universities. The abstract reports a different student figure. Productive academic tasks, especially writing, were challenging in this study, while other papers show different demand profiles. Difficulty may involve argument, disciplinary expectations, feedback and classroom access as well as vocabulary. It would therefore be misleading to present speaking practice as a complete solution to the corpus's academic-language needs.

SpeakUp responds to a bounded part of that problem: preparing a contribution, clarification or help request for an actual university task. The writing-feedback scenario rehearses how to state a claim and ask for actionable comments on reasoning or structure. It does not write a student's assignment, grade a draft, verify references or replace disciplinary teaching. Lecture clarification similarly rehearses checking understanding; academic facts still need course materials and a teacher.

Participation is also socially organized. Wang and Moskal's (2019) UK qualitative study distinguishes intentional silence from unwanted silence and challenges the assumption that little speech means little engagement. Learners may choose to listen, lack a suitable partner, face a fast-paced discussion or prefer another language. Such choices and constraints should not be interpreted as low proficiency or a clinical problem. The intended users are learners who choose a specific support task; English use is not a universal obligation.

## 2. Evidence appraisal and design contribution

The supplied 30-paper set concerns academic language, adjustment, strategies and support. It contains surveys, qualitative studies, mixed-method investigations, institutional-record analyses, a design report and a meta-analysis. Many contexts are in the United States and many participants are postgraduate students. Applicability to Hong Kong, this programme and a particular discipline requires local investigation.

Evidence strength cannot be assigned by sample size alone. Correlation, model fit and regression coefficients do not identify the effect of a new intervention. A large observational sample may still have selection and measurement problems. A small qualitative study can explain a mechanism or expose an exclusion without estimating prevalence. A meta-analysis pools the designs and biases of its included studies; it is not automatically causal evidence. The [literature evidence matrix](08-literature-evidence-matrix.md) records source discrepancies and separates study findings from author recommendations.

Several examples directly shape the design. Shi (2018), using self-report data from 198 college-level learners, found a weak association between strategy use and self-efficacy (overall r=.28). This motivates explicit planning and reflection as a design hypothesis, not proof that this app increases confidence. Ravichandran et al. (2017), interviewing 15 graduate students, reported a desire for specific feedback and disciplinary support. This informs a focused feedback request rather than a generic “improve my English” prompt; it does not prove every writing service is ineffective. Bastien et al. (2018) associated help-seeking with academic adjustment in one student sample. It motivates a support workflow, not a guarantee that contacting a tutor causes adjustment. Krsmanovic's (2022) first-year interview study motivates making unfamiliar university expectations discussable; it does not establish a universal set of rules.

The contribution is a working and inspectable sequence that connects these issues: private preparation, contextual AI rehearsal, critical self-review, an optional human plan and support follow-up. The individual components are not claimed as unprecedented. A broader product and intervention review would be required to establish novelty. None of the supplied studies evaluates SpeakUp or establishes its AI-to-human transfer mechanism.

## 3. Pedagogical frameworks and learner control

MacIntyre et al.'s (1998) situational WTC framework motivates attention to context, interlocutors and the decision to communicate. SpeakUp distinguishes an AI response, a personal willingness rating and a reported human attempt. The short optional 1–5 check-ins are personal records, not an abbreviated validated WTC instrument, an ability test or an anxiety diagnosis.

Wang et al. (2018) distinguish English self-efficacy from using English to learn self-efficacy in a nonexperimental structural model. That distinction reinforces the need to anchor rehearsal to a genuine academic purpose and to avoid treating fluent chat as academic capability. The model does not demonstrate that AI rehearsal causes either construct to improve.

Kolb's (1984) experiential learning framework informs the plan–experience–reflection–next-try connection. A private takeaway asks the learner what to keep, adapt or question in AI feedback. A later real-task reflection identifies what happened, what made participation possible or difficult, and which strategy to try next. Form completion alone does not show reflective learning.

Self-determination theory (Ryan & Deci, 2000) informs editable goals, optional support, respectful feedback and willing human partners. Hints can be shown or hidden; guided, natural and stretch modes are freely chosen. This provides learner control over scaffolding without claiming that a validated fading algorithm has been implemented. Targets and forms could still feel controlling, so perceived autonomy must be investigated.

## 4. Implemented learning workflow

1. **Select a university task.** Six scenarios cover seminar contribution, campus connection, group negotiation, office hours, writing-feedback requests and lecture clarification. Each includes an example communicative move, a participation note, a suggested strategy and literature identifiers. These are authored examples, not universal disciplinary rules.
2. **Plan privately.** State an intention, choose a strategy, optionally prepare in any language, and optionally record context-specific confidence/willingness. The app does not send the plan, private note, strategy or ratings to AI.
3. **Rehearse with chosen support.** Type or review an optional browser-recognized transcript before sending. Show/hide phrase hints and choose support intensity. Pause, stop or retry when needed.
4. **Inspect and judge feedback.** The model offers a quotation, an alternative and a reason. The server checks the quotation against a numbered learner turn. The learner then records a private takeaway and next try. Exact attribution does not make a rewrite pedagogically correct.
5. **Choose human participation or help.** A quest can include an opening, a suitable time/place and a respectful exit. The Support hub stores a prepared question, support role and next action. It links to official EdUHK consultation and mentoring information; it does not book, message or match people.
6. **Reflect and follow up.** Record an attempt, completion or “not yet,” including opportunity, lack of speaking space, chosen listening, language difficulty and use/adaptation of feedback. Support requests can be marked planned, contacted or followed-up, with optional usefulness. All contact records are self-reported.

Recommendations retain an active quest and its chosen step. Otherwise they preserve the latest chosen step, using step 1 only as an initial suggestion. A completed rehearsal can keep a matching context in focus until a related reflection. Global confidence, nervousness and completion counts never automatically escalate challenge. The reason is displayed and the learner can choose another context or step.

## 5. AI concepts, architecture and feasibility

The application includes a React/Next.js frontend, same-origin Node routes and persistent local SQLite. It is a full-stack prototype. A server-only DeepSeek adapter supports real `deepseek-v4-pro` dialogue, streamed output, interruption, recoverable errors, safe retry and separate structured feedback. A conspicuously labelled deterministic mode provides a reproducible alternative. Historical 3 November technical API verification is documented separately and is not learning evidence.

Live prompts contain scenario instructions, permitted preferences and recent dialogue. Current remote consent permits the separate profile goal and support choice; nickname, ratings, new private plans, self-reviews, transfer plans and support records are excluded. There is no automated PDF retrieval or claim that the model grounds its replies in all 30 papers. The literature informs authored product choices. AI feedback is checked for schema and quote attribution, while semantic accuracy remains open to human judgment.

The local implementation is feasible for a course demonstration and individual exploration. It is not a deployed university service. Four-person remote use would require authenticated hosting, protected durable storage, provider governance, usage limits, accessibility review and operational support. Browser voice services vary; text remains the dependable input method. Teacher and support-service feedback are needed before a wider trial.

## 6. Ethics, inclusion and limitations

AI may offer culturally narrow advice, unnecessary correction, false academic information or an overconfident rewrite. Prompt instructions respect varieties of English, discourage assumed deficits and prohibit claims of measured learning gains, but instructions cannot guarantee behavior. Learners should check assignment criteria and academic facts against their course, and teachers should review feedback samples before adoption.

Private notes and support plans stay on the local server; “private” does not mean encrypted or inaccessible to someone with filesystem access. Export/deletion covers the current local aggregate. Revoking remote consent stops new model calls but cannot recall earlier provider-held copies. Browser recognition can process audio remotely; SpeakUp stores the reviewed text rather than audio. No third-party conversation should be recorded through the tool, and interview notes require a separate data-management decision.

Repeated AI interaction could become a substitute for finding human support. Human opportunities are unequal, services have eligibility and availability constraints, and peer mentoring is not necessarily disciplinary writing support. The app therefore records planned versus reported contact and follow-up, without interpreting nonuse as failure. Voluntary listening and refusal remain valid. Counts and optional ratings describe activity; they do not establish quality, GPA, proficiency, causality or transfer.

## 7. Evaluation and research gaps

The required individual assignment uses a real relevant stakeholder interview in the student researcher's actual context. A consenting adult learner, teacher or practitioner can inspect the revised workflow and comment on academic relevance, hidden expectations, hint control, AI feedback, privacy, support access and feasibility. The evaluation pack provides neutral prompts, a short optional task walkthrough and an evidence-to-design table. No findings are filled in until a real interview occurs.

One interview can identify a problem, reveal a mismatch or justify a revision. It cannot establish population needs or effectiveness. A later exploratory pilot could track same-context personal ratings, perceived usefulness, actual chosen strategies and self-reported human/support follow-up over time, with attrition and opportunity constraints reported. Any pre/post difference would remain descriptive without a suitable comparison and defensible design. A later outcome study would require appropriately validated context-sensitive instruments used according to their validation conditions, ethically proportionate observation and a plan to address confounding and feedback quality. The immediate contribution is a testable design with explicit evidence limits.

## References

Bastien, G., Seifen-Adkins, T., & Johnson, L. R. (2018). Striving for success: Academic adjustment of international students in the U.S. *Journal of International Students, 8*(2), 1198–1219. https://doi.org/10.5281/zenodo.1250421

Kolb, D. A. (1984). *Experiential learning: Experience as the source of learning and development*. Prentice-Hall.

Krsmanovic, M. (2022). Encountering American higher education: First-year academic transition of international undergraduate students in the United States. *Journal of Global Education and Research, 6*(2), 148–165. https://doi.org/10.5038/2577-509X.6.2.1164

MacIntyre, P. D., Clément, R., Dörnyei, Z., & Noels, K. A. (1998). Conceptualizing willingness to communicate in a L2: A situational model of L2 confidence and affiliation. *The Modern Language Journal, 82*(4), 545–562. https://doi.org/10.1111/j.1540-4781.1998.tb05543.x

Ravichandran, S., Kretovics, M., Kirby, K., & Ghosh, A. (2017). Strategies to address English language writing challenges faced by international graduate students in the US. *Journal of International Students, 7*(3), 764–785. https://doi.org/10.5281/zenodo.570033

Ryan, R. M., & Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. *American Psychologist, 55*(1), 68–78. https://doi.org/10.1037/0003-066X.55.1.68

Shi, H. (2018). English language learners' strategy use and self-efficacy beliefs in English language learning. *Journal of International Students, 8*(2), 724–741. https://doi.org/10.5281/zenodo.1250375

Wang, C.-h., Harrison, J., Cardullo, V., & Lin, X. (2018). Exploring the relationship among international students' English self-efficacy, using English to learn self-efficacy, and academic self-efficacy. *Journal of International Students, 8*(1), 233–250. https://doi.org/10.5281/zenodo.1134299

Wang, S., & Moskal, M. (2019). What is wrong with silence in intercultural classrooms? An insight into international students' integration at a UK university. *Journal of Comparative & International Higher Education, 11*, 52–58.

Zhou, S., McKinley, J., Rose, H., & Xu, X. (2022). English medium higher education in China: Challenges and ELT support. *ELT Journal, 76*(2), 261–271. https://doi.org/10.1093/elt/ccab082

These original sources correspond to supplied-review entries [2], [14], [21], [24], [27], [28] and [30], plus the original theory background. The review's other studies inform scenario choices and the separate audit; do not cite them as direct evidence of an AI intervention.

## AI acknowledgment draft — adapt to instructor instructions

Generative AI assisted with code, artifact drafting and comparison of the supplied literature with the design. The group must inspect the implementation, verify sources and revise the analysis using its own judgment. No participant interview, quotation, learning gain or human-contact result was generated. [Add actual tools, dates, uses, verification and the instructor's required disclosure.] Course permission for AI does not replace participant consent or lesson-specific instructions.
