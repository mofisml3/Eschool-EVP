import { useCallback, useMemo, useState } from 'react';
import { Calendar } from 'lucide-react';
import { t } from '@/i18n';
import { PortalLayout } from '@/components/shell/PortalLayout';
import { ScopeStrip } from '@/components/page/ScopeStrip';
import { NarrativeArcCta } from '@/components/page/NarrativeArcCta';
import { KpiGrid } from '@/components/data/KpiGrid';
import { ReportsCategoriesCard } from '@/components/data/ReportsCategoriesCard';
import { FeaturedReportsCard } from '@/components/data/FeaturedReportsCard';
import { ReportsLibraryCard } from '@/components/data/ReportsLibraryCard';
import { LoadingState } from '@/components/data/LoadingState';
import { ErrorState } from '@/components/data/ErrorState';
import { useAsyncData } from '@/hooks/useAsyncData';
import { loadReports } from '@/services/dataService';
import { formatDateTime } from '@/utils/format';

export function ReportsPage() {
  const loader = useCallback(() => loadReports(), []);
  const { state, reload } = useAsyncData(loader);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  const featuredReports = useMemo(() => {
    if (state.status !== 'success') return [];
    return state.data.featuredIds
      .map((id) => state.data.reports.find((r) => r.id === id))
      .filter((r): r is NonNullable<typeof r> => r !== undefined);
  }, [state]);

  const filteredReports = useMemo(() => {
    if (state.status !== 'success') return [];
    const reports =
      activeCategoryId === null
        ? state.data.reports
        : state.data.reports.filter((r) => r.categoryId === activeCategoryId);
    return [...reports].sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() -
        new Date(a.publishedDate).getTime(),
    );
  }, [state, activeCategoryId]);

  return (
    <PortalLayout pageTitle={t('shell.nav.reports')}>
      <div className="flex flex-col gap-6">
        {state.status === 'loading' && <LoadingState />}
        {state.status === 'error' && <ErrorState onRetry={reload} />}

        {state.status === 'success' && (
          <>
            <div className="bg-white rounded-card-lg shadow-card p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold text-brand-primary m-0 leading-tight">
                {t('reports.hero.title')}
              </h2>
              <p className="text-sm md:text-base text-ink-700 m-0 mt-2 leading-relaxed">
                {t('reports.hero.subtitle')}
              </p>
              <p className="text-xs text-ink-500 m-0 mt-3 inline-flex items-center gap-1.5">
                <Calendar size={12} aria-hidden="true" />
                <span>
                  {t('reports.hero.lastAdded')} {formatDateTime(state.data.lastAddedAt)}
                </span>
              </p>
            </div>

            <ScopeStrip />

            <KpiGrid kpis={state.data.heroKpis} />

            <p className="text-xs text-ink-500 m-0">{t('reports.languageNote')}</p>

            <FeaturedReportsCard reports={featuredReports} />

            <ReportsCategoriesCard
              categories={state.data.categories}
              activeId={activeCategoryId}
              onChange={setActiveCategoryId}
            />

            <ReportsLibraryCard reports={filteredReports} />

            <NarrativeArcCta
              title={t('reports.narrativeArc.title')}
              body={t('reports.narrativeArc.body')}
              ctaLabel={t('reports.narrativeArc.cta')}
              ctaTo="/portal/overview"
            />
          </>
        )}
      </div>
    </PortalLayout>
  );
}
