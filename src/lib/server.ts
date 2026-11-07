import { cookies } from 'next/headers';
import { randomUUID } from 'node:crypto';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { AppError } from './errors';
const cookieName='speakup-session';
export async function session() {
 const jar=await cookies();let id=jar.get(cookieName)?.value;
 if(!id||!z.uuid().safeParse(id).success) {id=randomUUID();jar.set(cookieName,id,{httpOnly:true,sameSite:'strict',secure:process.env.NODE_ENV==='production'&&process.env.SPEAKUP_HTTPS==='true',maxAge:30*86400,path:'/'});}
 return id;
}
export async function clearSession() { (await cookies()).delete(cookieName); }
export function guard(request:Request) {
 const origin=request.headers.get('origin');
 if(origin) {
  const actual=new URL(origin);
  const host=request.headers.get('host')||new URL(request.url).host;
  const protocol=request.headers.get('x-forwarded-proto')||new URL(request.url).protocol.replace(':','');
  if(actual.host!==host||actual.protocol!==protocol+':') throw new Error('Cross-origin request rejected');
 }
}
export async function body(request:Request) {
 guard(request);
 const raw=await request.text();if(raw.length>16000) throw new Error('Request is too large');
 return JSON.parse(raw);
}
export function result(data:unknown,status=200) {return NextResponse.json(data,{status,headers:{'Cache-Control':'no-store'}});}
export function failure(error:unknown) {
 const message=error instanceof z.ZodError?'Please check the form fields.':error instanceof Error?error.message:'Something went wrong. Please try again.';
 return result({error:message,code:error instanceof AppError?error.code:'invalid_request'},error instanceof AppError?error.status:/provider|configured|timeout/i.test(message)?502:400);
}
const busy=new Set<string>();
const rates=new Map<string,{at:number;n:number}>();
export async function exclusive<T>(id:string,work:()=>Promise<T>):Promise<T> {
 if(busy.has(id)) throw new Error('A response is already being prepared. Please wait.');
 const prior=rates.get(id);const now=Date.now();
 if(prior&&now-prior.at<60000&&prior.n>=20) throw new Error('Please pause for a minute before sending more requests.');
 rates.set(id,prior&&now-prior.at<60000?{at:prior.at,n:prior.n+1}:{at:now,n:1});
 if(rates.size>10000) for(const [k,v] of rates) if(now-v.at>60000) rates.delete(k);
 busy.add(id);try{return await work();}finally{busy.delete(id);}
}
