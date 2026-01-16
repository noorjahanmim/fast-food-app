import { cookies } from 'next/headers';

export const MOCK_USER = {
  email: 'admin@fastfood.com',
  password: 'admin123'
};

export async function setAuthCookie(email: string) {
  const cookieStore = await cookies();
  cookieStore.set('user-email', email, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/'
  });
}

export async function getAuthCookie() {
  const cookieStore = await cookies();
  return cookieStore.get('user-email')?.value;
}

export async function removeAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete('user-email');
}

export async function isAuthenticated() {
  const email = await getAuthCookie();
  return !!email;
}
