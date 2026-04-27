import { t } from '@/i18n';
import type { PerformanceBand } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: PerformanceBand[] };

const bandColor: Record<PerformanceBand['bandId'], string> = {
  excellent: '#558E54',
  'very-good': '#71B36E',
  good: '#08798C',
  acceptable: '#C58A2A',
  'did-not-pass': '#B0432F',
};

export function PerformanceDistributionCard({ data }: Props) {
  return (
    <ChartCard
      title={t('assessments.distribution.title')}
      insight={t('assessments.distribution.insight')}
    >
      {/* Stacked horizontal bar */}
      <div
        className="w-full h-8 rounded-full overflow-hidden flex"
        role="img"
        aria-label={t('assessments.distribution.title')}
      >
        {data.map((b) => (
          <div
            key={b.bandId}
            style={{
              width: `${b.sharePercent}%`,
              backgroundColor: bandColor[b.bandId],
            }}
            title={`${b.label}: ${b.sharePercent}٪`}
          />
        ))}
      </div>

      {/* Legend / breakdown */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-5">
        {data.map((b) => (
          <li key={b.bandId} className="flex items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-2 min-w-0">
              <span
                className="inline-block w-3 h-3 rounded-sm flex-shrink-0"
                style={{ backgroundColor: bandColor[b.bandId] }}
                aria-hidden="true"
              />
              <span className="text-ink-700 truncate">{b.label}</span>
            </div>
            <span
              className="font-semibold tabular-nums text-ink-900"
              dir="ltr"
            >
              {b.sharePercent}٪
            </span>
          </li>
        ))}
      </ul>
    </ChartCard>
  );
}
