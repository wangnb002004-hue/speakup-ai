import { z } from 'zod';
import { scenarioFor } from '@/lib/domain';
import { readState, mutateState } from '@/lib/db';
import { session, body, result, failure, exclusive } from '@/lib/server';
import { feedback, mode } from '@/lib/ai';
export const runtime='nodejs';
export async function POST(request:Request) {
 try{const {practiceId}=z.object({practiceId:z.string().uuid()}).parse(await body(request));const id=await session();
 return await exclusive(id,async()=>{
  const state=readState(id);const p=state.practices.find(p=>p.id===practiceId);
  if(!p) throw new Error('Practice not found.');
  if(p.feedback) return result({practice:p});
  if(!p.messages.some(m=>m.role==='user')) throw new Error('Try at least one reply before requesting feedback.');
  if(mode(state.profile)==='demo') p.mode='demo';
  const f=await feedback(scenarioFor(p.scenarioId),p);
  mutateState(id,current=>{const target=current.practices.find(x=>x.id===p.id);if(!target) throw new Error('Practice not found.');target.feedback=f.feedback;if(f.receipt)(target.receipts??=[]).push(f.receipt);target.mode=p.mode;target.finishedAt=new Date().toISOString();});
  return result({practice:readState(id).practices.find(x=>x.id===p.id)});
 });}catch(e){return failure(e);}
}
