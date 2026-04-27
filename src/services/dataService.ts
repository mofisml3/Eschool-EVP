import type { FeatureCollection, Polygon, MultiPolygon } from 'geojson';
import type {
  DailyTrendPayload,
  EngagementPayload,
  ExperimentsPayload,
  FeaturedExperiment,
  FeaturedLesson,
  HeatmapPayload,
  LatestReportItem,
  MasteryBySubjectEntry,
  OverviewPayload,
  RegionFootprint,
  AssessmentsPayload,
  CarePayload,
  ImpactPayload,
  TeachersPayload,
  TopWatchedLesson,
  TrendPayload,
  VideosPayload,
  VideosSubjectEntry,
} from '@/data/types';

export type IraqMapFeatureProps = {
  regionId: string;
  iso: string;
  neName: string;
};

export type IraqMap = FeatureCollection<Polygon | MultiPolygon, IraqMapFeatureProps>;

/**
 * Single seam between the UI and its data source.
 * MVP reads JSON from public/data/. Phase 2 swaps each function to
 * call a real API; the shapes returned are unchanged so component
 * code does not move.
 *
 * URLs are constructed against import.meta.env.BASE_URL so the same
 * code works at '/' locally and '/Eschool-EVP/' on GitHub Pages.
 */

function dataUrl(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const trimmed = path.replace(/^\//, '').split('#')[0]!;
  return `${base}/${trimmed}`;
}

async function fetchJson<T>(path: string): Promise<T> {
  const url = dataUrl(path);
  const res = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!res.ok) {
    throw new Error(
      `[dataService] failed to fetch ${url}: ${res.status} ${res.statusText}`,
    );
  }
  return (await res.json()) as T;
}

export async function loadOverview(): Promise<OverviewPayload> {
  return fetchJson<OverviewPayload>('data/overview.json');
}

export async function loadEngagement(): Promise<EngagementPayload> {
  return fetchJson<EngagementPayload>('data/engagement.json');
}

export async function loadDailyEngagement(): Promise<DailyTrendPayload> {
  return fetchJson<DailyTrendPayload>('data/engagement-daily.json');
}

export async function loadEngagementHeatmap(): Promise<HeatmapPayload> {
  return fetchJson<HeatmapPayload>('data/engagement-heatmap.json');
}

export async function loadVideos(): Promise<VideosPayload> {
  return fetchJson<VideosPayload>('data/videos.json');
}

export async function loadVideosWatchTrend(): Promise<TrendPayload> {
  return fetchJson<TrendPayload>('data/videos-watch-trend.json');
}

export async function loadVideosSubjects(): Promise<VideosSubjectEntry[]> {
  return fetchJson<VideosSubjectEntry[]>('data/videos-subjects.json');
}

export async function loadVideosFeatured(): Promise<FeaturedLesson[]> {
  return fetchJson<FeaturedLesson[]>('data/videos-featured.json');
}

export async function loadVideosTopWatched(): Promise<TopWatchedLesson[]> {
  return fetchJson<TopWatchedLesson[]>('data/videos-top-watched.json');
}

export async function loadExperiments(): Promise<ExperimentsPayload> {
  return fetchJson<ExperimentsPayload>('data/experiments.json');
}

export async function loadExperimentsInteractionsTrend(): Promise<TrendPayload> {
  return fetchJson<TrendPayload>('data/experiments-interactions-trend.json');
}

export async function loadExperimentsFeatured(): Promise<FeaturedExperiment[]> {
  return fetchJson<FeaturedExperiment[]>('data/experiments-featured.json');
}

export async function loadTeachers(): Promise<TeachersPayload> {
  return fetchJson<TeachersPayload>('data/teachers.json');
}

export async function loadTeachersHoursTrend(): Promise<TrendPayload> {
  return fetchJson<TrendPayload>('data/teachers-hours-trend.json');
}

export async function loadAssessments(): Promise<AssessmentsPayload> {
  return fetchJson<AssessmentsPayload>('data/assessments.json');
}

export async function loadAssessmentsYearTrend(): Promise<TrendPayload> {
  return fetchJson<TrendPayload>('data/assessments-year-trend.json');
}

export async function loadCare(): Promise<CarePayload> {
  return fetchJson<CarePayload>('data/care.json');
}

export async function loadCareTicketsTrend(): Promise<TrendPayload> {
  return fetchJson<TrendPayload>('data/care-tickets-trend.json');
}

export async function loadImpact(): Promise<ImpactPayload> {
  return fetchJson<ImpactPayload>('data/impact.json');
}

export async function loadRegions(): Promise<RegionFootprint[]> {
  return fetchJson<RegionFootprint[]>('data/shared/regions.json');
}

export async function loadMasteryBySubject(): Promise<MasteryBySubjectEntry[]> {
  return fetchJson<MasteryBySubjectEntry[]>('data/shared/mastery-by-subject.json');
}

export async function loadEngagementTrend(): Promise<TrendPayload> {
  return fetchJson<TrendPayload>('data/engagement-trend.json');
}

export async function loadIraqMap(): Promise<IraqMap> {
  return fetchJson<IraqMap>('data/iraq-15-governorates.geojson');
}

export async function loadLatestReports(): Promise<LatestReportItem[]> {
  return fetchJson<LatestReportItem[]>('data/latest-reports.json');
}

/**
 * Generic resolver for `*Ref` strings carried inside payloads.
 * Strips an optional '#fragment' so a payload can target a slice
 * of a shared file in Phase 2 without breaking MVP loaders.
 */
export async function resolveRef<T>(ref: string): Promise<T> {
  return fetchJson<T>(ref);
}
