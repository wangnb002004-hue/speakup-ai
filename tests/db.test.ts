import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync,rmSync } from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
const dir=mkdtempSync(join(tmpdir(),'speakup-test-'));process.env.SPEAKUP_DB_PATH=join(dir,'test.sqlite');
const {readState,mutateState,deleteState}=await import('../src/lib/db');
test('session isolation, atomic rollback, durable round-trip and deletion',()=>{
 mutateState('one',s=>{s.quests.push({id:'q',scenarioId:'seminar',level:1,title:'Ask',acceptedAt:'now',status:'accepted'});});
 assert.equal(readState('one').quests.length,1);assert.equal(readState('two').quests.length,0);
 assert.throws(()=>mutateState('one',s=>{s.quests=[];throw new Error('rollback');}));assert.equal(readState('one').quests.length,1);
 deleteState('one');assert.equal(readState('one').quests.length,0);rmSync(dir,{recursive:true,force:true});
});
