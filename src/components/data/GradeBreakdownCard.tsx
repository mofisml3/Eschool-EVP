import { t } from '@/i18n';
import type { GradeBreakdownEntry } from '@/data/types';
import { ChartCard } from './ChartCard';

type GradeBreakdownCardProps = {
  data: GradeBreakdownEntry[];
};

const stageColor: Record<GradeBreakdownEntry['stageId'], string> = {
  primary: '#A5B5BB',
  middle: '#08798C',
  secondary: '#71B36E',
};

export function GradeBreakdownCard({ data }: GradeBreakdownCardProps) {
  const max = Math.max(...data.map((d) => d.activeLearners), 1);

  return (
    <ChartCard
      title={t('engagement.grades.title')}
      insight={t('engagement.grades.insight')}
    >
      <ul className="flex flex-col gap-4">
        {data.map((g) => {
          const widthPct = (g.activeLearners / max) * 100;
          return (
            <li key={g.gradeId} className="flex flex-col gap-2">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-sm font-semibold text-ink-900">
                  {g.label}
                </span>
                <span className="text-xs text-ink-500">
                  <span dir="ltr" className="font-semibold text-brand-primary">
                    {g.activeLearners.toLocaleString('en-US')}
                  </span>{' '}
                  {t('engagement.grades.unit')} ·{' '}
                  <span dir="ltr">{g.sharePercent.toFixed(1)}٪</span>
                </span>
              </div>
              <div
                className="h-3 bg-ink-100 rounded-full overflow-hidden"
                role="meter"
                aria-valuenow={g.activeLearners}
                aria-valuemin={0}
                aria-valuemax={max}
                aria-label={`${g.label}: ${g.activeLearners.toLocaleString('en-US')}`}
              >
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${widthPct}%`,
                    backgroundColor: stageColor[g.stageId],
                  }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </ChartCard>
  );
}
