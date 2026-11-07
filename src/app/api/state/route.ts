import { z } from 'zod';
import { randomUUID } from 'node:crypto';
import { profileSchema, reflectionSchema, scenarioFor, recommendation, practiceReviewSchema, questPlanSchema, supportPlanSchema, supportPlanUpdateSchema } from '@/lib/domain';
import { readState, mutateState, deleteState } from '@/lib/db';
import { session, clearSession, body, guard, result, failure, exclusive } from '@/lib/server';
import { publicProviderStatus } from '@/lib/provider';
import { aiConfigured, mode } from '@/lib/ai';
export const runtime='nodejs';
export async function GET() {try{const id=await session();const state=readState(id);return result({state,provider:publicProviderStatus(),configured:aiConfigured(),mode:mode(state.profile),recommendation:recommendation(state)});}catch(e){return failure(e);}}
export async function POST(request:Request) {
 try {
  const data=await body(request);const id=await session();
  return await exclusive(id,async()=>{
   mutateState(id,state=>{
    if(data.action==='profile') {const p=profileSchema.parse(data.profile);state.baseline??={confidence:state.profile?.confidence??p.confidence,at:new Date().toISOString(),source:state.profile?'legacy':'onboarding'};state.profile=p;return;}
    if(!state.profile) throw new Error('Please set up your learning profile first.');
    if(data.action==='savePhrase') {const {phrase}=z.object({phrase:z.string().trim().min(1).max(160)}).parse(data);state.savedPhrases=[...new Set([...(state.savedPhrases??[]),phrase])].slice(-100);return;}
    if(data.action==='removePhrase') {const {phrase}=z.object({phrase:z.string().max(160)}).parse(data);state.savedPhrases=state.savedPhrases?.filter(x=>x!==phrase);return;}
    if(data.action==='reviewPractice') {
     const {practiceId,review}=z.object({practiceId:z.string().uuid(),review:practiceReviewSchema}).parse(data);
     const practice=state.practices.find(p=>p.id===practiceId);if(!practice?.finishedAt)throw new Error('Finish this practice before saving your self-review.');practice.selfReview=review;return;
    }
    if(data.action==='supportPlan') {const plan=supportPlanSchema.parse(data.plan);if(plan.status!=='planned'||plan.useful)throw new Error('Start with a planned request; record contact and usefulness afterwards.');(state.supportPlans??=[]).push({...plan,id:randomUUID(),createdAt:new Date().toISOString()});return;}
    if(data.action==='updateSupportPlan') {const update=supportPlanUpdateSchema.parse(data.plan);const target=state.supportPlans?.find(p=>p.id===update.id);if(!target)throw new Error('Support plan not found.');if(update.useful&&update.status!=='followed-up')throw new Error('Rate usefulness only after a follow-up.');target.status=update.status;if(update.nextAction!==undefined)target.nextAction=update.nextAction;if(update.status==='followed-up'&&update.useful)target.useful=update.useful;else delete target.useful;return;}
    if(data.action==='accept') {
     const {scenarioId,level,plan}=z.object({plan:questPlanSchema.optional(),scenarioId:z.string(),level:z.union([z.literal(1),z.literal(2),z.literal(3)])}).parse(data);
     const s=scenarioFor(scenarioId);
     if(state.quests.some(q=>q.status==='accepted')) throw new Error('Reflect on your current quest before accepting another.');
     state.quests.push({...(plan?{plan}:{}),id:randomUUID(),scenarioId,level,title:s.quests[level-1],acceptedAt:new Date().toISOString(),status:'accepted'});return;
    }
    if(data.action==='reflect') {
     const parsed=reflectionSchema.parse(data.reflection);if(parsed.barrier==='chosen-listening'&&parsed.outcome!=='not-yet')throw new Error('For a listening-only choice, select Not yet. Use attempted or completed for an actual spoken interaction.');const quest=state.quests.find(q=>q.id===parsed.questId);
     if(!quest||quest.status!=='accepted') throw new Error('This quest is not awaiting a reflection.');
     state.reflections.push({...parsed,id:randomUUID(),createdAt:new Date().toISOString()});quest.status='reflected';return;
    }
    throw new Error('Unknown action');
   });
   return result({ok:true});
  });
 }catch(e){return failure(e);}
}
export async function DELETE(request:Request) {try{guard(request);const id=await session();return await exclusive(id,async()=>{deleteState(id);await clearSession();return result({ok:true});});}catch(e){return failure(e);}}
