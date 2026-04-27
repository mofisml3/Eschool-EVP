import type { KpiTile as KpiTileData } from '@/data/types';
import { KpiTile } from './KpiTile';

type KpiGridProps = {
  kpis: KpiTileData[];
};

/**
 * 6 hero KPIs lay out as: 1col on mobile → 2col sm → 3col md → 6col xl.
 * Lower-count rows still tile cleanly because of CSS Grid auto-flow.
 */
export function KpiGrid({ kpis }: KpiGridProps) {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
      {kpis.map((kpi) => (
        <KpiTile key={kpi.id} data={kpi} />
      ))}
    </div>
  );
}
