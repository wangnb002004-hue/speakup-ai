import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
export function GET() {
  return NextResponse.json({ app: 'speakup-ai', version: '1.0.0', status: 'ok' }, { headers: { 'Cache-Control': 'no-store' } });
}
