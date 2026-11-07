import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseEnv } from 'node:util';
import { AppError } from './errors';

export function providerConfig() {
  let file:Record<string,string|undefined>={};
  try {file=parseEnv(readFileSync(/* turbopackIgnore: true */ process.env.SPEAKUP_CONFIG_FILE||resolve('.env.local'),'utf8'));}catch{/* Environment-only configuration is also supported. */}
  const value=(name:string,fallback='')=>process.env[name]?.trim()||file[name]?.trim()||fallback;
  const key=value('LLM_API_KEY');
  const url=value('LLM_API_URL','https://api.deepseek.com/chat/completions');
  const model=value('LLM_MODEL','deepseek-v4-pro');
  const provider=value('LLM_PROVIDER',url.includes('api.deepseek.com')?'deepseek':'compatible');
  const number=(name:string,fallback:number,min:number,max:number)=>{const n=Number(value(name,String(fallback)));return Number.isFinite(n)?Math.max(min,Math.min(max,Math.round(n))):fallback;};
  return {key,url,model,provider,demo:value('SPEAKUP_DEMO','false')==='true',configured:!!key&&!/your[_ -]?key|paste|replace|<|>/i.test(key),chatTokens:number('LLM_CHAT_MAX_TOKENS',400,128,2048),feedbackTokens:number('LLM_FEEDBACK_MAX_TOKENS',1800,800,4096),chatTimeout:number('LLM_CHAT_TIMEOUT_MS',30000,5000,90000),feedbackTimeout:number('LLM_FEEDBACK_TIMEOUT_MS',60000,10000,120000)};
}
export function publicProviderStatus() {
  const c=providerConfig();
  return {provider:c.provider,model:c.model,keyConfigured:c.configured,forcedDemo:c.demo,status:!c.configured?'missing_key':c.demo?'demo_only':'ready'};
}
export function assertProviderEndpoint(url:string,provider:string) {
  let parsed:URL;
  try{parsed=new URL(url);}catch{throw new AppError('The AI endpoint is not a valid URL. Check the server configuration.','configuration',502);}
  if(parsed.protocol!=='https:'||parsed.username||parsed.password) throw new AppError('AI provider endpoint must use HTTPS without credentials in the URL.','configuration',502);
  if(provider==='deepseek'&&parsed.hostname!=='api.deepseek.com') throw new AppError('The DeepSeek key can only be sent to api.deepseek.com. Check the server endpoint.','configuration',502);
}
