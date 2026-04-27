# 11 — Module: Reports & Evidence Center
## مركز التقارير والأدلة

The eighth and final stop in the narrative arc — the **documentary close**. Its purpose is to convert the visit into something the stakeholder can leave with: a curated library of downloadable reports, case studies, methodology notes, and infographics that defend every figure shown in the rest of the portal.

---

## 1. عنوان الصفحة والوصف

| Element | Arabic |
|---------|--------|
| Page title (top bar) | مركز التقارير والأدلة |
| Hero heading | مكتبة التقارير والأدلة الموثّقة |
| Hero subtitle | مرجعية موثّقة للتقارير السنوية والفصلية، ودراسات الحالة، والمنهجيات، والإنفوغرافيك التي تدعم مؤشرات المشروع. |
| Last-update line | "آخر إضافة: {date} — {time} (توقيت السعودية)" |

---

## 2. الأقسام (Page Sections, in render order)

1. **شريط الترحيب** — page hero + last-added timestamp + search bar.
2. **مؤشرات المكتبة** — 4 KPI tiles (total reports, added this term, total downloads, languages).
3. **شريط التصفية** — category + year + format filters.
4. **تقارير مختارة** — featured-reports gallery (3–4 cards).
5. **مكتبة التقارير الكاملة** — full list (table or rich list).
6. **دراسات الحالة** — case-studies highlight section.
7. **إنفوغرافيك** — visual one-pagers gallery.
8. **خلاصة الجولة** — closing card with summary + return-to-overview CTA.

---

## 3. كتالوج المؤشرات (KPI Catalog)

### Hero KPIs (4 tiles)

| # | Short label | Extended descriptor | Unit | Format | Sample value | Trend |
|---|-------------|---------------------|------|--------|--------------|-------|
| R1 | إجمالي التقارير المتاحة | عدد التقارير المنشورة في المكتبة عبر جميع الفئات | تقرير | full number `64` | 64 | +8 |
| R2 | المُضاف هذا الفصل | عدد التقارير المضافة خلال الفصل الدراسي الحالي | تقرير | full number `8` | 8 | — |
| R3 | إجمالي مرات التحميل | عدد مرات تحميل التقارير منذ إطلاق المكتبة | تحميل | full number `142,800` | 142,800 | +6.4٪ |
| R4 | اللغات المتاحة | عدد اللغات التي تتوفر بها التقارير حالياً | لغة | full number `1` | 1 | — |

**Footnote:** "اللغة الإنجليزية ضمن خارطة الطريق وستُضاف في مرحلة لاحقة وفقاً للخطة الاستراتيجية."

### Section-level breakdown (within filters)

| Category id | Arabic label | Sample count |
|-------------|--------------|--------------|
| `annual` | تقارير سنوية | 6 |
| `term` | تقارير فصلية | 12 |
| `executive-brief` | ملخصات تنفيذية | 8 |
| `case-study` | دراسات حالة | 14 |
| `methodology` | منهجيات | 9 |
| `alignment` | تقارير مواءمة استراتيجية | 5 |
| `infographic` | إنفوغرافيك | 10 |

---

## 4. محتوى البطاقات والأقسام

### Card — شريط التصفية
- Filters (all default to "الكل"):
  - "الفئة" (categories above)
  - "السنة" (2020 → 2026)
  - "الصيغة" (PDF, إنفوغرافيك)
- Search input placeholder: "ابحث في عناوين التقارير والكلمات المفتاحية…"
- Clear-filter link: "مسح التصفية"

### Card — تقارير مختارة (Featured)
- Title: تقارير مختارة
- Each card: cover thumbnail (placeholder), title, category badge, publication date, file size, "تحميل" button
- Sample featured set (locked for the demo):
  - "التقرير السنوي 2025 — أداء المدرسة الإلكترونية" — تقرير سنوي · 14 ديسمبر 2025 · 6.8 ميغابايت
  - "ملخص تنفيذي — الربع الأول 2026" — ملخص تنفيذي · 20 أبريل 2026 · 1.4 ميغابايت
  - "دراسة حالة: تقلّص الفجوة الرقمية في المناطق الريفية" — دراسة حالة · 8 مارس 2026 · 3.2 ميغابايت
  - "إنفوغرافيك: المدرسة الإلكترونية بالأرقام 2026" — إنفوغرافيك · 27 أبريل 2026 · 0.9 ميغابايت

### Card — مكتبة التقارير الكاملة (List view)
- Title: مكتبة التقارير الكاملة
- Columns:
  - "العنوان"
  - "الفئة"
  - "تاريخ النشر"
  - "الصيغة"
  - "الحجم"
  - "" (action: "تحميل")
- Sort by: published date, descending (default).
- Pagination: 10 per page.

### Card — دراسات الحالة
- Title: دراسات الحالة
- Insight: "دراسات حالة موثّقة تُترجم الأرقام إلى قصص أثر ميداني."
- Items (excerpt):
  - "تقلّص الفجوة الرقمية في المناطق الريفية"
  - "أثر التجارب التفاعلية على نسبة الإتقان"
  - "تجربة المتعلم في المرحلة الابتدائية مع المنصة"
  - "نموذج تطوير المعلم رقمياً"
- Each item: title + 2-line abstract + "قراءة الدراسة" link.

### Card — إنفوغرافيك
- Title: إنفوغرافيك
- Gallery of visual one-pagers, each with thumbnail and title.
- Sample items:
  - "المدرسة الإلكترونية بالأرقام 2026"
  - "التغطية الجغرافية والشمول التعليمي"
  - "خارطة المواد الدراسية والمراحل"
  - "أبرز محطات المشروع 2020–2026"

### Card — خلاصة الجولة
- Title: خلاصة جولة العرض التنفيذي
- Body: "اطّلعتم خلال هذه الجولة على المؤشرات الوطنية الكبرى للمدرسة الإلكترونية، والمحتوى التعليمي، والكوادر، ومخرجات التعلّم، ومنظومة الدعم، والأثر الاستراتيجي. تتوفر التقارير الكاملة للتحميل والمراجعة."
- Two buttons:
  - Primary: "تحميل الملخص التنفيذي" → triggers download of the executive brief PDF.
  - Secondary: "العودة إلى اللوحة التنفيذية" → `/portal/overview`

---

## 5. الأزرار والروابط (CTAs)

Inherited from `shell/01-global-shell.md`. Module-specific:
- "تحميل" — on every report row.
- "قراءة الدراسة" — opens a case-study detail view (lightweight in MVP: a static PDF or a content page).
- "تحميل الملخص التنفيذي" — closing CTA.

---

## 6. الحالات الفارغة والأخطاء (Module-Specific)

| Context | Copy |
|---------|------|
| Library empty (overall) | "لم تُضَف تقارير بعد." |
| Filter yields no results | "لا توجد تقارير مطابقة لمعايير التصفية الحالية." |
| Search no match | "لم يُعثر على نتائج. يُرجى تعديل كلمات البحث." |
| Download failure | "تعذّر تحميل التقرير. يُرجى المحاولة مرة أخرى." |
| Featured list empty | "لم تُحدَّد تقارير مختارة لهذه الفترة." |
| Case studies empty | "لم تُنشر دراسات حالة في هذه الفئة بعد." |

Generic states inherited from the shell document.

---

## 7. عينة بيانات أولية (Seed Data Sample)

```jsonc
// data/reports.json
{
  "lastAddedAt": "2026-04-27T09:14:00+03:00",
  "heroKpis": [
    { "id": "total-reports",       "label": "إجمالي التقارير المتاحة", "value": 64,     "displayValue": "64",      "unit": "تقرير", "trend": { "direction": "up",  "deltaPercent": 0, "vsLabel": "+8" } },
    { "id": "added-this-term",     "label": "المُضاف هذا الفصل",       "value": 8,      "displayValue": "8",       "unit": "تقرير", "trend": { "direction": "flat","deltaPercent": 0 } },
    { "id": "total-downloads",     "label": "إجمالي مرات التحميل",     "value": 142800, "displayValue": "142,800", "unit": "تحميل", "trend": { "direction": "up",  "deltaPercent": 6.4 } },
    { "id": "languages-available", "label": "اللغات المتاحة",          "value": 1,      "displayValue": "1",       "unit": "لغة",   "trend": { "direction": "flat","deltaPercent": 0 } }
  ],
  "categories": [
    { "id": "annual",          "label": "تقارير سنوية",            "count":  6 },
    { "id": "term",            "label": "تقارير فصلية",            "count": 12 },
    { "id": "executive-brief", "label": "ملخصات تنفيذية",          "count":  8 },
    { "id": "case-study",      "label": "دراسات حالة",             "count": 14 },
    { "id": "methodology",     "label": "منهجيات",                 "count":  9 },
    { "id": "alignment",       "label": "تقارير مواءمة استراتيجية","count":  5 },
    { "id": "infographic",     "label": "إنفوغرافيك",              "count": 10 }
  ],
  "featuredIds": [
    "annual-report-2025",
    "exec-brief-q1-2026",
    "case-rural-digital-gap",
    "info-numbers-2026"
  ],
  "reports": [
    {
      "id": "annual-report-2025",
      "title": "التقرير السنوي 2025 — أداء المدرسة الإلكترونية",
      "categoryId": "annual",
      "categoryLabel": "تقرير سنوي",
      "publishedDate": "2025-12-14",
      "format": "PDF",
      "fileSizeMb": 6.8,
      "fileUrl": "/sample-reports/annual-report-2025.pdf",
      "thumbnailKey": "annual-report-2025",
      "abstract": "التقرير السنوي الشامل لأداء المنصة عبر جميع الوحدات والمؤشرات الوطنية."
    },
    {
      "id": "exec-brief-q1-2026",
      "title": "ملخص تنفيذي — الربع الأول 2026",
      "categoryId": "executive-brief",
      "categoryLabel": "ملخص تنفيذي",
      "publishedDate": "2026-04-20",
      "format": "PDF",
      "fileSizeMb": 1.4,
      "fileUrl": "/sample-reports/exec-brief-q1-2026.pdf",
      "thumbnailKey": "exec-brief-q1-2026",
      "abstract": "ملخص موجز للأرقام الكبرى والمستجدات الاستراتيجية للربع الأول من العام."
    },
    {
      "id": "case-rural-digital-gap",
      "title": "دراسة حالة: تقلّص الفجوة الرقمية في المناطق الريفية",
      "categoryId": "case-study",
      "categoryLabel": "دراسة حالة",
      "publishedDate": "2026-03-08",
      "format": "PDF",
      "fileSizeMb": 3.2,
      "fileUrl": "/sample-reports/case-rural-digital-gap.pdf",
      "thumbnailKey": "case-rural-digital-gap",
      "abstract": "تتبع لتقلّص فجوة الإتاحة بين الحضر والريف عبر فترة ثلاث سنوات."
    },
    {
      "id": "info-numbers-2026",
      "title": "إنفوغرافيك: المدرسة الإلكترونية بالأرقام 2026",
      "categoryId": "infographic",
      "categoryLabel": "إنفوغرافيك",
      "publishedDate": "2026-04-27",
      "format": "PDF",
      "fileSizeMb": 0.9,
      "fileUrl": "/sample-reports/info-numbers-2026.pdf",
      "thumbnailKey": "info-numbers-2026",
      "abstract": "صفحة بصرية واحدة تُلخّص أبرز الأرقام الوطنية للمشروع عام 2026."
    },
    {
      "id": "case-experiments-mastery",
      "title": "دراسة حالة: أثر التجارب التفاعلية على نسبة الإتقان",
      "categoryId": "case-study",
      "categoryLabel": "دراسة حالة",
      "publishedDate": "2026-02-18",
      "format": "PDF",
      "fileSizeMb": 2.6,
      "fileUrl": "/sample-reports/case-experiments-mastery.pdf",
      "thumbnailKey": "case-experiments-mastery",
      "abstract": "قياس الفارق في نسب الإتقان بين المتعلمين الذين استخدموا التجارب التفاعلية وغيرهم."
    },
    {
      "id": "methodology-mastery-index",
      "title": "منهجية احتساب مؤشر الإتقان الوطني",
      "categoryId": "methodology",
      "categoryLabel": "منهجية",
      "publishedDate": "2025-11-02",
      "format": "PDF",
      "fileSizeMb": 1.1,
      "fileUrl": "/sample-reports/methodology-mastery-index.pdf",
      "thumbnailKey": "methodology-mastery-index",
      "abstract": "وثيقة المنهجية المعتمدة لاحتساب مؤشر الإتقان الوطني وتفسير نتائجه."
    },
    {
      "id": "methodology-economic-evaluation",
      "title": "منهجية تقييم الكفاءة الاقتصادية",
      "categoryId": "methodology",
      "categoryLabel": "منهجية",
      "publishedDate": "2025-10-12",
      "format": "PDF",
      "fileSizeMb": 1.8,
      "fileUrl": "/sample-reports/methodology-economic-evaluation.pdf",
      "thumbnailKey": "methodology-economic-evaluation",
      "abstract": "إطار احتساب كلفة المتعلم والقيمة الاقتصادية للمشروع."
    },
    {
      "id": "alignment-sdg4-2025",
      "title": "تقرير مواءمة المشروع مع الهدف الرابع للتنمية المستدامة",
      "categoryId": "alignment",
      "categoryLabel": "تقرير مواءمة",
      "publishedDate": "2025-09-30",
      "format": "PDF",
      "fileSizeMb": 2.1,
      "fileUrl": "/sample-reports/alignment-sdg4-2025.pdf",
      "thumbnailKey": "alignment-sdg4-2025",
      "abstract": "مراجعة سنوية لمواءمة المشروع مع الغايات العشر للهدف الرابع."
    },
    {
      "id": "alignment-vision-2030",
      "title": "تقرير مواءمة المشروع مع رؤية المملكة 2030",
      "categoryId": "alignment",
      "categoryLabel": "تقرير مواءمة",
      "publishedDate": "2025-09-15",
      "format": "PDF",
      "fileSizeMb": 1.9,
      "fileUrl": "/sample-reports/alignment-vision-2030.pdf",
      "thumbnailKey": "alignment-vision-2030",
      "abstract": "مراجعة محاور رؤية المملكة 2030 ذات الصلة وأثر المشروع فيها."
    },
    {
      "id": "annual-report-2024",
      "title": "التقرير السنوي 2024",
      "categoryId": "annual",
      "categoryLabel": "تقرير سنوي",
      "publishedDate": "2024-12-22",
      "format": "PDF",
      "fileSizeMb": 6.2,
      "fileUrl": "/sample-reports/annual-report-2024.pdf",
      "thumbnailKey": "annual-report-2024",
      "abstract": "التقرير السنوي الشامل لعام 2024."
    }
    // ... remaining 54 entries in production seed
  ]
}
```

> **Note on `fileUrl`:** in the MVP, sample PDFs are served from a local `/sample-reports/` folder bundled with the portal. In Phase 2, these are replaced with signed URLs from the document store.

### Latest reports projection (used by the Overview module's "أحدث التقارير" widget)

The Overview's `latestReportsRef` simply projects the top 3 reports by `publishedDate` from this same `reports.json` — no separate file needed.

---

## 8. ملاحظات الترحيل (Migration Notes — Static / API / CMS)

| Field | MVP source | Phase 2 destination | Reason |
|-------|------------|---------------------|--------|
| `heroKpis.totalReports / addedThisTerm / languagesAvailable` | static seed | **CMS** (auto-derived from library count) | Library is content-managed |
| `heroKpis.totalDownloads` | static | **API** (download analytics) | Live counter |
| `categories[*]` | static config | **shared config or CMS** | Taxonomy stable, but editorially controlled |
| `featuredIds` | static | **CMS** | Editorial selection — must be human-curated |
| `reports[*]` (entire library) | static seed | **CMS / document store** | Each report is a content item with metadata + binary asset |
| `reports[*].fileUrl` | static local path | **signed URL from CDN/document store** | Authenticated download URLs in production |
| `reports[*].abstract` | static Arabic string | **CMS** | Editorial copy |

**Rule of thumb for this module:**
- **The library is the most CMS-bound surface in the portal.** Every report is a content item with metadata, abstract, and a binary asset.
- **Download counts are the only API-driven field** — everything else is editorial.
- The Overview's "latest reports" widget reads from this same source — no duplication.
- File URLs must be **authenticated** in production (the portal is gated; downloadable artifacts must respect the same gate).

---

## 9. اعتبارات إضافية (Additional Considerations)

### 9.1 Print / preview behavior
- Each report card has an optional "معاينة" action that opens a lightweight PDF viewer in a modal. In MVP, this can be deferred — direct download is sufficient for the demo.
- The closing card's executive-brief download is the most-used button on the entire portal in a typical demo flow — its asset must always be the freshest.

### 9.2 Telemetry (Phase 2)
- Each download triggers a telemetry event (`reportId`, `userId`, `timestamp`). The aggregate becomes `totalDownloads`.
- A "most downloaded" widget can be added in a future iteration — out of scope for MVP.

### 9.3 Authentication of downloads
- Every report URL is gated by the same session cookie that protects the portal. Anonymous direct-link access must return 401.

---

**End of Reports & Evidence Center module — and end of all 9 module documents. Proceed to `data-spec/*` in the final commit.**
