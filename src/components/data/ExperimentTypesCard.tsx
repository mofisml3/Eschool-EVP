import { t } from '@/i18n';
import type { ExperimentTypeEntry } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: ExperimentTypeEntry[] };

export function ExperimentTypesCard({ data }: Props) {
  const max = Math.max(...data.map((d) => d.experimentsCount), 1);

  return (
    <ChartCard
      title={t('experiments.types.title')}
      insight={t('experiments.types.insight')}
    >
      <ul className="flex flex-col gap-3">
        {data.map((row) => {
          const widthPct = (row.experimentsCount / max) * 100;
          return (
            <li key={row.typeId} className="flex flex-col gap-1.5">
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="text-ink-700">{row.label}</span>
                <span className="text-xs">
                  <span dir="ltr" className="font-semibold text-brand-primary">
                    {row.experimentsCount.toLocaleString('en-US')}
                  </span>{' '}
                  <span className="text-ink-500">{t('experiments.types.unit')}</span>
                </span>
              </div>
              <div
                className="h-3 bg-ink-100 rounded-full overflow-hidden"
                role="meter"
                aria-valuenow={row.experimentsCount}
                aria-valuemin={0}
                aria-valuemax={max}
                aria-label={`${row.label}: ${row.experimentsCount.toLocaleString('en-US')}`}
              >
                <div
                  className="h-full bg-brand-secondary rounded-full transition-all duration-500"
                  style={{ width: `${widthPct}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </ChartCard>
  );
}
