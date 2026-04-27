import type { FeatureCollection, Polygon, MultiPolygon } from 'geojson';
import type {
  LatestReportItem,
  MasteryBySubjectEntry,
  OverviewPayload,
  RegionFootprint,
  TrendPayload,
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
