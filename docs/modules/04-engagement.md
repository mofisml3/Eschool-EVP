# 04 — Module: Student Activity & Engagement
## نشاط الطلاب وتفاعلهم

The first stop in the narrative arc after the Executive Overview. Its purpose is to demonstrate **that the program is alive and used at scale** — daily, weekly, and across all regions and stages.

---

## 1. عنوان الصفحة والوصف

| Element | Arabic |
|---------|--------|
| Page title (top bar) | نشاط الطلاب وتفاعلهم |
| Hero heading | حضور المتعلمين وتفاعلهم اليومي مع المنصة |
| Hero subtitle | مؤشرات تفصيلية للحضور اليومي والأسبوعي والشهري، وأنماط الاستخدام، والتوزيع الجغرافي والمرحلي. |
| Last-update line | "آخر تحديث للبيانات: {date} — {time} (توقيت السعودية)" |

---

## 2. الأقسام (Page Sections, in render order)

1. **شريط الترحيب** — page hero + period filter + region/stage filters.
2. **مؤشرات النشاط الكبرى** — 4 KPI tiles (DAU, WAU, MAU, Stickiness).
3. **اتجاه الحضور خلال 30 يوماً** — DAU line chart with WAU comparison area.
4. **أنماط الجلسات** — 2 KPIs side-by-side (avg session duration, avg sessions per learner per week).
5. **ساعات الذروة** — time-of-day × day-of-week heatmap.
6. **التوزيع حسب المرحلة الدراسية** — horizontal bars: ابتدائي / متوسط / ثانوي.
7. **التوزيع الجغرافي** — compact map showing active learners per region.
8. **أكثر المواد تفاعلاً** — top-6 subjects by engaged learners.
9. **الإجراء التالي** — narrative-arc CTA: "الانتقال إلى مكتبة الدروس المرئية".

---

## 3. كتالوج المؤشرات (KPI Catalog)

### Hero KPIs (4 tiles)

| # | Short label | Extended descriptor | Unit | Format | Sample value | MoM trend |
|---|-------------|---------------------|------|--------|--------------|-----------|
| E1 | المتعلمون النشطون يومياً | المتوسط اليومي للمتعلمين الذين سجّلوا جلسة واحدة على الأقل خلال آخر 30 يوماً | متعلم | abbreviated `1.18 مليون` | 1,180,000 | +5.9٪ |
| E2 | المتعلمون النشطون أسبوعياً | المتعلمون الذين سجّلوا جلسة واحدة على الأقل خلال آخر 7 أيام | متعلم | abbreviated `1.92 مليون` | 1,920,000 | +6.4٪ |
| E3 | المتعلمون النشطون شهرياً | المتعلمون الذين سجّلوا جلسة واحدة على الأقل خلال آخر 30 يوماً | متعلم | abbreviated `2.48 مليون` | 2,480,000 | +7.4٪ |
| E4 | معدل الاستمرارية | نسبة المتعلمين النشطين يومياً إلى المتعلمين النشطين شهرياً (DAU/MAU) | نسبة | percent `47.6٪` | 47.6 | +1.1 نقطة |

**Methodology note (tooltip):** "تستثني الاحتسابات الجلسات التي تقل عن دقيقة واحدة، وتُحتسب الفترات الزمنية بتوقيت السعودية."

### Section KPIs

| # | Section | Short label | Sample value |
|---|---------|-------------|--------------|
| E5 | أنماط الجلسات | متوسط مدة الجلسة | 32 دقيقة |
| E6 | أنماط الجلسات | متوسط الجلسات لكل متعلم/أسبوع | 4.7 جلسة |
| E7 | المرحلة | المرحلة الابتدائية | 1,180,000 متعلم (47.6٪) |
| E8 | المرحلة | المرحلة المتوسطة | 760,000 متعلم (30.6٪) |
| E9 | المرحلة | المرحلة الثانوية | 540,000 متعلم (21.8٪) |

---

## 4. محتوى البطاقات والأقسام

### Card — اتجاه الحضور خلال 30 يوماً
- Title: اتجاه الحضور اليومي خلال آخر 30 يوماً
- Insight: "حضور مستقر بمتوسط 1.18 مليون متعلم يومياً، مع ذروة الأربعاء وانخفاض ملحوظ في يومَي الجمعة والسبت."
- Series: DAU line (`#08798C`) + 7-day WAU rolling area (`#71B36E`, low opacity).
- Y-axis: عدد المتعلمين النشطين

### Card — أنماط الجلسات
- Title: أنماط الجلسات والتفاعل
- Two side-by-side stats:
  - "32 دقيقة — متوسط مدة الجلسة الواحدة"
  - "4.7 جلسة — متوسط الجلسات أسبوعياً لكل متعلم"
- Footnote: "تتضمن البيانات جلسات الويب وتطبيق الجوّال."

### Card — ساعات الذروة (Heatmap)
- Title: ساعات الذروة في الاستخدام
- Insight: "تتركّز الذروة بين الساعة الثالثة والعاشرة مساءً في أيام الدراسة، مع نشاط ملحوظ صباحاً في عطلة الأسبوع."
- X-axis: أيام الأسبوع (الأحد، الاثنين، …، السبت)
- Y-axis: ساعات اليوم (00:00 → 23:00) in 1-hour buckets
- Color scale: light teal → primary teal `#08798C`
- Legend: "نشاط منخفض"، "نشاط متوسط"، "نشاط مرتفع"

### Card — التوزيع حسب المرحلة الدراسية
- Title: التوزيع حسب المرحلة الدراسية
- Insight: "تستحوذ المرحلة الابتدائية على ما يقارب نصف المتعلمين النشطين."
- Bars (sorted by value):
  - "ابتدائي — 1,180,000 (47.6٪)"
  - "متوسط — 760,000 (30.6٪)"
  - "ثانوي — 540,000 (21.8٪)"

### Card — التوزيع الجغرافي
- Title: التوزيع الجغرافي للمتعلمين النشطين
- Insight: "أعلى تركّز للنشاط في الرياض ومكة المكرمة والشرقية."
- Region tooltip: `{region_name} — {active_learners} متعلم نشط`
- Footer link: "الاطّلاع على التغطية الكاملة" → `/portal/overview`

### Card — أكثر المواد تفاعلاً
- Title: أكثر المواد تفاعلاً مع المتعلمين
- List items (sorted by engaged learners):
  - "اللغة العربية — 1,950,000 متعلم متفاعل"
  - "الرياضيات — 1,840,000"
  - "العلوم — 1,720,000"
  - "اللغة الإنجليزية — 1,560,000"
  - "الدراسات الإسلامية — 1,520,000"
  - "الاجتماعيات — 1,310,000"

### Card — الإجراء التالي
- Title: تابع جولة العرض التنفيذي
- Body: "اكتشف حجم المحتوى المرئي الذي يُغذّي هذا التفاعل اليومي."
- Primary button: "الانتقال إلى مكتبة الدروس المرئية" → `/portal/content/videos`

---

## 5. الأزرار والروابط (CTAs)

Inherited from `shell/01-global-shell.md`. Module-specific:
- "الاطّلاع على التغطية الكاملة" — link from regional card to Overview map.
- "تفاصيل المنهجية" — opens methodology tooltip for E1–E4.

---

## 6. الحالات الفارغة والأخطاء (Module-Specific)

| Context | Copy |
|---------|------|
| All KPIs unavailable | "لا تتوفر بيانات نشاط الطلاب في الفترة المحددة." |
| Heatmap no data | "البيانات اللازمة لرسم خريطة الذروة غير متوفرة حالياً." |
| Filter yields zero | "لا يوجد متعلمون مطابقون لمعايير التصفية الحالية." |
| Stage chart missing | "بيانات التوزيع المرحلي قيد الاحتساب." |

Generic states inherited from the shell document.

---

## 7. عينة بيانات أولية (Seed Data Sample)

```jsonc
// data/engagement.json
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
      "id": "dau",
      "label": "المتعلمون النشطون يومياً",
      "value": 1180000,
      "displayValue": "1.18 مليون",
      "unit": "متعلم",
      "trend": { "direction": "up", "deltaPercent": 5.9 },
      "methodologyKey": "dau"
    },
    {
      "id": "wau",
      "label": "المتعلمون النشطون أسبوعياً",
      "value": 1920000,
      "displayValue": "1.92 مليون",
      "unit": "متعلم",
      "trend": { "direction": "up", "deltaPercent": 6.4 },
      "methodologyKey": "wau"
    },
    {
      "id": "mau",
      "label": "المتعلمون النشطون شهرياً",
      "value": 2480000,
      "displayValue": "2.48 مليون",
      "unit": "متعلم",
      "trend": { "direction": "up", "deltaPercent": 7.4 },
      "methodologyKey": "mau"
    },
    {
      "id": "stickiness",
      "label": "معدل الاستمرارية",
      "value": 47.6,
      "displayValue": "47.6٪",
      "unit": "نسبة",
      "trend": { "direction": "up", "deltaPercent": 1.1, "vsLabel": "نقاط" },
      "methodologyKey": "stickiness"
    }
  ],
  "sessionPatterns": {
    "averageSessionMinutes": 32,
    "averageSessionsPerLearnerPerWeek": 4.7
  },
  "stageBreakdown": [
    { "stageId": "primary",   "label": "ابتدائي", "activeLearners": 1180000, "sharePercent": 47.6 },
    { "stageId": "middle",    "label": "متوسط",  "activeLearners":  760000, "sharePercent": 30.6 },
    { "stageId": "secondary", "label": "ثانوي",  "activeLearners":  540000, "sharePercent": 21.8 }
  ],
  "topEngagedSubjects": [
    { "subjectId": "arabic",         "name": "اللغة العربية",      "engagedLearners": 1950000 },
    { "subjectId": "math",           "name": "الرياضيات",          "engagedLearners": 1840000 },
    { "subjectId": "science",        "name": "العلوم",             "engagedLearners": 1720000 },
    { "subjectId": "english",        "name": "اللغة الإنجليزية",   "engagedLearners": 1560000 },
    { "subjectId": "islamic",        "name": "الدراسات الإسلامية", "engagedLearners": 1520000 },
    { "subjectId": "social-studies", "name": "الاجتماعيات",        "engagedLearners": 1310000 }
  ],
  "dailyTrendRef": "data/engagement-daily.json",
  "peakHoursHeatmapRef": "data/engagement-heatmap.json",
  "regionalActivityRef": "data/engagement-regions.json"
}
```

### Sample 30-day DAU trend (excerpt — `data/engagement-daily.json`)

```jsonc
{
  "metric": "daily-active-learners",
  "label": "المتعلمون النشطون يومياً",
  "unit": "متعلم",
  "points": [
    { "date": "2026-04-21", "value": 1175000, "weekday": "الثلاثاء" },
    { "date": "2026-04-22", "value": 1198000, "weekday": "الأربعاء" },
    { "date": "2026-04-23", "value": 1142000, "weekday": "الخميس" },
    { "date": "2026-04-24", "value":  680000, "weekday": "الجمعة" },
    { "date": "2026-04-25", "value":  890000, "weekday": "السبت" },
    { "date": "2026-04-26", "value": 1188000, "weekday": "الأحد" },
    { "date": "2026-04-27", "value": 1192000, "weekday": "الاثنين" }
  ]
}
```

### Sample heatmap shape (excerpt — `data/engagement-heatmap.json`)

```jsonc
{
  "metric": "active-learners-by-hour-and-weekday",
  "weekdayOrder": ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "hourBuckets": ["00", "01", "02", "...", "23"],
  "matrix": [
    { "weekday": "الأحد",     "hour": "15", "intensity": 0.82 },
    { "weekday": "الأحد",     "hour": "16", "intensity": 0.91 },
    { "weekday": "الأحد",     "hour": "17", "intensity": 0.96 },
    { "weekday": "الأحد",     "hour": "18", "intensity": 0.98 },
    { "weekday": "الأحد",     "hour": "19", "intensity": 0.95 },
    { "weekday": "الأحد",     "hour": "20", "intensity": 0.84 },
    { "weekday": "الجمعة",    "hour": "10", "intensity": 0.18 },
    { "weekday": "الجمعة",    "hour": "20", "intensity": 0.42 }
    // ...full 7 × 24 = 168 cells in the production seed file
  ]
}
```

`intensity` is a normalized value in `[0, 1]`; the UI maps it to the teal color scale.

### Sample regional activity (excerpt — `data/engagement-regions.json`)

```jsonc
[
  { "regionId": "riyadh",  "name": "الرياض",        "activeLearnersDailyAvg": 295000 },
  { "regionId": "makkah",  "name": "مكة المكرمة",   "activeLearnersDailyAvg": 242000 },
  { "regionId": "eastern", "name": "الشرقية",       "activeLearnersDailyAvg": 181000 },
  { "regionId": "asir",    "name": "عسير",          "activeLearnersDailyAvg": 105000 },
  { "regionId": "madinah", "name": "المدينة المنورة","activeLearnersDailyAvg":  83000 }
  // ... remaining 8 regions
]
```

---

## 8. ملاحظات الترحيل (Migration Notes — Static / API / CMS)

| Field | MVP source | Phase 2 destination | Reason |
|-------|------------|---------------------|--------|
| `heroKpis[*].value` (DAU, WAU, MAU, Stickiness) | static seed | **API** (analytics pipeline) | Computed from session telemetry |
| `heroKpis[*].label` and `methodologyKey` | static | **i18n + CMS** | Editorial control |
| `sessionPatterns.*` | static | **API** | Aggregated daily |
| `stageBreakdown[*]` | static | **API** | Joins enrollment + activity |
| `topEngagedSubjects[*]` | static | **API** (cached daily) | Heavy aggregation, low volatility |
| `dailyTrendRef` data | static 30-point series | **API** (rolling window) | Time-series store |
| `peakHoursHeatmapRef` data | static 168-cell matrix | **API** (precomputed nightly) | Expensive to compute live |
| `regionalActivityRef` data | static seed | **API** | Joins region + activity |
| Filter taxonomies (regions, stages) | static config | **CMS or shared config service** | Rarely change but must be authoritative |

**Rule of thumb for this module:**
- All numeric measurements → **API** in Phase 2.
- All Arabic labels and methodology paragraphs → **i18n dictionary** (some, like methodology, may live in a CMS for non-developer editing).
- Reference taxonomies (regions, stages, subjects) → shared config so they stay consistent with other modules.

---

**End of Engagement module. Proceed to `05-videos.md` in the next commit.**
