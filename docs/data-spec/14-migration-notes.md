# 14 — Phase 2 Migration Notes
## ملاحظات الترحيل المستقبلي إلى الواجهات البرمجية ومُدير المحتوى

This document consolidates — across all 9 modules — the per-field decision of where each piece of data should live in Phase 2. It is the master reference when the team begins integrating the real backend and a lightweight CMS.

> **Principle:** anything **measured** moves to **API**. Anything **editorial / policy / curated** moves to a **lightweight CMS**. Anything **reference taxonomy** stays in a **shared config service** (or in-repo config in early Phase 2).

---

## 1. الفئات الثلاث (The Three Destinations)

| Destination | What goes there | Examples |
|-------------|-----------------|----------|
| **API** | Live measured quantities, aggregations, time series | KPIs, trends, regional breakdowns, support SLA, mastery, downloads |
| **CMS** | Editorial content, curated selections, policy mappings, abstracts | Featured lessons/experiments, report library, methodology pages, Vision 2030 / SDG 4 mappings, milestones, roadmap |
| **Shared Config** | Stable taxonomies, policy thresholds | Region list, subject list, stage list, performance bands, SLA targets |

---

## 2. خريطة الترحيل لكل وحدة (Per-Module Migration Map)

### 2.1 Module 03 — Executive Overview
| Field | Destination |
|-------|-------------|
| `lastUpdatedAt` | API (computed at request time) |
| `period` | derived in code |
| `heroKpis[*].value` | **API** |
| `heroKpis[*].label / methodologyKey` | **CMS** (or i18n if it never changes) |
| `regionalFootprintRef` data | **API** (shared with other modules) |
| `engagementTrendRef` data | **API** (cached daily) |
| `contentFootprint.*` | **API** |
| `masteryBySubjectRef` data | **API** (shared with assessments) |
| `supportSnapshot.*` | **API** (helpdesk integration) |
| `strategicAlignment.*` | **CMS** (rare changes) |
| `latestReportsRef` | **CMS** (projection of report library) |

### 2.2 Module 04 — Engagement
| Field | Destination |
|-------|-------------|
| All `heroKpis[*].value` (DAU / WAU / MAU / Stickiness) | **API** (analytics pipeline) |
| `sessionPatterns.*` | **API** (daily aggregations) |
| `stageBreakdown[*]` | **API** |
| `topEngagedSubjects[*]` | **API** (cached daily) |
| `dailyTrendRef` | **API** (rolling window) |
| `peakHoursHeatmapRef` | **API** (precomputed nightly) |
| `regionalActivityRef` | **API** |

### 2.3 Module 05 — Videos
| Field | Destination |
|-------|-------------|
| `heroKpis[*].value` | **API** (content & telemetry) |
| `stageBreakdown[*]` | **API** |
| `qualityIndicators.*` | **API** (computed from content metadata) |
| `subjectsRef` data | **API** (counts) + **CMS** (subject names/icons) |
| `featuredLessonsRef` | **CMS** (editorial selection) |
| `topWatchedRef` | **API** (computed nightly) |
| `watchHoursTrendRef` | **API** |
| Lesson metadata (titles, durations, thumbnails) | **CMS / LMS** |
| `samplePlaybackUrl` | **CDN / signed URL from LMS** |

### 2.4 Module 06 — Experiments
| Field | Destination |
|-------|-------------|
| `heroKpis[*].value` | **API** |
| `disciplines[*]` | **API** (counts) + shared config (taxonomy) |
| `typeBreakdown[*]` | **API** |
| `stageBreakdown[*]` | **API** |
| `featuredRef` | **CMS** |
| `interactionsTrendRef` | **API** |
| Experiment metadata | **CMS / LMS** |

### 2.5 Module 07 — Teachers
| Field | Destination |
|-------|-------------|
| `heroKpis[*].value` | **API** (HR + LMS aggregations) |
| `stageBreakdown[*]` | **API** |
| `subjectsBreakdownTop[*]` | **API** (uses shared subject taxonomy) |
| `regionalDistribution[*]` | **API** |
| `contentBreakdown.*` | **API** (cross-references videos / experiments / assessments — must reconcile) |
| `professionalDevelopment.*` | **API** (HR system) |
| `qualityIndicators.*` | **API** |
| `teachingHoursTrendRef` | **API** |

### 2.6 Module 08 — Assessments
| Field | Destination |
|-------|-------------|
| `heroKpis[*].value` | **API** (assessment subsystem) |
| `masteryBySubject[*]` | **API** (cached daily) |
| `masteryByStage[*]` | **API** |
| `performanceDistribution[*]` | **API** |
| Performance band thresholds (60/70/80/90) | **shared config** (policy) |
| `assessmentTypes[*]` | **API** |
| `curriculumCoverage.*` | **API** + curriculum config |
| `regionalMasteryRef` | **API** (joins with regions) |
| `yearMasteryTrendRef` | **API** (time series) |

### 2.7 Module 09 — Care
| Field | Destination |
|-------|-------------|
| `heroKpis[*].value` (response, SLA, tickets, FCR, satisfaction) | **API** (helpdesk) |
| `channels[*]` | **API** |
| `inclusion.*` | **API** (HR / SIS) |
| `accessibility.captionsCoveragePercent` | **API** (must mirror videos module — single computed source) |
| `accessibility.screenReader / highContrast` | **internal QA system or CMS** |
| `wellbeing.*` | **API** (counseling + parent comms) |
| `ticketsTrendRef` | **API** (time series) |
| SLA targets | **shared config** (policy) |

### 2.8 Module 10 — Impact
| Field | Destination |
|-------|-------------|
| `heroKpis[*].value` | **mostly CMS** (policy-defined, not measured) |
| `vision2030Pillars[*]` | **CMS** |
| `sdg4Targets[*]` | **CMS** (status updated per strategic review) |
| `equity.urbanRuralGapReductionPercent` | **API** (computed) |
| `equity.regionsCoveredPercent / schoolsReached` | **API** |
| `economicValue.*` | **annual report + CMS** (tied to economic evaluation cycle) |
| `internationalPositioning.*` | **CMS** |
| `milestones[*]` | **CMS** |
| `roadmap[*]` | **CMS** |

### 2.9 Module 11 — Reports
| Field | Destination |
|-------|-------------|
| `heroKpis.totalReports / addedThisTerm / languagesAvailable` | **CMS** (auto-derived from library count) |
| `heroKpis.totalDownloads` | **API** (download analytics) |
| `categories[*]` | **shared config or CMS** |
| `featuredIds` | **CMS** |
| `reports[*]` (entire library) | **CMS / document store** |
| `reports[*].fileUrl` | **signed URL from CDN/document store** (auth-gated) |
| `reports[*].abstract` | **CMS** |

---

## 3. الجوانب المشتركة عبر الوحدات (Cross-Module Synchronization)

Some fields appear in multiple modules and must reconcile to a single computed value. The migration plan flags them so they don't drift:

| Synchronized field | Modules that reference it | Single source in Phase 2 |
|--------------------|---------------------------|--------------------------|
| Active learners (MAU) | Overview, Engagement | analytics aggregation API |
| Geographic coverage (regions) | Overview, Engagement, Teachers, Assessments, Impact | shared regions API |
| Captions coverage % | Videos, Care | content metadata aggregation |
| Video lessons count | Overview, Videos, Teachers (`contentBreakdown.videoLessonsAuthored`) | content metadata aggregation |
| Experiments count | Overview, Experiments, Teachers (`contentBreakdown.experimentsAuthored`) | content metadata aggregation |
| Assessments authored | Teachers, Assessments | assessment subsystem |
| National mastery | Overview, Assessments | assessment subsystem aggregation |
| Support response time / SLA / tickets | Overview, Care | helpdesk API |
| Subject taxonomy | Videos, Experiments, Teachers, Assessments | shared config service |

---

## 4. الترقية إلى ثنائية اللغة (Phase 2 — English Localization Migration)

This is a **separate** Phase 2 track from the API/CMS migration above. They can run in parallel.

### 4.1 Folder changes
- `i18n/ar.json` → `i18n/{ar,en}.json` (sibling, not replacement)
- Add a language switcher component to `shell/01-global-shell.md`

### 4.2 Seed-data shape changes (for as long as the portal still reads from JSON)
Strings in `data/*.json` are migrated from single-string to per-locale objects via a one-time script:

```jsonc
// Before
{ "title": "مقدمة في الجبر — معادلات الدرجة الأولى" }

// After
{ "title": { "ar": "مقدمة في الجبر — معادلات الدرجة الأولى", "en": "Introduction to Algebra — Linear Equations" } }
```

The migration script:
1. Reads every JSON file under `data/`.
2. For each field listed in a "translatable fields" allowlist, converts the string to `{ ar, en: null }`.
3. The translation team fills the `en` values without code changes.

### 4.3 Config taxonomy changes
`config/regions.ts`, `config/subjects.ts`, `config/stages.ts`, `config/disciplines.ts` gain an `en` label alongside the Arabic one.

### 4.4 What does NOT change
- Folder structure
- File names
- Data service contract (the same `loadOverview()` returns the same shape)
- Component code
- JSON schema versions for numeric fields

The Arabic-first MVP and the bilingual Phase 2 share **the same architecture**. English is purely additive.

---

## 5. ترتيب الترحيل المقترح (Recommended Migration Sequence)

When Phase 2 begins, recommended order:

1. **Stand up the data service interface** behind a real implementation that still reads from JSON — proves the abstraction works without changing components.
2. **Migrate Reports first** — it's the most CMS-bound module and has the lowest risk.
3. **Migrate Impact second** — also mostly CMS, no live numbers to verify.
4. **Migrate the API-bound modules in dependency order**: Overview last (it depends on others), and the leaf modules (Engagement, Videos, Experiments, Teachers, Assessments, Care) first.
5. **Run dual-source for one cycle**: the data service can pull from JSON and API simultaneously, log discrepancies, and fail loudly. This catches regressions before cutover.
6. **Cut over** module by module, not all at once.
7. **Phase 2 English localization** runs as a parallel track from any point after step 1.

---

## 6. ملخص (Summary)

| Theme | Decision |
|-------|----------|
| Arabic-only MVP, JSON seed | ✅ |
| Architecture ready for API | ✅ — single `DataService` interface |
| Architecture ready for English | ✅ — i18n dictionary + logical CSS |
| Featured content is editorial | ✅ — moves to CMS, never to API |
| Numeric reconciliation across modules | ✅ — explicit shared sources flagged |
| Shared taxonomies | ✅ — single config files, referenced by id only |
| Migration is incremental | ✅ — module by module, dual-source cycle |

---

**End of migration notes. Proceed to `15-glossary.md` for the unified Arabic terminology.**
