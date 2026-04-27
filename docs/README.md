# E-School Executive Visibility Portal — Documentation Index

> **مشروع المدرسة الإلكترونية — بوابة العرض التنفيذي**
>
> A read-only, Arabic-only (MVP) executive showcase portal for the Ministry of Education and authorized strategic stakeholders.

This directory holds the implementation-ready content, data, and design specifications for the EVP MVP. Everything here is the source of truth for wireframes, UI development, and seed data. No code lives here — only specs.

---

## Scope at a glance

| Item | Decision |
|------|----------|
| Languages (MVP) | **Arabic only** (Modern Standard Arabic, formal ministerial register) |
| Direction | **RTL** throughout |
| Future bilingual support | Architecture-ready (single dictionary file, logical CSS, single-string seed fields) |
| Read-only | Yes — no editing, no admin portal in MVP |
| Authentication | Single authorized credential |
| Brand colors | Primary `#08798C`, Secondary `#71B36E`, Canvas `#FFFFFF` |
| Logo | Official E-School logo (Arabic wordmark + book/play mark) |
| Data source (MVP) | Versioned JSON seed files |
| Data source (future) | Swappable to real API or lightweight CMS |

---

## Document map

```
docs/
├── README.md                          ← you are here
├── 00-editorial-principles.md         Tone, register, numerals, dates, punctuation
│
├── shell/
│   ├── 01-global-shell.md             Header, sidebar, footer, common UI, common states
│   └── 02-login.md                    Login screen content
│
├── modules/                           One file per portal module
│   ├── 03-overview.md                 اللوحة التنفيذية
│   ├── 04-engagement.md               نشاط الطلاب وتفاعلهم
│   ├── 05-videos.md                   مكتبة الدروس المرئية
│   ├── 06-experiments.md              التجارب التفاعلية
│   ├── 07-teachers.md                 المعلمون والأداء الأكاديمي
│   ├── 08-assessments.md              التقييم وتقدّم التعلّم
│   ├── 09-care.md                     الدعم ورعاية الطلاب
│   ├── 10-impact.md                   الأثر الاستراتيجي والقيمة
│   └── 11-reports.md                  مركز التقارير والأدلة
│
└── data-spec/
    ├── 12-file-structure.md           Seed data folder layout
    ├── 13-contracts.md                TypeScript-style data contracts
    ├── 14-migration-notes.md          Which data should later come from API / CMS
    └── 15-glossary.md                 Unified Arabic terminology
```

---

## Module file template

Every module document under `docs/modules/` follows the same structure so they can be diffed and compared easily:

1. **عنوان الصفحة والوصف** — page title, hero subtitle, intro paragraph
2. **الأقسام** — section breakdown (what appears on the page and in what order)
3. **كتالوج المؤشرات (KPI Catalog)** — table of every metric with label, descriptor, unit, format, methodology
4. **محتوى البطاقات** — card titles, descriptions, micro-copy
5. **الأزرار والروابط (CTAs)** — every action label
6. **الحالات الفارغة والأخطاء** — empty / loading / error copy
7. **عينة بيانات أولية (Seed Data Sample)** — realistic JSON sample for the MVP
8. **ملاحظات الترحيل** — which fields are static, which should later become an API call, which belong in a future CMS

---

## How to use this documentation set

- **For wireframing:** read `00-editorial-principles.md`, then `shell/*`, then the relevant module file. Lay out the sections in the order specified.
- **For UI development:** treat every Arabic string as a key in `i18n/ar.json`. Never hardcode Arabic in components.
- **For seed data construction:** start with `data-spec/13-contracts.md` for the type shapes, then pull the sample JSON from each module file.
- **For copy review:** the assigned Arabic ministerial-tone reviewer signs off on each module file before it enters the UI.

---

## Editorial governance

| Role | Responsibility |
|------|----------------|
| Arabic editorial reviewer | Final sign-off on every Arabic string in every module file |
| Visual & brand owner | Ensures `#08798C` / `#71B36E` / white discipline and correct logo usage |
| Data owner | Validates that seed-data figures form a coherent, defensible national narrative |
| Demo presenter | Owns the 10-minute walkthrough script derived from these files |

---

## Versioning

This documentation set is versioned alongside the codebase in git. Any change to a KPI label, descriptor, or seed-data figure must be made in the corresponding `.md` file first, reviewed, and only then reflected in `i18n/ar.json` or the seed JSON.

**Current version:** `0.1.0-foundations` — covers shell, login, and editorial principles. Module and data-spec documents follow in subsequent commits.
