import { useCallback } from 'react';
import { FlaskConical, PlayCircle } from 'lucide-react';
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

function resolveLaunchUrl(path: string | undefined): string | undefined {
  if (!path) return undefined;
  const base = import.meta.env.BASE_URL || '/';
  const trimmedBase = base.endsWith('/') ? base : `${base}/`;
  const trimmedPath = path.replace(/^\/+/, '');
  return `${trimmedBase}${trimmedPath}`;
}

function Card({ x }: { x: FeaturedExperiment }) {
  const launchUrl = resolveLaunchUrl(x.launchPath);

  const body = (
    <>
      <div
        className="aspect-video flex items-center justify-center text-white relative"
        style={{
          background: 'linear-gradient(135deg, #08798C 0%, #71B36E 100%)',
        }}
      >
        <FlaskConical size={42} strokeWidth={1.5} aria-hidden="true" />
        {launchUrl && (
          <span className="absolute bottom-2 end-2 inline-flex items-center gap-1 bg-white/95 text-brand-primary text-xs font-medium px-2 py-1 rounded-full shadow-sm">
            <PlayCircle size={12} aria-hidden="true" />
            <span>{t('experiments.featured.launch')}</span>
          </span>
        )}
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
    </>
  );

  const commonClasses =
    'bg-white border border-ink-200 rounded-card-lg overflow-hidden transition-shadow flex flex-col';

  if (launchUrl) {
    return (
      <a
        key={x.id}
        href={launchUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${x.title} — ${t('experiments.featured.launch')}`}
        className={`${commonClasses} hover:shadow-card-hover hover:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary`}
      >
        {body}
      </a>
    );
  }

  return (
    <article key={x.id} className={`${commonClasses} hover:shadow-card-hover`}>
      {body}
    </article>
  );
}

function Inner({ items }: { items: FeaturedExperiment[] }) {
  return (
    <ChartCard
      title={t('experiments.featured.title')}
      insight={t('experiments.featured.insight')}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((x) => (
          <Card key={x.id} x={x} />
        ))}
      </div>
    </ChartCard>
  );
}
