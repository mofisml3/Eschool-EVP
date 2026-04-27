import { Globe2 } from 'lucide-react';
import { t } from '@/i18n';
import type { ImpactInternational } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: ImpactInternational };

export function InternationalPositioningCard({ data }: Props) {
  return (
    <ChartCard
      title={t('impact.international.title')}
      insight={t('impact.international.insight')}
    >
      <div className="bg-brand-primary-light rounded-card p-5 flex items-start gap-4">
        <span className="w-12 h-12 rounded-full bg-white text-brand-primary flex items-center justify-center flex-shrink-0">
          <Globe2 size={22} aria-hidden="true" />
        </span>
        <div className="flex-1 min-w-0 flex flex-col gap-3">
          <p className="text-base font-semibold text-brand-primary m-0 leading-snug">
            {data.regionalRanking}
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-xs text-ink-500 m-0">
              {t('impact.international.frameworksLabel')}
            </p>
            <ul className="flex flex-wrap gap-2">
              {data.frameworksAligned.map((f) => (
                <li
                  key={f}
                  className="text-xs bg-white text-ink-700 px-2 py-1 rounded-full border border-ink-200"
                  dir="ltr"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-ink-500 m-0">
            {t('impact.international.referenceLabel')} {data.referenceReport}
          </p>
        </div>
      </div>
    </ChartCard>
  );
}
