import { ListChecks } from 'lucide-react';
import { t } from '@/i18n';
import type { CurriculumCoverage } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: CurriculumCoverage };

export function CurriculumCoverageCard({ data }: Props) {
  return (
    <ChartCard
      title={t('assessments.coverage.title')}
      insight={t('assessments.coverage.insight')}
    >
      <div className="bg-brand-primary-light rounded-card p-6 flex items-center gap-4">
        <span className="w-14 h-14 rounded-full bg-white text-brand-primary flex items-center justify-center flex-shrink-0">
          <ListChecks size={26} aria-hidden="true" />
        </span>
        <div className="flex-1 min-w-0">
          <p
            className="text-4xl font-bold text-brand-primary m-0 leading-none"
            dir="ltr"
          >
            {data.coveragePercent}٪
          </p>
          <p className="text-sm text-ink-700 m-0 mt-2 leading-snug">
            <span dir="ltr">{data.unitsWithAssessments}</span>{' '}
            {t('assessments.coverage.of')}{' '}
            <span dir="ltr">{data.totalCurriculumUnits}</span>{' '}
            {t('assessments.coverage.units')}
          </p>
        </div>
      </div>
    </ChartCard>
  );
}
