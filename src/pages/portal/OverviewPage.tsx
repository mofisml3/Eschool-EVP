import { useNavigate } from 'react-router-dom';
import { t } from '@/i18n';
import { useSession } from '@/contexts/SessionContext';

/**
 * Placeholder for the Executive Overview. Real KPIs, map, charts,
 * and the narrative-arc CTA arrive in C9 and following commits.
 * This commit only verifies that ProtectedRoute gates this page.
 */
export function OverviewPage() {
  const { session, logout } = useSession();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-ink-200 px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-brand-primary m-0">
          {t('shell.nav.overview')}
        </h1>
        <button
          onClick={handleLogout}
          className="text-sm text-ink-700 hover:text-brand-primary transition-colors"
        >
          {t('shell.topBar.session.logout')}
        </button>
      </header>

      <section className="p-6 max-w-3xl">
        <p className="text-ink-700">
          المستخدم الحالي: <span className="font-medium">{session?.username}</span>
        </p>
        <p className="text-ink-500 text-sm mt-2">
          صفحة مؤقتة — تُبنى اللوحة التنفيذية الكاملة في المراحل C9 وما بعدها
          (المؤشرات الكبرى، الخريطة الوطنية، اتجاه الحضور، الإتقان حسب المادة،
          لمحة الدعم، التقارير، ودعوة الانتقال السردي).
        </p>
      </section>
    </main>
  );
}
