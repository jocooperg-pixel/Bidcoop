import { NextResponse } from 'next/server';
import { SESSION_COOKIE_NAME } from '../../../utils/session';

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE_NAME, '', { httpOnly: true, maxAge: 0, path: '/' });
  return response;
}
