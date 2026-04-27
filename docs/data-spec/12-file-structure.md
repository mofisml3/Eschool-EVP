# 12 — Seed Data File Structure
## هيكل ملفات البيانات الأولية

This document defines the folder layout, file naming, and loading strategy for the MVP seed data. The objective is one consistent rule: **every Arabic value lives in `i18n/ar.json`, every measured value lives in `data/*.json`, every taxonomy lives in `config/*.ts`.** No exceptions.

---

## 1. الهدف من هذا الهيكل (Goal)

- **MVP:** the portal runs entirely from versioned JSON seed files in the repo. No backend, no database, no CMS.
- **Phase 2:** the same UI reads from real APIs and a CMS without changing component code. Achieved by routing every read through a thin data-service abstraction (see `13-contracts.md`).
- **Single source of truth per concept:** regional names, subject names, and stage names exist in exactly one file. Other modules reference them by id.

---

## 2. التخطيط العام (Top-Level Layout)

```
src/
├── i18n/
│   └── ar.json                          ← every Arabic UI string
│
├── config/
│   ├── regions.ts                       ← 13 administrative regions taxonomy
│   ├── subjects.ts                      ← 24 subjects taxonomy
│   ├── stages.ts                        ← 3 stages taxonomy (primary/middle/secondary)
│   ├── disciplines.ts                   ← 7 experiment disciplines taxonomy
│   ├── periods.ts                       ← standard period filter options
│   └── thresholds.ts                    ← performance bands, SLA thresholds, etc.
│
├── data/
│   ├── overview.json                    ← Module 03
│   ├── engagement.json                  ← Module 04
│   ├── engagement-daily.json
│   ├── engagement-heatmap.json
│   ├── engagement-regions.json
│   ├── engagement-trend.json
│   ├── videos.json                      ← Module 05
│   ├── videos-subjects.json
│   ├── videos-featured.json
│   ├── videos-top-watched.json
│   ├── videos-watch-trend.json
│   ├── experiments.json                 ← Module 06
│   ├── experiments-featured.json
│   ├── experiments-interactions-trend.json
│   ├── teachers.json                    ← Module 07
│   ├── teachers-hours-trend.json
│   ├── assessments.json                 ← Module 08
│   ├── assessments-year-trend.json
│   ├── care.json                        ← Module 09
│   ├── care-tickets-trend.json
│   ├── impact.json                      ← Module 10
│   ├── reports.json                     ← Module 11
│   └── shared/
│       ├── regions.json                 ← regional metrics shared across modules
│       └── mastery-by-subject.json      ← cross-referenced by overview + assessments
│
├── public/
│   ├── sample-media/                    ← placeholder MP4s for featured lessons/experiments
│   └── sample-reports/                  ← bundled PDFs for the Reports module
│
└── services/
    └── dataService.ts                   ← the swappable read seam (mock in MVP, API in Phase 2)
```

> The `src/` root is illustrative; the actual paths depend on the chosen framework (Next.js / Vite + React). What matters is the **separation of concerns**: i18n, config, data, public assets, and the data service each live in their own folder.

---

## 3. اصطلاحات التسمية (Naming Conventions)

| Convention | Rule | Example |
|------------|------|---------|
| File names | kebab-case, English | `engagement-heatmap.json` |
| Module-scoped data | prefix with module slug | `videos-top-watched.json` |
| Cross-module data | placed in `data/shared/` | `shared/regions.json` |
| Time-series data | suffix `-trend.json` or `-daily.json` | `assessments-year-trend.json` |
| Heavy tabular data | suffix the dimension | `videos-subjects.json` |
| Sample binary assets | placed in `public/sample-*/` | `sample-reports/annual-report-2025.pdf` |

**Rule:** every JSON file's name appears verbatim in at least one module document under `docs/modules/`. If a file name is not documented there, it should not exist.

---

## 4. مسؤوليات الملفات (File Responsibilities)

### 4.1 `i18n/ar.json` — UI strings only
- Every Arabic string visible to the user must come from here.
- Organized by namespace: `login`, `shell`, `overview`, `engagement`, `videos`, etc.
- Never contains numbers, dates, or computed values.

### 4.2 `config/*.ts` — Taxonomies and policy thresholds
Treated as code (TypeScript) so it gets type-checking and autocomplete.
- `regions.ts` — array of `{ id, name, /* coordinates for map */ }`
- `subjects.ts` — array of `{ id, name, iconKey, stageIds }`
- `stages.ts` — `[{ id: 'primary', label: 'ابتدائي' }, ...]`
- `disciplines.ts` — array for experiment disciplines
- `periods.ts` — period filter options
- `thresholds.ts` — performance band cutoffs (60/70/80/90), SLA targets, etc.

These are stable across modules. Other files reference items by id only.

### 4.3 `data/*.json` — Seed data per module
- Each module's main file (e.g., `data/overview.json`) holds:
  - `lastUpdatedAt` timestamp
  - `period` block
  - `heroKpis[]`
  - inline section data for small datasets
  - `*Ref` strings pointing to heavier datasets in their own files

### 4.4 `data/shared/*.json` — Data referenced by multiple modules
- `shared/regions.json` — regional metrics consumed by Overview, Engagement, Teachers, Assessments
- `shared/mastery-by-subject.json` — used by Overview and Assessments

These files are loaded once and cached. They are the only place a regional metric is defined.

### 4.5 `public/sample-media/` and `public/sample-reports/`
- Featured lesson previews (`.mp4`)
- Featured experiment previews (`.mp4`)
- Bundled report PDFs

These are bundled with the build for the MVP. In Phase 2, the URLs are replaced with signed CDN/document-store URLs; component code does not change.

### 4.6 `services/dataService.ts` — The swappable seam
A single module that exports typed read functions:
- `loadOverview(): Promise<OverviewPayload>`
- `loadEngagement(period): Promise<EngagementPayload>`
- ... etc.

In MVP these functions read JSON files. In Phase 2 they call APIs. The component code never changes.

---

## 5. استراتيجية التحميل (Loading Strategy in MVP)

1. On portal init, load `i18n/ar.json` and `config/*.ts`.
2. On each module mount, the data service calls the relevant `load*()` function.
3. Heavy datasets referenced by `*Ref` strings are loaded on demand (when their card scrolls into view) — keeps initial payload small.
4. All loads are cached in memory for the session; revisiting a module does not re-fetch.
5. The "تحديث البيانات" button bypasses the cache and re-loads from disk.

> In MVP this is mostly cosmetic — JSON files are tiny. The pattern matters because it mirrors the Phase 2 API caching strategy.

---

## 6. التحقق من السلامة (Integrity Checks)

A small validation step (run as part of the build) ensures:

- Every `subjectId`, `regionId`, `stageId`, `disciplineId` referenced in `data/*.json` exists in the corresponding `config/*.ts`.
- Every `*Ref` path points to an existing file.
- Every Arabic string in `data/*.json` is also represented as a key in `i18n/ar.json` (so Phase 2 English is purely additive).
- Every `methodologyKey` referenced by a KPI exists as a methodology entry (in CMS or `i18n/ar.json`).
- Every `featuredIds` value in `reports.json` matches a real `report.id`.

**Failed integrity check = build fail.** This prevents data drift across modules.

---

## 7. الإصدارات (Versioning)

- Every `data/*.json` file carries a `_meta` block:
  ```jsonc
  {
    "_meta": {
      "schemaVersion": "0.1.0",
      "seededAt": "2026-04-27",
      "scenario": "default-mvp-demo"
    },
    // ... rest of the payload
  }
  ```
- Multiple seed scenarios can coexist (e.g., `default-mvp-demo`, `growth-narrative`, `equity-narrative`) — useful for piloting different demo storylines.
- The active scenario is controlled by an env variable: `EVP_SEED_SCENARIO=default-mvp-demo`.
- In Phase 2, `_meta` survives in the API response wrapper for traceability.

---

## 8. الجاهزية للنسخة الإنجليزية (Phase 2 — English Readiness)

- Adding English does not change this file structure. It changes only:
  - `i18n/ar.json` → `i18n/{ar,en}.json` (add a sibling)
  - In `data/*.json`, fields like `"title": "…"` migrate to `"title": { "ar": "…", "en": "…" }` via a one-time migration script (see `14-migration-notes.md`).
  - `config/*.ts` taxonomy entries gain an `en` label alongside the Arabic one.
- Folder paths, file names, and the data-service contract remain identical.

---

## 9. ملخص الالتزامات (Summary of Commitments)

- ✅ Arabic UI strings → `i18n/ar.json` only
- ✅ Numeric/measured values → `data/*.json` only
- ✅ Taxonomies and thresholds → `config/*.ts` only
- ✅ Heavy datasets → their own files, referenced by `*Ref`
- ✅ Cross-module data → `data/shared/`
- ✅ All reads → through `services/dataService.ts`
- ✅ Build-time integrity check → fails the build on drift
- ✅ Same structure works for Phase 2 — only file contents change

---

**End of file structure. Proceed to `13-contracts.md` for the typed shapes of every payload.**
