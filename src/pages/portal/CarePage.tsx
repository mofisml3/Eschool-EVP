import { useCallback } from 'react';
import { t } from '@/i18n';
import { PortalLayout } from '@/components/shell/PortalLayout';
import { PageHero } from '@/components/page/PageHero';
import { ScopeStrip } from '@/components/page/ScopeStrip';
import { NarrativeArcCta } from '@/components/page/NarrativeArcCta';
import { KpiGrid } from '@/components/data/KpiGrid';
import { CareTicketsTrendCard } from '@/components/data/CareTicketsTrendCard';
import { CareChannelsCard } from '@/components/data/CareChannelsCard';
import { CareInclusionCard } from '@/components/data/CareInclusionCard';
import { CareAccessibilityCard } from '@/components/data/CareAccessibilityCard';
import { CareWellbeingCard } from '@/components/data/CareWellbeingCard';
import { LoadingState } from '@/components/data/LoadingState';
import { ErrorState } from '@/components/data/ErrorState';
import { useAsyncData } from '@/hooks/useAsyncData';
import { loadCare } from '@/services/dataService';

export function CarePage() {
  const loader = useCallback(() => loadCare(), []);
  const { state, reload } = useAsyncData(loader);

  return (
    <PortalLayout pageTitle={t('shell.nav.care')}>
      <div className="flex flex-col gap-6">
        {state.status === 'loading' && <LoadingState />}
        {state.status === 'error' && <ErrorState onRetry={reload} />}

        {state.status === 'success' && (
          <>
            <PageHero
              title={t('care.hero.title')}
              subtitle={t('care.hero.subtitle')}
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

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8">
                <CareTicketsTrendCard />
              </div>
              <div className="lg:col-span-4">
                <CareChannelsCard data={state.data.channels} />
              </div>
            </div>

            <CareInclusionCard data={state.data.inclusion} />

            <CareAccessibilityCard data={state.data.accessibility} />

            <CareWellbeingCard data={state.data.wellbeing} />

            <NarrativeArcCta
              title={t('care.narrativeArc.title')}
              body={t('care.narrativeArc.body')}
              ctaLabel={t('care.narrativeArc.cta')}
              ctaTo="/portal/impact"
            />
          </>
        )}
      </div>
    </PortalLayout>
  );
}
