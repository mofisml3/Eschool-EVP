import { t } from '@/i18n';
import { useSession } from '@/contexts/SessionContext';
import { PortalLayout } from '@/components/shell/PortalLayout';

/**
 * Real KPI tiles, map, charts, and the narrative-arc CTA arrive
 * in C9 and following commits. This commit only verifies that the
 * authenticated chrome (TopBar / Sidebar / Footer) wraps cleanly
 * around the page content.
 */
export function OverviewPage() {
  const { session } = useSession();

  return (
    <PortalLayout pageTitle={t('shell.nav.overview')}>
      <section className="bg-white rounded-card-lg shadow-card p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-brand-primary m-0">
          المؤشرات الوطنية الكبرى لمشروع المدرسة الإلكترونية
        </h2>
        <p className="text-ink-700 mt-2 m-0">
          عرضٌ موجز للأداء الوطني والتغطية الجغرافية ومخرجات التعلّم وأثر المشروع.
        </p>

        <div className="mt-6 pt-6 border-t border-ink-200 text-sm text-ink-500">
          <p className="m-0">
            المستخدم الحالي:{' '}
            <span className="text-ink-900 font-medium">{session?.username}</span>
          </p>
          <p className="mt-2 m-0 leading-relaxed">
            بطاقات المؤشرات، الخريطة الوطنية، اتجاه الحضور، الإتقان حسب المادة،
            لمحة الدعم، والتقارير — كل هذه تُبنى في المراحل C9 وما بعدها.
          </p>
        </div>
      </section>
    </PortalLayout>
  );
}
