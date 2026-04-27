import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
import type { KpiTile as KpiTileData } from '@/data/types';

type KpiTileProps = {
  data: KpiTileData;
};

const trendStyles = {
  up: { Icon: ArrowUp, color: 'text-brand-secondary-dark', sign: '+' },
  down: { Icon: ArrowDown, color: 'text-state-danger', sign: '−' },
  flat: { Icon: Minus, color: 'text-ink-500', sign: '' },
} as const;

export function KpiTile({ data }: KpiTileProps) {
  const { displayValue, unit, label, trend } = data;
  const { Icon: TrendIcon, color, sign } = trendStyles[trend.direction];

  const trendText =
    trend.direction === 'flat'
      ? trend.vsLabel ?? ''
      : `${sign}${trend.deltaPercent}٪${trend.vsLabel ? ` ${trend.vsLabel}` : ''}`;

  return (
    <div
      className="bg-white rounded-card-lg shadow-card p-5 flex flex-col gap-3 min-h-[170px] hover:shadow-card-hover transition-shadow"
      role="group"
      aria-label={label}
    >
      <div className="flex items-baseline gap-2 flex-wrap">
        <span className="text-3xl md:text-4xl font-bold text-brand-primary leading-none">
          {displayValue}
        </span>
        <span className="text-sm text-ink-500">{unit}</span>
      </div>

      <p className="text-sm text-ink-700 m-0 leading-snug font-medium">{label}</p>

      <div className={`mt-auto flex items-center gap-1.5 text-xs ${color}`}>
        <TrendIcon size={14} aria-hidden="true" />
        <span>{trendText}</span>
      </div>
    </div>
  );
}
