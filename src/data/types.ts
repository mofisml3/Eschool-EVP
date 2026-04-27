/**
 * Typed shapes shared by the data service and the UI components.
 * Mirrors docs/data-spec/13-contracts.md so any drift is a defect.
 *
 * Phase 2 swaps the mock JSON loader for a real API client; these
 * types remain the contract.
 */

export type Trend = {
  direction: 'up' | 'down' | 'flat';
  deltaPercent: number;
  vsLabel?: string;
};

export type KpiTile = {
  id: string;
  label: string;
  value: number;
  displayValue: string;
  unit: string;
  trend: Trend;
  methodologyKey?: string;
};

export type Period = {
  id:
    | 'today'
    | 'last-7-days'
    | 'last-30-days'
    | 'this-term'
    | 'this-academic-year'
    | 'all-time';
  label: string;
  rangeStart?: string;
  rangeEnd?: string;
};

export type Meta = {
  schemaVersion: string;
  seededAt: string;
  scenario: string;
};

/**
 * Iraqi federal governorates (15). Excludes the Kurdistan Region
 * (Erbil, Sulaymaniyah, Duhok) which operates a separate education
 * system under the KRG.
 */
export type RegionId =
  | 'baghdad'
  | 'nineveh'
  | 'basra'
  | 'babil'
  | 'dhi-qar'
  | 'anbar'
  | 'diyala'
  | 'najaf'
  | 'salah-ad-din'
  | 'kirkuk'
  | 'wasit'
  | 'qadisiyyah'
  | 'karbala'
  | 'maysan'
  | 'muthanna';

/**
 * Iraqi K-12 stage taxonomy. The literal id 'secondary' is the
 * language-agnostic API-level identifier; the Arabic label rendered
 * to the user is 'إعدادي' (preferred Iraqi term, sourced from
 * i18n key shell.stages.secondary). Grade ranges:
 *   - primary:   G1 – G6
 *   - middle:    G7 – G9   (terminal grade الثالث متوسط)
 *   - secondary: G10 – G12 (terminal grade السادس الإعدادي)
 *
 * MVP active scope (academic year 2025/2026): G9 + G12 only.
 */
export type StageId = 'primary' | 'middle' | 'secondary';

export type CoverageLevel = 'كاملة' | 'مرتفعة' | 'متوسطة';

export type RegionFootprint = {
  id: RegionId;
  name: string;
  learners: number;
  schools: number;
  masteryPercent: number;
  coverage: CoverageLevel;
};

export type MasteryBySubjectEntry = {
  subjectId: string;
  name: string;
  masteryPercent: number;
};

export type TrendPoint = { month: string; value: number };

export type TrendPayload = {
  metric: string;
  label: string;
  unit: string;
  points: TrendPoint[];
};

export type DailyTrendPoint = {
  date: string;
  value: number;
  weekday: string;
};

export type DailyTrendPayload = {
  metric: string;
  label: string;
  unit: string;
  points: DailyTrendPoint[];
};

export type OverviewPayload = {
  _meta: Meta;
  lastUpdatedAt: string;
  period: Period;
  heroKpis: KpiTile[];
  regionalFootprintRef: string;
  engagementTrendRef: string;
  contentFootprint: {
    videoLessons: number;
    contentHours: number;
    interactiveExperiments: number;
    subjectsCovered: number;
  };
  masteryBySubjectRef: string;
  supportSnapshot: {
    averageResponseMinutes: number;
    slaAdherencePercent: number;
    ticketsHandledThisMonth: number;
  };
  strategicAlignment: {
    sdg4TargetsCovered: number;
    sdg4TargetsTotal: number;
    nationalStrategyPillarsAligned: number;
  };
  latestReportsRef: string;
};

export type LatestReportItem = {
  id: string;
  title: string;
  publishedDate: string;
  fileSizeMb: number;
};

export type GradeBreakdownEntry = {
  gradeId: 'g9' | 'g12';
  label: string;
  stageId: StageId;
  activeLearners: number;
  sharePercent: number;
};

export type TopEngagedSubject = {
  subjectId: string;
  name: string;
  engagedLearners: number;
};

export type EngagementPayload = {
  _meta: Meta;
  lastUpdatedAt: string;
  period: Period;
  heroKpis: KpiTile[];
  gradeBreakdown: GradeBreakdownEntry[];
  topEngagedSubjects: TopEngagedSubject[];
};
