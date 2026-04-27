import { useCallback } from 'react';
import { t } from '@/i18n';
import { PortalLayout } from '@/components/shell/PortalLayout';
import { PageHero } from '@/components/page/PageHero';
import { ScopeStrip } from '@/components/page/ScopeStrip';
import { NarrativeArcCta } from '@/components/page/NarrativeArcCta';
import { KpiGrid } from '@/components/data/KpiGrid';
import { DailyTrendCard } from '@/components/data/DailyTrendCard';
import { LoadingState } from '@/components/data/LoadingState';
import { ErrorState } from '@/components/data/ErrorState';
import { useAsyncData } from '@/hooks/useAsyncData';
import { loadEngagement } from '@/services/dataService';

export function EngagementPage() {
  const loader = useCallback(() => loadEngagement(), []);
  const { state, reload } = useAsyncData(loader);

  return (
    <PortalLayout pageTitle={t('shell.nav.engagement')}>
      <div className="flex flex-col gap-6">
        {state.status === 'loading' && <LoadingState />}

        {state.status === 'error' && <ErrorState onRetry={reload} />}

        {state.status === 'success' && (
          <>
            <PageHero
              title={t('engagement.hero.title')}
              subtitle={t('engagement.hero.subtitle')}
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

            <DailyTrendCard />

            <NarrativeArcCta
              title={t('engagement.narrativeArc.title')}
              body={t('engagement.narrativeArc.body')}
              ctaLabel={t('engagement.narrativeArc.cta')}
              ctaTo="/portal/content/videos"
            />
          </>
        )}
      </div>
    </PortalLayout>
  );
}
