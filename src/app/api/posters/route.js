import { NextResponse } from 'next/server';
import { getPosters, addPoster } from '../../../lib/db';
import { isAuthenticated } from '../../../lib/auth';

export async function GET() {
  try {
    const posters = await getPosters();
    return NextResponse.json(posters);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posters' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const data = await request.json();
    const result = await addPoster(data);
    return NextResponse.json({ success: true, id: result.insertedId }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add poster' }, { status: 500 });
  }
}
