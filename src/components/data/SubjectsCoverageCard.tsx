import { useCallback } from 'react';
import { BookOpen } from 'lucide-react';
import { t } from '@/i18n';
import { useAsyncData } from '@/hooks/useAsyncData';
import { loadVideosSubjects } from '@/services/dataService';
import type { VideosSubjectEntry } from '@/data/types';
import { ChartCard } from './ChartCard';
import { LoadingState } from './LoadingState';
import { ErrorState } from './ErrorState';

export function SubjectsCoverageCard() {
  const loader = useCallback(() => loadVideosSubjects(), []);
  const { state, reload } = useAsyncData<VideosSubjectEntry[]>(loader);

  if (state.status === 'loading') {
    return (
      <ChartCard title={t('videos.subjects.title')}>
        <LoadingState />
      </ChartCard>
    );
  }
  if (state.status === 'error') {
    return (
      <ChartCard title={t('videos.subjects.title')}>
        <ErrorState onRetry={reload} />
      </ChartCard>
    );
  }
  return <Inner subjects={state.data} />;
}

function Inner({ subjects }: { subjects: VideosSubjectEntry[] }) {
  return (
    <ChartCard
      title={t('videos.subjects.title')}
      insight={t('videos.subjects.insight')}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {subjects.map((s) => (
          <div
            key={s.subjectId}
            className="bg-ink-100 hover:bg-brand-primary-light rounded-card p-3 flex items-center gap-3 transition-colors"
          >
            <span className="w-8 h-8 rounded-full bg-white text-brand-primary flex items-center justify-center flex-shrink-0">
              <BookOpen size={14} aria-hidden="true" />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-ink-700 m-0 truncate">{s.name}</p>
              <p className="text-sm font-semibold text-brand-primary m-0 leading-tight">
                <span dir="ltr">{s.lessonsCount.toLocaleString('en-US')}</span>{' '}
                <span className="text-xs font-normal text-ink-500">
                  {t('videos.subjects.unit')}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}
