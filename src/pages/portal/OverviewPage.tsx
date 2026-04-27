import { useCallback } from 'react';
import { t } from '@/i18n';
import { PortalLayout } from '@/components/shell/PortalLayout';
import { PageHero } from '@/components/page/PageHero';
import { KpiGrid } from '@/components/data/KpiGrid';
import { LoadingState } from '@/components/data/LoadingState';
import { ErrorState } from '@/components/data/ErrorState';
import { NationalMapCard } from '@/components/data/NationalMapCard';
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

            <KpiGrid kpis={state.data.heroKpis} />

            <NationalMapCard />
          </>
        )}
      </div>
    </PortalLayout>
  );
}
