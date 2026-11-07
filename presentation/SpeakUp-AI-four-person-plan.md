# SpeakUp AI 四人展示分工与英文讲稿

> 11 月 7 日补充：逐页中文解释、更精简的英文口语稿、实际按钮操作与故障备用话术见 [最新展示排练手册](../docs/11-presentation-rehearsal-zh-en.md)。本文件保留原有分工和 PPT 讲者备注的文字版本；实际排练优先使用新手册，并计时调整。

更新于 2026 年 11 月 4 日，已根据新文献与实际项目重写。你们在 **11 月 16 日**展示，主讲 **10 分钟**，另有 **5 分钟 Q&A**。课程材料仍须在 **11 月 9 日 23:59（香港时间）**前提交。日期不能因为展示安排较晚而顺延。

PPT 包含 10 页主讲和 5 页备用页。备用页不计入 10 分钟主讲。英文讲稿已放进每页 speaker notes，下面也保留便于四人排练的版本。A、B、C、D 是可替换的角色，提交前填入真实姓名与学号。

## 1. 一条贯穿四人的故事

文献提醒我们：学生需要的不只是“更敢说”，还有理解学术规范、提出具体问题、获得有用反馈和找到合适支持。项目因此围绕“准备一个真实学术互动、用 AI 排练、审查反馈、按自己的意愿与人交流、反思和跟进”组织。写作相关困难对应“向教师/导师索取具体反馈”的功能，而不是把项目扩张成自动代写作业。

这些文献为设计提供依据。它们没有证明 SpeakUp AI 能提高成绩、降低焦虑或提升交流意愿。真实 API 调用证明集成可用，不能替代学习效果研究。

## 2. 四人分工与时间

| 成员 | 更适合的工作 | 主讲页 | 目标时间 | 必须做好 |
|---|---|---|---:|---|
| A | 英文讲述与开场 | 1–2 | 2:00 | 把问题说清楚，解释为什么新文献让范围更具体 |
| B | 教育理论与文献 | 3–4 | 2:30 | 讲清“研究发现—设计改变—仍待检验”，保留研究边界 |
| C | 技术操作与现场演示 | 5–7 | 3:00 | 操作真实 AI、指出前后端与数据流、准备延迟备份 |
| D | 评价与伦理 | 8–10 | 2:30 | 解释选择权、情境性沉默、隐私和评价证据 |
| 合计 |  | 10 页 | 10:00 | 另留 5 分钟回答提问 |

页级时间：40、80、75、75、90、45、45、50、65、35 秒，合计 600 秒。排练可以把叙述压缩到约 9:30，留 30 秒给换页和网络，不改变课程的 10 分钟要求。C 的 90 秒演示已经包含操作与等待。

## 3. 每个人要讲清楚什么

**A：为什么值得做。** 不要说“所有香港学生都缺乏自信”。说明目标是学习者自己想参与、又需要准备或支持的具体学术情境。写作、课堂互动和求助规范彼此相关，但本项目没有覆盖全部学术英语问题。

**B：为什么这样设计。** 用 4 个可检查的例子：隐性规范对应 scenario norms，笼统反馈对应原句/改写/理由，求助需求对应 Support hub，情境性沉默对应 chosen listening/no speaking space。不要把相关研究说成因果效果，也不要把小规模设计项目说成随机试验。

**C：成果如何实际运行。** 说明 React 前端、Next.js 后端、SQLite 本地持久化，模型密钥在服务器。DeepSeek 生成对话和反馈，规则决定推荐。私人计划、中文构思与个人 check-ins 不进入模型提示。一个真实请求、一个具体反馈例子，比展示大量按钮更重要。

**D：如何判断它有没有价值。** 先承认尚无真实用户效果研究。访谈检查情境匹配、反馈实用性、选择权、支持可及性。后续试点把“有无机会”“是否尝试”“反馈有没有被用上”区分记录。个人自评不能冒充验证过的 WTC 量表或焦虑诊断。

## 4. 按页英文讲稿

### 1. SpeakUp AI — A，40 秒

SpeakUp AI is a university English participation and help-seeking prototype. A student can prepare for an academic interaction, rehearse with AI, examine feedback, and decide whether to contact a real person. Our literature review changed the project. We now make hidden expectations explicit and connect practice to useful academic support. We will demonstrate the working system and distinguish technical verification from educational impact. We have not conducted a learning-effect study.

### 2. Academic participation and support — A，80 秒

The thirty-paper review is broader than speaking confidence. Zhou and colleagues report difficulties with productive academic tasks, especially writing, alongside gaps in language support. Needs vary by task and group, so we do not claim that writing is always the greatest difficulty. Wang and Moskal show that classroom silence can reflect limited speaking space, or a deliberate form of participation. These findings changed our scope. We focus on access to academic participation and help: asking for specific assignment feedback, clarifying a missed lecture point, and understanding how to approach a lecturer or mentor. A learner may know the words yet still be unsure what kind of question to ask or whether an interruption is appropriate. We make those expectations discussable while retaining choice. These studies identify design needs. They do not establish that our AI tool works.

### 3. Evidence and design decisions — B，75 秒

We translated selected findings into specific, testable design decisions. Kowkabi and colleagues describe explicit support for academic norms, so each scenario now explains an academic move and helps a student prepare an intention. Their small design project is not an effectiveness trial. Ravichandran and colleagues report graduate students wanting more specific feedback, so our coaching quotes a learner turn and offers a rewrite with a reason. Exact quotation checking establishes attribution, not the quality of the advice. Research on help-seeking informed the Support hub, where a learner can plan a contact and record whether follow-up proved useful. A cross-sectional association does not show that contacting support causes academic success. Finally, the silence research informed reflection options for chosen listening and lack of speaking space. Each connection gives us a question to investigate rather than a guaranteed outcome.

### 4. The learner journey — B，75 秒

The learner first chooses a scenario and a purpose. A private plan can include a strategy or Chinese planning note. That note and personal check-ins stay local and do not enter the AI prompt. During rehearsal, the learner chooses guided, natural or stretch support and can control hints. After coaching, the learner reviews a specific suggestion and decides what to try again. A voluntary human task includes an opening, a suitable time, and a way to close or leave. Reflection separates an attempt from no opportunity or chosen listening, and asks whether feedback helped. Academic discourse socialization explains the focus on local norms. WTC explains attention to readiness in a particular situation. Experiential learning motivates reflection and another attempt, while self-determination theory motivates choice. The presence of this loop does not prove transfer, and we do not infer a learner’s ability from their selected support style.

### 5. A request for assignment feedback — C，90 秒

This walkthrough uses a software test profile. It is not a stakeholder result. We choose the assignment-feedback scenario and prepare one specific question. We send: ‘Could you show me which part of my argument needs stronger evidence?’ The live model responds to the request. We inspect a feedback quotation, its suggested rewrite and the reason. We then save a takeaway or rehearse again. Next, we prepare an opening and a suitable time for an actual lecturer or mentor. The Support hub can record contact and follow-up, but the app cannot confirm that a person replied or that advice helped. For the classroom demonstration we do not report a human interaction that did not occur. We can show ‘no opportunity’ instead. If the live API fails, we use the saved software demonstration and explain the switch. A scripted response must keep its Demo label.

### 6. Where the AI works — C，45 秒

DeepSeek V4 Pro generates consented dialogue and structured feedback. The server supplies scenario context, selected support, the consented goal and recent dialogue. A second rehearsal can use earlier coaching. The server validates structure and matches each quote to a learner turn. That verifies attribution, not educational quality. Norm explanations and support planning are authored. Recommendations use explicit rules. Private plans and personal ratings stay outside the prompt. A successful API call demonstrates integration. Learning effects remain unknown.

### 7. System and data flow — C，45 秒

This is a full-stack local app. React runs the interface. Next.js routes validate requests, keep the key server-side and save session records in SQLite. With opt-in, HTTPS sends permitted practice context and dialogue to DeepSeek. Private plans and check-ins remain local. Browser speech may process audio externally, so typed input always remains available. Cancellation, retained drafts and safe retries support reliability. Current delivery runs on one computer. Institutional accounts, shared hosting and protected production operations remain future work.

### 8. Learner choice and context — D，50 秒

A pause can mean chosen listening or a lack of speaking space. Learners can adjust challenge and report the context. We separate AI rehearsal, self-reported human attempts and support contacts. Optional ratings are personal check-ins, not validated WTC scales or clinical measures. Browser transcripts cannot justify pronunciation scores. Chinese planning can support thinking without imposing an English-only rule. Local export and deletion cannot retract text already sent to a provider. We still need to ask users whether goals feel pressuring and whether feedback respects their intended meaning.

### 9. Evaluation and evidence boundaries — D，65 秒

We separate three kinds of evidence. Technical checks establish that the app saves data, makes real model calls and handles the tested failure paths. One real stakeholder can describe whether the scenario fits their context, whether advice feels useful, and whether they can find appropriate support. This matches the individual course evaluation, but one interview cannot establish impact. A later proportionate pilot would examine a chosen academic interaction over time. It should record opportunities alongside voluntary attempts, use of feedback and follow-up usefulness. Pre/post check-ins alone do not establish causation. Most studies in the supplied review are observational or small qualitative studies, and none validates SpeakUp AI. We will keep contradictory accounts, document who we interviewed, and distinguish a participant’s statement from our interpretation.

### 10. Contribution and next step — D，35 秒

Our contribution is a working academic participation and help-seeking workflow with an explicit literature rationale. The review changed the features and how we interpret activity. The next step is a real stakeholder interview and a documented revision. A later pilot can examine sustained use and transfer. We currently claim a functioning prototype and a testable educational design. Learning impact remains unknown.

## 5. 自然交接句

- A 交 B：“These studies changed our design. B will explain the connection between the evidence and the features.”
- B 交 C：“The loop is a design hypothesis. C will now show how the working prototype supports it.”
- C 交 D：“The system can deliver this workflow. D will explain what we can and cannot conclude from it.”

四个人都理解全套故事，但每一部分由一人负责主答，避免四人重复同一答案。

## 6. C 的现场演示步骤

1. 上台前启动本地服务，检查真实模型状态。使用软件演示档案，准备一份完成的真实回复/反馈作为备份。
2. 选择 assignment-feedback 情境。展示 academic move 与私人计划，用一句话说明中文构思和自评留在本地。
3. 输入：**Could you show me which part of my argument needs stronger evidence?**
4. 展示这个 practice 自己的 Live AI/模型标记及回复，打开 quote/rewrite/reason，并展示 learner self-review 或再练一次。
5. 展示与人沟通的 opening/when/exit 计划及 Support hub 的联系/跟进记录。没有真实联系过，就不填“已联系、已完成、反馈有效”。
6. 演示到 70 秒仍未返回时，用已保存的软件演示继续。说明切换了保存记录或 Demo。90 秒结束。

不要现场打开密钥文件，不在 PPT、录屏或聊天中显示密钥。不要用 API 连接成功推断教学有效。localhost 只代表这台演示电脑，不是公开上线网站。

## 7. 文献使用时最容易讲错的地方

| 容易误说 | 正确说法 |
|---|---|
| “364 名学生来自中国 8 所大学” | Zhou 方法部分为 364 份有效学生回答，但没有采集学生学校信息。8 所学校对应 26 名员工访谈。 |
| “社会支持让成绩提高” | 相关和横断面研究可以提示设计方向，不能直接证明某种支持产生效果。 |
| “自我效能的中介机制已经证实” | Wang 等的横断面 SEM 检查变量关系，不证明因果中介过程。 |
| “线上学术规范模块已通过实验验证” | Kowkabi 是小规模教学/设计项目，收集学生意见，不能称为效果试验。 |
| “沉默意味着交流意愿低” | 沉默也可能是主动倾听、缺少发言空间或情境中的选择。 |
| “引用原句说明 AI 反馈正确” | 精确引用检查仅验证出处。改写是否合适仍需判断。 |
| “个人 1–5 分说明 WTC 提升” | 自编 check-in 只用于个人反思，不是验证量表，也不能支持因果推断。 |

把文献作者、年份、研究类型与语境一起讲。主讲无需逐篇报完 30 篇；详细来源与方法边界放在备用页和证据矩阵。

## 8. 五分钟 Q&A 分工

| 问题 | 首答 | 关键点 |
|---|---|---|
| Why this scope after a writing-focused review? | A，B 补充 | 通过真实反馈请求连接写作需要与学术互动，不声称覆盖所有写作问题。 |
| How did the literature change the app? | B | 场景规范、具体反馈、自主选择、情境障碍、支持跟进。 |
| Where is the AI? | C | 真实 DeepSeek 对话/反馈。规范、推荐与支持计划为编写内容和显式规则。 |
| Is the feedback correct? | C，B 补充 | 验证原句出处，不能认证教育质量。让学习者复核意思并保留有用建议。 |
| How do you know it improves WTC? | D | 尚未证明。技术检查、访谈与效果研究分别回答不同问题。 |
| Could goals increase pressure? | D，B 补充 | 可调整、可等待、可倾听。真实访谈仍要问是否感到被控制。 |
| What data leaves the computer? | C，D 补充 | 同意后的练习上下文/文本去模型；私人计划与个人 check-ins 不发送；语音识别另有浏览器处理。 |
| What if institutional support does not reply? | D | 记录障碍和后续跟进，不能把机构资源缺口归咎于学习者。 |
| Is it ready for four people online? | C | 当前是本地完整项目。机构登录、共享部署、受保护存储和全局限额需要后续工程。 |

首答控制在 20–40 秒，需要时一人补一个点。未知问题先说明已知证据，再说明如何验证。

## 9. 从现在到展示的安排

| 时间 | 负责 | 具体产出 |
|---|---|---|
| 11 月 4–6 日 | 全组，B/D 主导文献与访谈准备 | 阅读本次证据矩阵和脚本，核对概念，准备真实访谈而不预写结果 |
| 11 月 6–8 日 | C 负责可运行版本，A 负责叙事 | 在展示电脑上验证完整流程与备份，四人计时，填真实姓名/AI 声明 |
| 11 月 9 日 | 组员本人 | 按课程要求于 23:59 香港时间前提交展示材料 |
| 11 月 10–13 日 | 全组 | 按真实试用意见修复具体问题，保留修改依据。若更新已提交材料先遵守教师规则 |
| 11 月 14–15 日 | 全组，C 负责环境 | 完整 10+5 排练，冻结功能，检查网络、端口、缩放与保存记录 |
| 11 月 16 日 | 四人按上表 | 展示实际成果，清楚区分实时 API、保存记录和脚本 Demo |

## 10. 课程个人评价仍须真实完成

个人报告为 1,500 英文词，须进行与本人情境相关的真实利益相关者访谈，截止 12 月 6 日 23:59 香港时间。四人共享同一个原型不意味着可以复制同一份分析，也不意味着可以虚构访谈。记录真实同意、匿名引语、解释和对应修改，并讨论相反或不支持项目的意见。

下一轮优先完善真实利益相关者证据与针对性修订。不要为了功能数量直接加入论文生成、公开排名、自动诊断或未经验证的发音评分。
