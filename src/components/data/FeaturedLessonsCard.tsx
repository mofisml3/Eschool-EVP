import { useCallback } from 'react';
import { PlayCircle } from 'lucide-react';
import { t } from '@/i18n';
import { useAsyncData } from '@/hooks/useAsyncData';
import { loadVideosFeatured } from '@/services/dataService';
import type { FeaturedLesson } from '@/data/types';
import { ChartCard } from './ChartCard';
import { LoadingState } from './LoadingState';
import { ErrorState } from './ErrorState';

export function FeaturedLessonsCard() {
  const loader = useCallback(() => loadVideosFeatured(), []);
  const { state, reload } = useAsyncData<FeaturedLesson[]>(loader);

  if (state.status === 'loading') {
    return (
      <ChartCard title={t('videos.featured.title')}>
        <LoadingState />
      </ChartCard>
    );
  }
  if (state.status === 'error') {
    return (
      <ChartCard title={t('videos.featured.title')}>
        <ErrorState onRetry={reload} />
      </ChartCard>
    );
  }
  return <Inner lessons={state.data} />;
}

function Inner({ lessons }: { lessons: FeaturedLesson[] }) {
  return (
    <ChartCard
      title={t('videos.featured.title')}
      insight={t('videos.featured.insight')}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {lessons.map((l) => (
          <article
            key={l.id}
            className="bg-white border border-ink-200 rounded-card-lg overflow-hidden hover:shadow-card-hover transition-shadow flex flex-col"
          >
            {/* Thumbnail placeholder — teal gradient with play icon */}
            <div
              className="aspect-video flex items-center justify-center text-white"
              style={{
                background:
                  'linear-gradient(135deg, #71B36E 0%, #08798C 100%)',
              }}
            >
              <PlayCircle size={42} strokeWidth={1.5} aria-hidden="true" />
            </div>

            <div className="p-4 flex flex-col flex-1 gap-2">
              <h4 className="text-sm font-semibold text-ink-900 m-0 leading-snug">
                {l.title}
              </h4>
              <p className="text-xs text-ink-500 m-0">
                <span>{l.subjectName}</span>
                {' · '}
                <span>{l.gradeLabel}</span>
                {' · '}
                <span dir="ltr">{l.durationMinutes}</span>{' '}
                {t('videos.featured.minutes')}
              </p>
            </div>
          </article>
        ))}
      </div>
    </ChartCard>
  );
}
