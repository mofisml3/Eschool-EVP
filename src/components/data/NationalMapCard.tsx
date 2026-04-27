import { useCallback, useMemo, useState, type MouseEvent } from 'react';
import { geoMercator, geoPath } from 'd3-geo';
import { t } from '@/i18n';
import { useAsyncData } from '@/hooks/useAsyncData';
import {
  loadIraqMap,
  loadRegions,
  type IraqMap,
} from '@/services/dataService';
import type { CoverageLevel, RegionFootprint } from '@/data/types';
import { ChartCard } from './ChartCard';
import { LoadingState } from './LoadingState';
import { ErrorState } from './ErrorState';

const VIEW_W = 800;
const VIEW_H = 640;

const coverageStyles: Record<CoverageLevel, { fill: string; label: string }> = {
  'كاملة': { fill: '#08798C', label: 'تغطية كاملة' },
  'مرتفعة': { fill: '#71B36E', label: 'تغطية مرتفعة' },
  'متوسطة': { fill: '#A5B5BB', label: 'تغطية متوسطة' },
};

type CardData = { regions: RegionFootprint[]; geojson: IraqMap };

export function NationalMapCard() {
  const loader = useCallback(async (): Promise<CardData> => {
    const [regions, geojson] = await Promise.all([loadRegions(), loadIraqMap()]);
    return { regions, geojson };
  }, []);

  const { state, reload } = useAsyncData<CardData>(loader);

  if (state.status === 'loading') {
    return (
      <ChartCard title={t('overview.map.title')}>
        <LoadingState />
      </ChartCard>
    );
  }

  if (state.status === 'error') {
    return (
      <ChartCard title={t('overview.map.title')}>
        <ErrorState onRetry={reload} />
      </ChartCard>
    );
  }

  return <NationalMapInner regions={state.data.regions} geojson={state.data.geojson} />;
}

function NationalMapInner({ regions, geojson }: CardData) {
  const pathFor = useMemo(() => {
    const projection = geoMercator().fitSize([VIEW_W, VIEW_H], geojson);
    return geoPath(projection);
  }, [geojson]);

  const regionsById = useMemo(() => {
    const map = new Map<string, RegionFootprint>();
    for (const r of regions) map.set(r.id, r);
    return map;
  }, [regions]);

  const usedCoverages = useMemo<CoverageLevel[]>(() => {
    const order: CoverageLevel[] = ['كاملة', 'مرتفعة', 'متوسطة'];
    const present = new Set(regions.map((r) => r.coverage));
    return order.filter((c) => present.has(c));
  }, [regions]);

  const [hover, setHover] = useState<{
    region: RegionFootprint;
    x: number;
    y: number;
  } | null>(null);

  function trackHover(e: MouseEvent<SVGElement>, region: RegionFootprint) {
    const svg = e.currentTarget.ownerSVGElement;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    setHover({
      region,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <ChartCard
      title={t('overview.map.title')}
      insight={t('overview.map.insight')}
      source={t('overview.map.source')}
    >
      <div className="relative" onMouseLeave={() => setHover(null)}>
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          className="w-full h-auto"
          role="img"
          aria-label={t('overview.map.title')}
        >
          <g>
            {geojson.features.map((feature) => {
              const region = regionsById.get(feature.properties.regionId);
              if (!region) return null;
              const fill = coverageStyles[region.coverage].fill;
              const isOther = hover !== null && hover.region.id !== region.id;
              return (
                <path
                  key={region.id}
                  d={pathFor(feature) ?? ''}
                  fill={fill}
                  fillOpacity={isOther ? 0.55 : 1}
                  stroke="#ffffff"
                  strokeWidth={1.2}
                  tabIndex={0}
                  aria-label={region.name}
                  onMouseEnter={(e) => trackHover(e, region)}
                  onMouseMove={(e) => trackHover(e, region)}
                  style={{
                    cursor: 'default',
                    transition: 'fill-opacity 150ms',
                  }}
                />
              );
            })}
          </g>
        </svg>

        {hover && (
          <div
            role="tooltip"
            className="absolute pointer-events-none bg-white shadow-card-hover rounded-card border border-ink-200 px-3 py-2 text-sm z-10"
            style={{
              top: hover.y + 14,
              insetInlineStart: hover.x + 14,
              minWidth: 220,
            }}
          >
            <p className="font-semibold text-brand-primary m-0">
              {hover.region.name}
            </p>
            <p className="text-xs text-ink-700 m-0 mt-1">
              <span dir="ltr">{hover.region.learners.toLocaleString('en-US')}</span>{' '}
              {t('overview.map.tooltipLearners')}
              {' · '}
              <span dir="ltr">{hover.region.schools.toLocaleString('en-US')}</span>{' '}
              {t('overview.map.tooltipSchools')}
            </p>
            <p className="text-xs text-ink-700 m-0 mt-0.5">
              {t('overview.map.tooltipMastery')}{' '}
              <span dir="ltr">{hover.region.masteryPercent}٪</span>
              {' · '}
              {coverageStyles[hover.region.coverage].label}
            </p>
          </div>
        )}
      </div>

      <ul className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-xs text-ink-700">
        {usedCoverages.map((c) => (
          <li key={c} className="inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-block w-3 h-3 rounded-sm flex-shrink-0"
              style={{ backgroundColor: coverageStyles[c].fill }}
            />
            <span>{coverageStyles[c].label}</span>
          </li>
        ))}
      </ul>
    </ChartCard>
  );
}
