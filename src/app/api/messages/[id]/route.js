import { NextResponse } from 'next/server';
import { deleteMessage } from '../../../../lib/db';
import { isAuthenticated } from '../../../../lib/auth';

export async function DELETE(request, { params }) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { id } = await params;
    await deleteMessage(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`DELETE /api/messages/${params?.id} error:`, error);
    return NextResponse.json({ error: 'Failed to delete message' }, { status: 500 });
  }
}
