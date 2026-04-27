import { ArrowLeft } from 'lucide-react';
import { t } from '@/i18n';
import type { RoadmapItem } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: RoadmapItem[] };

export function RoadmapCard({ data }: Props) {
  return (
    <ChartCard title={t('impact.roadmap.title')} insight={t('impact.roadmap.insight')}>
      <ul className="flex flex-col gap-3">
        {data.map((r) => (
          <li
            key={r.id}
            className="flex items-start gap-3 p-3 bg-brand-secondary-light rounded-card"
          >
            <span
              className="text-brand-secondary-dark flex-shrink-0 mt-0.5"
              aria-hidden="true"
            >
              <ArrowLeft size={16} />
            </span>
            <p className="text-sm text-ink-900 m-0 leading-snug">{r.title}</p>
          </li>
        ))}
      </ul>
      <p className="text-xs text-ink-500 mt-3 m-0">
        {t('impact.roadmap.footnote')}
      </p>
    </ChartCard>
  );
}
