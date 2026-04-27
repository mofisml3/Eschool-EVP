import { Download, FileText } from 'lucide-react';
import { t } from '@/i18n';
import type { ReportItem } from '@/data/types';
import { formatDate } from '@/utils/format';
import { ChartCard } from './ChartCard';

type Props = { reports: ReportItem[] };

export function FeaturedReportsCard({ reports }: Props) {
  return (
    <ChartCard
      title={t('reports.featured.title')}
      insight={t('reports.featured.insight')}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reports.map((r) => (
          <article
            key={r.id}
            className="bg-white border border-ink-200 rounded-card-lg overflow-hidden hover:shadow-card-hover transition-shadow flex flex-col"
          >
            <div
              className="aspect-[4/3] flex items-center justify-center text-white"
              style={{
                background: 'linear-gradient(135deg, #08798C 0%, #04576A 100%)',
              }}
            >
              <FileText size={42} strokeWidth={1.4} aria-hidden="true" />
            </div>
            <div className="p-4 flex flex-col flex-1 gap-2">
              <h4 className="text-sm font-semibold text-ink-900 m-0 leading-snug">
                {r.title}
              </h4>
              <p className="text-xs text-ink-500 m-0">
                {r.categoryLabel} · {formatDate(r.publishedDate)}
              </p>
              <div className="flex items-center justify-between mt-auto pt-2">
                <span className="text-xs text-ink-500">
                  <span dir="ltr">{r.fileSizeMb}</span>{' '}
                  {t('reports.fields.sizeUnit')}
                </span>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs text-brand-primary hover:text-brand-primary-dark font-medium"
                >
                  <Download size={12} aria-hidden="true" />
                  <span>{t('reports.actions.download')}</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </ChartCard>
  );
}
