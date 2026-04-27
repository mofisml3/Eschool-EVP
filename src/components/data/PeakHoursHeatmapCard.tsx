import { useCallback, useMemo, useState } from 'react';
import { t } from '@/i18n';
import { useAsyncData } from '@/hooks/useAsyncData';
import { loadEngagementHeatmap } from '@/services/dataService';
import type { HeatmapPayload } from '@/data/types';
import { ChartCard } from './ChartCard';
import { LoadingState } from './LoadingState';
import { ErrorState } from './ErrorState';

export function PeakHoursHeatmapCard() {
  const loader = useCallback(() => loadEngagementHeatmap(), []);
  const { state, reload } = useAsyncData<HeatmapPayload>(loader);

  if (state.status === 'loading') {
    return (
      <ChartCard title={t('engagement.peakHours.title')}>
        <LoadingState />
      </ChartCard>
    );
  }
  if (state.status === 'error') {
    return (
      <ChartCard title={t('engagement.peakHours.title')}>
        <ErrorState onRetry={reload} />
      </ChartCard>
    );
  }
  return <PeakHoursHeatmapInner data={state.data} />;
}

type HoverCell = { weekday: string; hour: string; intensity: number };

function PeakHoursHeatmapInner({ data }: { data: HeatmapPayload }) {
  const cellByKey = useMemo(() => {
    const map = new Map<string, number>();
    for (const c of data.matrix) map.set(`${c.weekday}|${c.hour}`, c.intensity);
    return map;
  }, [data.matrix]);

  const [hover, setHover] = useState<HoverCell | null>(null);

  function intensityLabel(intensity: number): string {
    if (intensity < 0.34) return t('engagement.peakHours.legend.low');
    if (intensity < 0.67) return t('engagement.peakHours.legend.medium');
    return t('engagement.peakHours.legend.high');
  }

  return (
    <ChartCard
      title={t('engagement.peakHours.title')}
      insight={t('engagement.peakHours.insight')}
      source={t('engagement.peakHours.source')}
    >
      <div className="overflow-x-auto" onMouseLeave={() => setHover(null)}>
        <div className="inline-block min-w-full" dir="ltr">
          {/* Hour header row (LTR for the time axis) */}
          <div className="flex items-center pl-16">
            {data.hourBuckets.map((h, i) => (
              <div
                key={h}
                className="flex-1 min-w-[18px] text-center text-[10px] text-ink-500"
              >
                {i % 3 === 0 ? h : ''}
              </div>
            ))}
          </div>

          {/* Rows */}
          {data.weekdayOrder.map((weekday) => (
            <div key={weekday} className="flex items-center mt-1">
              <div className="w-16 text-xs text-ink-700 text-end pe-2 flex-shrink-0">
                {weekday}
              </div>
              <div className="flex flex-1 gap-[2px]">
                {data.hourBuckets.map((hour) => {
                  const intensity = cellByKey.get(`${weekday}|${hour}`) ?? 0;
                  const opacity = 0.06 + intensity * 0.94;
                  const isHover =
                    hover && hover.weekday === weekday && hover.hour === hour;
                  return (
                    <div
                      key={hour}
                      onMouseEnter={() =>
                        setHover({ weekday, hour, intensity })
                      }
                      className="flex-1 min-w-[12px] h-6 rounded-sm cursor-default"
                      style={{
                        backgroundColor: '#08798C',
                        opacity,
                        outline: isHover
                          ? '2px solid #04576A'
                          : '1px solid rgba(255,255,255,0.6)',
                        outlineOffset: '-1px',
                      }}
                      aria-label={`${weekday} ${hour}:00 — ${intensityLabel(intensity)}`}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tooltip strip (replaces floating tooltip — works better in a constrained-width card) */}
      <div className="mt-3 min-h-[1.5rem] text-xs text-ink-700">
        {hover ? (
          <p className="m-0" dir="rtl">
            <span className="font-semibold text-brand-primary">
              {hover.weekday}
            </span>
            {' · '}
            <span dir="ltr">{hover.hour}:00</span>
            {' · '}
            <span className="font-medium">{intensityLabel(hover.intensity)}</span>
          </p>
        ) : (
          <p className="m-0 text-ink-500">
            {t('engagement.peakHours.axes.hour')} ×{' '}
            {t('engagement.peakHours.axes.weekday')}
          </p>
        )}
      </div>

      {/* Legend */}
      <ul className="flex flex-wrap items-center gap-4 mt-3 text-xs text-ink-700">
        {[
          { label: t('engagement.peakHours.legend.low'), opacity: 0.15 },
          { label: t('engagement.peakHours.legend.medium'), opacity: 0.5 },
          { label: t('engagement.peakHours.legend.high'), opacity: 0.95 },
        ].map((l) => (
          <li key={l.label} className="inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-block w-3 h-3 rounded-sm flex-shrink-0"
              style={{ backgroundColor: '#08798C', opacity: l.opacity }}
            />
            <span>{l.label}</span>
          </li>
        ))}
      </ul>
    </ChartCard>
  );
}
