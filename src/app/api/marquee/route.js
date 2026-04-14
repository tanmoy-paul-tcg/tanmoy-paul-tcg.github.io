import { NextResponse } from 'next/server';
import { getMarquee, updateMarquee } from '../../../lib/db';
import { isAuthenticated } from '../../../lib/auth';

export async function GET() {
  try {
    const marquee = await getMarquee();
    return NextResponse.json(marquee || { text: '', link: '' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch marquee' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const data = await request.json();
    await updateMarquee(data);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update marquee' }, { status: 500 });
  }
}
