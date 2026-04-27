import { Globe, School, TrendingDown, Heart } from 'lucide-react';
import { t } from '@/i18n';
import type { ImpactEquity } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: ImpactEquity };

export function ImpactEquityCard({ data }: Props) {
  const items = [
    {
      Icon: Globe,
      value: `${data.regionsCoveredPercent}٪`,
      label: t('impact.equity.regions'),
    },
    {
      Icon: School,
      value: data.schoolsReached.toLocaleString('en-US'),
      label: t('impact.equity.schools'),
    },
    {
      Icon: TrendingDown,
      value: `${data.urbanRuralGapReductionPercent}٪`,
      label: t('impact.equity.gap'),
    },
    {
      Icon: Heart,
      value: data.specialNeedsLearnersSupported.toLocaleString('en-US'),
      label: t('impact.equity.specialNeeds'),
    },
  ];
  return (
    <ChartCard title={t('impact.equity.title')} insight={t('impact.equity.insight')}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <div
            key={i}
            className="bg-brand-primary-light rounded-card p-4 flex flex-col gap-2"
          >
            <span className="w-9 h-9 rounded-full bg-white text-brand-primary flex items-center justify-center">
              <it.Icon size={16} aria-hidden="true" />
            </span>
            <p
              className="text-2xl md:text-3xl font-bold text-brand-primary m-0 leading-none"
              dir="ltr"
              style={{ textAlign: 'start' }}
            >
              {it.value}
            </p>
            <p className="text-xs text-ink-700 m-0 leading-snug">{it.label}</p>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}
