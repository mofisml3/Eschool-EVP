import { useCallback } from 'react';
import { t } from '@/i18n';
import { PortalLayout } from '@/components/shell/PortalLayout';
import { PageHero } from '@/components/page/PageHero';
import { ScopeStrip } from '@/components/page/ScopeStrip';
import { KpiGrid } from '@/components/data/KpiGrid';
import { LoadingState } from '@/components/data/LoadingState';
import { ErrorState } from '@/components/data/ErrorState';
import { NationalMapCard } from '@/components/data/NationalMapCard';
import { EngagementTrendCard } from '@/components/data/EngagementTrendCard';
import { ContentFootprintCard } from '@/components/data/ContentFootprintCard';
import { MasteryBySubjectCard } from '@/components/data/MasteryBySubjectCard';
import { SupportSnapshotCard } from '@/components/data/SupportSnapshotCard';
import { StrategicAlignmentCard } from '@/components/data/StrategicAlignmentCard';
import { LatestReportsCard } from '@/components/data/LatestReportsCard';
import { useAsyncData } from '@/hooks/useAsyncData';
import { loadOverview } from '@/services/dataService';

export function OverviewPage() {
  const loader = useCallback(() => loadOverview(), []);
  const { state, reload } = useAsyncData(loader);

  return (
    <PortalLayout pageTitle={t('shell.nav.overview')}>
      <div className="flex flex-col gap-6">
        {state.status === 'loading' && <LoadingState />}

        {state.status === 'error' && <ErrorState onRetry={reload} />}

        {state.status === 'success' && (
          <>
            <PageHero
              title={t('overview.hero.title')}
              subtitle={t('overview.hero.subtitle')}
              lastUpdatedAt={state.data.lastUpdatedAt}
              rightSlot={
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-primary-light text-brand-primary rounded-full text-sm whitespace-nowrap">
                  <span className="text-ink-700">{t('overview.hero.periodLabel')}</span>
                  <span className="font-medium">{state.data.period.label}</span>
                </div>
              }
            />

            <ScopeStrip />

            <KpiGrid kpis={state.data.heroKpis} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8">
                <NationalMapCard />
              </div>
              <div className="lg:col-span-4">
                <EngagementTrendCard />
              </div>
            </div>

            <ContentFootprintCard data={state.data.contentFootprint} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8">
                <MasteryBySubjectCard />
              </div>
              <div className="lg:col-span-4">
                <SupportSnapshotCard data={state.data.supportSnapshot} />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8">
                <StrategicAlignmentCard data={state.data.strategicAlignment} />
              </div>
              <div className="lg:col-span-4">
                <LatestReportsCard />
              </div>
            </div>
          </>
        )}
      </div>
    </PortalLayout>
  );
}
