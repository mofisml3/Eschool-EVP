import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import {
  getSession as readStoredSession,
  logout as authLogout,
  type Session,
} from '@/services/authService';

export type { Session } from '@/services/authService';

type SessionContextValue = {
  session: Session | null;
  isAuthenticated: boolean;
  login: (session: Session) => void;
  logout: () => Promise<void>;
};

const SessionContext = createContext<SessionContextValue | undefined>(undefined);

export function SessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(() => readStoredSession());

  // Re-check expiry once per minute. If it lapses while the tab is
  // open, clear the session and let ProtectedRoute bounce back to login.
  useEffect(() => {
    if (!session) return;
    const interval = window.setInterval(() => {
      const fresh = readStoredSession();
      if (!fresh) {
        setSession(null);
      }
    }, 60_000);
    return () => window.clearInterval(interval);
  }, [session]);

  const login = useCallback((s: Session) => setSession(s), []);

  const logout = useCallback(async () => {
    await authLogout();
    setSession(null);
  }, []);

  return (
    <SessionContext.Provider
      value={{
        session,
        isAuthenticated: session !== null,
        login,
        logout,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export function useSession(): SessionContextValue {
  const ctx = useContext(SessionContext);
  if (!ctx) {
    throw new Error('useSession must be used within <SessionProvider>');
  }
  return ctx;
}
