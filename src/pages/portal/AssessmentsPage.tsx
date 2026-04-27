import { useCallback } from 'react';
import { t } from '@/i18n';
import { PortalLayout } from '@/components/shell/PortalLayout';
import { PageHero } from '@/components/page/PageHero';
import { ScopeStrip } from '@/components/page/ScopeStrip';
import { NarrativeArcCta } from '@/components/page/NarrativeArcCta';
import { KpiGrid } from '@/components/data/KpiGrid';
import { MasteryYearTrendCard } from '@/components/data/MasteryYearTrendCard';
import { MasteryBySubjectCard } from '@/components/data/MasteryBySubjectCard';
import { MasteryByStageCard } from '@/components/data/MasteryByStageCard';
import { PerformanceDistributionCard } from '@/components/data/PerformanceDistributionCard';
import { AssessmentTypesCard } from '@/components/data/AssessmentTypesCard';
import { CurriculumCoverageCard } from '@/components/data/CurriculumCoverageCard';
import { LoadingState } from '@/components/data/LoadingState';
import { ErrorState } from '@/components/data/ErrorState';
import { useAsyncData } from '@/hooks/useAsyncData';
import { loadAssessments } from '@/services/dataService';

export function AssessmentsPage() {
  const loader = useCallback(() => loadAssessments(), []);
  const { state, reload } = useAsyncData(loader);

  return (
    <PortalLayout pageTitle={t('shell.nav.assessments')}>
      <div className="flex flex-col gap-6">
        {state.status === 'loading' && <LoadingState />}
        {state.status === 'error' && <ErrorState onRetry={reload} />}

        {state.status === 'success' && (
          <>
            <PageHero
              title={t('assessments.hero.title')}
              subtitle={t('assessments.hero.subtitle')}
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

            <MasteryYearTrendCard />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8">
                <MasteryBySubjectCard />
              </div>
              <div className="lg:col-span-4">
                <MasteryByStageCard data={state.data.masteryByStage} />
              </div>
            </div>

            <PerformanceDistributionCard data={state.data.performanceDistribution} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7">
                <AssessmentTypesCard data={state.data.assessmentTypes} />
              </div>
              <div className="lg:col-span-5">
                <CurriculumCoverageCard data={state.data.curriculumCoverage} />
              </div>
            </div>

            <NarrativeArcCta
              title={t('assessments.narrativeArc.title')}
              body={t('assessments.narrativeArc.body')}
              ctaLabel={t('assessments.narrativeArc.cta')}
              ctaTo="/portal/care"
            />
          </>
        )}
      </div>
    </PortalLayout>
  );
}
