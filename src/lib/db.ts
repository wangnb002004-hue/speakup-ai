import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { emptyState, type State } from './domain';
let database:DatabaseSync|undefined;
function db() {
 if(!database) {
  const path=process.env.SPEAKUP_DB_PATH||resolve('data/speakup.sqlite');
  mkdirSync(dirname(path),{recursive:true,mode:0o700});
  database=new DatabaseSync(path);
  database.exec('PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000; CREATE TABLE IF NOT EXISTS sessions (id TEXT PRIMARY KEY, state TEXT NOT NULL, updated_at TEXT NOT NULL);');
  database.prepare('DELETE FROM sessions WHERE updated_at < ?').run(new Date(Date.now()-30*86400000).toISOString());
 }
 return database;
}
export function readState(id:string):State {
 const row=db().prepare('SELECT state, updated_at FROM sessions WHERE id=?').get(id) as {state:string;updated_at:string}|undefined;
 if(!row) return emptyState();
 const state:State=JSON.parse(row.state);
 if(state.profile&&!state.baseline) state.baseline={confidence:state.profile.confidence,at:row.updated_at,source:'legacy'};
 return state;
}
export function saveState(id:string,state:State) {
 db().prepare('INSERT INTO sessions(id,state,updated_at) VALUES(?,?,?) ON CONFLICT(id) DO UPDATE SET state=excluded.state,updated_at=excluded.updated_at').run(id,JSON.stringify(state),new Date().toISOString());
}
export function deleteState(id:string) {
 db().prepare('DELETE FROM sessions WHERE id=?').run(id);
 // Checkpoint clears deleted text from WAL; VACUUM reclaims deleted pages.
 db().exec('PRAGMA wal_checkpoint(TRUNCATE); VACUUM;');
}
// Never keep a SQLite transaction open across an external provider call.
export function mutateState<T>(id:string, fn:(state:State)=>T):T {
 const database=db(); database.exec('BEGIN IMMEDIATE');
 try {const state=readState(id);const result=fn(state);saveState(id,state);database.exec('COMMIT');return result;}
 catch(error) {database.exec('ROLLBACK');throw error;}
}
