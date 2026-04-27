import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, LogOut, UserCircle2 } from 'lucide-react';
import { t } from '@/i18n';
import { useSession } from '@/contexts/SessionContext';

export function SessionMenu() {
  const [open, setOpen] = useState(false);
  const { session, logout } = useSession();
  const navigate = useNavigate();

  if (!session) return null;

  async function handleLogout() {
    setOpen(false);
    await logout();
    navigate('/');
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-2 text-sm text-ink-700 hover:text-brand-primary transition-colors px-2 py-1.5 rounded-card hover:bg-ink-100"
      >
        <UserCircle2 size={20} aria-hidden="true" />
        <span className="hidden md:inline">{session.username}</span>
        <ChevronDown size={14} aria-hidden="true" />
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label={t('shell.buttons.close')}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-10 cursor-default"
            tabIndex={-1}
          />
          <div
            role="menu"
            className="absolute end-0 mt-2 w-72 bg-white rounded-card shadow-card-hover border border-ink-200 z-20 overflow-hidden"
          >
            <div className="px-4 py-3 border-b border-ink-200">
              <p className="text-xs text-ink-500 m-0">
                {t('shell.topBar.session.lastLogin')}
              </p>
              <p className="text-sm text-ink-900 m-0 mt-1" dir="ltr" style={{ textAlign: 'start' }}>
                {formatLastLogin(session.issuedAt)}
              </p>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              role="menuitem"
              className="w-full px-4 py-3 text-sm text-ink-900 hover:bg-ink-100 transition-colors flex items-center gap-3 text-start"
            >
              <LogOut size={16} aria-hidden="true" />
              <span>{t('shell.topBar.session.logout')}</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function formatLastLogin(iso: string): string {
  const date = new Date(iso);
  const dateFormatter = new Intl.DateTimeFormat('ar-IQ-u-nu-latn-ca-gregory', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const timeFormatter = new Intl.DateTimeFormat('ar-IQ-u-nu-latn-ca-gregory', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  return `${dateFormatter.format(date)} — ${timeFormatter.format(date)}`;
}
