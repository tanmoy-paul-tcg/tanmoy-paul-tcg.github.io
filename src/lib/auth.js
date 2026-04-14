import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-change-me';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin';
const COOKIE_NAME = 'admin_token';

// Hash the password from env on first use
let hashedPassword = null;

async function getHashedPassword() {
  if (!hashedPassword) {
    hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);
  }
  return hashedPassword;
}

export async function verifyPassword(inputPassword) {
  // Direct comparison since we store plaintext in env
  return inputPassword === ADMIN_PASSWORD;
}

export function createToken() {
  return jwt.sign(
    { role: 'admin', iat: Math.floor(Date.now() / 1000) },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

export async function getTokenFromCookies() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME);
  return token?.value || null;
}

export async function isAuthenticated() {
  const token = await getTokenFromCookies();
  if (!token) return false;
  return verifyToken(token) !== null;
}

export { COOKIE_NAME };
