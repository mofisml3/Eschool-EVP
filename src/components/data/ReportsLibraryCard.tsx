import { Download, FileText } from 'lucide-react';
import { t } from '@/i18n';
import type { ReportItem } from '@/data/types';
import { formatDate } from '@/utils/format';
import { ChartCard } from './ChartCard';

type Props = { reports: ReportItem[] };

export function ReportsLibraryCard({ reports }: Props) {
  if (reports.length === 0) {
    return (
      <ChartCard title={t('reports.library.title')}>
        <p className="text-sm text-ink-500 text-center py-10 m-0">
          {t('reports.library.empty')}
        </p>
      </ChartCard>
    );
  }

  return (
    <ChartCard
      title={t('reports.library.title')}
      insight={t('reports.library.insight')}
    >
      <ul className="flex flex-col">
        {reports.map((r, i) => (
          <li
            key={r.id}
            className={`flex items-start gap-3 py-4 ${
              i < reports.length - 1 ? 'border-b border-ink-100' : ''
            }`}
          >
            <span className="w-10 h-10 rounded-card bg-brand-primary-light text-brand-primary flex items-center justify-center flex-shrink-0">
              <FileText size={18} aria-hidden="true" />
            </span>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-ink-900 m-0 leading-snug">
                {r.title}
              </h4>
              <p className="text-xs text-ink-700 m-0 mt-1 leading-relaxed">
                {r.abstract}
              </p>
              <p className="text-xs text-ink-500 m-0 mt-2">
                <span className="inline-block bg-ink-100 text-ink-700 px-2 py-0.5 rounded-full me-2">
                  {r.categoryLabel}
                </span>
                <span>{formatDate(r.publishedDate)}</span>
                {' · '}
                <span dir="ltr">{r.fileSizeMb}</span>{' '}
                {t('reports.fields.sizeUnit')}
                {' · '}
                <span>{r.format}</span>
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-xs text-brand-primary hover:text-brand-primary-dark font-medium px-3 py-1.5 rounded-card hover:bg-brand-primary-light transition-colors flex-shrink-0"
            >
              <Download size={14} aria-hidden="true" />
              <span>{t('reports.actions.download')}</span>
            </button>
          </li>
        ))}
      </ul>
    </ChartCard>
  );
}
