# 13 — Data Contracts (TypeScript Shapes)
## مخطط البيانات وعقودها

This document defines the typed shape of every payload exposed by the data service. These shapes are the contract between the UI and the data layer — in MVP they're satisfied by JSON seed files; in Phase 2 they're satisfied by API responses. **The UI code never changes when the source changes.**

> All shapes are written in TypeScript-like notation. Field names match the JSON samples in the module documents under `docs/modules/`.

---

## 1. الأنواع المشتركة (Shared Types)

```ts
// Common KPI tile shape used across all modules
type Trend = {
  direction: 'up' | 'down' | 'flat';
  deltaPercent: number;
  vsLabel?: string;        // e.g., "نقاط", "+1", "−1.2 دقيقة"
};

type KpiTile = {
  id: string;              // e.g., "active-learners"
  label: string;           // Arabic short label (in MVP: a string; Phase 2: a key referencing i18n)
  value: number;
  displayValue: string;    // pre-formatted for the UI (e.g., "2.48 مليون")
  unit: string;            // Arabic unit (e.g., "متعلم", "نسبة")
  trend: Trend;
  methodologyKey?: string; // optional pointer to a methodology entry
};

type Period = {
  id: 'today' | 'last-7-days' | 'last-30-days' | 'this-term' | 'this-academic-year' | 'all-time';
  label: string;           // Arabic, from i18n
  rangeStart?: string;     // ISO date
  rangeEnd?: string;       // ISO date
};

type Meta = {
  schemaVersion: string;
  seededAt: string;        // ISO date
  scenario: string;        // e.g., "default-mvp-demo"
};

// Shared taxonomies (live in config/*.ts, surfaced here for reference)
type RegionId = 'riyadh' | 'makkah' | 'eastern' | 'asir' | 'madinah' | 'jazan' | 'qassim' | 'tabuk' | 'hail' | 'najran' | 'bahah' | 'northern' | 'jouf';
type StageId = 'primary' | 'middle' | 'secondary';
type SubjectId = string;     // 24 ids; full list in config/subjects.ts
type DisciplineId = 'physics' | 'biology' | 'chemistry' | 'math' | 'cs' | 'geo-astro' | 'engineering';
```

---

## 2. اللوحة التنفيذية (Module 03 — Overview)

```ts
type OverviewPayload = {
  _meta: Meta;
  lastUpdatedAt: string;
  period: Period;
  heroKpis: KpiTile[];                      // 6 tiles (O1..O6)
  regionalFootprintRef: string;             // → data/shared/regions.json
  engagementTrendRef: string;               // → data/engagement-trend.json
  contentFootprint: {
    videoLessons: number;
    contentHours: number;
    interactiveExperiments: number;
    subjectsCovered: number;
  };
  masteryBySubjectRef: string;              // → data/shared/mastery-by-subject.json
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
  latestReportsRef: string;                 // → projection from data/reports.json
};

type RegionFootprint = {
  id: RegionId;
  name: string;                             // Arabic
  learners: number;
  schools: number;
  masteryPercent: number;
  coverage: 'كاملة' | 'مرتفعة' | 'متوسطة';
};

type TrendPoint = { month: string; value: number };
type EngagementTrendPayload = { metric: string; label: string; unit: string; points: TrendPoint[] };

type MasteryBySubjectEntry = { subjectId: SubjectId; name: string; masteryPercent: number };
```

---

## 3. التفاعل (Module 04 — Engagement)

```ts
type EngagementPayload = {
  _meta: Meta;
  lastUpdatedAt: string;
  period: Period;
  heroKpis: KpiTile[];                      // 4 tiles (E1..E4)
  sessionPatterns: {
    averageSessionMinutes: number;
    averageSessionsPerLearnerPerWeek: number;
  };
  stageBreakdown: { stageId: StageId; label: string; activeLearners: number; sharePercent: number }[];
  topEngagedSubjects: { subjectId: SubjectId; name: string; engagedLearners: number }[];
  dailyTrendRef: string;                    // → data/engagement-daily.json
  peakHoursHeatmapRef: string;              // → data/engagement-heatmap.json
  regionalActivityRef: string;              // → data/engagement-regions.json
};

type DailyTrendPoint = { date: string; value: number; weekday: string };
type DailyTrendPayload = { metric: string; label: string; unit: string; points: DailyTrendPoint[] };

type HeatmapCell = { weekday: string; hour: string; intensity: number /* 0..1 */ };
type HeatmapPayload = { metric: string; weekdayOrder: string[]; hourBuckets: string[]; matrix: HeatmapCell[] };

type RegionalActivityEntry = { regionId: RegionId; name: string; activeLearnersDailyAvg: number };
```

---

## 4. الدروس المرئية (Module 05 — Videos)

```ts
type VideosPayload = {
  _meta: Meta;
  lastUpdatedAt: string;
  period: Period;
  heroKpis: KpiTile[];                      // 5 tiles (V1..V5)
  stageBreakdown: { stageId: StageId; label: string; lessonsCount: number }[];
  qualityIndicators: {
    hdCoveragePercent: number;
    captionsCoveragePercent: number;
  };
  subjectsRef: string;                      // → data/videos-subjects.json
  featuredLessonsRef: string;               // → data/videos-featured.json
  topWatchedRef: string;                    // → data/videos-top-watched.json
  watchHoursTrendRef: string;               // → data/videos-watch-trend.json
};

type SubjectCoverageEntry = { subjectId: SubjectId; name: string; lessonsCount: number; iconKey: string };

type FeaturedLesson = {
  id: string;
  title: string;
  subjectId: SubjectId;
  subjectName: string;
  stageId: StageId;
  stageName: string;
  durationMinutes: number;
  thumbnailKey: string;
  samplePlaybackUrl: string;
};

type TopWatchedEntry = {
  rank: number;
  lessonId: string;
  title: string;
  subjectName: string;
  stageName: string;
  watchCount: number;
};
```

---

## 5. التجارب التفاعلية (Module 06 — Experiments)

```ts
type ExperimentsPayload = {
  _meta: Meta;
  lastUpdatedAt: string;
  period: Period;
  heroKpis: KpiTile[];                      // 5 tiles (X1..X5)
  disciplines: { disciplineId: DisciplineId; name: string; experimentsCount: number }[];
  typeBreakdown: { typeId: 'virtual-lab' | 'simulation' | 'gamified' | '3d-viz'; label: string; experimentsCount: number }[];
  stageBreakdown: { stageId: StageId; label: string; experimentsCount: number }[];
  featuredRef: string;                      // → data/experiments-featured.json
  interactionsTrendRef: string;             // → data/experiments-interactions-trend.json
};

type FeaturedExperiment = {
  id: string;
  title: string;
  disciplineId: DisciplineId;
  disciplineName: string;
  typeId: 'virtual-lab' | 'simulation' | 'gamified' | '3d-viz';
  typeLabel: string;
  stageId: StageId;
  stageName: string;
  durationMinutes: number;
  thumbnailKey: string;
  samplePreviewUrl: string;
};
```

---

## 6. المعلمون (Module 07 — Teachers)

```ts
type TeachersPayload = {
  _meta: Meta;
  lastUpdatedAt: string;
  period: Period;
  heroKpis: KpiTile[];                      // 5 tiles (T1..T5)
  stageBreakdown: { stageId: StageId; label: string; teachersCount: number }[];
  subjectsBreakdownTop: { subjectId: SubjectId; name: string; teachersCount: number }[];
  regionalDistribution: { regionId: RegionId; name: string; teachersCount: number }[];
  contentBreakdown: {
    videoLessonsAuthored: number;
    experimentsAuthored: number;
    assessmentsAuthored: number;
  };
  professionalDevelopment: {
    certifiedTeachersCount: number;
    averageTrainingHoursPerYear: number;
    trainingProgramsCompletedThisYear: number;
  };
  qualityIndicators: {
    averagePeerReviewRating: number;        // 0..5
    averageLearnerSatisfaction: number;     // 0..5
    peerReviewParticipationPercent: number;
  };
  teachingHoursTrendRef: string;            // → data/teachers-hours-trend.json
};
```

---

## 7. التقييم (Module 08 — Assessments)

```ts
type AssessmentsPayload = {
  _meta: Meta;
  lastUpdatedAt: string;
  period: Period;
  heroKpis: KpiTile[];                      // 5 tiles (A1..A5)
  masteryBySubject: MasteryBySubjectEntry[];
  masteryByStage: { stageId: StageId; label: string; masteryPercent: number }[];
  performanceDistribution: {
    bandId: 'excellent' | 'very-good' | 'good' | 'acceptable' | 'did-not-pass';
    label: string;
    sharePercent: number;
  }[];
  assessmentTypes: {
    typeId: 'formative' | 'summative' | 'diagnostic';
    label: string;
    count: number;
    sharePercent: number;
  }[];
  curriculumCoverage: {
    totalCurriculumUnits: number;
    unitsWithAssessments: number;
    coveragePercent: number;
  };
  regionalMasteryRef: string;               // → data/shared/regions.json (reuses regional set)
  yearMasteryTrendRef: string;              // → data/assessments-year-trend.json
};
```

---

## 8. الدعم والرعاية (Module 09 — Care)

```ts
type CarePayload = {
  _meta: Meta;
  lastUpdatedAt: string;
  period: Period;
  heroKpis: KpiTile[];                      // 5 tiles (C1..C5)
  channels: {
    channelId: 'chat' | 'email' | 'in-app' | 'phone';
    label: string;
    ticketsCount: number;
    sharePercent: number;
  }[];
  inclusion: {
    specialNeedsLearnersSupported: number;
    specialEducationSchoolsServed: number;
    signLanguageLessons: number;
  };
  accessibility: {
    captionsCoveragePercent: number;        // synced with videos.qualityIndicators.captionsCoveragePercent
    screenReaderCompatibilityPercent: number;
    highContrastAndZoomSupportPercent: number;
  };
  wellbeing: {
    counselingSessionsThisMonth: number;
    academicFollowupsForAtRiskLearners: number;
    parentCommunicationsThisMonth: number;
  };
  ticketsTrendRef: string;                  // → data/care-tickets-trend.json
};
```

---

## 9. الأثر الاستراتيجي (Module 10 — Impact)

```ts
type ImpactPayload = {
  _meta: Meta;
  lastReviewedAt: string;
  heroKpis: KpiTile[];                      // 4 tiles (I1..I4)
  vision2030Pillars: { id: string; title: string; description: string }[];
  sdg4Targets: {
    id: string;                             // e.g., "4.1"
    title: string;
    status: 'covered' | 'partial' | 'out-of-scope';
  }[];
  equity: {
    regionsCoveredPercent: number;
    schoolsReached: number;
    urbanRuralGapReductionPercent: number;
    specialNeedsLearnersSupported: number;
  };
  economicValue: {
    perLearnerCostReductionPercent: number;
    costPerContentAccessSar: number;
    freeContentHoursAvailable: number;
  };
  internationalPositioning: {
    regionalRanking: string;
    referenceReport: string;
    frameworksAligned: string[];
  };
  milestones: { year: number; title: string }[];
  roadmap: { id: string; title: string }[];
};
```

---

## 10. التقارير (Module 11 — Reports)

```ts
type ReportsPayload = {
  _meta: Meta;
  lastAddedAt: string;
  heroKpis: KpiTile[];                      // 4 tiles (R1..R4)
  categories: { id: string; label: string; count: number }[];
  featuredIds: string[];                    // refers to reports[*].id
  reports: ReportItem[];
};

type ReportItem = {
  id: string;
  title: string;
  categoryId: 'annual' | 'term' | 'executive-brief' | 'case-study' | 'methodology' | 'alignment' | 'infographic';
  categoryLabel: string;
  publishedDate: string;                    // ISO date
  format: 'PDF' | 'إنفوغرافيك';
  fileSizeMb: number;
  fileUrl: string;                          // local path in MVP, signed URL in Phase 2
  thumbnailKey: string;
  abstract: string;
};
```

---

## 11. عقد خدمة البيانات (Data Service Contract)

The single seam through which the UI reads data. In MVP these functions read JSON from disk; in Phase 2 they call APIs. The signatures do not change.

```ts
// services/dataService.ts

export interface DataService {
  // Modules
  loadOverview(period: Period['id']): Promise<OverviewPayload>;
  loadEngagement(period: Period['id'], filters?: EngagementFilters): Promise<EngagementPayload>;
  loadVideos(period: Period['id'], filters?: VideosFilters): Promise<VideosPayload>;
  loadExperiments(period: Period['id'], filters?: ExperimentsFilters): Promise<ExperimentsPayload>;
  loadTeachers(period: Period['id'], filters?: TeachersFilters): Promise<TeachersPayload>;
  loadAssessments(period: Period['id'], filters?: AssessmentsFilters): Promise<AssessmentsPayload>;
  loadCare(period: Period['id']): Promise<CarePayload>;
  loadImpact(): Promise<ImpactPayload>;
  loadReports(filters?: ReportsFilters): Promise<ReportsPayload>;

  // Heavier datasets resolved from *Ref strings
  resolveRef<T>(refPath: string): Promise<T>;

  // Authentication (used only by login screen)
  authenticate(username: string, password: string): Promise<AuthResult>;
  logout(): Promise<void>;
  getSession(): Promise<Session | null>;
}

type EngagementFilters = { regionId?: RegionId; stageId?: StageId };
type VideosFilters = { stageId?: StageId; subjectId?: SubjectId };
type ExperimentsFilters = { disciplineId?: DisciplineId; stageId?: StageId };
type TeachersFilters = { regionId?: RegionId; stageId?: StageId };
type AssessmentsFilters = { stageId?: StageId; subjectId?: SubjectId; regionId?: RegionId };
type ReportsFilters = { categoryId?: string; year?: number; query?: string };

type AuthResult =
  | { ok: true; session: Session }
  | { ok: false; reason: 'invalid-credentials' | 'rate-limited' | 'locked' | 'network' | 'server' };

type Session = { username: string; issuedAt: string; expiresAt: string };
```

**MVP implementation:** a `MockDataService` that reads from `src/data/*.json` and validates against credentials in env vars.
**Phase 2 implementation:** an `ApiDataService` that hits the real backend. Same interface, swapped at composition root.

---

## 12. حوكمة العقد (Contract Governance)

- The TypeScript types in this document are the single source of truth — code is generated from them, not the other way around.
- A breaking change to any payload shape requires bumping `_meta.schemaVersion` and updating the corresponding module document under `docs/modules/`.
- The build's integrity check (see `12-file-structure.md`) validates JSON files against these shapes — drift fails the build.
- When Phase 2 begins, only the `MockDataService` implementation is replaced. The interface, component code, and JSON shapes remain.

---

**End of contracts. Proceed to `14-migration-notes.md` for the consolidated API/CMS destination map.**
