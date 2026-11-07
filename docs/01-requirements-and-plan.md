# SpeakUp AI — requirements, evidence and implementation plan

Course-source audit: 2 November 2026. Literature-informed revision: 4 November 2026, Hong Kong time. The two supplied course PDFs are authoritative for assessment requirements. The supplied Chinese review and 30 distinct source PDFs inform educational design; their recommendations are not additional course instructions.

## Authoritative course requirements

- **Course Outline**, updated 8 August 2026, pp. 2–4: research postgraduate INT7115; CILO1–4; an original, research-informed group solution with justification, limitations and research gaps; 4–6 members. Group work is 40%, individual work 50%, participation 10%. The individual advanced formative evaluation is **1,500 English words**, based on a **real relevant stakeholder interview** and critical synthesis with literature.
- **Course syllabus**, updated 21 July 2026, pp. 3–4: **10-minute presentation + 5-minute Q&A**. Group materials are due **9 November 2026, 23:59 (Hong Kong time)**. This group's selected presentation date is **16 November 2026**; it does not move the materials deadline. The individual report is due **6 December 2026, 23:59 (Hong Kong time)** via Moodle. The member-list deadline was 27 September 2026, 23:59.
- The August outline sets the more demanding INT7115 research expectations; the July syllabus supplies the dates and timing. General grade descriptors are not a project-specific points rubric.
- Generative AI use remains subject to instructor directions, restrictions and acknowledgment. Lesson-specific instructions were not supplied and must be checked by the students.

## Educational scope after the literature review

SpeakUp supports chosen participation in English-medium university tasks. Its six rehearsals cover seminar discussion, campus conversation, team negotiation, office-hours clarification, asking for specific writing feedback, and checking a missed lecture point. The writing scenario rehearses a feedback conversation about claims, evidence or structure; it does not produce or grade an essay.

The revision responds to academic socialization, help-seeking and participation barriers rather than treating every difficulty as nervousness or grammar. The app makes an example communicative move visible, permits a private plan in any language, provides learner-controlled hints, and keeps human interaction and support follow-up distinct from AI practice. Choosing to listen or having no opportunity is a valid report and does not trigger a lower challenge.

The supplied corpus mainly examines academic language experiences, strategies and support. Surveys and structural models show associations; interviews reveal situated accounts; institutional-record comparisons have their own selection issues. Neither a large sample nor a meta-analysis alone proves a causal effect. The papers do not evaluate SpeakUp AI or establish that AI rehearsal improves authentic willingness to communicate. Feature-to-source links identify a design rationale, not an effectiveness result. The [30-paper evidence matrix](08-literature-evidence-matrix.md) records original methods, locations and corrections to the supplied synthesis.

## Requirements-to-deliverables traceability

| ID | Requirement / rationale | Implemented or required deliverable | Verification boundary |
|---|---|---|---|
| C1 | Original educational AI solution; outline p.3 | Inspectable AI-to-human preparation, action and reflection workflow | Novelty and educational benefit remain claims to evaluate |
| C2 | AI concepts, objectives, theory and design; outline p.3 | Architecture and proposal explain LLM dialogue, structured feedback and authored recommendations | WTC, experiential learning and SDT are design frameworks, not validated app outcomes |
| C3 | Value, feasibility, limitations, ethics and gaps; outline pp.3–4 | Literature audit, critical proposal and evaluation pack | Distinguish findings, author recommendations and design inferences |
| C4 | 4–6 members; 10 + 5 minutes; syllabus p.4 | Four-person allocation; 10-minute deck/script and Q&A | Four actual members fill names/IDs; rehearse to 600 seconds |
| C5 | Group materials deadline | Final materials submitted by 9 Nov 23:59 HK | 16 Nov presentation does not extend this deadline |
| C6 | Individual 1,500 English words + interview | Consent, real interview guide, evidence table and report scaffold | No synthetic interview, demonstration result or placeholder may be submitted as a finding |
| C7 | Individual deadline | Student uploads report to Moodle by 6 Dec 23:59 HK | Verify actual submission personally |
| M1 | Learner agency and context | Profile, goals, six scenarios, freely chosen support and challenge | No proficiency classification from confidence, silence or language background |
| M2 | Self-regulated preparation | Local intention, strategy, optional multilingual note and contextual check-ins | These plan fields and self-review never enter the AI request |
| M3 | Make implicit expectations discussable | Scenario move, participation note, strategy and literature identifiers | Authored examples; course and disciplinary expectations may differ |
| M4 | AI rehearsal and access | Multi-turn text; optional reviewed voice transcript; show/hide hints | Distinguish live model responses from scripted demo |
| M5 | Specific, contestable feedback | Exact learner quotation, turn, optional alternative, reason, phrases and next step | Quote match verifies provenance, not semantic or pedagogical correctness |
| M6 | Learner judgment after rehearsal | Private takeaway, next try and optional contextual ratings | A rating change does not establish an AI effect or human transfer |
| M7 | Voluntary transfer plan | User-chosen quest with optional opening, timing/place and respectful exit | App does not contact, monitor or record another person |
| M8 | Participation reflection | Outcome, opportunity, barrier, chosen listening, strategy and feedback use | Only completed/attempted outcomes count as human attempts; self-reported |
| M9 | Explainable recommendation | Active quest first; otherwise matched rehearsal context and selected contexts; preserve latest chosen level | No automatic escalation from confidence or task counts |
| M10 | Help-seeking and follow-up | Support hub: prepared question, next action, status and optional usefulness; two official EdUHK resource links | No booking, matching, contact verification or service guarantee |
| M11 | Honest progress | Separate practice, self-review, human attempts, listening, opportunity and support follow-up counts | Descriptive records, not grades, proficiency or validated WTC measurement |
| M12 | Privacy and persistence | Local SQLite, anonymous cookie, separate AI/voice permissions, export/deletion | Local text is not encrypted at rest; provider records have separate retention |
| A | Working, reviewable MVP | Source, blank environment example, tests, build, screenshots and launcher | Use the dated verification record; never package a secret or real learner database |
| B–F | Design, proposal, presentation, evaluation, setup | docs/02–07, literature audit, reconciliation record and editable deck | Keep current behavior and claims consistent across artifacts |

## Revision and delivery sequence

1. Audit the supplied synthesis against source PDFs; record conflicting numbers and study-design limits.
2. Revise domain models and six scenarios with optional fields so existing session data remains compatible.
3. Integrate private planning, visible academic moves, hint control, self-review, transfer planning and the support hub.
4. Preserve the functioning DeepSeek adapter, streaming, retry protection and exact-quotation checks. Prove that private fields are excluded from both chat and feedback prompts.
5. Update the presentation, proposal and real-interview evaluation materials around the same bounded claims.
6. Run relevant unit/API checks, lint, type checking, build and desktop/mobile browser journeys; preserve dated records rather than inventing current results.
7. Package source without `.env.local`, learner data, dependency folders or build files. Leave the verified local service usable for handoff.

## File structure and deployment boundary

```
src/app/                  Pages, global CSS and same-origin API routes
src/components/           Main interface and learning/support tools
src/lib/                  Schemas, scenarios, authored rules, AI, storage/session
references/               Bibliography/provenance; original PDFs omitted in public version
 tests/                   Domain, AI and API integration verification
 docs/                    Requirements, design, proposal, slides, evaluation, audits
.env.example              Blank server-only provider configuration
README.md                 Launch, use, privacy, limitations and compliance
```

This remains the requested Next.js + local SQLite prototype. It includes a frontend, backend, persistent storage and a real server-side AI integration. Public hosting, university accounts, cross-device synchronization, automated speech assessment, a validated WTC instrument and educational-effectiveness findings are outside the delivered local MVP.
