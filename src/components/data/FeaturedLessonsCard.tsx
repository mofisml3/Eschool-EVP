import { useCallback, useEffect, useState } from 'react';
import { PlayCircle, X } from 'lucide-react';
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

function toYouTubeEmbed(url: string): string | null {
  try {
    const u = new URL(url);
    let id: string | null = null;
    if (u.hostname === 'youtu.be') {
      id = u.pathname.replace(/^\//, '');
    } else if (u.hostname.endsWith('youtube.com')) {
      if (u.pathname === '/watch') id = u.searchParams.get('v');
      else if (u.pathname.startsWith('/embed/'))
        id = u.pathname.replace('/embed/', '');
      else if (u.pathname.startsWith('/shorts/'))
        id = u.pathname.replace('/shorts/', '');
      else if (u.pathname.startsWith('/live/'))
        id = u.pathname.replace('/live/', '');
    }
    if (!id) return null;
    return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
  } catch {
    return null;
  }
}

function Inner({ lessons }: { lessons: FeaturedLesson[] }) {
  const [active, setActive] = useState<FeaturedLesson | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <ChartCard
      title={t('videos.featured.title')}
      insight={t('videos.featured.insight')}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {lessons.map((l) => {
          const cardClass =
            'bg-white border border-ink-200 rounded-card-lg overflow-hidden hover:shadow-card-hover transition-shadow flex flex-col text-start';
          const inner = (
            <>
              <div
                className="aspect-video flex items-center justify-center text-white relative"
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
            </>
          );
          if (l.youtubeUrl && toYouTubeEmbed(l.youtubeUrl)) {
            return (
              <button
                type="button"
                key={l.id}
                onClick={() => setActive(l)}
                className={`${cardClass} bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-primary`}
                aria-label={`${l.title} — تشغيل`}
              >
                {inner}
              </button>
            );
          }
          return (
            <article key={l.id} className={cardClass}>
              {inner}
            </article>
          );
        })}
      </div>

      {active && active.youtubeUrl && (
        <VideoModal lesson={active} onClose={() => setActive(null)} />
      )}
    </ChartCard>
  );
}

function VideoModal({
  lesson,
  onClose,
}: {
  lesson: FeaturedLesson;
  onClose: () => void;
}) {
  const embed = lesson.youtubeUrl ? toYouTubeEmbed(lesson.youtubeUrl) : null;
  if (!embed) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={lesson.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-card-lg shadow-2xl w-full max-w-[720px] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3 p-4 border-b border-ink-200">
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-ink-900 m-0 leading-snug">
              {lesson.title}
            </h3>
            <p className="text-xs text-ink-500 m-0 mt-1">
              <span>{lesson.subjectName}</span>
              {' · '}
              <span>{lesson.gradeLabel}</span>
              {' · '}
              <span dir="ltr">{lesson.durationMinutes}</span>{' '}
              {t('videos.featured.minutes')}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق"
            className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full text-ink-500 hover:text-ink-900 hover:bg-ink-100 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          >
            <X size={20} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
        <div className="aspect-video bg-black">
          <iframe
            src={embed}
            title={lesson.title}
            className="w-full h-full block"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </div>
  );
}
