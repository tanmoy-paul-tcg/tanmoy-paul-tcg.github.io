import { NextResponse } from 'next/server';
import { isAuthenticated } from '../../../lib/auth';
import { uploadToImgBB } from '../../../lib/imgbb';

export async function POST(request) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await uploadToImgBB(buffer, file.name);

    return NextResponse.json({ 
      success: true, 
      url: result.url,
      deleteHash: result.deleteUrl // passing deleteUrl instead for imgbb
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
  }
}
