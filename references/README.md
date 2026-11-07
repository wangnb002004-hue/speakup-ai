# Source register

Verified 2 November 2026. The two course PDFs were privately supplied for the original implementation; this public repository includes provenance and bibliography only, not the original PDFs. The outline (8 August) and shared syllabus (21 July) differ in the depth of research expectations; see docs/01-requirements-and-plan.md for how these are reconciled. The syllabus final general grade-descriptor page was visually inspected, including its rotated table. It is a generic descriptor, not a SpeakUp-specific scoring rubric.

## Scholarly sources

| Work | Verification source | Use / boundary |
|---|---|---|
| MacIntyre et al. (1998), MLJ 82(4), 545–562 | Publisher DOI https://doi.org/10.1111/j.1540-4781.1998.tb05543.x ; author manuscript https://sites.psych.ualberta.ca/IClab/wordpress/wp-content/uploads/2016/08/Cl--mentMacIntyreDoernyeiNoels1998.pdf | Situational WTC grounding; does not establish app efficacy |
| Kolb (1984), Prentice-Hall, ISBN 0132952610 | https://libcat.weber.edu/bib/875132 ; originating organization https://learningfromexperience.com/downloads/research-library/experiential-learning-theory.pdf | Book bibliographic record verified; theoretical account cross-checked; no claim of reading the full 1984 book |
| Ryan & Deci (2000), American Psychologist 55(1), 68–78 | https://www.selfdeterminationtheory.org/SDT/documents/2000_RyanDeci_SDT.pdf ; https://pubmed.ncbi.nlm.nih.gov/11392867/ | Autonomy, competence, relatedness; no efficacy claim for this app |
| Hwang et al. (2020), CAEAI 1, 100001 | https://doi.org/10.1016/j.caeai.2020.100001 | Roles of educational AI; not intervention evidence |

The focused sources establish theoretical foundations. They are not a systematic literature review of current conversational AI or proof of product novelty. Do not infer a Hong Kong prevalence rate, measured outcome or intervention effect from them.

## Technical sources

- Next.js installation / current version 16.4.3: https://nextjs.org/docs/app/getting-started/installation (version also checked against npm).
- Browser speech recognition capabilities and remote-processing limitation: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
- Built-in Node SQLite runtime: https://nodejs.org/api/sqlite.html

Provider integration uses a configurable chat-completions-compatible HTTPS endpoint. The original local version used a privately configured DeepSeek API and real calls were verified on 3 and 4 November 2026; see docs/07-live-ai-upgrade.md and docs/09-literature-driven-upgrade.md for the dated records. Cloners must configure their own key and verify their own provider/model access. No credentials are distributed here.
