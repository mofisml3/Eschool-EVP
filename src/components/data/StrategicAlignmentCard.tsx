import { Link } from 'react-router-dom';
import { ArrowLeft, Globe2, Target } from 'lucide-react';
import { t } from '@/i18n';
import { ChartCard } from './ChartCard';

type AlignmentData = {
  sdg4TargetsCovered: number;
  sdg4TargetsTotal: number;
  nationalStrategyPillarsAligned: number;
};

export function StrategicAlignmentCard({ data }: { data: AlignmentData }) {
  return (
    <ChartCard
      title={t('overview.alignment.title')}
      insight={t('overview.alignment.insight')}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* SDG 4 */}
        <div className="bg-brand-primary-light rounded-card p-5 flex flex-col gap-3">
          <Globe2
            size={22}
            className="text-brand-primary flex-shrink-0"
            aria-hidden="true"
          />
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-brand-primary leading-none">
              {data.sdg4TargetsCovered}
            </span>
            <span className="text-base text-ink-500">
              {t('overview.alignment.outOf')} {data.sdg4TargetsTotal}
            </span>
          </div>
          <p className="text-sm text-ink-700 m-0 leading-snug">
            {t('overview.alignment.sdg4Label')}
          </p>
        </div>

        {/* National strategy pillars */}
        <div className="bg-brand-secondary-light rounded-card p-5 flex flex-col gap-3">
          <Target
            size={22}
            className="text-brand-secondary-dark flex-shrink-0"
            aria-hidden="true"
          />
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-brand-secondary-dark leading-none">
              {data.nationalStrategyPillarsAligned}
            </span>
            <span className="text-base text-ink-500">
              {t('overview.alignment.pillars')}
            </span>
          </div>
          <p className="text-sm text-ink-700 m-0 leading-snug">
            {t('overview.alignment.nationalStrategyLabel')}
          </p>
        </div>
      </div>

      <div className="mt-5 flex justify-end">
        <Link
          to="/portal/impact"
          className="inline-flex items-center gap-1.5 text-sm text-brand-primary hover:text-brand-primary-dark font-medium"
        >
          <span>{t('overview.alignment.cta')}</span>
          <ArrowLeft size={14} aria-hidden="true" />
        </Link>
      </div>
    </ChartCard>
  );
}
