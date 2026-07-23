import { NextResponse } from 'next/server';
import { getSiteTheme, updateSiteTheme } from '../../../lib/db';
import { isAuthenticated } from '../../../lib/auth';

// GET - public, returns current theme
export async function GET() {
  try {
    const theme = await getSiteTheme();
    return NextResponse.json({ theme });
  } catch (error) {
    return NextResponse.json({ theme: 'classic' });
  }
}

// PUT - admin only, updates theme
export async function PUT(request) {
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { theme } = await request.json();
    if (!['classic', 'modern', 'glassy'].includes(theme)) {
      return NextResponse.json({ error: 'Invalid theme' }, { status: 400 });
    }
    await updateSiteTheme(theme);
    return NextResponse.json({ success: true, theme });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update theme' }, { status: 500 });
  }
}
