/**
 * Mock authentication service for the MVP. The portal is a static SPA
 * with no backend, so credentials are inlined at build time via Vite
 * env vars. This is acceptable for a single-credential demo gate but
 * is NOT cryptographic security — anyone who downloads the bundle
 * can read the credentials.
 *
 * Phase 2 replaces this module with a real backend call. The exported
 * shape (authenticate / logout / getSession + the AuthResult union)
 * is stable, so the LoginPage and SessionContext do not change.
 */

export type Session = {
  username: string;
  issuedAt: string;
  expiresAt: string;
};

export type AuthFailureReason =
  | 'invalid-credentials'
  | 'rate-limited'
  | 'locked'
  | 'network'
  | 'server';

export type AuthResult =
  | { ok: true; session: Session }
  | { ok: false; reason: AuthFailureReason };

const STORAGE_KEY = 'evp:session';

const SESSION_TTL_MIN = Number(
  import.meta.env.VITE_SESSION_TTL_MINUTES ?? 60,
);
const AUTH_USERNAME = String(import.meta.env.VITE_AUTH_USERNAME ?? 'demo');
const AUTH_PASSWORD = String(import.meta.env.VITE_AUTH_PASSWORD ?? 'demo1234');

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_ATTEMPTS = 5;

let recentAttempts: number[] = [];

export async function authenticate(
  username: string,
  password: string,
): Promise<AuthResult> {
  await delay(600); // simulated network round-trip

  const now = Date.now();
  recentAttempts = recentAttempts.filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );

  if (recentAttempts.length >= RATE_LIMIT_MAX_ATTEMPTS) {
    return { ok: false, reason: 'rate-limited' };
  }

  if (username !== AUTH_USERNAME || password !== AUTH_PASSWORD) {
    recentAttempts.push(now);
    return { ok: false, reason: 'invalid-credentials' };
  }

  recentAttempts = [];
  const session: Session = {
    username: username.trim(),
    issuedAt: new Date(now).toISOString(),
    expiresAt: new Date(now + SESSION_TTL_MIN * 60_000).toISOString(),
  };
  saveSession(session);
  return { ok: true, session };
}

export async function logout(): Promise<void> {
  clearSession();
}

export function getSession(): Session | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw) as Session;
    if (!session?.expiresAt) {
      clearSession();
      return null;
    }
    if (new Date(session.expiresAt).getTime() <= Date.now()) {
      clearSession();
      return null;
    }
    return session;
  } catch {
    clearSession();
    return null;
  }
}

function saveSession(session: Session): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  } catch {
    // localStorage unavailable (private mode, etc.) — fail silently;
    // session will live in-memory for the tab only.
  }
}

function clearSession(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // see saveSession
  }
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
