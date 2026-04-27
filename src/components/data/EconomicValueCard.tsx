import { TrendingDown, Coins, Gift } from 'lucide-react';
import { t } from '@/i18n';
import type { ImpactEconomicValue } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: ImpactEconomicValue };

export function EconomicValueCard({ data }: Props) {
  return (
    <ChartCard
      title={t('impact.economic.title')}
      insight={t('impact.economic.insight')}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-brand-secondary-light rounded-card p-5 flex flex-col gap-2 items-start">
          <TrendingDown
            size={22}
            className="text-brand-secondary-dark"
            aria-hidden="true"
          />
          <p
            className="text-3xl font-bold text-brand-secondary-dark m-0 leading-none"
            dir="ltr"
          >
            −{data.perLearnerCostReductionPercent}٪
          </p>
          <p className="text-xs text-ink-700 m-0 leading-snug">
            {t('impact.economic.costReduction')}
          </p>
        </div>

        <div className="bg-brand-primary-light rounded-card p-5 flex flex-col gap-2 items-start">
          <Coins size={22} className="text-brand-primary" aria-hidden="true" />
          <p
            className="text-3xl font-bold text-brand-primary m-0 leading-none"
            dir="ltr"
          >
            {data.costPerContentAccessIqd}{' '}
            <span className="text-sm font-normal text-ink-500">
              {t('impact.economic.currency')}
            </span>
          </p>
          <p className="text-xs text-ink-700 m-0 leading-snug">
            {t('impact.economic.perAccess')}
          </p>
        </div>

        <div className="bg-ink-100 rounded-card p-5 flex flex-col gap-2 items-start">
          <Gift size={22} className="text-ink-700" aria-hidden="true" />
          <p
            className="text-3xl font-bold text-ink-900 m-0 leading-none"
            dir="ltr"
          >
            {data.freeContentHoursAvailable.toLocaleString('en-US')}
          </p>
          <p className="text-xs text-ink-700 m-0 leading-snug">
            {t('impact.economic.freeHours')}
          </p>
        </div>
      </div>

      <p className="text-xs text-ink-500 mt-3 m-0">
        {t('impact.economic.footnote')}
      </p>
    </ChartCard>
  );
}
