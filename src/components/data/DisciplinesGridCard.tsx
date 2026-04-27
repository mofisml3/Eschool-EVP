import { FlaskConical } from 'lucide-react';
import { t } from '@/i18n';
import type { ExperimentDiscipline } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: ExperimentDiscipline[] };

export function DisciplinesGridCard({ data }: Props) {
  return (
    <ChartCard
      title={t('experiments.disciplines.title')}
      insight={t('experiments.disciplines.insight')}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {data.map((d) => (
          <div
            key={d.disciplineId}
            className="bg-ink-100 hover:bg-brand-primary-light rounded-card p-3 flex items-center gap-3 transition-colors"
          >
            <span className="w-8 h-8 rounded-full bg-white text-brand-primary flex items-center justify-center flex-shrink-0">
              <FlaskConical size={14} aria-hidden="true" />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-ink-700 m-0 truncate">{d.name}</p>
              <p className="text-sm font-semibold text-brand-primary m-0 leading-tight">
                <span dir="ltr">{d.experimentsCount.toLocaleString('en-US')}</span>{' '}
                <span className="text-xs font-normal text-ink-500">
                  {t('experiments.disciplines.unit')}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}
