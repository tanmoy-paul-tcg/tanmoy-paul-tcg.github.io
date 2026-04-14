import { NextResponse } from 'next/server';
import { getResearchTopics, addResearchTopic } from '../../../lib/db';
import { isAuthenticated } from '../../../lib/auth';

export async function GET() {
  try {
    const topics = await getResearchTopics();
    return NextResponse.json(topics);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch research topics' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const data = await request.json();
    const result = await addResearchTopic(data);
    return NextResponse.json({ success: true, id: result.insertedId }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add research topic' }, { status: 500 });
  }
}
