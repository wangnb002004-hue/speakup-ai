import { z } from 'zod';

export const contexts = ['Seminars', 'Campus life', 'Group projects', 'Office hours', 'Academic writing'] as const;
export type Context = typeof contexts[number];
export const practiceStyles = ['guided', 'natural', 'stretch'] as const;
export type PracticeStyle = typeof practiceStyles[number];
export const profileSchema = z.object({
  name: z.string().trim().min(1).max(40), confidence: z.number().int().min(1).max(5),
  anxiety: z.number().int().min(1).max(5), contexts: z.array(z.enum(contexts)).min(1).max(contexts.length),
  goal: z.string().trim().min(3).max(180), weeklyGoal: z.number().int().min(1).max(14),
  remoteConsent: z.boolean(), voiceConsent: z.boolean(),
  practiceStyle: z.enum(practiceStyles).default('guided'), aiConsentVersion: z.literal(2).optional(),
});
export type Profile = z.infer<typeof profileSchema>;
export type Message = { role: 'assistant' | 'user'; content: string };
export const evidenceSchema = z.object({turn:z.number().int().min(1).max(20),quote:z.string().min(1).max(1200),rewrite:z.string().min(1).max(500),reason:z.string().min(1).max(500)});
export const feedbackSchema = z.object({evidence:z.array(evidenceSchema).min(1).max(3).optional(), clarity:z.string().min(1).max(700), pragmatics:z.string().min(1).max(700), phrases:z.array(z.string().max(160)).min(1).max(4), nextStep:z.string().min(1).max(400) });
export type Feedback = z.infer<typeof feedbackSchema>;
export type AIReceipt = {provider:string;model:string;purpose:'chat'|'feedback'|'connection';completedAt:string;durationMs:number;promptTokens?:number;completionTokens?:number;requestId?:string};
export const learningStrategies = ['prepare-question','give-example','request-clarification','invite-response','request-feedback'] as const;
const personalRating = z.number().int().min(1).max(5);
// Plans and self-reviews stay local. They are not part of the AI prompt or consent v2.
export const practicePlanSchema = z.object({
 intent:z.string().trim().min(3).max(180), strategy:z.enum(learningStrategies),
 privateNote:z.string().trim().max(600).optional(),confidence:personalRating.optional(),willingness:personalRating.optional(),
});
export type PracticePlan = z.infer<typeof practicePlanSchema>;
export const practiceReviewSchema = z.object({
 takeaway:z.string().trim().min(3).max(400),nextTry:z.string().trim().min(3).max(400),
 confidence:personalRating.optional(),willingness:personalRating.optional(),
});
export type PracticeReview = z.infer<typeof practiceReviewSchema>;
export type Practice = { plan?:PracticePlan;selfReview?:PracticeReview;style?:PracticeStyle;goal?:string;rehearsalFocus?:string;parentPracticeId?:string;requests?:{id:string;content:string}[];receipts?:AIReceipt[];id:string; scenarioId:string; messages:Message[]; createdAt:string; finishedAt?:string; feedback?:Feedback; mode:'demo'|'live' };
export const questPlanSchema = z.object({opening:z.string().trim().max(180),when:z.string().trim().max(180),exit:z.string().trim().max(180)});
export type QuestPlan = z.infer<typeof questPlanSchema>;
export type Quest = { plan?:QuestPlan;id:string; scenarioId:string; level:1|2|3; title:string; acceptedAt:string; status:'accepted'|'reflected' };
export const reflectionSchema = z.object({ questId:z.string().uuid(), outcome:z.enum(['completed','attempted','not-yet']), confidence:z.number().int().min(1).max(5), challenge:z.string().trim().max(600), learning:z.string().trim().min(3).max(600), nextStep:z.string().trim().min(3).max(400),strategy:z.string().trim().max(180).optional(),opportunity:z.enum(['available','no-opportunity','declined','unsure']).optional(),willingness:z.number().int().min(1).max(5).optional(),barrier:z.enum(['none','no-opportunity','space','language','chosen-listening','other']).optional(),feedbackUse:z.enum(['used','adapted','not-used','not-applicable']).optional() });
export type Reflection = z.infer<typeof reflectionSchema> & {id:string; createdAt:string};
export const supportKinds = ['lecturer','mentor','language-support'] as const;
export const supportStatuses = ['planned','contacted','followed-up'] as const;
export const supportPlanSchema = z.object({kind:z.enum(supportKinds),question:z.string().trim().min(3).max(400),nextAction:z.string().trim().min(3).max(200),status:z.enum(supportStatuses).default('planned'),useful:personalRating.optional()});
export type SupportPlan = z.infer<typeof supportPlanSchema> & {id:string;createdAt:string};
export const supportPlanUpdateSchema = z.object({id:z.string().uuid(),status:z.enum(supportStatuses),useful:personalRating.optional(),nextAction:z.string().trim().min(3).max(200).optional()});
export type State = { supportPlans?:SupportPlan[];baseline?:{confidence:number;at:string;source:'onboarding'|'legacy'};savedPhrases?:string[];profile:Profile|null; practices:Practice[]; quests:Quest[]; reflections:Reflection[] };
export const emptyState = ():State => ({profile:null,practices:[],quests:[],reflections:[]});
export type Scenario = { id:string; title:string; context:Context; description:string; role:string; opener:string; phrases:string[]; replies:string[]; quests:[string,string,string]; duration:string; color:string;academicMove?:string;participationNote?:string;suggestedStrategy?:string;evidenceIds?:number[] };
export const scenarios: Scenario[] = [
 {id:'seminar',academicMove:'Connect a claim to one example, then invite a response. Seminar expectations differ: ask your tutor what counts as useful participation.',participationNote:'Listening, pausing, and choosing not to speak can be valid participation. A lack of speaking space is not a language deficit.',suggestedStrategy:'Prepare one example and a short invitation such as “What do you think?”',evidenceIds:[14,24,28],title:'Join the discussion',context:'Seminars',description:'Share a small idea in a university seminar. There is room for your perspective.',role:'Alex, your seminar classmate',opener:'We’re discussing how AI could support learning. What is one use that interests you?',phrases:['Could I add a thought?','One example that comes to mind is…','What do you think about that?'],replies:['That gives us a starting point. Could you share one example from your own learning?','I can see your point. What might be a limitation of that idea?','That helps me understand your view. How would you invite someone else into this discussion?'],quests:['Ask a familiar classmate one question about today’s topic.','Share one idea in a small seminar group.','Offer a viewpoint and invite a follow-up in a class discussion.'],duration:'4–6 min',color:'lavender'},
 {id:'campus',academicMove:'Check that the other person is willing to talk, exchange one interest, and leave an easy way to finish.',participationNote:'A conversation needs willing partners and a suitable opportunity. You may pause, decline, or leave at any point.',suggestedStrategy:'Prepare one open question and a respectful closing phrase.',evidenceIds:[24,26,29],title:'Make a campus connection',context:'Campus life',description:'Start a friendly conversation with someone at a campus activity.',role:'Sam, a student at the campus society fair',opener:'Hi! I’m looking at the hiking society. Have you tried any campus activities yet?',phrases:['Is this your first time here?','Would you like to join us?','No worries if you’re busy.'],replies:['That sounds interesting. What do you enjoy doing outside classes?','I’d like to try something new too. What activity would you suggest?','Thanks for the suggestion! How would we arrange a time that works for both of us?'],quests:['Ask a student volunteer one question about a campus activity.','Invite a willing classmate to check out a campus activity.','Start a short conversation at an activity and suggest keeping in touch.'],duration:'3–5 min',color:'peach'},
 {id:'group',academicMove:'Make the task, role, deadline, and agreement explicit rather than assuming every group uses the same rules.',participationNote:'Team members need room to contribute. You can invite a response without requiring a quieter person to speak.',suggestedStrategy:'Offer a concrete next step, then check whether it works for the group.',evidenceIds:[14,24,28],title:'Find your voice in a team',context:'Group projects',description:'Suggest a plan and negotiate roles with a project teammate.',role:'Jamie, your project teammate',opener:'Our presentation is next week. How do you think we should divide the work?',phrases:['I could take responsibility for…','Could we agree on a deadline?','How does that sound to everyone?'],replies:['That could work. Which part would you feel comfortable taking on?','Thanks for explaining. What could we do if someone needs more time?','That sounds practical. How would you check that everyone agrees?'],quests:['Ask a teammate to clarify one task or deadline.','Suggest one next step in your group meeting.','Help agree on roles and invite a quieter teammate to contribute.'],duration:'4–6 min',color:'mint'},
 {id:'office',academicMove:'Explain what you understand, identify one uncertainty, and ask for a concrete example or next step. Check your own course expectations.',participationNote:'Asking for clarification is a learning strategy. The tutor may need time or may suggest a different support route.',suggestedStrategy:'Prepare a question that identifies the exact instruction or idea you want to clarify.',evidenceIds:[2,14,21],title:'Ask for a little clarity',context:'Office hours',description:'Ask a lecturer to explain something you are still working through.',role:'Dr Lee, your course lecturer',opener:'Welcome! What would you like to clarify about the assignment?',phrases:['Could you clarify what you mean by…?','My understanding is… Is that right?','Thank you, that helps me plan my next step.'],replies:['Of course. Which part of the instructions feels least clear?','A concrete example may help. What approach are you considering?','That is a useful question. Could you summarize your next step so we can check it together?'],quests:['Ask a tutor one short clarification question after class.','Attend office hours and ask a prepared question.','Discuss your approach with a lecturer and ask a follow-up question.'],duration:'3–5 min',color:'blue'},
 {id:'feedback',title:'Ask for useful writing feedback',context:'Academic writing',description:'Discuss a short assignment idea with a tutor and ask for specific feedback on your claim, evidence, or structure. This is a conversation rehearsal, not an essay-writing or grading service.',role:'Dr Morgan, a tutor discussing an assignment draft',opener:'Which claim or part of your assignment would you like feedback on, and what would you like me to look for?',phrases:['My main claim is… and my example is…','Could you show where my reasoning needs more support?','Which change should I prioritise, and why?'],replies:['What evidence or example would help a reader follow that claim?','We can focus on one part. Would feedback on your reasoning or your structure help more?','Could you tell me the change you plan to make and the question you would take back to your course tutor?'],quests:['Ask a willing peer one brief question about the assignment instructions.','Ask a tutor or a willing peer for specific feedback on one part of your draft.','Discuss one piece of feedback with a tutor or a willing disciplinary peer and agree on a next step.'],duration:'4–6 min',color:'lavender',academicMove:'Make the feedback request specific: identify your claim, the evidence or example, and the part you want a reader to check. Assignment and discipline expectations differ.',participationNote:'You can prepare a question in any language before choosing how to ask it. Keep authorship of your assignment and check feedback against your actual course guidance.',suggestedStrategy:'Ask for one actionable comment on reasoning or structure, then restate the change you plan to make.',evidenceIds:[11,20,21,25,30]},
 {id:'lecture',title:'Clarify a missed lecture point',context:'Seminars',description:'Ask a classmate to clarify an idea you missed during a lecture and check your understanding. The example topic is AI support for learning; use your real course materials to check academic facts.',role:'Taylor, a classmate after a lecture on AI support for learning',opener:'The lecturer mentioned a difference between getting an answer and getting support to learn. Which part would you like to check?',phrases:['I caught the point about… but missed…','Could you explain that part in another way?','So, is the idea that…?'],replies:['One way to put it is that a hint can help you work through a problem. Which part would you like to check?','We can slow down and use one example. How would you explain your understanding so far?','That gives us something to verify. What would you check in the slides or ask the lecturer next?'],quests:['Ask a willing classmate one brief question about a missed lecture point.','Ask a willing classmate or tutor to clarify one missed point.','Check your understanding with a classmate, then ask the lecturer a prepared follow-up if needed.'],duration:'3–5 min',color:'blue',academicMove:'Identify what you caught and what you missed; request clarification; paraphrase the answer and verify it against course materials.',participationNote:'A fast pace, unfamiliar terms, or limited room to ask may affect participation. Needing clarification does not establish low ability.',suggestedStrategy:'Ask for another explanation and summarise it in your own words before moving on.',evidenceIds:[16,22,29]},
];
export function scenarioFor(id:string) { const s=scenarios.find(s=>s.id===id); if(!s) throw new Error('Unknown scenario'); return s; }
export function recommendation(state:State): {scenario:Scenario;level:1|2|3;reason:string} {
 const p=state.profile;
 const active=state.quests.find(q=>q.status==='accepted');
 // A chosen step is a preference, never an inferred proficiency or anxiety score.
 const level:1|2|3=active?.level??state.quests.at(-1)?.level??1;
 const candidates=scenarios.filter(s=>!p||p.contexts.includes(s.context));
 const lastPractice=state.practices.at(-1);
 const last=lastPractice?.scenarioId;
 const reflectedAfterPractice=lastPractice&&state.reflections.some(r=>{
  const quest=state.quests.find(q=>q.id===r.questId);
  return quest?.scenarioId===lastPractice.scenarioId&&new Date(r.createdAt).getTime()>=new Date(lastPractice.finishedAt||lastPractice.createdAt).getTime();
 });
 const transfer=!!lastPractice?.finishedAt&&!reflectedAfterPractice;
 const scenario=active?scenarioFor(active.scenarioId):transfer?scenarioFor(lastPractice!.scenarioId):(candidates.find(s=>s.id!==last)??candidates[0]??scenarios[0]);
 const focus=active?'Keep your accepted quest in focus.':transfer?'You just rehearsed this situation. A matching human interaction is an optional next step.':`${scenario.context} matches your selected contexts.`;
 const choice=state.quests.length?`Step ${level} keeps your latest chosen challenge.`:'Step 1 is a small starting suggestion until you choose a challenge.';
 const reason=`${focus} ${!p?'Set up your profile to choose a starting point.':choice} This is a transparent planning rule, not an ability assessment. Choosing to listen or finding no suitable opportunity does not lower your level. You can choose any scenario or level.`;
 return {scenario,level,reason};
}
export function analytics(state:State,now=new Date()) {
 const since=now.getTime()-7*86400000;
 const attempted=(outcome:Reflection['outcome'])=>outcome==='completed'||outcome==='attempted';
 return {
  practices:state.practices.filter(p=>p.finishedAt).length,
  attempts:state.reflections.filter(r=>attempted(r.outcome)).length,
  completed:state.reflections.filter(r=>r.outcome==='completed').length,
  weeklyAttempts:state.reflections.filter(r=>attempted(r.outcome)&&new Date(r.createdAt).getTime()>=since).length,
  confidence:state.reflections.map(r=>({date:r.createdAt,value:r.confidence})),
  totalTurns:state.practices.reduce((n,p)=>n+p.messages.filter(m=>m.role==='user').length,0),
  listeningChoices:state.reflections.filter(r=>r.barrier==='chosen-listening').length,
  noOpportunities:state.reflections.filter(r=>r.barrier==='no-opportunity'||r.opportunity==='no-opportunity').length,
  selfReviews:state.practices.filter(p=>p.selfReview).length,
  supportFollowUps:(state.supportPlans??[]).filter(s=>s.status==='followed-up').length,
 };
}
export function demoReply(s:Scenario,messages:Message[],input:string) {
 const n=messages.filter(m=>m.role==='user').length;
 if(/repeat|slower|understand|clarify/i.test(input)) return `Of course — let’s take it one step at a time. ${s.opener}`;
 if(/thank|bye|see you/i.test(input)) return 'You’re welcome! Thanks for sharing your thoughts with me. You can finish here or try one more exchange.';
 if(/^(hi|hello|hey)[!. ]*$/i.test(input.trim())) return `Hi, it’s good to meet you. ${s.opener}`;
 return s.replies[n%s.replies.length];
}
export function demoFeedback(s:Scenario,p:Practice):Feedback {
 const user=p.messages.filter(m=>m.role==='user');
 const last=user.at(-1)?.content??'';
 return { clarity:`You contributed ${user.length} ${user.length===1?'turn':'turns'}. Try making one point and adding a concrete example. This is a scripted coaching suggestion, not an assessment of proficiency.`,pragmatics:/\?|could|would|please|thank/i.test(last)?'Your last turn contains a question or a polite expression. In this scenario, leave space for the other person to respond.':'Consider a short invitation such as “What do you think?” to make this a two-way exchange.',phrases:s.phrases,nextStep:s.quests[0],evidence:user.length?[{turn:1,quote:user[0].content,rewrite:s.phrases[1]+' [add your own example].',reason:'A scripted sentence frame to try. This is not a semantic correction or a proficiency assessment.'}]:undefined };
}
