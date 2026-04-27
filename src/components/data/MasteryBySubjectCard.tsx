import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { t } from '@/i18n';
import { useAsyncData } from '@/hooks/useAsyncData';
import { loadMasteryBySubject } from '@/services/dataService';
import type { MasteryBySubjectEntry } from '@/data/types';
import { ChartCard } from './ChartCard';
import { LoadingState } from './LoadingState';
import { ErrorState } from './ErrorState';

export function MasteryBySubjectCard() {
  const loader = useCallback(() => loadMasteryBySubject(), []);
  const { state, reload } = useAsyncData<MasteryBySubjectEntry[]>(loader);

  if (state.status === 'loading') {
    return (
      <ChartCard title={t('overview.mastery.title')}>
        <LoadingState />
      </ChartCard>
    );
  }

  if (state.status === 'error') {
    return (
      <ChartCard title={t('overview.mastery.title')}>
        <ErrorState onRetry={reload} />
      </ChartCard>
    );
  }

  return <MasteryInner subjects={state.data} />;
}

function MasteryInner({ subjects }: { subjects: MasteryBySubjectEntry[] }) {
  const sorted = [...subjects].sort((a, b) => b.masteryPercent - a.masteryPercent);
  const max = Math.max(100, ...sorted.map((s) => s.masteryPercent));

  return (
    <ChartCard
      title={t('overview.mastery.title')}
      insight={t('overview.mastery.insight')}
      source={t('overview.mastery.source')}
    >
      <ul className="flex flex-col gap-3">
        {sorted.map((s) => {
          const widthPct = (s.masteryPercent / max) * 100;
          return (
            <li key={s.subjectId} className="flex items-center gap-3 text-sm">
              <span className="w-32 md:w-40 flex-shrink-0 text-ink-700">
                {s.name}
              </span>
              <div
                className="flex-1 h-6 bg-ink-100 rounded-full overflow-hidden relative"
                role="meter"
                aria-valuenow={s.masteryPercent}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${s.name}: ${s.masteryPercent}٪`}
              >
                <div
                  className="h-full bg-brand-secondary rounded-full transition-all duration-500"
                  style={{ width: `${widthPct}%` }}
                />
              </div>
              <span
                className="w-14 text-end font-semibold text-brand-primary tabular-nums"
                dir="ltr"
                style={{ textAlign: 'end' }}
              >
                {s.masteryPercent}٪
              </span>
            </li>
          );
        })}
      </ul>

      <div className="mt-5 flex justify-end">
        <Link
          to="/portal/academics/assessments"
          className="inline-flex items-center gap-1.5 text-sm text-brand-primary hover:text-brand-primary-dark font-medium"
        >
          <span>{t('overview.mastery.cta')}</span>
          <ArrowLeft size={14} aria-hidden="true" />
        </Link>
      </div>
    </ChartCard>
  );
}
