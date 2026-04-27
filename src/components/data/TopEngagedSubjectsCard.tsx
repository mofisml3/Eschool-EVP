import { t } from '@/i18n';
import type { TopEngagedSubject } from '@/data/types';
import { ChartCard } from './ChartCard';

type TopEngagedSubjectsCardProps = {
  data: TopEngagedSubject[];
};

export function TopEngagedSubjectsCard({ data }: TopEngagedSubjectsCardProps) {
  const max = Math.max(...data.map((s) => s.engagedLearners), 1);

  return (
    <ChartCard
      title={t('engagement.topSubjects.title')}
      insight={t('engagement.topSubjects.insight')}
    >
      <ul className="flex flex-col gap-3">
        {data.map((s, i) => {
          const widthPct = (s.engagedLearners / max) * 100;
          return (
            <li key={s.subjectId} className="flex items-center gap-3 text-sm">
              <span
                aria-hidden="true"
                className="w-6 h-6 rounded-full bg-brand-primary-light text-brand-primary text-xs font-semibold flex items-center justify-center flex-shrink-0"
              >
                {i + 1}
              </span>
              <span className="w-28 md:w-32 flex-shrink-0 text-ink-700 truncate">
                {s.name}
              </span>
              <div
                className="flex-1 h-5 bg-ink-100 rounded-full overflow-hidden"
                role="meter"
                aria-valuenow={s.engagedLearners}
                aria-valuemin={0}
                aria-valuemax={max}
                aria-label={`${s.name}: ${s.engagedLearners.toLocaleString('en-US')}`}
              >
                <div
                  className="h-full bg-brand-secondary rounded-full transition-all duration-500"
                  style={{ width: `${widthPct}%` }}
                />
              </div>
              <span
                className="w-20 text-end font-semibold text-brand-primary text-xs tabular-nums"
                dir="ltr"
                style={{ textAlign: 'end' }}
              >
                {s.engagedLearners.toLocaleString('en-US')}
              </span>
            </li>
          );
        })}
      </ul>
    </ChartCard>
  );
}
