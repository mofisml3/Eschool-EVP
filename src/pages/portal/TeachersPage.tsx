import { useCallback } from 'react';
import { t } from '@/i18n';
import { PortalLayout } from '@/components/shell/PortalLayout';
import { PageHero } from '@/components/page/PageHero';
import { ScopeStrip } from '@/components/page/ScopeStrip';
import { NarrativeArcCta } from '@/components/page/NarrativeArcCta';
import { KpiGrid } from '@/components/data/KpiGrid';
import { TeachingHoursTrendCard } from '@/components/data/TeachingHoursTrendCard';
import { TeachersStageCard } from '@/components/data/TeachersStageCard';
import { TeachersSubjectsCard } from '@/components/data/TeachersSubjectsCard';
import { TeachersRegionalCard } from '@/components/data/TeachersRegionalCard';
import { ContentProductionCard } from '@/components/data/ContentProductionCard';
import { ProfessionalDevelopmentCard } from '@/components/data/ProfessionalDevelopmentCard';
import { TeachersQualityCard } from '@/components/data/TeachersQualityCard';
import { LoadingState } from '@/components/data/LoadingState';
import { ErrorState } from '@/components/data/ErrorState';
import { useAsyncData } from '@/hooks/useAsyncData';
import { loadTeachers } from '@/services/dataService';

export function TeachersPage() {
  const loader = useCallback(() => loadTeachers(), []);
  const { state, reload } = useAsyncData(loader);

  return (
    <PortalLayout pageTitle={t('shell.nav.teachers')}>
      <div className="flex flex-col gap-6">
        {state.status === 'loading' && <LoadingState />}
        {state.status === 'error' && <ErrorState onRetry={reload} />}

        {state.status === 'success' && (
          <>
            <PageHero
              title={t('teachers.hero.title')}
              subtitle={t('teachers.hero.subtitle')}
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

            <TeachingHoursTrendCard />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <TeachersStageCard data={state.data.stageBreakdown} />
              </div>
              <div className="lg:col-span-8">
                <TeachersSubjectsCard data={state.data.subjectsBreakdownTop} />
              </div>
            </div>

            <TeachersRegionalCard data={state.data.regionalDistribution} />

            <ContentProductionCard data={state.data.contentBreakdown} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-5">
                <ProfessionalDevelopmentCard data={state.data.professionalDevelopment} />
              </div>
              <div className="lg:col-span-7">
                <TeachersQualityCard data={state.data.qualityIndicators} />
              </div>
            </div>

            <NarrativeArcCta
              title={t('teachers.narrativeArc.title')}
              body={t('teachers.narrativeArc.body')}
              ctaLabel={t('teachers.narrativeArc.cta')}
              ctaTo="/portal/academics/assessments"
            />
          </>
        )}
      </div>
    </PortalLayout>
  );
}
