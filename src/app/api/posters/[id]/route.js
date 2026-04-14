import { NextResponse } from 'next/server';
import { deletePoster } from '../../../../lib/db';
import { isAuthenticated } from '../../../../lib/auth';

export async function DELETE(request, { params }) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { id } = await params;
    await deletePoster(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete poster' }, { status: 500 });
  }
}
