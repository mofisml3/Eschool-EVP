import { useCallback } from 'react';
import { Eye } from 'lucide-react';
import { t } from '@/i18n';
import { useAsyncData } from '@/hooks/useAsyncData';
import { loadVideosTopWatched } from '@/services/dataService';
import type { TopWatchedLesson } from '@/data/types';
import { ChartCard } from './ChartCard';
import { LoadingState } from './LoadingState';
import { ErrorState } from './ErrorState';

export function TopWatchedLessonsCard() {
  const loader = useCallback(() => loadVideosTopWatched(), []);
  const { state, reload } = useAsyncData<TopWatchedLesson[]>(loader);

  if (state.status === 'loading') {
    return (
      <ChartCard title={t('videos.topWatched.title')}>
        <LoadingState />
      </ChartCard>
    );
  }
  if (state.status === 'error') {
    return (
      <ChartCard title={t('videos.topWatched.title')}>
        <ErrorState onRetry={reload} />
      </ChartCard>
    );
  }
  return <Inner lessons={state.data} />;
}

function Inner({ lessons }: { lessons: TopWatchedLesson[] }) {
  return (
    <ChartCard
      title={t('videos.topWatched.title')}
      insight={t('videos.topWatched.insight')}
    >
      <ol className="flex flex-col">
        {lessons.map((l, i) => (
          <li
            key={l.lessonId}
            className={`flex items-center gap-3 py-3 ${
              i < lessons.length - 1 ? 'border-b border-ink-100' : ''
            }`}
          >
            <span
              aria-hidden="true"
              className="w-7 h-7 rounded-full bg-brand-primary-light text-brand-primary text-xs font-semibold flex items-center justify-center flex-shrink-0"
            >
              {l.rank}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-ink-900 m-0 leading-snug truncate">
                {l.title}
              </p>
              <p className="text-xs text-ink-500 m-0 mt-0.5">
                {l.subjectName} · {l.gradeLabel}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-ink-700 flex-shrink-0">
              <Eye size={14} className="text-ink-500" aria-hidden="true" />
              <span dir="ltr" className="font-semibold text-brand-primary tabular-nums">
                {l.watchCount.toLocaleString('en-US')}
              </span>
              <span className="text-ink-500">{t('videos.topWatched.watchUnit')}</span>
            </div>
          </li>
        ))}
      </ol>
    </ChartCard>
  );
}
