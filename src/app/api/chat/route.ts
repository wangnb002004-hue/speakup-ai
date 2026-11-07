import { z } from 'zod';
import { randomUUID } from 'node:crypto';
import { scenarioFor, practiceStyles, practicePlanSchema, type Practice } from '@/lib/domain';
import { readState, mutateState } from '@/lib/db';
import { session, body, result, failure, exclusive } from '@/lib/server';
import { chat, mode } from '@/lib/ai';
export const runtime='nodejs';
const schema=z.object({practiceId:z.string().uuid().optional(),scenarioId:z.string(),message:z.string().trim().min(1).max(1200).optional(),action:z.enum(['start','message']),style:z.enum(practiceStyles).optional(),parentPracticeId:z.string().uuid().optional(),requestId:z.string().uuid().optional(),plan:practicePlanSchema.optional(),stream:z.boolean().optional()});
export async function POST(request:Request) {
 try {
  const input=schema.parse(await body(request));const id=await session();
  const work=async(onDelta?:(text:string)=>void,signal=request.signal)=>exclusive(id,async()=>{
   const state=readState(id);if(!state.profile)throw new Error('Please set up your learning profile first.');
   const s=scenarioFor(input.scenarioId);
   if(input.action==='start') {
    if(input.parentPracticeId&&!state.practices.some(p=>p.id===input.parentPracticeId&&p.finishedAt&&p.scenarioId===s.id))throw new Error('Choose a completed practice to rehearse again.');
    const parent=state.practices.find(p=>p.id===input.parentPracticeId);
    const rehearsalFocus=parent?.feedback?.evidence?.map(e=>`${e.rewrite} (${e.reason})`).join(' ').slice(0,1800);
    const p:Practice={...(input.plan?{plan:input.plan}:{}),...(rehearsalFocus?{rehearsalFocus}:{}),id:randomUUID(),scenarioId:s.id,messages:[{role:'assistant',content:s.opener}],createdAt:new Date().toISOString(),mode:mode(state.profile),style:input.style||state.profile.practiceStyle||'guided',...(state.profile.remoteConsent&&state.profile.aiConsentVersion===2?{goal:state.profile.goal}:{}),...(input.parentPracticeId?{parentPracticeId:input.parentPracticeId}:{})};
    mutateState(id,current=>{current.practices.push(p);});return p;
   }
   const p=state.practices.find(p=>p.id===input.practiceId&&p.scenarioId===s.id);
   if(!p)throw new Error('Please start an active practice first.');
   if(!input.message)throw new Error('Please write a message.');
   const previous=input.requestId&&p.requests?.find(r=>r.id===input.requestId);
   if(previous){if(previous.content!==input.message)throw new Error('This retry belongs to a different message. Send the edited message as a new request.');return p;}
   if(p.finishedAt)throw new Error('This practice is finished. Rehearse again to continue.');
   if(p.messages.filter(m=>m.role==='user').length>=20)throw new Error('This practice has reached 20 turns. Finish to receive feedback.');
   if(mode(state.profile)==='demo')p.mode='demo';
   const reply=await chat(s,p,input.message,{onDelta,signal});
   if(signal.aborted)throw new Error('Reply stopped. Your draft is kept.');
   mutateState(id,current=>{const target=current.practices.find(x=>x.id===p.id);if(!target||target.finishedAt)throw new Error('Practice is no longer active.');target.mode=p.mode;target.messages.push({role:'user',content:input.message!},{role:'assistant',content:reply.text});if(reply.receipt)(target.receipts??=[]).push(reply.receipt);if(input.requestId)(target.requests??=[]).push({id:input.requestId,content:input.message!});});
   return readState(id).practices.find(x=>x.id===p.id)!;
  });
  if(!input.stream||input.action==='start')return result({practice:await work()});
  const abort=new AbortController();const signal=AbortSignal.any([request.signal,abort.signal]);let closed=false;
  const stream=new ReadableStream<Uint8Array>({start(controller){const emit=(value:unknown)=>{if(!closed&&!signal.aborted)controller.enqueue(new TextEncoder().encode(JSON.stringify(value)+'\n'));};void work(text=>emit({type:'delta',text}),signal).then(practice=>emit({type:'done',practice})).catch(async error=>{const detail=await failure(error).json();emit({type:'error',message:detail.error,code:detail.code});}).finally(()=>{if(!closed){closed=true;controller.close();}});},cancel(){closed=true;abort.abort();}});
  return new Response(stream,{headers:{'Content-Type':'application/x-ndjson; charset=utf-8','Cache-Control':'no-store','X-Accel-Buffering':'no'}});
 }catch(error){return failure(error);}
}
