import { Clock, Repeat } from 'lucide-react';
import { t } from '@/i18n';
import type { SessionPatterns } from '@/data/types';
import { ChartCard } from './ChartCard';

type SessionPatternsCardProps = {
  data: SessionPatterns;
};

export function SessionPatternsCard({ data }: SessionPatternsCardProps) {
  return (
    <ChartCard
      title={t('engagement.sessionPatterns.title')}
      insight={t('engagement.sessionPatterns.insight')}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-brand-primary-light rounded-card p-5 flex flex-col gap-3">
          <Clock
            size={22}
            className="text-brand-primary flex-shrink-0"
            aria-hidden="true"
          />
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-brand-primary leading-none">
              {data.averageSessionMinutes}
            </span>
            <span className="text-base text-ink-500">
              {t('engagement.sessionPatterns.units.minutes')}
            </span>
          </div>
          <p className="text-sm text-ink-700 m-0 leading-snug">
            {t('engagement.sessionPatterns.metrics.duration')}
          </p>
        </div>

        <div className="bg-brand-secondary-light rounded-card p-5 flex flex-col gap-3">
          <Repeat
            size={22}
            className="text-brand-secondary-dark flex-shrink-0"
            aria-hidden="true"
          />
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-brand-secondary-dark leading-none">
              {data.averageSessionsPerLearnerPerWeek.toFixed(1)}
            </span>
            <span className="text-base text-ink-500">
              {t('engagement.sessionPatterns.units.sessions')}
            </span>
          </div>
          <p className="text-sm text-ink-700 m-0 leading-snug">
            {t('engagement.sessionPatterns.metrics.perWeek')}
          </p>
        </div>
      </div>

      <p className="text-xs text-ink-500 mt-3 m-0">
        {t('engagement.sessionPatterns.footnote')}
      </p>
    </ChartCard>
  );
}
