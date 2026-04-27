import { t } from '@/i18n';
import type { TeachersSubjectEntry } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: TeachersSubjectEntry[] };

export function TeachersSubjectsCard({ data }: Props) {
  const max = Math.max(...data.map((d) => d.teachersCount), 1);

  return (
    <ChartCard
      title={t('teachers.subjects.title')}
      insight={t('teachers.subjects.insight')}
    >
      <ul className="flex flex-col gap-2.5">
        {data.map((s) => {
          const widthPct = (s.teachersCount / max) * 100;
          return (
            <li key={s.subjectId} className="flex items-center gap-3 text-sm">
              <span className="w-28 md:w-36 flex-shrink-0 text-ink-700 truncate">
                {s.name}
              </span>
              <div
                className="flex-1 h-5 bg-ink-100 rounded-full overflow-hidden"
                role="meter"
                aria-valuenow={s.teachersCount}
                aria-valuemin={0}
                aria-valuemax={max}
                aria-label={`${s.name}: ${s.teachersCount.toLocaleString('en-US')}`}
              >
                <div
                  className="h-full bg-brand-secondary rounded-full transition-all duration-500"
                  style={{ width: `${widthPct}%` }}
                />
              </div>
              <span
                className="w-16 text-end font-semibold text-brand-primary text-xs tabular-nums"
                dir="ltr"
                style={{ textAlign: 'end' }}
              >
                {s.teachersCount.toLocaleString('en-US')}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="text-xs text-ink-500 mt-3 m-0">{t('teachers.subjects.footnote')}</p>
    </ChartCard>
  );
}
