import { t } from '@/i18n';
import type { StrategyPillar } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: StrategyPillar[] };

export function StrategyPillarsCard({ data }: Props) {
  return (
    <ChartCard
      title={t('impact.nationalStrategy.title')}
      insight={t('impact.nationalStrategy.insight')}
    >
      <ul className="flex flex-col gap-3">
        {data.map((p, i) => (
          <li
            key={p.id}
            className="bg-brand-primary-light rounded-card p-4 flex items-start gap-3"
          >
            <span
              className="w-8 h-8 rounded-full bg-white text-brand-primary text-sm font-bold flex items-center justify-center flex-shrink-0"
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-brand-primary m-0 leading-snug">
                {p.title}
              </p>
              <p className="text-xs text-ink-700 m-0 mt-1 leading-relaxed">
                {p.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </ChartCard>
  );
}
