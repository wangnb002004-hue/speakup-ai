# SpeakUp AI 文献证据矩阵与校正记录

公开仓库说明：原始论文和源综述由项目作者私下提供核验，不随 GitHub 仓库分发。下文保留文章身份、DOI、原文件名和页码，便于读者合法获取原文后复核。

核验日期：2026 年 11 月 4 日。编号与用户提供的《英语环境学习文献综述_30篇》一致。

本记录逐篇核对了 30 份独立 PDF 的首页身份、方法，以及用于本项目设计的结果、讨论与限制。30 份均能对应综述条目；没有发现缺篇或明显错篇。它不是独立系统综述，也没有复现原研究。下文 **PDF pN 均指文件内从1起算的页位置**，不一定等于期刊印刷页码。PDF 文件名可以在用户提供的压缩包内检索；DOI 链接用于识别文章。

这批材料支持的需求较清楚：情境化的学术沟通、具体反馈、对隐性规则的解释、学生能动性以及真实支持渠道。**它们并未直接检验 SpeakUp AI、DeepSeek 陪练或本项目的学习成效。** “由文献启发的功能设计”“本机软件测试通过”和“教育干预效果得到验证”是三个不同结论。

## 应先修正的综述表达

| 综述中的表达或风险 | 核验后的表述 |
|---|---|
| “写作几乎所有研究里都是第一痛点” | 写作在多项学术英语研究中突出，但需求随任务、专业与群体变化。第18篇 PDF p5 的频繁口语/听力困难比例高于写作。SpeakUp 增加围绕作业的反馈沟通，不因此转成未经验证的全能写作平台。 |
| “语言分数不是学业成绩的预测器” | 测试成绩不是充分指标，部分关系弱或不显著；不能说任何情境下都没有预测力。自评英语、入学分数、GPA与沟通能力也不能互换。 |
| “某策略最有效 / 性价比最高” | 很多材料报告的是使用率、主观有用性或相关，未随机比较策略；改为“受访者常采用/认可、值得在本地试验的支持”。 |
| 第30篇364名学生“来自八校” | 正文 p4 有364份有效学生回应、88位教师来自29校、26位教职员访谈来自8校；学生院校信息未获准采集。首页摘要394与正文不同，采用正文并披露。 |
| 第4篇“约5000人准实验” | 初筛4,957，全模型4,888，主要近阈值比较896。作者明确复杂分流限制了标准RD因果识别。无显著差异也不是严格等效检验。 |
| 第13篇“设计研究证明线上模块有效” | 教学设计报告：4人需求访谈、9人非正式试用反馈。可支持设计可行性/可接受性，不能证明学习提升。 |
| 第27篇“必须经过中介才能转成学业自信” | 横断面SEM支持一个统计关联模型，不能确认时间顺序、必经或因果机制；R²=.94不是提高94%。 |
| 第23篇“元分析证明支持改善适应，院校支持最好” | 13项横断面研究汇总相关r=.365、I²=84.9%。来源分组点估计不是随机比较，不能据此给支持方式排因果效果。 |
| 第29篇“8人定量追踪”；第7篇“三人均语言班免托福” | 第29篇8人参与、完整量化7人；第7篇两人读语言课程、一人考过TOEFL。 |
| 第8篇“学业困难不足10%” | 整体队列与英语补修子群要分开；后者某期GPA<2.0可到21.1%。 |

综述自行划分的“强/中/弱”不是经过正式风险偏倚工具的证据评级。大样本提高部分估计的精度；不会自动消除偏倚、建立因果或使结果适用香港本校。

## 逐篇证据与功能对应

### [1] Alkhaldi, S., & Bista, K. (2025)

**Examining language anxiety and academic success of Saudi international students in U.S. colleges**  
来源：`EJ1466926.pdf`，20页。 [DOI](https://doi.org/10.32674/8cf0b460)。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 横断面相关调查；551 名在美沙特学生，自报 GPA、IELTS 和 FLCAS；方法 p6–8。 |
| 相关发现与页码 | p9–10：FLCAS 与 GPA 的相关为 r=-.109；IELTS 与 GPA r=.045、不显著。 |
| 限制 / 不应推论 | 焦虑与表现并非同一变量；不能由相关推断减焦虑必然提升 GPA。摘要称 moderate，但结果效应很弱；沿用结果表述。便利样本、自报、单一来源国。 |
| 对 SpeakUp 的设计含义 | 保留非临床的主观 check-in；与练习记录分开，不据此诊断、评分或自动升降挑战。 |

### [2] Bastien, G., Seifen-Adkins, T., & Johnson, L. R. (2018)

**Striving for success: Academic adjustment of international students in the U.S.**  
来源：`EJ1180981.pdf`，22页。 [DOI](https://doi.org/10.5281/zenodo.1250421)。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 美国南部单校 122 名国际生；横断面问卷与分层回归；方法 p7–10。 |
| 相关发现与页码 | p12–13：求助与学业适应正相关；调整模型中求助 β=.42。在美时长、英语自评亦入模；GPA 因缺乏相关未继续作为结局。 |
| 限制 / 不应推论 | 英语系数与简单相关方向不一致；量表理解和缺失回答存在问题（p15–17）。不能说求助干预优于语言训练。 |
| 对 SpeakUp 的设计含义 | 增加可练习的具体求助问题、拟联系的人与渠道，以及使用后是否得到帮助的跟进。 |

### [3] Cena, E., Burns, S., & Wilson, P. (2021)

**Sense of belonging and the intercultural and academic experiences among international students at a university in Northern Ireland**  
来源：`EJ1324559.pdf`，20页。 [DOI](https://doi.org/10.32674/jis.v11i3.2541)。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | Queen’s University Belfast 16 名国际生，机会/滚雪球招募、半结构访谈和主题分析；p5–7。 |
| 相关发现与页码 | p8–12：校园、城市中的归属经验不同；同伴关系、学术期待及排斥共同构成体验。 |
| 限制 / 不应推论 | 单校、混合语言背景；包含英语国家来访者。不能把归属差异归结为学生英语缺陷或推广成所有人的共同轨迹。 |
| 对 SpeakUp 的设计含义 | 允许学生选择熟悉的同伴、校园资源等支持路径；AI 对话不能被称为人际归属感本身。 |

### [4] Clark, A. T., Lippincott, D., & Kim, J. (2021)

**More than learning English? The impact of university intensive English language program attendance on international student academic achievement**  
来源：`EJ1322549.pdf`，24页。 [DOI](https://doi.org/10.14507/epaa.29.4673)。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 单校行政数据；方法 p8 写初筛样本 4,957，摘要/全模型 4,888；接近 TOEFL 61 与 IEP 高阶水平的主要比较共 896 人（299 直录、597 IEP），p8–10。 |
| 相关发现与页码 | p11–14：相近入学语言起点的模型比较中，IEP 与直录生首学期 GPA、学分和学业状态差异不显著。 |
| 限制 / 不应推论 | 作者 p9 明说复杂分流限制了标准断点回归及因果识别；样本数字原文亦有不同口径。没有差异不是严格等效，也不能证明任何语言班都有效。 |
| 对 SpeakUp 的设计含义 | 将 SpeakUp 定义为现有课程/院校支持的补充；展示成功标准要含可用性和是否得到适切支持，不能只看 GPA。 |

### [5] Creely, E., Chowdhury, R., & Southcott, J. (2021)

**Academics’ understandings of the literacy needs of international graduate students**  
来源：`14_academic_literacy_needs_faculty.pdf`，20页。 [DOI](https://doi.org/10.46743/2160-3715/2021.4951)。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 澳大利亚一所大学教育学院 16 名教师，3 场焦点小组（7/5/4 人）、主题分析；p7–8。 |
| 相关发现与页码 | p9–15：教师对学术读写、责任与实践的理解存在张力；学术读写属于社会实践，不只是纠错。 |
| 限制 / 不应推论 | 这是教师视角，非学生干预实验；同一学院与自选招募限制外推。 |
| 对 SpeakUp 的设计含义 | 用明确而可修改的场景期待解释反馈理由；保留真实任课教师/学科导师的作用，不把通用 AI 当作课程标准。 |

### [6] Curtis, C. J. (2020)

**Predictors of cognitive skills development among international students: Background characteristics, precollege experiences, and current college experiences**  
来源：`JIS_article_253.pdf`，26页。 [DOI](https://doi.org/10.32674/jis.v10i2.253)。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | UCUES 2012 二手调查数据；875 名国际本科高年级生，回溯自报起点与当前能力、SEM；p6–9。 |
| 相关发现与页码 | p15–19：模型中写作自评、师生互动和学业投入与认知技能自评有关联，写作自评是较强预测变量。 |
| 限制 / 不应推论 | 横断面回溯自评与模型路径不能证明写作训练造成认知提升；只含选择性研究型大学（p20）。 |
| 对 SpeakUp 的设计含义 | 加入“观点—例子/依据—想确认的问题”的简短计划；不声称用本 app 可促进认知发展或学业成绩。 |

### [7] Eldaba, A. A., & Isbell, J. K. (2018)

**Writing gravity: International female graduate students’ academic writing experiences**  
来源：`EJ1197286.pdf`，12页。 [DOI](https://doi.org/10.5281/zenodo.1471736)。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 美国单校 3 名女研究生（沙特 2、伊朗 1）；目的取样、访谈与批改写作样本，批判理论分析；p4–5。 |
| 相关发现与页码 | p7–9：先前语言准备与研究生写作期待错位；学生要求具体、可理解的反馈，并协商自身作者身份。 |
| 限制 / 不应推论 | 三名女性的情境个案，作者明确不作普遍化（p10）。一人通过 TOEFL、另两人完成语言课程，不宜说三人均语言班免试。 |
| 对 SpeakUp 的设计含义 | 反馈保留学习者原文、给出改写和理由；让学生自己决定采纳什么、带什么问题去问教师。 |

### [8] Fass-Holmes, B., & Vaughn, A. A. (2015)

**Evidence that international undergraduates can succeed academically despite struggling with English**  
来源：`EJ1060056.pdf`，16页。所附综述未列 DOI。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 单校行政记录，两届国际本科新生 340+651=991 人；描述、相关和逻辑回归；p4–6。 |
| 相关发现与页码 | p7–13：较多学生须修英语课程，同时多数总体 GPA 在 B/B+；部分 TOEFL–GPA 相关很小，学业状态预测不显著。 |
| 限制 / 不应推论 | 不能推成“语言分数毫无预测力”。整体队列与补修子群不同：补修子群某期 GPA<2.0 比例可到 21.1%（p9–10）；单校且 GPA 排除英语补课。 |
| 对 SpeakUp 的设计含义 | 不设置 IELTS/TOEFL 门槛或能力标签；用真实任务的需要选场景，保留成绩与沟通支持的区别。 |

### [9] Gao, B. (2026)

**Language challenges and coping among international doctoral students: Perspectives from students, staff, and the institution**  
来源：`EJ1495225.pdf`，20页。 [DOI](https://doi.org/10.32674/yebr1b95)。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 美国中西部单校，14 名国际博士生与 3 名职员；调查辅助筛选、半结构访谈的质性个案；p5–8。 |
| 相关发现与页码 | p9–12：口音互相理解、文化语用与情绪影响交流；资源知晓、相关性和跟进不足。p12 的发音课“帮助很少”为特定受访者体验。 |
| 限制 / 不应推论 | 非课程成效试验；不能把个人评价当所有口语课的总效果，也不能从文本推断真实发音。 |
| 对 SpeakUp 的设计含义 | 增加澄清/重述/请求慢一点的策略；支持计划记录“知道—准备联系—是否联系—是否有帮助”，不以美式口音为唯一目标。 |

### [10] Garska, J., & O’Brien, S. (2019)

**Power, identity, and culture in international students’ perceptions of academic writing**  
来源：`16_scielo_academic_writing.pdf`，34页。 [DOI](https://doi.org/10.1590/010318138653426454991)。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 爱尔兰高校 108 份 EAL 学生问卷、3 个访谈个案，批判视角混合方法；p11–12。 |
| 相关发现与页码 | p12–29：语言变体、身份及权力关系影响对写作的理解；部分规范被体验为任意，母语者常成隐含参照。 |
| 限制 / 不应推论 | 问卷自选、访谈少；不能把偏好某种英语解释为其客观更优。 |
| 对 SpeakUp 的设计含义 | 允许中文等语言规划；AI 建议解释场景与目的、提供可选表达，避免“像母语者才正确”的排序。 |

### [11] Gürel Cennetkuşu, N. (2017)

**International students’ challenges in academic writing: A case study from a prominent U.S. university**  
来源：`Cennetkusu_2017_Academic_Writing_Challenges.pdf`，15页。所附综述未列 DOI。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 美国单校，问卷 65 名教育/社科研究生与 9 名教师；另访谈 7 名学生、3 名教师、3 名写作中心咨询员及文件分析；p3。 |
| 相关发现与页码 | p4–9：学生常报词汇/表达困难，教师侧强调语法、衔接和清楚表达；学科范文和反馈的需要不能简化成单一纠错。 |
| 限制 / 不应推论 | 小而有学科限制；各项目有效回答数不同，百分比不可一律以65/9为分母。师生认知差异不等于一方判断错误。 |
| 对 SpeakUp 的设计含义 | 让学习者先选择反馈焦点，再自评是否理解/打算采纳；新增“向导师索要具体写作反馈”情境。 |

### [12] Karkar-Esperat, T. M. (2018)

**International graduate students’ challenges and learning experiences in online classes**  
来源：`EJ1197277.pdf`，14页。 [DOI](https://doi.org/10.5281/zenodo.1468076)。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 美国教育类在线课程 3 名国际研究生；目的最大差异取样，访谈、问卷、田野/研究者笔记；p5–7。 |
| 相关发现与页码 | p8–11：语言、孤立、教师准备、动机与课程功能带来困难；异步的可访问性和可保留书面反馈亦被欣赏。 |
| 限制 / 不应推论 | 只有三个个案；综述“纯文字媒介放大问题”过窄，原文同时报告线上优点。 |
| 对 SpeakUp 的设计含义 | 保留异步练习、反馈回看与草稿；把“与真人联系”的支持入口作为补充，避免将 AI 陪练包装为替代社会互动。 |

### [13] Kowkabi, N., Yamamoto, M., & Lin, T.-Y. (Julie) (2025)

**Harnessing multilingual international students’ English academic socialization through asynchronous interactive online orientation**  
来源：`EJ1485966.pdf`，14页。 [DOI](https://doi.org/10.18806/tesl.v42i2/1432)。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | In the Classroom 教学设计报告；4 人需求焦点小组，另一个班试用后 9/10 人提供匿名非正式反馈；p4、p7。 |
| 相关发现与页码 | p4–10：以明确示例、交互自测、代表性、多模态及可及性设计模块；试用者认为邮件、学术规范等内容有用。 |
| 限制 / 不应推论 | 不是随机或前后成效研究，也未证明模块提升学习结果；作者任课班级带来自选/社会期许限制。 |
| 对 SpeakUp 的设计含义 | 场景前明确学术互动做法、给示例与可选提示；反馈需解释“为什么”，设置学习者自检。 |

### [14] Krsmanovic, M. (2022)

**Encountering American higher education: First-year academic transition of international undergraduate students in the United States**  
来源：`EJ1347271.pdf`，19页。 [DOI](https://doi.org/10.5038/2577-509X.6.2.1164)。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 美国东南部单校 10 名国际本科新生；现象学访谈与主题分析、成员核验；p6–8。 |
| 相关发现与页码 | p9–14：理解学术系统、课程差异、社会关系和院校服务是相互关联的过渡挑战；不熟悉资源影响利用。 |
| 限制 / 不应推论 | 单校、目的样本与回顾性体验；奖学金/资格个案不能用来描述本校政策。 |
| 对 SpeakUp 的设计含义 | 新增课程要求澄清、何时/向谁提问的情境卡；资源支持表让学生填写并自行核对本校官方信息，不虚构预约或校规。 |

### [15] Lee, J., Woo, H., Nguyen, A., & Henry, M. C. (2026)

**Voiceless experiences: Stress and coping of international students with language barriers**  
来源：`EJ1506440.pdf`，29页。 [DOI](https://doi.org/10.64899/2151-0407.2041)。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 美国东南部单校 15 人；建构主义扎根理论，最初9人后理论取样6人；要求留美至少2年、自报曾有语言压力且已应对，p5–7。 |
| 相关发现与页码 | p8–16：耗时、活动受限、羞耻与被低估的体验；支持关系、意义重构和主动参与被描述为应对过程。 |
| 限制 / 不应推论 | 取样已偏向能叙述“已克服”的人；非临床诊断与干预证据，学科差异也只是质性探索。 |
| 对 SpeakUp 的设计含义 | 反馈承认情境和可选策略，不给情绪诊断；反思可记结构性阻碍，而非把没发言解释成个人失败。 |

### [16] Li, L., & Zhang, J. (2022)

**Academic adjustment in the UK university: A case of Chinese students’ direct-entry as international students**  
来源：`15_Chinese_Student_UK_Adjustment.pdf`，11页。 [DOI](https://doi.org/10.5539/jel.v11n5p131)。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 英国一校 5 名中国 2+2 直入生，深入半结构访谈、主题归纳与成员核验；p3–4。 |
| 相关发现与页码 | p4–7：听力、写作、课程内容、节奏和时间管理困难；受访者认可回看录播、课前准备、小班答疑与 office hours。 |
| 限制 / 不应推论 | “perceived effective”是受访者认为有用；无比较组，不能估计效应大小；不代表全部直入生。 |
| 对 SpeakUp 的设计含义 | 增加漏听后澄清情境；练习前写“听懂了什么/没懂什么”，练习后选择去核对课件或问教师。 |

### [17] Mahmood, R., Ahmed, W., Mahmood, S., Suleman, R. M. F., Shabbir, M., & Wang, F. Y. (2026)

**From challenges to coping strategies: A study on academic integration and psychological well-being among international students at Chinese universities**  
来源：`EJ1495340.pdf`，28页。 [DOI](https://doi.org/10.32674/rcg6jt52)。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 中国六处情境的 30 名国际生；现象学访谈、主题分析，入学约6个月与1年时收集体验/应对，p8–11。 |
| 相关发现与页码 | p12–16：授课语言、学术要求、财务与社会处境交织；26/30人报告感知歧视/排斥（p14）。 |
| 限制 / 不应推论 | 目的样本中的计数不是中国高校发生率；国际生经历不能直接等同于本地中文母语 EMI 学生。 |
| 对 SpeakUp 的设计含义 | 支持反思时注明外部阻碍/无机会/选择旁听；不根据交流频次推断动机，院校支持问题保留给真人处理。 |

### [18] Martirosyan, N. M., Hwang, E., & Wanjohi, R. (2015)

**Impact of English proficiency on academic performance of international students**  
来源：`EJ1052835.pdf`，12页。所附综述未列 DOI。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 美国单校 54 份完整本科问卷；自评英语、困难与 GPA 的 ANOVA/回归；p4–7。 |
| 相关发现与页码 | p6–7：英语自评与语言背景同 GPA 有关联；p5 表1口语经常/总是困难44.5%、听力38.9%、写作33.4%，不支持普遍“写作总是最难”。 |
| 限制 / 不应推论 | 其中9人把英语列为第一语言；小样本、自报、语言背景变量编码不宜泛化成“多学一种语言就会提高 GPA”。此研究未直接测 TOEFL/IELTS 预测力。 |
| 对 SpeakUp 的设计含义 | 让学生选择场景与支持需要，保留多语言资源；不能把研究结果用来建立本项目的能力分级或语言标签。 |

### [19] Paik, E. J., & Braxton, M. (2026)

**“Belonging is a luxury to us”: International graduate students’ sense of belonging at a predominantly white institution in the U.S.**  
来源：`EJ1495339.pdf`，20页。 [DOI](https://doi.org/10.32674/df9sjd07)。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 美国东北部一所 PWI 的 12 名国际研究生、4 场硕士/博士分组焦点访谈；p5–7。 |
| 相关发现与页码 | p8–15：碎片化归属、同语/国际同伴网络、物理空间与学术支持重要；语言流利度被当作知识水平带来持续自证压力。 |
| 限制 / 不应推论 | 特定 PWI、目的样本、社会情境差异；并未测试语言或 AI 工具能改善归属。 |
| 对 SpeakUp 的设计含义 | 去除能力/口音排名；支持学生选择愿意联系的人，不把同语网络描绘为低效或需要摆脱。 |

### [20] Park, E. (2016)

**Issues of international students’ academic adaptation in the ESL writing class: A mixed-methods study**  
来源：`Park_2016_ESL_Writing_Adaptation.pdf`，18页。所附综述未列 DOI。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 美国 ESL 写作班 35 份问卷、3 个访谈与3篇批评性综述写作样本；p4–5、p8–11。 |
| 相关发现与页码 | p6–8：社会文化、学术、二语读写适应自评不同；p10–15 的词块分析揭示样本文体、语篇组织/作者声音的挑战。 |
| 限制 / 不应推论 | 3篇特定体裁文章的词块分布不能诊断所有学生；比较语料/体裁不等同，作者亦承认小样本与功能分析限制。 |
| 对 SpeakUp 的设计含义 | 写作反馈对话围绕观点、依据和组织，并让学习者解释自己的意图；不从聊天里自动判定学术写作能力。 |

### [21] Ravichandran, S., Kretovics, M., Kirby, K., & Ghosh, A. (2017)

**Strategies to address English language writing challenges faced by international graduate students in the US**  
来源：`17_International_Student_EAP_Writing_Strategies.pdf`，22页。 [DOI](https://doi.org/10.5281/zenodo.570033)。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 美国一校 15 名国际研究生，质性半结构访谈40–55分钟、主题分析；p6–8。 |
| 相关发现与页码 | p9–16：语义、组织、批判表达和引用困难；希望获得具体可执行反馈、教师个别讨论与同学科同伴指导；部分人不满写作中心支持。 |
| 限制 / 不应推论 | 需求/体验不是比较干预成效；不可说所有写作中心无用或某支持已证明最有效。 |
| 对 SpeakUp 的设计含义 | 新增“索要具体写作反馈”场景；反馈与自评对接，再制定愿意联系的教师/同伴及一个具体问题。 |

### [22] Russell, B., Barron, C., Kim, H., & Jang, E. E. (2022)

**A mixed-method investigation into international university students’ experience with academic language demands**  
来源：`06_EAL_language_demands.pdf`，18页。 [DOI](https://doi.org/10.3389/feduc.2022.934692)。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 加拿大单校商业/经济/工程专业；37 名 EAL 学生、16 名教师，焦点小组、问卷与课程大纲分析；p5–6。 |
| 相关发现与页码 | p7–13：考试准备与学科语言需求可能不一致；阅读推理/综合、专业写作、课堂语用及合作任务均需支持，专业差异明显。 |
| 限制 / 不应推论 | 小样本、单校三专业；关于刷分为质性体验，不能推成对所有 IELTS 效度的否定。工程样本所审课程并无论文写作要求（p7）。 |
| 对 SpeakUp 的设计含义 | 情境卡注明课程与学科规范不同；练习澄清/复述、组队沟通及问证据；不代替课程教师核对事实和标准。 |

### [23] Sari, C. A. K., Yoenanto, N. H., & Paramita, P. P. (2026)

**Revisiting social support and academic adjustment among international students: A systematic review and meta-analysis**  
来源：`EJ1495228.pdf`，21页。 [DOI](https://doi.org/10.32674/ef4e5y06)。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 系统综述与随机效应元分析；13 项横断面定量研究、6,233 人；p4–8（筛选只留横断面，见p6）。 |
| 相关发现与页码 | p8、p11：汇总 r=.365，95%CI [.295,.435]，I²=84.9%；p13 给出不同来源支持的分组相关。 |
| 限制 / 不应推论 | 相关汇总不是因果；异质性高，来源分组研究数少/可能重叠，不能把 r=.386 与 .260 直接解释为院校支持显著优于同伴。发表偏差检验亦不能证明无偏。 |
| 对 SpeakUp 的设计含义 | 把联结真实支持与跟进纳入项目；AI 练习量不等同社会支持、适应提升或院校服务效果。 |

### [24] Shi, H. (2018)

**English language learners’ strategy use and self-efficacy beliefs in English language learning**  
来源：`EJ1180874.pdf`，18页。 [DOI](https://doi.org/10.5281/zenodo.1250375)。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 美国东南部单校学术英语课程；207回应中198完整，MSLQ自效能和SILL策略横断面问卷；p6–8。 |
| 相关发现与页码 | p8、p10：元认知、社交和补偿策略自报频率较高；总体策略与自效能 r=.28，相关不强。 |
| 限制 / 不应推论 | 使用频率不能排成有效性榜单；没有干预、客观表现测量，不能认定策略造成自效能提升。 |
| 对 SpeakUp 的设计含义 | 练习前计划一种策略、练习后选取一条依据并决定下次行动；统计计划/自评行为，不给它贴上有效性分数。 |

### [25] Singh, M. K. M. (2015)

**International graduate students’ academic writing practices in Malaysia: Challenges and solutions**  
来源：`EJ1052831.pdf`，11页。所附综述未列 DOI。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 马来西亚 131 名国际硕士生，学术读写问卷与课程/混合模式比较；p3–5。 |
| 相关发现与页码 | p5–7：方法/结果/学术语体困难较突出；坚持重述56.8%、与讲师讨论50.8%、请同伴查英语41.7%是自报采用比例。 |
| 限制 / 不应推论 | 采用比例不是策略疗效；参考文献相对较易不等于工具已被证明能解决；单一高校、硕士情境和问卷局限。 |
| 对 SpeakUp 的设计含义 | 把持续重述、问一个具体问题、确认下一步做成可练习动作；避免宣传“文献证明本方法最有效”。 |

### [26] Stegall, J. (2021)

**Peaks and valleys: The lived experiences of international students within an English immersion program using the integrated skills approach**  
来源：`Stegall_2021_English_Immersion_Experiences.pdf`，19页。 [DOI](https://doi.org/10.32674/jis.v11i3.2395)。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 美国单个英语沉浸项目 11 名国际生（7男4女）；解释性现象学，每人3次访谈、三周完成；p5–7。 |
| 相关发现与页码 | p8–15：语言学习被体验为情感、社会、文化过程；互动且受支持的课堂、相关活动及能动性被积极描述。 |
| 限制 / 不应推论 | 没有对照或客观前后测；不能据此声称“安全互动真实任务最有效”或把成功归于单一要素。 |
| 对 SpeakUp 的设计含义 | 提供低风险练习、可选提示与真实任务连接；强调学习者选择，评价时问哪些支持有用及为什么。 |

### [27] Wang, C.-h., Harrison, J., Cardullo, V., & Lin, X. (2018)

**Exploring the relationship among international students’ English self-efficacy, using English to learn self-efficacy, and academic self-efficacy**  
来源：`EJ1166753.pdf`，18页。 [DOI](https://doi.org/10.5281/zenodo.1134299)。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 美国东南部单校 216 名国际生、便利问卷样本，以研究生为主；横断面 SEM，p6–9。 |
| 相关发现与页码 | p11–12：直接路径不显著，重设模型中“用英语学习”的自效能为统计中介，R²=.94为该内生变量解释方差。 |
| 限制 / 不应推论 | 不能表述为时间上的必经路径或因果机制；R²不是提高94%或项目效果；同源自报与模型重设需谨慎。 |
| 对 SpeakUp 的设计含义 | 使用任务级“我能否问清这个问题”的可选自评，和整体信心分开；不冒充原文多题量表或已验证 WTC。 |

### [28] Wang, S., & Moskal, M. (2019)

**What is wrong with silence in intercultural classrooms? An insight into international students’ integration at a UK university**  
来源：`EJ1239725.pdf`，7页。所附综述未列 DOI。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 英国单校10名研究生的民族志；另访12名教师/12名同伴，观察、日志等；本文重点呈现3个案例，p2–3。 |
| 相关发现与页码 | p3–6：有意/非自愿沉默、话语空间与同伴误读相互作用；不发言可以与学习投入同时存在。 |
| 限制 / 不应推论 | 深描而非发生率，不能把每次沉默判成某个固定类别；学生自述与观察须结合，不能只看聊天次数。 |
| 对 SpeakUp 的设计含义 | 明确保留选择旁听、不想分享、没有机会等反思选项；推荐不因沉默自动降级、取消失败惩罚。 |

### [29] Wolf, D. M., & Phung, L. (2019)

**Studying in the United States: Language learning challenges, strategies, and support services**  
来源：`05_US_nursing_students.pdf`，14页。 [DOI](https://doi.org/10.32674/jis.v9i1.273)。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 美国一所大学护理教育硕士项目8名中国护士，三学期追踪问卷/访谈；完整定量表7人（1人仅填首次）；p3–6。 |
| 相关发现与页码 | p6–12：写作与听力困难较顽固，口语体验随场合有积极与困难两面；重述/请求慢说等策略、支持服务被认可。 |
| 限制 / 不应推论 | 极小且同专业群体、无比较组；不能把时间变化归因于单一支持，也不能扩大为所有大学生需求排序。 |
| 对 SpeakUp 的设计含义 | 新增讲座澄清与求助修复策略；个人前后记录只作描述，明确真正迁移需要可选现实任务和后续研究。 |

### [30] Zhou, S., McKinley, J., Rose, H., & Xu, X. (2022（在线先行2021）)

**English medium higher education in China: Challenges and ELT support**  
来源：`02_China_EMI_support.pdf`，11页。 [DOI](https://doi.org/10.1093/elt/ccab082)。

| 维度 | 核验结果 |
|---|---|
| 方法与样本 | 混合方法；p4写364份有效学生问卷（约87%本科）、88名教师问卷来自29校，26位教职员访谈来自8校。摘要p1写394，与正文不一。 |
| 相关发现与页码 | p4–6：样本中写作、口语任务相对较难；63.3%报学术语体困难。p6–9：支持供给、知晓与多语言实践有情境差异。 |
| 限制 / 不应推论 | 学生院校信息未获准采集（p4），不能说364人都来自访谈8校；横断面自报，不能证明支持成效。PDF为2021先行稿，正式引文2022。 |
| 对 SpeakUp 的设计含义 | 扩展到围绕写作的求反馈、课堂澄清；提供可选多语言规划、具体互动规则与真实支持跟进，同时保持“沟通支持”边界。 |

## 可执行的设计—评价链

| 文献支撑的需要 | 本轮应落实的功能 | 实际应观察什么 | 不能声称什么 |
|---|---|---|---|
| 隐性学术互动期待 [13][14][22][30] | 场景中解释可选的互动做法、目标和不同课程规范；提供具体句型 | 学习者能否理解为何这样表达，能否改成符合本课情境的说法 | 一种英语/文化规范对所有课堂都正确 |
| 具体反馈与学习者作者身份 [7][11][20][21] | 逐字引用真实发言、建议及理由；学习者选择采纳的一点、写下下次改法 | 引文忠实度、理由是否适合上下文、第二次练习是否体现自选修改 | AI 分数就是客观语言能力；收到反馈就等于学会 |
| 元认知与任务性自效能 [24][27] | 简短计划—练习—自评—可选再练；主观信心与行为记录分开 | 计划可否执行、能否说明学到什么、用户主观可控感 | 单题自评就是验证过的WTC/FLCAS量表；自信提高证明能力提升 |
| 求助和支持的可及性 [2][9][14][21][23] | 用真实课程问题练习 office hours/写作反馈；记录支持对象、渠道与跟进结果 | 是否知道可联系谁、是否联系、是否得到适切帮助、哪些障碍仍在 | 软件替代教师；虚构学校服务、预约成功或真人支持效果 |
| 沉默与参与的情境性 [10][17][19][28] | 学习者自选挑战；区分有意旁听、无机会、想说但被限制、语言组织困难 | 用户是否感到被尊重，外部阻碍有无被看见 | 发言少=不努力；每次沉默需纠正或降级 |
| 听讲和互动修复 [9][16][22][29] | “已听懂/没听懂”的计划、请求澄清/放慢/重述、复述核对 | 能否提出准确问题，并将学科事实回到课件/教师核对 | 文字聊天可测发音、听力或自动证明向现实迁移 |

以上是从需求证据到产品的**设计推论**。是否有效仍应通过本校学习者试用、真实利益相关者访谈及后续研究检查。

## Presentation 的证据边界

- 主叙事可改为：“在英语学术环境中，困难不只在词句，也在互动期待、任务和支持。SpeakUp 提供准备、练习、具体反馈与可选的真实求助连接。”
- 主幻灯片选用约5–7条与功能直接相关的证据；完整30条放备份页/本矩阵。不要以引用数量代替相关性。
- 核心证据宜含中国EMI需求 [30]、具体反馈 [21]、显性互动设计 [13]、支持相关 [23]、沉默差异 [28]；分别注明研究性质及限制。
- AI部分展示真实模型调用、输入范围、带原文的反馈以及学习者再练；“原文匹配检查”只验证引文忠实，并不验证AI改写建议必然正确。
- 演示结果只能写成真实软件验证和具体案例。没有完成招募/访谈/随访前，不填学习提升百分比、满意度、用户人数或伪造引文。
- 评价应先检验可用性、反馈可操作性、能动性和支持可及性。短期反思描述变化；要声称能力、WTC或迁移效果，需要明确研究问题、适切工具/伦理、真实样本、对照/重复测量及局限。
