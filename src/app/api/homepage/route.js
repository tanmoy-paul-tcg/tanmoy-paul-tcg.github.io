import { NextResponse } from 'next/server';
import { getHomepage, updateHomepage } from '../../../lib/db';
import { isAuthenticated } from '../../../lib/auth';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const homepage = await getHomepage();
    return NextResponse.json(homepage || {}, {
      headers: { 'Cache-Control': 'no-store, max-age=0' },
    });
  } catch (error) {
    console.error('GET /api/homepage error:', error);
    return NextResponse.json({ error: 'Failed to fetch homepage data' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    await updateHomepage(data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('PUT /api/homepage error:', error);
    return NextResponse.json({ error: 'Failed to update homepage data' }, { status: 500 });
  }
}
