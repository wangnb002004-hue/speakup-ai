import { completion } from '@/lib/ai';
import { body, session, exclusive, result, failure } from '@/lib/server';
export const runtime='nodejs';
export async function POST(request:Request) {
 try{await body(request);const id=await session();return await exclusive(id,async()=>{const response=await completion([{role:'user',content:'Reply with exactly READY.'}],{purpose:'connection',signal:request.signal});return result({ok:true,receipt:response.receipt});});}catch(error){return failure(error);}
}
