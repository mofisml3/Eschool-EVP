import { useNavigate } from 'react-router-dom';
import { t } from '@/i18n';
import { useSession } from '@/contexts/SessionContext';

/**
 * Placeholder login surface. Real form, validation, and auth service
 * arrive in C5 / C6. This commit only verifies the routing + session
 * wiring works end-to-end.
 */
export function LoginPage() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useSession();

  function devLogin() {
    login({
      username: 'demo',
      issuedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
    });
    navigate('/portal/overview');
  }

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center gap-4 p-6 text-center">
      <div className="h-1 w-24 rounded-full bg-gradient-to-l from-brand-secondary to-brand-primary" />
      <h1 className="text-3xl md:text-4xl font-semibold text-brand-primary m-0">
        {t('login.heroLine1')}
      </h1>
      <p className="text-ink-700 m-0 text-base md:text-lg max-w-xl">
        {t('login.welcomeSubtitle')}
      </p>

      <button
        onClick={devLogin}
        className="mt-6 px-6 py-3 bg-brand-primary text-white rounded-card font-medium hover:bg-brand-primary-dark transition-colors"
      >
        {t('login.submit.idle')}
        <span className="ms-2 text-xs opacity-70">(مؤقت — C5)</span>
      </button>

      {isAuthenticated && (
        <p className="text-brand-secondary-dark text-sm mt-2">
          الجلسة نشطة. الانتقال إلى اللوحة التنفيذية…
        </p>
      )}

      <p className="text-ink-500 text-xs mt-4 max-w-md">
        نموذج التسجيل الكامل، التحقق من الحقول، وحالات الخطأ تُضاف في المرحلة C5.
      </p>
    </main>
  );
}
