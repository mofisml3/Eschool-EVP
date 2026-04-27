import { t } from '@/i18n';
import type { ExperimentsStageEntry } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: ExperimentsStageEntry[] };

const stageColor: Record<ExperimentsStageEntry['stageId'], string> = {
  primary: '#A5B5BB',
  middle: '#08798C',
  secondary: '#71B36E',
};

export function ExperimentsStageCard({ data }: Props) {
  const max = Math.max(...data.map((d) => d.experimentsCount), 1);

  return (
    <ChartCard
      title={t('experiments.stages.title')}
      insight={t('experiments.stages.insight')}
    >
      <ul className="flex flex-col gap-4">
        {data.map((s) => {
          const widthPct = (s.experimentsCount / max) * 100;
          return (
            <li key={s.stageId} className="flex flex-col gap-2">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-sm font-semibold text-ink-900">
                  {s.label}
                </span>
                <span className="text-xs text-ink-500">
                  <span dir="ltr" className="font-semibold text-brand-primary">
                    {s.experimentsCount.toLocaleString('en-US')}
                  </span>{' '}
                  {t('experiments.stages.unit')}
                </span>
              </div>
              <div
                className="h-3 bg-ink-100 rounded-full overflow-hidden"
                role="meter"
                aria-valuenow={s.experimentsCount}
                aria-valuemin={0}
                aria-valuemax={max}
                aria-label={`${s.label}: ${s.experimentsCount.toLocaleString('en-US')}`}
              >
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${widthPct}%`,
                    backgroundColor: stageColor[s.stageId],
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
