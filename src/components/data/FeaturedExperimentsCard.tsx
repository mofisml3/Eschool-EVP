import { useCallback } from 'react';
import { FlaskConical } from 'lucide-react';
import { t } from '@/i18n';
import { useAsyncData } from '@/hooks/useAsyncData';
import { loadExperimentsFeatured } from '@/services/dataService';
import type { FeaturedExperiment } from '@/data/types';
import { ChartCard } from './ChartCard';
import { LoadingState } from './LoadingState';
import { ErrorState } from './ErrorState';

export function FeaturedExperimentsCard() {
  const loader = useCallback(() => loadExperimentsFeatured(), []);
  const { state, reload } = useAsyncData<FeaturedExperiment[]>(loader);

  if (state.status === 'loading') {
    return (
      <ChartCard title={t('experiments.featured.title')}>
        <LoadingState />
      </ChartCard>
    );
  }
  if (state.status === 'error') {
    return (
      <ChartCard title={t('experiments.featured.title')}>
        <ErrorState onRetry={reload} />
      </ChartCard>
    );
  }
  return <Inner items={state.data} />;
}

function Inner({ items }: { items: FeaturedExperiment[] }) {
  return (
    <ChartCard
      title={t('experiments.featured.title')}
      insight={t('experiments.featured.insight')}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((x) => (
          <article
            key={x.id}
            className="bg-white border border-ink-200 rounded-card-lg overflow-hidden hover:shadow-card-hover transition-shadow flex flex-col"
          >
            <div
              className="aspect-video flex items-center justify-center text-white"
              style={{
                background:
                  'linear-gradient(135deg, #08798C 0%, #71B36E 100%)',
              }}
            >
              <FlaskConical size={42} strokeWidth={1.5} aria-hidden="true" />
            </div>

            <div className="p-4 flex flex-col flex-1 gap-2">
              <h4 className="text-sm font-semibold text-ink-900 m-0 leading-snug">
                {x.title}
              </h4>
              <p className="text-xs text-ink-500 m-0">
                <span>{x.disciplineName}</span>
                {' · '}
                <span>{x.typeLabel}</span>
              </p>
              <p className="text-xs text-ink-500 m-0">
                <span>{x.gradeLabel}</span>
                {' · '}
                <span dir="ltr">{x.durationMinutes}</span>{' '}
                {t('experiments.featured.minutes')}
              </p>
            </div>
          </article>
        ))}
      </div>
    </ChartCard>
  );
}
