import { t } from '@/i18n';
import type { Milestone } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: Milestone[] };

export function MilestonesTimelineCard({ data }: Props) {
  // Sort ascending by year so the timeline reads chronologically
  const sorted = [...data].sort((a, b) => a.year - b.year);
  const currentYear = Math.max(...sorted.map((m) => m.year));

  return (
    <ChartCard
      title={t('impact.milestones.title')}
      insight={t('impact.milestones.insight')}
    >
      <ol className="relative">
        {/* Vertical line behind the dots */}
        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 w-0.5 bg-ink-200"
          style={{ insetInlineStart: '14px' }}
        />
        {sorted.map((m) => {
          const isCurrent = m.year === currentYear;
          return (
            <li key={m.year} className="relative flex items-start gap-4 pb-5 last:pb-0">
              <span
                className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                  isCurrent
                    ? 'bg-brand-primary text-white'
                    : 'bg-white border-2 border-ink-200 text-ink-700'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-current" />
              </span>
              <div className="flex-1 min-w-0 pt-0.5">
                <p
                  className={`text-sm font-semibold m-0 ${
                    isCurrent ? 'text-brand-primary' : 'text-ink-700'
                  }`}
                  dir="ltr"
                  style={{ textAlign: 'start' }}
                >
                  {m.year}
                </p>
                <p className="text-sm text-ink-900 m-0 mt-0.5 leading-snug">
                  {m.title}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </ChartCard>
  );
}
