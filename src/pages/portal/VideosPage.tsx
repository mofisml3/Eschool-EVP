import { useCallback } from 'react';
import { t } from '@/i18n';
import { PortalLayout } from '@/components/shell/PortalLayout';
import { PageHero } from '@/components/page/PageHero';
import { ScopeStrip } from '@/components/page/ScopeStrip';
import { NarrativeArcCta } from '@/components/page/NarrativeArcCta';
import { KpiGrid } from '@/components/data/KpiGrid';
import { WatchHoursTrendCard } from '@/components/data/WatchHoursTrendCard';
import { VideosStageBreakdownCard } from '@/components/data/VideosStageBreakdownCard';
import { SubjectsCoverageCard } from '@/components/data/SubjectsCoverageCard';
import { FeaturedLessonsCard } from '@/components/data/FeaturedLessonsCard';
import { TopWatchedLessonsCard } from '@/components/data/TopWatchedLessonsCard';
import { QualityIndicatorsCard } from '@/components/data/QualityIndicatorsCard';
import { LoadingState } from '@/components/data/LoadingState';
import { ErrorState } from '@/components/data/ErrorState';
import { useAsyncData } from '@/hooks/useAsyncData';
import { loadVideos } from '@/services/dataService';

export function VideosPage() {
  const loader = useCallback(() => loadVideos(), []);
  const { state, reload } = useAsyncData(loader);

  return (
    <PortalLayout pageTitle={t('shell.nav.videos')}>
      <div className="flex flex-col gap-6">
        {state.status === 'loading' && <LoadingState />}
        {state.status === 'error' && <ErrorState onRetry={reload} />}

        {state.status === 'success' && (
          <>
            <PageHero
              title={t('videos.hero.title')}
              subtitle={t('videos.hero.subtitle')}
              lastUpdatedAt={state.data.lastUpdatedAt}
              rightSlot={
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-primary-light text-brand-primary rounded-full text-sm whitespace-nowrap">
                  <span className="text-ink-700">{t('shell.common.periodLabel')}</span>
                  <span className="font-medium">{state.data.period.label}</span>
                </div>
              }
            />

            <ScopeStrip />

            <KpiGrid kpis={state.data.heroKpis} />

            <WatchHoursTrendCard />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <VideosStageBreakdownCard data={state.data.stageBreakdown} />
              </div>
              <div className="lg:col-span-8">
                <SubjectsCoverageCard />
              </div>
            </div>

            <FeaturedLessonsCard />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8">
                <TopWatchedLessonsCard />
              </div>
              <div className="lg:col-span-4">
                <QualityIndicatorsCard data={state.data.qualityIndicators} />
              </div>
            </div>

            <NarrativeArcCta
              title={t('videos.narrativeArc.title')}
              body={t('videos.narrativeArc.body')}
              ctaLabel={t('videos.narrativeArc.cta')}
              ctaTo="/portal/content/experiments"
            />
          </>
        )}
      </div>
    </PortalLayout>
  );
}
