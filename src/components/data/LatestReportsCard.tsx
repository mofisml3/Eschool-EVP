import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import { t } from '@/i18n';
import { useAsyncData } from '@/hooks/useAsyncData';
import { loadLatestReports } from '@/services/dataService';
import type { LatestReportItem } from '@/data/types';
import { formatDate } from '@/utils/format';
import { ChartCard } from './ChartCard';
import { LoadingState } from './LoadingState';
import { ErrorState } from './ErrorState';

export function LatestReportsCard() {
  const loader = useCallback(() => loadLatestReports(), []);
  const { state, reload } = useAsyncData<LatestReportItem[]>(loader);

  if (state.status === 'loading') {
    return (
      <ChartCard title={t('overview.latestReports.title')}>
        <LoadingState />
      </ChartCard>
    );
  }

  if (state.status === 'error') {
    return (
      <ChartCard title={t('overview.latestReports.title')}>
        <ErrorState onRetry={reload} />
      </ChartCard>
    );
  }

  return <LatestReportsInner reports={state.data} />;
}

function LatestReportsInner({ reports }: { reports: LatestReportItem[] }) {
  return (
    <ChartCard title={t('overview.latestReports.title')}>
      <ul className="flex flex-col">
        {reports.map((r, i) => (
          <li
            key={r.id}
            className={`flex items-start gap-3 py-3 ${
              i < reports.length - 1 ? 'border-b border-ink-100' : ''
            }`}
          >
            <span className="w-9 h-9 rounded-card bg-brand-primary-light text-brand-primary flex items-center justify-center flex-shrink-0">
              <FileText size={16} aria-hidden="true" />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-ink-900 m-0 leading-snug">{r.title}</p>
              <p className="text-xs text-ink-500 m-0 mt-1">
                {formatDate(r.publishedDate)} ·{' '}
                <span dir="ltr">{r.fileSizeMb}</span>{' '}
                {t('overview.latestReports.sizeUnit')}
              </p>
              <button
                type="button"
                className="inline-flex items-center gap-1 mt-2 text-xs text-brand-primary hover:text-brand-primary-dark font-medium"
              >
                <Download size={12} aria-hidden="true" />
                <span>{t('overview.latestReports.download')}</span>
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-3 flex justify-end pt-3 border-t border-ink-100">
        <Link
          to="/portal/reports"
          className="inline-flex items-center gap-1.5 text-sm text-brand-primary hover:text-brand-primary-dark font-medium"
        >
          <span>{t('overview.latestReports.cta')}</span>
          <ArrowLeft size={14} aria-hidden="true" />
        </Link>
      </div>
    </ChartCard>
  );
}
