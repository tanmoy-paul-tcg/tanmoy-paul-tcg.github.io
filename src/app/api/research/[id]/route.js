import { NextResponse } from 'next/server';
import { updateResearchTopic, deleteResearchTopic } from '../../../../lib/db';
import { isAuthenticated } from '../../../../lib/auth';

export async function PUT(request, { params }) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { id } = await params;
    const data = await request.json();
    await updateResearchTopic(id, data);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update research topic' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { id } = await params;
    await deleteResearchTopic(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete research topic' }, { status: 500 });
  }
}
