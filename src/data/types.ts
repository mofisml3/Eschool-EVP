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

export type RegionId =
  | 'riyadh'
  | 'makkah'
  | 'eastern'
  | 'asir'
  | 'madinah'
  | 'jazan'
  | 'qassim'
  | 'tabuk'
  | 'hail'
  | 'najran'
  | 'bahah'
  | 'northern'
  | 'jouf';

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
    vision2030PillarsAligned: number;
  };
  latestReportsRef: string;
};
