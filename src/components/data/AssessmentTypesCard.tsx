import { t } from '@/i18n';
import type { AssessmentType } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: AssessmentType[] };

export function AssessmentTypesCard({ data }: Props) {
  const max = Math.max(...data.map((d) => d.count), 1);
  return (
    <ChartCard
      title={t('assessments.types.title')}
      insight={t('assessments.types.insight')}
    >
      <ul className="flex flex-col gap-3">
        {data.map((a) => {
          const widthPct = (a.count / max) * 100;
          return (
            <li key={a.typeId} className="flex flex-col gap-1.5">
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="text-ink-700">{a.label}</span>
                <span className="text-xs">
                  <span dir="ltr" className="font-semibold text-brand-primary">
                    {a.count.toLocaleString('en-US')}
                  </span>{' '}
                  <span className="text-ink-500">
                    {t('assessments.types.unit')} ·{' '}
                    <span dir="ltr">{a.sharePercent}٪</span>
                  </span>
                </span>
              </div>
              <div
                className="h-3 bg-ink-100 rounded-full overflow-hidden"
                role="meter"
                aria-valuenow={a.count}
                aria-valuemin={0}
                aria-valuemax={max}
                aria-label={`${a.label}: ${a.count.toLocaleString('en-US')}`}
              >
                <div
                  className="h-full bg-brand-primary rounded-full transition-all duration-500"
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
