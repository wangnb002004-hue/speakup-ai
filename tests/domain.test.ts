import test from 'node:test';
import assert from 'node:assert/strict';
import {
 emptyState,recommendation,analytics,scenarios,contexts,profileSchema,reflectionSchema,
 practicePlanSchema,practiceReviewSchema,questPlanSchema,supportPlanSchema,supportPlanUpdateSchema,
 demoReply,demoFeedback,type State,type Reflection,
} from '../src/lib/domain';
const profile={name:'Test',confidence:2,anxiety:3,contexts:['Seminars'],goal:'Participate once',weeklyGoal:3,remoteConsent:false,voiceConsent:false};
function state():State{return {...emptyState(),profile:profileSchema.parse(profile)};}
function reflection(overrides:Partial<Reflection>={}):Reflection{return {id:'r',questId:'q',outcome:'not-yet',confidence:3,challenge:'',learning:'I noticed the setting',nextStep:'Choose another moment',createdAt:'2026-11-02T11:00:00Z',...overrides};}
test('a first recommendation is a small transparent suggestion in a selected context',()=>{
 const r=recommendation(state());assert.equal(r.level,1);assert.equal(r.scenario.context,'Seminars');
 assert.match(r.reason,/not an ability assessment/);assert.match(r.reason,/You can choose/);
});
test('global confidence, anxiety and completion counts never assign a higher challenge',()=>{
 const s=state();s.profile!.confidence=5;s.profile!.anxiety=1;
 s.reflections=[reflection({id:'r1',outcome:'completed',confidence:5}),reflection({id:'r2',outcome:'completed',confidence:5})];
 assert.equal(recommendation(s).level,1);
});
test('chosen challenge survives not-yet, no opportunity and listening reflections',()=>{
 const s=state();s.quests.push({id:'q',scenarioId:'office',level:3,title:'My chosen task',acceptedAt:'',status:'reflected'});
 s.reflections=[reflection({barrier:'no-opportunity',opportunity:'no-opportunity',confidence:1})];
 assert.equal(recommendation(s).level,3);assert.equal(analytics(s).attempts,0);
 s.reflections.push(reflection({id:'r2',barrier:'chosen-listening',confidence:1}));
 assert.equal(recommendation(s).level,3);assert.match(recommendation(s).reason,/does not lower your level/);
 assert.equal(analytics(s).listeningChoices,1);assert.equal(analytics(s).noOpportunities,1);
});
test('analytics separates recorded activity, human self-reports and support follow-up',()=>{
 const s=state();s.reflections=[reflection({id:'a',outcome:'completed',createdAt:'2026-10-01T00:00:00Z'}),reflection({id:'b',outcome:'attempted',createdAt:'2026-11-02T00:00:00Z'}),reflection({id:'c',barrier:'chosen-listening'}),reflection({id:'d',barrier:'no-opportunity',opportunity:'no-opportunity'})];
 s.practices.push({id:'p',scenarioId:'seminar',messages:[{role:'user',content:'An idea'}],mode:'demo',createdAt:'',finishedAt:'2026-11-02T10:00:00Z',selfReview:{takeaway:'I used an example',nextTry:'Invite a response',confidence:5}});
 s.supportPlans=[{id:'s1',createdAt:'',kind:'lecturer',question:'Which example supports my claim?',nextAction:'Ask at office hours',status:'followed-up',useful:4},{id:'s2',createdAt:'',kind:'mentor',question:'How do you plan this assignment?',nextAction:'Prepare a question',status:'planned'}];
 const a=analytics(s,new Date('2026-11-02T12:00:00Z'));
 assert.equal(a.attempts,2);assert.equal(a.completed,1);assert.equal(a.weeklyAttempts,1);assert.equal(a.practices,1);
 assert.equal(a.totalTurns,1);assert.equal(a.selfReviews,1);assert.equal(a.listeningChoices,1);assert.equal(a.noOpportunities,1);assert.equal(a.supportFollowUps,1);
});
test('validation accepts new preferences and listening while rejecting invalid personal scales',()=>{
 assert.equal(profileSchema.safeParse({...profile,confidence:6}).success,false);assert.equal(profileSchema.safeParse({...profile,contexts:[]}).success,false);
 assert.equal(profileSchema.safeParse({...profile,contexts:[...contexts]}).success,true);
 assert.equal(reflectionSchema.safeParse({questId:'2d3fdb41-2ea6-4ccf-9c7f-7995c6ca43b0',outcome:'not-yet',confidence:3,challenge:'',learning:'I chose to listen',nextStep:'Ask later',barrier:'chosen-listening',feedbackUse:'not-applicable'}).success,true);
 assert.equal(reflectionSchema.safeParse({questId:'invalid',outcome:'success',confidence:0}).success,false);
});
test('private plan and self-review accept multilingual notes and do not require ratings',()=>{
 const plan=practicePlanSchema.parse({intent:'Ask one concrete question',strategy:'request-clarification',privateNote:'先用中文准备问题，再自己说。'});
 assert.equal(plan.confidence,undefined);assert.match(plan.privateNote!,/中文/);
 assert.equal(practicePlanSchema.safeParse({...plan,strategy:'translate-whole-essay'}).success,false);
 assert.equal(practicePlanSchema.safeParse({...plan,willingness:6}).success,false);
 assert.equal(practiceReviewSchema.safeParse({takeaway:'I asked for an example',nextTry:'Check my understanding'}).success,true);
 assert.equal(practiceReviewSchema.safeParse({takeaway:'',nextTry:'Next',confidence:0}).success,false);
 assert.equal(questPlanSchema.safeParse({opening:'Could I ask?',when:'After class',exit:'Thank you for your time.'}).success,true);
});
test('support planning distinguishes a planned contact from a follow-up without inventing a service',()=>{
 const p=supportPlanSchema.parse({kind:'language-support',question:'Can you help me check my argument?',nextAction:'Check the official booking page'});
 assert.equal(p.status,'planned');assert.equal(p.useful,undefined);
 assert.equal(supportPlanSchema.safeParse({...p,kind:'automatic-peer-matching'}).success,false);
 assert.equal(supportPlanUpdateSchema.safeParse({id:'2d3fdb41-2ea6-4ccf-9c7f-7995c6ca43b0',status:'followed-up',useful:5}).success,true);
 assert.equal(supportPlanUpdateSchema.safeParse({id:'2d3fdb41-2ea6-4ccf-9c7f-7995c6ca43b0',status:'followed-up',useful:7}).success,false);
});
test('six scenarios expose contextual expectations, participation choices and literature links',()=>{
 assert.equal(scenarios.length,6);assert.equal(scenarios.find(s=>s.id==='feedback')?.context,'Academic writing');
 assert.equal(scenarios.find(s=>s.id==='lecture')?.context,'Seminars');
 for(const s of scenarios){assert.ok(s.academicMove);assert.ok(s.participationNote);assert.ok(s.suggestedStrategy);assert.ok(s.evidenceIds?.length);assert.equal(s.quests.length,3);}
 assert.match(scenarios.find(s=>s.id==='feedback')!.description,/not an essay-writing/);
});
test('demo is deterministic, scenario specific and transparently limited',()=>{
 const s=scenarios[0];assert.equal(demoReply(s,[],'I enjoy learning.'),demoReply(s,[],'I enjoy learning.'));assert.match(demoReply(s,[],'Could you repeat?'),/one step/);
 const f=demoFeedback(s,{id:'test',scenarioId:s.id,mode:'demo',createdAt:'',messages:[{role:'user',content:'Could I share my idea?'}]});assert.match(f.clarity,/scripted/);assert.equal(f.phrases,s.phrases);
});
test('matching transfer context is preserved until a reflection for that scenario',()=>{
 const s=state();s.profile!.contexts=['Seminars','Campus life'];s.practices.push({id:'p',scenarioId:'seminar',messages:[],mode:'demo',createdAt:'2026-11-02T10:00:00Z',finishedAt:'2026-11-02T10:05:00Z'});
 assert.equal(recommendation(s).scenario.id,'seminar');assert.match(recommendation(s).reason,/matching human interaction/);
 s.quests.push({id:'q-other',scenarioId:'office',level:2,title:'Another scenario',acceptedAt:'',status:'reflected'});s.reflections.push(reflection({questId:'q-other',outcome:'attempted'}));
 assert.equal(recommendation(s).scenario.id,'seminar');
 s.quests.push({id:'q-matched',scenarioId:'seminar',level:2,title:'Same scenario',acceptedAt:'',status:'reflected'});s.reflections.push(reflection({questId:'q-matched',outcome:'attempted'}));
 assert.equal(recommendation(s).scenario.id,'campus');
});
test('accepted quest retains its scenario and challenge even if a newer preference exists',()=>{
 const s=state();s.quests.push({id:'q',scenarioId:'office',level:3,title:'Chosen task',acceptedAt:'',status:'accepted'},{id:'q2',scenarioId:'campus',level:1,title:'Later record',acceptedAt:'',status:'reflected'});
 assert.equal(recommendation(s).scenario.id,'office');assert.equal(recommendation(s).level,3);
});
