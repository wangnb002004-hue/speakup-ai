interface SpeakUpRecognition {
 lang:string; continuous:boolean; interimResults:boolean;
 onresult:((event:{results:{[index:number]:{[index:number]:{transcript:string}}}})=>void)|null;
 onerror:((event:{error:string})=>void)|null;
 onend:(()=>void)|null;
 start():void;stop():void;abort():void;
}
interface Window { SpeechRecognition?:new()=>SpeakUpRecognition; webkitSpeechRecognition?:new()=>SpeakUpRecognition; }
