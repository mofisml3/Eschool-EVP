import { useLocation } from 'react-router-dom';
import { Wrench } from 'lucide-react';
import { t } from '@/i18n';
import { PortalLayout } from '@/components/shell/PortalLayout';

const titleKeyByPath: Record<string, string> = {
  '/portal/engagement': 'shell.nav.engagement',
  '/portal/content/videos': 'shell.nav.videos',
  '/portal/content/experiments': 'shell.nav.experiments',
  '/portal/academics/teachers': 'shell.nav.teachers',
  '/portal/academics/assessments': 'shell.nav.assessments',
  '/portal/care': 'shell.nav.care',
  '/portal/impact': 'shell.nav.impact',
  '/portal/reports': 'shell.nav.reports',
  '/portal/about': 'shell.nav.about',
};

export function ComingSoonPage() {
  const { pathname } = useLocation();
  const titleKey = titleKeyByPath[pathname] ?? 'shell.nav.overview';
  const pageTitle = t(titleKey);

  return (
    <PortalLayout pageTitle={pageTitle}>
      <div className="bg-white rounded-card-lg shadow-card p-10 md:p-14 max-w-2xl mx-auto mt-4 flex flex-col items-center text-center gap-4">
        <div className="w-14 h-14 rounded-full bg-brand-primary-light flex items-center justify-center text-brand-primary">
          <Wrench size={24} aria-hidden="true" />
        </div>
        <h2 className="text-2xl font-semibold text-brand-primary m-0">
          {pageTitle}
        </h2>
        <p className="text-ink-700 m-0 max-w-md leading-relaxed">
          هذه الوحدة قيد البناء وفق خطة الإصدار التدريجي. سيتم تفعيلها في
          المراحل القادمة من تطوير البوابة.
        </p>
      </div>
    </PortalLayout>
  );
}
