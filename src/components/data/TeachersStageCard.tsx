import { t } from '@/i18n';
import type { TeachersStageEntry } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: TeachersStageEntry[] };

const stageColor: Record<TeachersStageEntry['stageId'], string> = {
  primary: '#A5B5BB',
  middle: '#08798C',
  secondary: '#71B36E',
};

export function TeachersStageCard({ data }: Props) {
  const max = Math.max(...data.map((d) => d.teachersCount), 1);
  return (
    <ChartCard
      title={t('teachers.stages.title')}
      insight={t('teachers.stages.insight')}
    >
      <ul className="flex flex-col gap-4">
        {data.map((s) => {
          const widthPct = (s.teachersCount / max) * 100;
          return (
            <li key={s.stageId} className="flex flex-col gap-2">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-sm font-semibold text-ink-900">{s.label}</span>
                <span className="text-xs text-ink-500">
                  <span dir="ltr" className="font-semibold text-brand-primary">
                    {s.teachersCount.toLocaleString('en-US')}
                  </span>{' '}
                  {t('teachers.stages.unit')}
                </span>
              </div>
              <div
                className="h-3 bg-ink-100 rounded-full overflow-hidden"
                role="meter"
                aria-valuenow={s.teachersCount}
                aria-valuemin={0}
                aria-valuemax={max}
                aria-label={`${s.label}: ${s.teachersCount.toLocaleString('en-US')}`}
              >
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${widthPct}%`, backgroundColor: stageColor[s.stageId] }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </ChartCard>
  );
}
