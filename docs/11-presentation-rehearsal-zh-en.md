# SpeakUp AI 四人展示讲解与排练稿

本指南对应仓库内的[现有 PPT](../presentation/SpeakUp-AI-slides.pptx)：**10 页主讲、10 分钟，另有 5 页备用页与 5 分钟 Q&A**。它解释已有项目与幻灯片，没有增加新功能或改写展示结果。按钮和实现依据核对至 2026 年 11 月 7 日；本指南未重新调用模型 API，也未开展用户研究。

先阅读[项目完整中文说明](10-project-walkthrough-zh.md)，理解软件怎样运行，再用本指南排练。需要原始英文 notes 时查看[展示说明](04-presentation.md)；文献的样本、方法与限制见[30 篇证据矩阵](08-literature-evidence-matrix.md)。本指南的英文稿是与同一套幻灯片对应的口语版本，C 的演示旁白已经计入 10 分钟，不能再把演示时间额外加上去。

现有课程记录为 11 月 16 日上台、11 月 9 日 23:59 香港时间前提交展示材料。提交前填写真实成员姓名、学号和课程要求的 AI 使用声明。个人评价报告仍需本人进行真实利益相关者访谈，不能用软件演示记录代替。

## 1. 四个人共同理解的一条主线

可以先用中文把项目解释给完全不了解技术的人听：

> 有些学生知道自己想表达什么，却不确定如何进入一场具体的学术对话，或怎样提出能得到有用反馈的问题。SpeakUp AI 让他们先选一个情境，准备自己的目的，用 AI 排练，再判断哪些建议值得保留。之后，他们可以自愿与真实的人交流或求助，并记录机会、采用的策略与后续行动。

展示的中心是**“如何支持一个由学习者选择的真实学术互动”**。AI 对话是其中一个环节。点击更多按钮、聊更多轮，不能自动证明学生更愿意与人交流。写作相关文献在这里支持的是“怎样向教师、同专业同伴或语言支持人员索取具体反馈”，没有让项目变成论文代写或自动评分服务。

四个人都应分清下面三句话：

| 说法 | 依据 | 能说明什么 |
|---|---|---|
| 文献启发了这个设计 | 研究原文与[证据矩阵](08-literature-evidence-matrix.md) | 哪些需求、情境和设计张力值得关注 |
| 项目已有可运行实现 | 当前代码与[带日期的验证记录](09-literature-driven-upgrade.md) | 被检查的保存、模型调用、界面和错误处理能否运行 |
| 项目提高了学习效果 | 目前没有相应效果研究 | 不能把前两项当作这一结论 |

## 2. 四人分工与时间上限

| 成员 | 主讲内容 | 幻灯片 | 时间 | Q&A 首答范围 |
|---|---|---|---:|---|
| A：英文开场与问题定义 | 谁需要这个项目、具体问题是什么、范围如何确定 | 1–2 | 120 秒 | 项目定位、为什么保留学术交流与求助主线 |
| B：教育理论与文献 | 研究如何改变功能、学习循环为何这样安排 | 3–4 | 150 秒 | 文献解释、理论、情境性沉默、学习者选择 |
| C：技术与演示 | 展示真实工作流，指出 AI 与规则、前后端和数据路径 | 5–7 | 180 秒 | API、模型上下文、引文核验、可靠性、存储 |
| D：评价与伦理 | 怎样判断项目是否有价值、证据边界与下一步 | 8–10 | 150 秒 | 自主性、隐私、评价设计、局限与改进 |
| 合计 | 10 页主讲 | 1–10 | **600 秒** | 另有 300 秒 Q&A |

| 页 | 主讲者 | 页内上限 | 累计时间 |
|---:|---|---:|---:|
| 1 | A | 40 秒 | 0:40 |
| 2 | A | 80 秒 | 2:00 |
| 3 | B | 75 秒 | 3:15 |
| 4 | B | 75 秒 | 4:30 |
| 5 | C | 90 秒，含约 60 秒操作 | 6:00 |
| 6 | C | 45 秒 | 6:45 |
| 7 | C | 45 秒 | 7:30 |
| 8 | D | 50 秒 | 8:20 |
| 9 | D | 65 秒 | 9:25 |
| 10 | D | 35 秒 | 10:00 |

这是排练预算，不是已经测得的讲述时长。正常排练尽量在约 9 分 30 秒完成，给换页和延迟留空间。A、B、D 不要为了填满秒数逐字念幻灯片；C 不要把整段聊天、每个输入框和所有页面都操作一遍。

## 3. 十页主展示的中文解释与英文口语稿

### 第 1 页：SpeakUp AI

**A，40 秒。听众应理解：这是一个帮助学生准备学术互动和求助的可运行原型。**

开场先说学习者想做的事，再介绍技术。用“准备向老师问一个具体问题”比“我们用了 React 和大模型”更容易让听众进入项目。标题中的 academic participation 包括课堂发言、澄清、团队协商和寻求反馈；help-seeking 强调知道向谁、怎样问，以及后来是否得到帮助。

这页也应给后续论述定好证据范围：你们做出了软件，并能解释设计依据。尚未进行学习效果研究。不要在开场说已经降低焦虑、提高成绩或解决所有国际学生的困难。

**对应事实：** 当前 [README](../README.md) 说明本地完整应用及其范围；[情境数据](../src/lib/domain.ts)包含六个情境；[功能与验证记录](09-literature-driven-upgrade.md)区分实现和教育效果。

**可直接讲：**

<!-- SPEECH S1 START -->
> SpeakUp AI helps university students prepare for academic conversations and ask for useful support. A learner can plan a situation, rehearse with AI, review the feedback, and decide whether to approach a real person. Our literature review changed both the features and the way we interpret activity. Today, we will explain that design, demonstrate the working prototype, and discuss how to evaluate it. Educational impact remains untested.
<!-- SPEECH S1 END -->

### 第 2 页：Academic participation and support

**A，80 秒。听众应理解：困难可能来自任务规范和互动机会，不能只归因于“英语不好”。**

“隐性期待”指学校或学科里别人可能默认学生已经知道的做法，例如什么样的问题足够具体、如何请求反馈、什么时候适合加入讨论。学生即使理解词汇，也未必熟悉这些做法。项目因此把一般闲聊扩展到作业反馈和听课澄清，同时保留原有的研讨课、校园、团队和 office hours 情境。

文献综述里有较多写作研究，所以需要主动解释范围选择：项目练的是**与写作学习有关的沟通行为**，例如“请指出我的论证哪里需要更强证据”。AI 没有拿到真实作业标准，也没有资格认证某个论点或课程要求。讲到沉默时，同样要保留“主动倾听”和“没有发言空间”的可能。

**对应事实：** [情境数据](../src/lib/domain.ts)中的 `feedback` 和 `lecture`；证据矩阵的 [30] Zhou、[21] Ravichandran、[28] Wang & Moskal。Zhou 的有效学生问卷数、教师样本和八校访谈不能混成同一个样本，详细口径留给第 11 页备用页。

**可直接讲，末句交给 B：**

<!-- SPEECH S2 START -->
> The review concerns academic language and support, as well as speaking. Zhou and colleagues report difficulties with productive academic tasks, especially writing, alongside gaps in support. Needs differ across tasks and groups. Wang and Moskal also show that silence can reflect limited speaking space or a deliberate choice to listen. We therefore focus on a specific problem: a learner may understand the words but feel unsure how to ask a useful question or enter a discussion. The app makes possible academic moves visible and offers rehearsal for feedback requests and clarification. Writing research informs these conversations. We do not claim to solve academic writing as a whole. We also avoid treating every quiet student as deficient. These findings identify needs to investigate in our own context. B will now explain how we connected the evidence to particular design decisions.
<!-- SPEECH S2 END -->

### 第 3 页：Evidence and design decisions

**B，75 秒。听众应理解：文献确实改变了功能，而不是只出现在参考文献页。**

顺着表格解释四个具体对应关系即可。隐性规范对应情境里的 academic move；笼统反馈的需求对应原句、替代表达与理由；求助和适应的关联对应支持计划与跟进；沉默的不同含义对应选择倾听和缺少话语空间的记录。

同时说明“研究类型会限制我们能说什么”。小规模访谈能揭示使用者的经历和需要，不能直接给出普遍效果；横断面相关不能证明求助导致成绩或适应改善；教学设计报告也不能称为受控效果试验。你们提出的是值得检验的设计，不是“文献已经替我们验证了这个 app”。

**对应事实：** [learning-tools.tsx](../src/components/learning-tools.tsx) 的 `AcademicMove`、`SelfReview`、`SupportHub`；[情境与反思结构](../src/lib/domain.ts)；[证据矩阵](08-literature-evidence-matrix.md)的 [13]、[21]、[2]、[28]。

**可直接讲：**

<!-- SPEECH S3 START -->
> We translated selected findings into visible design decisions. Kowkabi and colleagues describe support for academic norms, so each scenario explains a possible communicative move. Their teaching and design project is not an effectiveness trial. Ravichandran and colleagues report a need for specific feedback. Our coaching therefore identifies a learner quotation, an alternative expression and a reason, followed by the learner’s own review. Help-seeking research informed a support plan and follow-up record. That association does not show that our feature improves adjustment. Finally, the silence research informed choices for listening and limited speaking space. Each row connects a research finding to something we can inspect in the app. It also gives us a question to test with stakeholders. None of these papers validates SpeakUp AI itself.
<!-- SPEECH S3 END -->

### 第 4 页：The learner journey

**B，75 秒。听众应理解：AI 练习之后还有由学习者决定的真人行动和反思。**

把四个阶段讲成同一个人的经历。先准备“我到底想问什么”，再排练表达；收到建议后自己判断；准备一个合适的真人互动；最后记录机会、选择、反馈使用和下一步。没有真实互动时可以停在准备阶段。完成一段 AI 聊天不等于完成真人任务。

理论的作用是解释为什么这样安排。学术话语社会化关注具体社区中的沟通规范；WTC 关注特定情境下的交流意愿；经验学习启发行动后的反思与再尝试；自我决定理论启发选择权与支持。不要说只要界面有四个阶段，学习就一定发生了。

**对应事实：** `PracticePlan`、`PracticeReview`、`QuestPlan` 与反思结构见 [domain.ts](../src/lib/domain.ts)；计划和自主反思表单见 [learning-tools.tsx](../src/components/learning-tools.tsx)。计划、自评和自主反思由应用保存在本地服务器，未自动进入模型提示；再次排练可带入的是前次 **AI coaching focus**，不能说私人反思已经传给模型。

**可直接讲，末句交给 C：**

<!-- SPEECH S4 START -->
> The learner first chooses a situation and an intention. A private plan can include a strategy or a note in Chinese. The app keeps these planning fields outside the AI prompt. During rehearsal, the learner chooses guided, natural or stretch support and can hide hints. After feedback, they decide what to keep, question or try again. A voluntary human task includes an opening, a suitable moment and a respectful exit. Reflection records what happened, including a lack of opportunity. Academic socialization explains the attention to local norms. WTC focuses our attention on readiness in a situation. Experiential learning informs reflection, while self-determination theory supports choice. These are design foundations, not proof of transfer. C will now show the working workflow.
<!-- SPEECH S4 END -->

### 第 5 页：A request for assignment feedback

**C，90 秒：约 30 秒说明，约 60 秒带旁白操作。听众应理解：AI 如何回应一个具体问题，以及学习者之后怎样审查和使用建议。**

PPT 里的截图来自 **2026 年 11 月 4 日的软件演示**，是实际 DeepSeek 调用的记录，不是学生试验结果。课堂上若再做实时演示，要另外核对当时的 API 状态。过去截图中出现过 Live AI，不保证另一台电脑或展示当天仍能调用。

主讲只用一个情境：**Ask for useful writing feedback**。它的目的不是让 AI 代写一段论文，而是排练如何向 Dr Morgan 这个角色提出具体的反馈请求。重点让听众看见本次练习自己的模式、真实发言的引文、可选择的改写，以及学习者自己的判断。真人任务与 Support hub 是后续行动入口，不代表已经联系过真人。

**对应事实：** [实际截图](screenshots/literature-live-feedback.jpg)、[带日期的技术记录](09-literature-driven-upgrade.md)、[聊天页面](../src/components/speakup.tsx)、[自主反思与支持页面](../src/components/learning-tools.tsx)。完整操作见下一节，**不要再额外朗读旧 notes 的整段演示文字**。

**前约 30 秒可直接讲，然后执行第 4 节的 60 秒脚本：**

<!-- SPEECH S5 START -->
> This example rehearses asking for assignment feedback. We use a software demonstration profile, not participant data. The screenshot records an actual earlier DeepSeek run. I will show the current workflow, then explain how a learner can take a useful question to a real person.
<!-- SPEECH S5 END -->

### 第 6 页：Where the AI works

**C，45 秒。听众应理解：项目中的生成式 AI、作者编写内容和显式规则分别在哪里。**

左栏是远程模型生成的对话和结构化反馈；右栏是项目作者写好的规范说明、支持计划与推荐规则。不要把所有根据数据变化的界面都称为 AI。比如“继续关注已接受的任务”和“保持上次自己选择的挑战”是可解释的规则，不是模型推断能力。

“引文核验”也需要精确解释：服务器检查引用是否出现在相应的学习者发言中，能够拒绝编造的引文。它不能证明改写更好、学术事实正确或符合真实课程评分标准。模型提示会限制角色、最近对话、支持方式和教学范围，但提示词不是绝不会犯错的保证。

**对应事实：** [ai.ts](../src/lib/ai.ts) 的 `chat`、`feedback`、`validateEvidence`；[domain.ts](../src/lib/domain.ts) 的 `recommendation` 和脚本 Demo；[聊天路由](../src/app/api/chat/route.ts)保存实际模型调用记录。这里没有训练新模型、微调模型或建立文献检索增强生成系统。

**可直接讲：**

<!-- SPEECH S6 START -->
> DeepSeek generates the consented dialogue and structured feedback. The prompt supplies the scenario, selected support, consented goal and recent conversation. Private plans and personal ratings stay outside it. The server checks the feedback structure and matches each quotation to a stored learner turn. That verifies attribution, not educational quality. Scenario explanations and support planning are authored content. Recommendations follow explicit rules and preserve the learner’s chosen challenge. We integrated an existing model API. We did not train a new model.
<!-- SPEECH S6 END -->

### 第 7 页：System and data flow

**C，45 秒。听众应理解：这是有后端和持久存储的本地完整应用，公开代码仓库不等于公开在线服务。**

只解释这张图所需要的三层：浏览器显示页面、接收输入；Next.js 后端验证请求、调用模型并保存；SQLite 在运行服务器的电脑上保留学习记录。模型密钥留在服务器配置中。匿名浏览器会话 cookie 让应用找到相应记录，但不是机构登录或跨设备账户。

远程 AI 需要学习者同意。应用可以发送练习文本、场景、支持选择和已同意的个人目标；新加的私密计划、自评、自主反思和支持计划不自动发送。SQLite 当前没有静态加密，所以不能把“保存在本地”说成“绝对安全”。语音是浏览器可选能力，可能由浏览器外部服务处理，展示默认使用键盘输入即可。

**对应事实：** [server.ts](../src/lib/server.ts)、[db.ts](../src/lib/db.ts)、[provider.ts](../src/lib/provider.ts) 和 [API 路由](../src/app/api)。启动和完整数据流见[项目中文说明](10-project-walkthrough-zh.md)，主讲不展开每一行代码。

**可直接讲，末句交给 D：**

<!-- SPEECH S7 START -->
> This is a full-stack local application. React runs the interface. Next.js routes validate requests, keep the API key on the server and save records in SQLite. With opt-in, permitted practice context and dialogue reach DeepSeek through HTTPS. Private plans and check-ins remain on the local server. Browser speech is optional, so typing always remains available. The public repository shares the code, not a hosted service or institutional account system. D will now discuss learner choice and the limits of our evidence.
<!-- SPEECH S7 END -->

### 第 8 页：Learner choice and context

**D，50 秒。听众应理解：项目允许学生表达情境和选择，不把“不说话”自动判成失败或低能力。**

有发言意愿却没有机会，与主动选择倾听，是不同经历。两者都不应靠一个“失败次数”概括。因此项目把 AI 排练、真人口语尝试、倾听、没有机会和支持跟进分开记录。选择倾听的记录必须使用 Not yet，不会增加 speaking attempts。

Guided、Natural、Stretch 是学习者要多少支持的选择，不是 CEFR 分级。1–5 分是私人 check-in，不是验证过的 WTC 量表、焦虑诊断或发音评分。界面有自主选项仍不等于每个人都感到没有压力，真实访谈仍要检查目标、提醒和反馈的体验。

**对应事实：** [domain.ts](../src/lib/domain.ts) 的 `analytics` 和 `recommendation`；[状态路由](../src/app/api/state/route.ts)对倾听结果的验证；[反思表单](../src/components/speakup.tsx)。理论解释见证据矩阵 [28]、[10]。

**可直接讲：**

<!-- SPEECH S8 START -->
> A pause may mean chosen listening or a lack of speaking space. Learners can choose their support and challenge, and record the situation. We keep AI rehearsal, human attempts and support contacts separate. The optional ratings are personal check-ins, not validated WTC scales or clinical measures. Browser transcripts cannot justify pronunciation scores. Chinese planning is optional. Local deletion also cannot retract text already held by a model provider. We still need to ask whether goals feel pressuring and whether feedback respects the learner’s intended meaning.
<!-- SPEECH S8 END -->

### 第 9 页：Evaluation and evidence boundaries

**D，65 秒。听众应理解：软件能运行、一个人的使用体验、教育干预效果，需要不同证据。**

技术测试回答保存、隔离、引文核验和失败处理等实现问题。现有文档记录过真实模型调用、自动测试和浏览器流程，但不是学习实验。一个利益相关者访谈可以提供**这个人**对情境匹配、可用性、自主性和支持需要的解释，不能代表全部大学生。

后续小规模试点可以观察：学习者是否自愿尝试目标情境、有多少真实机会、用了或改编了哪条建议、支持跟进是否有用。单纯比较自编问项前后分数、聊天时间或满意度，不能得出“AI 导致 WTC 提高”。如果要做因果效果评价，还需要合适的测量、比较条件与更充分设计。

**对应事实：** [带日期的功能验证记录](09-literature-driven-upgrade.md)、[公开副本的本次源码校验](12-public-release-verification.md)、[测试文件](../tests)、[真实访谈和评价包](05-evaluation-pack.md)。当前没有可供展示的真实受访者结果或效果数据；不要预写“受访者都喜欢”之类结论。

**可直接讲：**

<!-- SPEECH S9 START -->
> We separate technical verification, stakeholder evidence and educational impact. Technical checks concern model calls, saved records and the tested error paths. One real stakeholder can describe whether the scenario fits their context, whether the advice feels useful and whether the workflow supports their choices. That account can guide a revision, but it cannot establish a general effect. A later pilot should record opportunities alongside voluntary attempts, feedback use and support follow-up. More chat time or a higher personal check-in score would not establish causation. We need to retain critical accounts and distinguish a participant’s statement from our interpretation. The present evidence supports technical feasibility. Learning effects remain unknown.
<!-- SPEECH S9 END -->

### 第 10 页：Contribution and next step

**D，35 秒。听众应记住：你们交付了什么，以及下一步怎样产生更好的证据。**

收尾回到开场的学习者：从准备一个有意义的问题，到自主审查 AI 建议，再到决定是否与真实的人交流。当前贡献是把这条工作流做成可运行、可检查、能说明依据的原型。下一步优先完成真实访谈和有记录的修订，而不是用更多功能数量掩盖评价不足。

不要在最后突然承诺全球部署、自动教师替代或全能写作评估。共享部署、机构账户、受保护存储和长期评价都有价值，但仍属于后续工作。

**对应事实：** 当前 [README](../README.md) 的功能边界；[评价包](05-evaluation-pack.md)和[实施记录](09-literature-driven-upgrade.md)。

**可直接讲：**

<!-- SPEECH S10 START -->
> Our contribution is a working academic participation and help-seeking workflow with an explicit literature rationale. The review changed the features and how we interpret activity. Our next step is a real stakeholder interview and a documented revision, followed by a proportionate pilot. We currently claim a functioning prototype and a testable educational design. Learning impact remains unknown. Thank you. We welcome your questions.
<!-- SPEECH S10 END -->

## 4. C 的 60 秒现场操作脚本

### 4.1 上台前完成，不能占用主讲 10 分钟

1. 按[软件说明](10-project-walkthrough-zh.md)在展示电脑启动应用，保持服务运行。使用同一浏览器和同一地址。公开仓库不包含你的密钥或旧学习记录，另一台电脑需要自己的本地配置。
2. 打开 **Settings & privacy**，点 **Refresh status**，再点 **Test connection**。后者会发送一个很短的真实请求并消耗少量 token；“已配置 key”本身不证明账户、模型和网络可用。不要在投影中打开配置文件或展示密钥。
3. 点 **Edit learning profile**，使用明确的软件演示昵称，阅读并确认 remote AI 权限。新建档案的按钮为 **Create my learning space**，已有档案保存为 **Save my preferences**。语音权限可以保持关闭。新版本同意包含已选择的个人目标，旧同意需要重新确认。
4. 在 **Practice studio** 找到 **Ask for useful writing feedback**，点 **Start practice**。如果正在查看旧练习，先点 **Choose a scenario**。不要因为顶栏是 Live AI，就把历史 Scripted demo 练习称为真实模型对话。
5. 在 **Plan a useful rehearsal** 中预填：意图保留 “Ask for specific feedback on my reasoning”；策略选 **Ask for actionable feedback**；支持选 Guided；私人笔记可填“我想确认论点中的证据是否充分”。个人评分可跳过。保留这个已填好的弹窗，作为实时演示起点。
6. 准备好要发送的练习文本，避免现场打长句：

   > My argument is that AI feedback can support revision when students evaluate it themselves. Could you show me which part of my argument needs stronger evidence?

   这只是排练情境中的主张，不是你们已经验证的研究结果。AI 也不能认证这个主张或编造支持它的文献。
7. 预先准备一条**明确标为软件演示**的已完成练习，保留真实回复、反馈和自己的简短自我反思。可用内容为：

   - **What will you keep or question?**：`I will keep the specific question and check any advice against the actual assignment instructions.`
   - **What will you change in your next try?**：`I will bring one paragraph and ask which claim needs stronger evidence.`

   这是演示者对软件反馈的判断，不能称为受访学生的学习发现。
8. 预先保存一个**尚未发生真人互动**的匹配 quest，展示 Opening、When / where、Respectful exit 即可。可以同时在 **Support hub** 保存 Planned 记录：问题为 `Which claim in my draft needs stronger evidence, and why?`；下一步为 `Check the tutor's office hours and bring one paragraph.`。不要选择已经联系或已经跟进的状态。
9. 备好现有 PPT 第 5 页及[原始真实软件演示截图](screenshots/literature-live-feedback.jpg)。可以另外预开[支持页面截图](screenshots/literature-support-hub.jpg)。截图是界面记录，不能代替当天实时调用，也不能代替真实用户研究。

### 4.2 约 60 秒的操作与节奏

下面从第 5 页约第 30 秒开始，最晚在第 5 页第 90 秒结束。现场只发送一轮、只请求一次反馈。若操作生疏，使用保存的记录完成后半段，不能靠加速讲话或挤占 D 的时间解决。

| 演示内时间 | C 的动作 | 旁白与观察重点 |
|---|---|---|
| 0–7 秒 | 在已填好的计划弹窗点 **Start my rehearsal**；出现对话后指一下 **My private plan**。 | 说 D1。私人笔记保留在本地，AI 练习的发言是另一个输入。 |
| 7–20 秒 | 粘贴准备好的练习文本，点发送图标，其可访问名称为 **Send message**。指本次练习自己的 **Live AI** 与模型名称，观察流式回复。 | 说 D2。场景开场白本身是作者编写内容；发送后返回的模型回复才是此处要展示的生成式 AI。 |
| 20–35 秒 | 回复完成后点 **Finish & reflect**，查看 **Your words · turn…**、**Another way to say it** 与理由。 | 说 D3。到第 20 秒仍无回复，或到第 35 秒仍无反馈，立即按下一节切换备份。 |
| 35–45 秒 | 在 **Your judgment comes first** 区域展示或粘贴预备的两项判断，点 **Save my rehearsal reflection**。必要时直接展示事先保存的自我反思。 | 说 D4。个人评分可以跳过，不要为了操作制造“前低后高”。 |
| 45–52 秒 | 点 **Choose a real-world quest**，展示预存任务的 **Opening**、**When / where**、**Respectful exit**。没有已接受任务时仅展示计划表单即可。 | 指出接下来发生在应用外，不把 Accepted 当成完成。 |
| 52–60 秒 | 打开 **Support hub**，展示 **My requests and follow-ups** 中的 **Planned** 记录，以及支持渠道。 | 说 D5。保留 Planned；不点击已经联系、已经跟进的状态。按时回到第 6 页。 |

**与上表对应的英文旁白，已经属于第 5 页的 90 秒：**

**D1，开始计划：**

<!-- SPEECH DEMO1 START -->
> This private plan stays local. I choose the support I want.
<!-- SPEECH DEMO1 END -->

**D2，发送并观察：**

<!-- SPEECH DEMO2 START -->
> I now send a specific feedback request. This practice shows its own mode and model.
<!-- SPEECH DEMO2 END -->

**D3，审查反馈：**

<!-- SPEECH DEMO3 START -->
> The feedback quotes my words and offers an alternative. Matching the quote verifies its source, not the quality of the advice.
<!-- SPEECH DEMO3 END -->

**D4，学习者判断：**

<!-- SPEECH DEMO4 START -->
> I record what I would keep or question, then choose a next try.
<!-- SPEECH DEMO4 END -->

**D5，转向真人支持：**

<!-- SPEECH DEMO5 START -->
> This support request is planned. The app does not contact anyone for me.
<!-- SPEECH DEMO5 END -->

### 4.3 三种确定的备份路径

**情况一：实时 AI 慢或报错，网页仍能打开。**

- 回复还在生成时，可以点 **Stop reply**；这个按钮只用于回复，不是反馈请求的停止按钮。失败或停止后检查草稿，别把流中的半句说成已保存的完整回答。
- 当前界面没有一个独立的 “Retry” 按钮。确需重试聊天时，使用保留的原文再次点 **Send message**。相同未完成重试会沿用请求 ID，服务器对已完成请求做重复保护。排练可以检查这条路径，课堂上不要反复点击消耗时间。
- 演示计时到第 20 秒仍没有完整回复，或到第 35 秒仍没有反馈，就切回现有第 5 页截图。这两个时间都从上表演示开始计时，不从点击请求时重新计时。反馈请求忙碌时不必继续导航或连点 **Finish & reflect**。后续在课后检查结果。
- 同时说：**“The live service is delayed. I will continue with a saved software demonstration from 4 November. This is not a live response.”** 接着解释截图中的任务、原句和替代表达，再用事先准备的本地记录或截图解释 self-review 与 Planned 支持计划。

**情况二：没有可用 key、账户权限不足，或决定不发送远程数据。**

- 展示前在档案中关闭远程 AI 同意，用**新练习**演示明确标注的 **Scripted demo**。不能把它称为实时 DeepSeek，也不能声称它理解了用户的语义。
- Demo 的场景开场白、关键词分支和轮次回复来自作者编写内容。它能展示页面、保存、任务与反思流程，但不能证明生成式反馈能力。
- 同时说：**“This run uses the labelled scripted demo. It shows the workflow. The screenshot documents an earlier real model call.”** API 故障不会自动、静默地变成真实 AI 的替代品。

**情况三：本地网页也打不开。**

- 停止现场排查。使用现有第 5 页及准备好的截图讲解，再进入第 6–7 页解释 AI 与系统。启动、端口和依赖排查留到展示结束，操作方法见[软件说明](10-project-walkthrough-zh.md)。
- 同时说：**“The local interface is unavailable, so I will use the recorded interface and explain the same workflow. We are not claiming a live demonstration.”**

无论采用哪一种，**C 最晚在总时间 6:00 进入第 6 页、7:30 交给 D**。备用措辞取代当前旁白，不额外加一段故障说明。若未发生真人互动，不保存 Completed、Attempted、Contacted 或 Followed-up 来让页面看起来更漂亮。

## 5. 15 个可能的教师问题与简短英文回答

这些回答在 5 分钟 Q&A 使用，不计入主讲稿。每题先由一人答约 20–35 秒，另一人只补充必要的一点。展示第 11–15 页备用页时，先回答问题，再指出证据或限制，不逐页加讲。

### 1. What problem does SpeakUp AI address?

**A 主答。中文要点：具体学术互动和求助，不是所有英语学习问题。**

> It supports preparation for a chosen academic interaction, such as asking for assignment feedback or clarifying a lecture point. The learner can rehearse, review advice and plan a voluntary human step. We do not claim to cover every academic language need.

### 2. Why keep a speaking project when much of the literature concerns writing?

**A 主答，B 补充。中文要点：写作学习也需要与人讨论、提出具体反馈请求。**

> Writing-related needs informed a conversation about a draft: identifying a claim, asking for specific feedback and clarifying the next revision. The app rehearses access to useful academic support. It does not write the assignment, grade the essay or replace disciplinary instruction.

### 3. Where exactly is the AI?

**C 主答。中文要点：发送后的 live 角色回复与结构化反馈。**

> With configuration and consent, DeepSeek generates the role-play replies and structured feedback through server routes. The scenario opener and academic-move explanations are authored. Support planning and recommendations use explicit application logic. A Live AI label alone is not proof that every item on the page was model-generated.

### 4. Did you train, fine-tune or build a RAG system?

**C 主答。中文要点：使用已有 API，贡献在教育设计、提示、验证与整合。**

> No. We integrate an existing model API with role instructions, recent conversation and structured feedback checks. We did not train or fine-tune a model, and the app does not retrieve the thirty PDFs during a reply. The literature informed authored design decisions.

### 5. Why use this app rather than a general chatbot?

**A 主答，B 补充。中文要点：说明结构化贡献，不声称已经更有效。**

> The proposed contribution is the structured connection between a specific rehearsal, critical feedback review, a voluntary human plan and follow-up. These elements keep the educational purpose visible. We have not established that the app produces better outcomes than a general chatbot.

### 6. How does the recommendation adapt to a learner?

**C 主答，B 补充。中文要点：显式规则，保留用户选择。**

> It follows transparent rules: retain an accepted quest, connect a finished rehearsal to the same situation, or suggest a context the learner selected. It preserves the chosen challenge. Confidence, nervousness and speaking counts do not infer proficiency or automatically raise or lower the level.

### 7. Does an exact quotation guarantee reliable feedback?

**C 主答，B 补充。中文要点：归属核验不同于教学正确性。**

> The server checks whether the quoted text occurs in the specified learner turn. This can reject invented quotations. It cannot certify the rewrite, academic facts or course expectations. The learner can keep, adapt or question the suggestion and check it with a suitable human source.

### 8. What happens when the API fails?

**C 主答。中文要点：可见错误、保留草稿、重复保护、明确备份。**

> The app shows the error and retains the draft. Completed retries use request identifiers to avoid duplicate turns, and stored feedback can be retrieved again. During the talk, we switch to a disclosed saved demonstration after a short time limit. We do not disguise scripted replies as live AI.

### 9. What information reaches the model?

**C 主答，D 补充。中文要点：同意后的练习上下文；私人字段排除。**

> With opt-in, practice dialogue, scenario, support choice and the selected profile goal can reach the provider. A new rehearsal may include earlier AI coaching. Private planning notes, personal ratings, self-review and support records are not automatically included. Text deliberately pasted into a sent message is still part of that message.

### 10. Where are the key and the learning records stored?

**C 主答，D 补充。中文要点：服务器配置和 SQLite；不夸大安全性。**

> The key stays in local server configuration and is excluded from the public repository. SQLite stores text records on the server’s disk, associated with a browser session cookie. Records are not encrypted at rest. This local prototype does not provide institutional authentication or cross-device accounts.

### 11. Can you delete all data, including the provider’s copies?

**D 主答。中文要点：本地删除有明确范围。**

> The app exports or deletes the current session’s local records. That cannot erase downloaded copies or data already held by a model provider. Withdrawing consent prevents new remote calls. Optional browser speech also has its own external processing considerations.

### 12. Why allow listening or not completing a quest?

**B 主答，D 补充。中文要点：尊重选择与机会，计数不混淆。**

> Silence may reflect deliberate listening or limited speaking space. We let learners record that context without lowering their chosen challenge. Listening-only records use Not yet and do not count as speaking attempts. We still need stakeholder evidence about whether the design feels supportive in practice.

### 13. Does the app improve WTC, confidence or academic achievement?

**D 主答。中文要点：目前未知，不能用技术测试替代效果研究。**

> We do not know yet. The check-ins are personal reflections, not validated WTC or clinical measures. Technical tests show that tested functions work. One interview can guide a revision. Educational effects require suitable measures and a study design beyond the current software demonstration.

### 14. How would you evaluate the project next?

**D 主答，B 补充。中文要点：先真实访谈，再适度试点，机会和反馈使用要记录。**

> First, we would interview a real relevant stakeholder with consent and use both positive and critical accounts to revise the design. A later pilot could examine voluntary attempts, opportunity exposure, feedback use and follow-up over time. A causal claim would require an appropriate comparison and stronger design.

### 15. Can four group members use it online, and does Support hub contact people?

**C 主答，D 补充。中文要点：公开源码、在线托管、真实预约是不同事情。**

> The repository shares source code. The current delivery runs locally, so it is not a shared online service. Support hub saves a personal plan and links to official information. It does not send messages or book appointments. Shared deployment would require protected hosting, identity and operational controls.

## 6. 全组统一的表达边界

| 不应宣称 | 可以准确表述 |
|---|---|
| “30 篇研究证明我们的 AI 有效” | 文献提示需求与设计张力，没有直接检验这个项目。 |
| “写作对所有人始终最难” | 多项研究中写作突出，任务、专业与群体仍有差异。 |
| “某求助方式被证明最有效” | 相关、主观有用性、使用频率和因果效果需要区分。 |
| “我们训练了 DeepSeek / 接入了文献 RAG” | 我们整合既有 API；文献用于作者编写的设计。 |
| “所有内容都是 AI 生成的” | 角色回复和 live 反馈使用模型；开场、规范、支持与推荐有作者内容和规则。 |
| “引文匹配，所以改写必然正确” | 核验引用归属，教学质量和事实仍需判断。 |
| “更多聊天、更多点击就是更高 WTC” | 这些是活动记录，真人交流意愿与机会需要另行评价。 |
| “Guided 是低水平，Stretch 是高水平” | 支持方式由学习者选择，不是能力诊断。 |
| “前后自评分提高，所以 AI 有效果” | 自评是私人记录；没有建立因果或真人迁移。 |
| “软件演示完成了真人任务 / 已联系导师” | 软件测试与计划记录不能替代真实发生的事件。 |
| “本地存储绝对安全，删除能收回所有副本” | SQLite 未做静态加密；本地删除不覆盖下载件和提供方副本。 |
| “GitHub 已经让全组同时在线使用” | GitHub 发布代码；共享托管与机构账户仍需工程工作。 |

## 7. 最后两轮排练的方法

第一轮把重点放在理解上。A 先不用英文解释目标学生和范围；B 给出四个“研究怎样改变功能”的实例；C 指明一项模型生成、一项规则和一项真人自报；D 解释三个不同证据层级。有人听不懂时先换说法，再修改自己的口语，不靠增加术语。

第二轮按时间完整走一遍。A/B/D 主讲时，C 只在事先约定的位置准备界面，避免后台翻页分散注意。C 分别排练实时成功和截图备份两条路径，结束点都固定在总时间 7:30。D 预留最后一句收尾，不用备用页延长主讲。

四个人各自准备一个支持项目的理由，也准备一个真实限制。Q&A 时由负责成员先答，其他人补充一次即可。不会的问题可说：**“We have not tested that yet. The current evidence shows … . We would examine … next.”** 只填入你们确实知道的事实和可执行的验证方法。

## 8. 真实的 AI 使用说明

提交前补齐真实姓名、学号和实际贡献，按课程要求放置声明。下面是可改写的模板，不代表已经完成课程要求的正式声明。只保留符合你们实际过程的内容，不要说四个人从零手写了每一行代码，也不要把使用模型 API 说成训练了基础模型。

> We used AI assistance for software development and for drafting and revising explanatory and presentation materials. The application integrates an existing model API. Our team is responsible for verifying the cited sources, understanding the implementation, testing the workflow and explaining its limitations. We will identify the assistance used and each member’s actual contribution in accordance with the course requirements.

中文意思是：软件开发与材料起草、修订获得了 AI 协助；团队对来源核验、实现理解、测试和结论负责。若课程要求工具名称、版本、用途或使用记录，补充真实信息。不要用声明代替亲自阅读文献、理解代码、排练操作和完成真实访谈。这段模板不计入上面的 600 秒口语稿；若教师要求现场读出，用它替换等长的介绍内容并重新计时。

主要依据：现有[演示文件](../presentation/SpeakUp-AI-slides.pptx)、[英文展示说明](04-presentation.md)、[四人计划](../presentation/SpeakUp-AI-four-person-plan.md)、[文献矩阵](08-literature-evidence-matrix.md)、[带日期的功能与验证记录](09-literature-driven-upgrade.md)，以及本指南各页链接的当前源码。历史技术记录不代表展示当天服务可用，也不构成参与者或学习效果证据。
