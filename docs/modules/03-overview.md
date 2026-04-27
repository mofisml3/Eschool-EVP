# 03 — Module: Executive Overview
## اللوحة التنفيذية

The landing page after login. Highest-stakes screen of the portal — must communicate national scale, evidence of activity, and strategic confidence within 10 seconds of viewing. Every other module is reachable in two clicks from here.

---

## 1. عنوان الصفحة والوصف

| Element | Arabic |
|---------|--------|
| Page title (top bar) | اللوحة التنفيذية |
| Hero heading | المؤشرات الوطنية الكبرى لمشروع المدرسة الإلكترونية |
| Hero subtitle | عرضٌ موجز للأداء الوطني والتغطية الجغرافية ومخرجات التعلّم وأثر المشروع. |
| Last-update line | "آخر تحديث للبيانات: {date} — {time} (توقيت السعودية)" |

---

## 2. الأقسام (Page Sections, in render order)

1. **شريط الترحيب** — page hero + last-update timestamp + period filter.
2. **الأرقام الكبرى** — 6 hero KPI tiles in a single row (wraps on smaller screens).
3. **التغطية الجغرافية الوطنية** — Saudi map of the 13 administrative regions with regional metrics.
4. **تفاعل المتعلمين عبر الزمن** — 12-month MAU trend line chart.
5. **حجم المحتوى التعليمي** — content footprint summary (videos + experiments + hours + subjects).
6. **مستوى الإتقان الوطني** — mastery rate by subject (horizontal bar chart).
7. **لمحة الرعاية والدعم** — support snapshot card.
8. **المواءمة الاستراتيجية** — alignment teaser (Vision 2030 + SDG 4) → links to Impact module.
9. **أحدث التقارير المنشورة** — 3 most recent items from Reports center.
10. **الإجراء التالي** — narrative-arc CTA: "الانتقال إلى نشاط الطلاب وتفاعلهم".

---

## 3. كتالوج المؤشرات (KPI Catalog)

### Hero KPIs (the 6 tiles)

| # | Short label | Extended descriptor | Unit | Format | MoM trend (sample) |
|---|-------------|---------------------|------|--------|--------------------|
| O1 | إجمالي المتعلمين الفاعلين | عدد المتعلمين الذين سجّلوا نشاطاً واحداً على الأقل خلال آخر 30 يوماً | متعلم | abbreviated `2.48 مليون` | +7.4٪ |
| O2 | الدروس المرئية المتاحة | إجمالي الدروس المرئية المنشورة في مكتبة المحتوى | درس | abbreviated `48.7 ألف` | +1.2٪ |
| O3 | التجارب التفاعلية | إجمالي التجارب والمحاكاة الرقمية المتاحة | تجربة | full number `3,420` | +3.5٪ |
| O4 | المعلمون المساهمون | المعلمون الذين أسهموا بمحتوى أو تقييم خلال الفترة | معلم | full number `86,500` | +0.9٪ |
| O5 | التغطية الجغرافية | عدد المناطق الإدارية المُغطّاة من إجمالي 13 | منطقة | ratio `13 / 13` | ثابت |
| O6 | متوسط الإتقان الوطني | المتوسط المرجّح لنسب الإتقان عبر جميع المواد والمراحل | نسبة | percent `78.4٪` | +1.8 نقطة |

**Methodology note (shown in tooltip):** "تُحتسب المؤشرات بناءً على بيانات مشروع المدرسة الإلكترونية للفترة المحددة، مع المقارنة بالفترة السابقة المماثلة."

### Secondary KPIs (within their respective sections, not in hero)

| # | Section | Short label | Sample value |
|---|---------|-------------|--------------|
| O7 | الدعم | متوسط زمن الاستجابة للدعم | 14 دقيقة |
| O8 | الدعم | نسبة الالتزام بمعايير الخدمة | 98.6٪ |
| O9 | المواءمة | غايات هدف الأمم المتحدة الرابع المُغطّاة | 8 من 10 |
| O10 | المواءمة | محاور رؤية المملكة 2030 المُواءَمة | 4 محاور |

---

## 4. محتوى البطاقات والأقسام

### Card — التغطية الجغرافية الوطنية
- Title: التغطية الجغرافية على مستوى المملكة
- Insight line: "يصل المشروع إلى جميع المناطق الإدارية الـ13، بأعلى كثافة في منطقة الرياض."
- Region tooltip: `{region_name} — {learners_count} متعلم · {schools_count} مدرسة · إتقان {mastery}٪`
- Legend: "تغطية كاملة"، "تغطية مرتفعة"، "تغطية متوسطة"

### Card — تفاعل المتعلمين عبر الزمن
- Title: نمو المتعلمين النشطين شهرياً
- Period: "آخر 12 شهراً"
- Insight: "نمو متواصل في عدد المتعلمين النشطين، بزيادة بلغت 23.6٪ خلال العام."
- Y-axis label: المتعلمون النشطون شهرياً
- Series color: primary teal `#08798C`

### Card — حجم المحتوى التعليمي
- Title: حجم المحتوى التعليمي المتاح
- Sub-cards:
  - "48,750 درساً مرئياً"
  - "9,820 ساعة محتوى"
  - "3,420 تجربة تفاعلية"
  - "24 مادة دراسية"
- Footer link: "استعراض مكتبة الدروس" → `/portal/content/videos`

### Card — مستوى الإتقان الوطني
- Title: متوسط الإتقان حسب المادة
- Insight: "أعلى مستويات الإتقان في اللغة العربية والدراسات الإسلامية، يليها العلوم والرياضيات."
- Subjects displayed (sample): اللغة العربية، الدراسات الإسلامية، العلوم، الرياضيات، اللغة الإنجليزية، الاجتماعيات.
- Footer link: "تفاصيل التقييم وتقدّم التعلّم" → `/portal/academics/assessments`

### Card — لمحة الرعاية والدعم
- Title: لمحة عن الدعم ورعاية الطلاب
- Body lines:
  - "متوسط زمن الاستجابة: 14 دقيقة"
  - "نسبة الالتزام بمعايير الخدمة: 98.6٪"
  - "استفسارات معالجة هذا الشهر: 124,800"
- Footer link: "الانتقال إلى وحدة الدعم" → `/portal/care`

### Card — المواءمة الاستراتيجية
- Title: مواءمة استراتيجية مع المستهدفات الوطنية والدولية
- Body lines:
  - "8 من 10 غايات تابعة لهدف الأمم المتحدة الرابع للتعليم"
  - "مواءمة مع 4 محاور من رؤية المملكة 2030 ذات الصلة بالتعليم"
- Footer link: "تفاصيل الأثر الاستراتيجي" → `/portal/impact`

### Card — أحدث التقارير المنشورة
- Title: أحدث التقارير
- Items: 3 most recent reports (title, date, file size, "تحميل" link).
- Footer link: "مركز التقارير والأدلة" → `/portal/reports`

### Card — الإجراء التالي (Narrative arc)
- Title: تابع جولة العرض التنفيذي
- Body: "ابدأ من حضور المتعلمين وتفاعلهم اليومي مع المنصة."
- Primary button: "الانتقال إلى نشاط الطلاب وتفاعلهم" → `/portal/engagement`

---

## 5. الأزرار والروابط (CTAs)

| Purpose | Label |
|---------|-------|
| Refresh data | تحديث البيانات |
| Change period | تغيير الفترة |
| Open methodology | منهجية احتساب المؤشر |
| Open KPI details | عرض التفاصيل |
| Drill into module | الانتقال إلى {module name} |
| Open report | فتح التقرير |
| Download report | تحميل بصيغة PDF |
| Continue narrative arc | التالي |

---

## 6. الحالات الفارغة والأخطاء (Module-Specific)

| Context | Copy |
|---------|------|
| All KPIs unavailable | "لا تتوفر بيانات اللوحة التنفيذية في الفترة المحددة." |
| Map data missing for a region | "بيانات هذه المنطقة غير متوفرة حالياً." |
| Trend chart no data | "لا توجد بيانات كافية لرسم اتجاه الفترة." |
| Reports widget empty | "لم تُنشر تقارير حديثة بعد." |
| KPI calculation pending | "جارٍ احتساب المؤشر…" |

Generic loading and error copy is inherited from `shell/01-global-shell.md`.

---

## 7. عينة بيانات أولية (Seed Data Sample)

The Overview page assembles its data from a single JSON file `data/overview.json`. Heavier datasets (regional, trend, mastery-by-subject) live in their own files and are referenced by key.

```jsonc
// data/overview.json
{
  "lastUpdatedAt": "2026-04-27T09:14:00+03:00",
  "period": {
    "id": "last-30-days",
    "label": "آخر 30 يوماً",
    "rangeStart": "2026-03-28",
    "rangeEnd": "2026-04-27"
  },
  "heroKpis": [
    {
      "id": "active-learners",
      "label": "إجمالي المتعلمين الفاعلين",
      "value": 2480000,
      "displayValue": "2.48 مليون",
      "unit": "متعلم",
      "trend": { "direction": "up", "deltaPercent": 7.4, "vsLabel": "مقارنة بالفترة السابقة" },
      "methodologyKey": "active-learners"
    },
    {
      "id": "video-lessons",
      "label": "الدروس المرئية المتاحة",
      "value": 48750,
      "displayValue": "48.7 ألف",
      "unit": "درس",
      "trend": { "direction": "up", "deltaPercent": 1.2, "vsLabel": "مقارنة بالفترة السابقة" },
      "methodologyKey": "video-lessons"
    },
    {
      "id": "interactive-experiments",
      "label": "التجارب التفاعلية",
      "value": 3420,
      "displayValue": "3,420",
      "unit": "تجربة",
      "trend": { "direction": "up", "deltaPercent": 3.5, "vsLabel": "مقارنة بالفترة السابقة" },
      "methodologyKey": "interactive-experiments"
    },
    {
      "id": "contributing-teachers",
      "label": "المعلمون المساهمون",
      "value": 86500,
      "displayValue": "86,500",
      "unit": "معلم",
      "trend": { "direction": "up", "deltaPercent": 0.9, "vsLabel": "مقارنة بالفترة السابقة" },
      "methodologyKey": "contributing-teachers"
    },
    {
      "id": "geographic-coverage",
      "label": "التغطية الجغرافية",
      "value": 13,
      "displayValue": "13 / 13",
      "unit": "منطقة",
      "trend": { "direction": "flat", "deltaPercent": 0, "vsLabel": "ثابتة" },
      "methodologyKey": "geographic-coverage"
    },
    {
      "id": "national-mastery",
      "label": "متوسط الإتقان الوطني",
      "value": 78.4,
      "displayValue": "78.4٪",
      "unit": "نسبة",
      "trend": { "direction": "up", "deltaPercent": 1.8, "vsLabel": "نقاط مقارنة بالفترة السابقة" },
      "methodologyKey": "national-mastery"
    }
  ],
  "regionalFootprintRef": "data/regions.json",
  "engagementTrendRef": "data/engagement-trend.json",
  "contentFootprint": {
    "videoLessons": 48750,
    "contentHours": 9820,
    "interactiveExperiments": 3420,
    "subjectsCovered": 24
  },
  "masteryBySubjectRef": "data/mastery-by-subject.json",
  "supportSnapshot": {
    "averageResponseMinutes": 14,
    "slaAdherencePercent": 98.6,
    "ticketsHandledThisMonth": 124800
  },
  "strategicAlignment": {
    "sdg4TargetsCovered": 8,
    "sdg4TargetsTotal": 10,
    "vision2030PillarsAligned": 4
  },
  "latestReportsRef": "data/reports.json#latest"
}
```

### Sample regional footprint (excerpt — `data/regions.json`)

```jsonc
[
  { "id": "riyadh",   "name": "الرياض",        "learners": 620000, "schools": 6800, "masteryPercent": 80.1, "coverage": "كاملة" },
  { "id": "makkah",   "name": "مكة المكرمة",   "learners": 510000, "schools": 5400, "masteryPercent": 78.6, "coverage": "كاملة" },
  { "id": "eastern",  "name": "الشرقية",       "learners": 380000, "schools": 4100, "masteryPercent": 79.2, "coverage": "كاملة" },
  { "id": "asir",     "name": "عسير",          "learners": 220000, "schools": 2700, "masteryPercent": 77.8, "coverage": "كاملة" },
  { "id": "madinah",  "name": "المدينة المنورة","learners": 175000, "schools": 1900, "masteryPercent": 78.4, "coverage": "كاملة" },
  { "id": "jazan",    "name": "جازان",         "learners": 165000, "schools": 1850, "masteryPercent": 76.9, "coverage": "مرتفعة" },
  { "id": "qassim",   "name": "القصيم",        "learners": 140000, "schools": 1400, "masteryPercent": 78.0, "coverage": "كاملة" },
  { "id": "tabuk",    "name": "تبوك",          "learners":  95000, "schools":  920, "masteryPercent": 77.1, "coverage": "كاملة" },
  { "id": "hail",     "name": "حائل",          "learners":  55000, "schools":  610, "masteryPercent": 77.6, "coverage": "كاملة" },
  { "id": "najran",   "name": "نجران",         "learners":  48000, "schools":  520, "masteryPercent": 76.4, "coverage": "كاملة" },
  { "id": "bahah",    "name": "الباحة",        "learners":  35000, "schools":  410, "masteryPercent": 78.0, "coverage": "كاملة" },
  { "id": "northern", "name": "الحدود الشمالية","learners":  22000, "schools":  280, "masteryPercent": 76.2, "coverage": "كاملة" },
  { "id": "jouf",     "name": "الجوف",         "learners":  15000, "schools":  220, "masteryPercent": 76.8, "coverage": "كاملة" }
]
```

### Sample 12-month MAU trend (excerpt — `data/engagement-trend.json`)

```jsonc
{
  "metric": "monthly-active-learners",
  "label": "المتعلمون النشطون شهرياً",
  "unit": "متعلم",
  "points": [
    { "month": "2025-05", "value": 2005000 },
    { "month": "2025-06", "value": 2050000 },
    { "month": "2025-07", "value": 2080000 },
    { "month": "2025-08", "value": 2110000 },
    { "month": "2025-09", "value": 2185000 },
    { "month": "2025-10", "value": 2230000 },
    { "month": "2025-11", "value": 2275000 },
    { "month": "2025-12", "value": 2310000 },
    { "month": "2026-01", "value": 2350000 },
    { "month": "2026-02", "value": 2395000 },
    { "month": "2026-03", "value": 2430000 },
    { "month": "2026-04", "value": 2480000 }
  ]
}
```

### Sample mastery by subject (excerpt — `data/mastery-by-subject.json`)

```jsonc
[
  { "subjectId": "arabic",         "name": "اللغة العربية",     "masteryPercent": 82.4 },
  { "subjectId": "islamic",        "name": "الدراسات الإسلامية","masteryPercent": 81.9 },
  { "subjectId": "science",        "name": "العلوم",            "masteryPercent": 78.6 },
  { "subjectId": "math",           "name": "الرياضيات",         "masteryPercent": 76.8 },
  { "subjectId": "english",        "name": "اللغة الإنجليزية",  "masteryPercent": 74.2 },
  { "subjectId": "social-studies", "name": "الاجتماعيات",       "masteryPercent": 79.5 }
]
```

---

## 8. ملاحظات الترحيل (Migration Notes — Static / API / CMS)

| Field | MVP source | Phase 2 destination | Reason |
|-------|------------|---------------------|--------|
| `lastUpdatedAt` | static in `overview.json` | API (computed at request time) | Real freshness becomes meaningful |
| `period` | derived in code from filter | derived in code | No change |
| `heroKpis[*].value` | static seed values | **API** (operational E-School DB) | Live operational metric |
| `heroKpis[*].label` | static Arabic string | **CMS or i18n dictionary** | Editorial control without redeploy |
| `heroKpis[*].methodologyKey` | static | **CMS** | Methodology pages are editorial content |
| `regionalFootprintRef` data | static seed | **API** | Aggregations recomputed daily |
| `engagementTrendRef` data | static 12-month sample | **API** (cached, refreshed daily) | Trend depends on real telemetry |
| `contentFootprint.*` counts | static | **API** | Counts grow in real time |
| `masteryBySubjectRef` data | static seed | **API** (computed from assessment subsystem) | Heavy aggregation |
| `supportSnapshot.*` | static | **API** (helpdesk integration) | Live SLA |
| `strategicAlignment.*` | static | **CMS** | Editorial mapping, rarely changes |
| `latestReportsRef` | static | **CMS** | Reports library is content-managed |

**Rule of thumb for this module:**
- Anything that is a **measured quantity** → moves to API.
- Anything that is a **label, descriptor, methodology paragraph, or alignment statement** → moves to a lightweight CMS (or stays in `i18n/ar.json` if it never changes).

---

**End of Executive Overview module. Proceed to `04-engagement.md` in the next commit.**
