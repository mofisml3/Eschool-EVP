import { MapPin } from 'lucide-react';
import { t } from '@/i18n';
import type { TeachersRegionEntry } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: TeachersRegionEntry[] };

export function TeachersRegionalCard({ data }: Props) {
  const max = Math.max(...data.map((d) => d.teachersCount), 1);
  return (
    <ChartCard
      title={t('teachers.regional.title')}
      insight={t('teachers.regional.insight')}
    >
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {data.map((r) => {
          const widthPct = (r.teachersCount / max) * 100;
          return (
            <li
              key={r.regionId}
              className="bg-ink-100 rounded-card p-3 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <MapPin
                  size={14}
                  className="text-brand-primary flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-sm text-ink-900 flex-1 truncate">{r.name}</span>
                <span
                  className="text-xs font-semibold text-brand-primary tabular-nums"
                  dir="ltr"
                >
                  {r.teachersCount.toLocaleString('en-US')}
                </span>
              </div>
              <div className="h-1.5 bg-white rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-primary rounded-full"
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
