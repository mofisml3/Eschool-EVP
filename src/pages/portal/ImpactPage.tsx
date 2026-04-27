import { useCallback } from 'react';
import { Calendar } from 'lucide-react';
import { t } from '@/i18n';
import { PortalLayout } from '@/components/shell/PortalLayout';
import { ScopeStrip } from '@/components/page/ScopeStrip';
import { NarrativeArcCta } from '@/components/page/NarrativeArcCta';
import { KpiGrid } from '@/components/data/KpiGrid';
import { StrategyPillarsCard } from '@/components/data/StrategyPillarsCard';
import { Sdg4TargetsCard } from '@/components/data/Sdg4TargetsCard';
import { ImpactEquityCard } from '@/components/data/ImpactEquityCard';
import { EconomicValueCard } from '@/components/data/EconomicValueCard';
import { InternationalPositioningCard } from '@/components/data/InternationalPositioningCard';
import { MilestonesTimelineCard } from '@/components/data/MilestonesTimelineCard';
import { RoadmapCard } from '@/components/data/RoadmapCard';
import { LoadingState } from '@/components/data/LoadingState';
import { ErrorState } from '@/components/data/ErrorState';
import { useAsyncData } from '@/hooks/useAsyncData';
import { loadImpact } from '@/services/dataService';
import { formatDate } from '@/utils/format';

export function ImpactPage() {
  const loader = useCallback(() => loadImpact(), []);
  const { state, reload } = useAsyncData(loader);

  return (
    <PortalLayout pageTitle={t('shell.nav.impact')}>
      <div className="flex flex-col gap-6">
        {state.status === 'loading' && <LoadingState />}
        {state.status === 'error' && <ErrorState onRetry={reload} />}

        {state.status === 'success' && (
          <>
            <div className="bg-white rounded-card-lg shadow-card p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold text-brand-primary m-0 leading-tight">
                {t('impact.hero.title')}
              </h2>
              <p className="text-sm md:text-base text-ink-700 m-0 mt-2 leading-relaxed">
                {t('impact.hero.subtitle')}
              </p>
              <p className="text-xs text-ink-500 m-0 mt-3 inline-flex items-center gap-1.5">
                <Calendar size={12} aria-hidden="true" />
                <span>
                  {t('impact.hero.lastReviewed')} {formatDate(state.data.lastReviewedAt)}
                </span>
              </p>
            </div>

            <ScopeStrip />

            <KpiGrid kpis={state.data.heroKpis} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7">
                <StrategyPillarsCard data={state.data.nationalStrategyPillars} />
              </div>
              <div className="lg:col-span-5">
                <Sdg4TargetsCard data={state.data.sdg4Targets} />
              </div>
            </div>

            <ImpactEquityCard data={state.data.equity} />

            <EconomicValueCard data={state.data.economicValue} />

            <InternationalPositioningCard data={state.data.internationalPositioning} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7">
                <MilestonesTimelineCard data={state.data.milestones} />
              </div>
              <div className="lg:col-span-5">
                <RoadmapCard data={state.data.roadmap} />
              </div>
            </div>

            <NarrativeArcCta
              title={t('impact.narrativeArc.title')}
              body={t('impact.narrativeArc.body')}
              ctaLabel={t('impact.narrativeArc.cta')}
              ctaTo="/portal/reports"
            />
          </>
        )}
      </div>
    </PortalLayout>
  );
}
