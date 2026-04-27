# 05 — Module: Video Lessons Showcase
## مكتبة الدروس المرئية

The second stop in the narrative arc. Its purpose is to demonstrate **the depth, breadth, and pedagogical maturity of the video content** that powers the program — not to be a video player or catalog browser.

---

## 1. عنوان الصفحة والوصف

| Element | Arabic |
|---------|--------|
| Page title (top bar) | مكتبة الدروس المرئية |
| Hero heading | مكتبة الدروس المرئية الوطنية |
| Hero subtitle | عرضٌ لحجم المحتوى المرئي وتغطيته للمراحل والمواد، مع نماذج مختارة من الدروس وإحصاءات الاستخدام. |
| Last-update line | "آخر تحديث للبيانات: {date} — {time} (توقيت السعودية)" |

---

## 2. الأقسام (Page Sections, in render order)

1. **شريط الترحيب** — page hero + period filter + stage/subject filters.
2. **مؤشرات المكتبة الكبرى** — 5 KPI tiles (lessons, hours, subjects, completion rate, monthly watch hours).
3. **التوزيع حسب المرحلة الدراسية** — donut/horizontal bars: ابتدائي / متوسط / ثانوي.
4. **التغطية حسب المواد الدراسية** — 24-subject grid (each tile shows lesson count).
5. **دروس مختارة** — featured-lessons gallery (4–6 sample cards with thumbnail, title, subject, stage, duration).
6. **الأكثر مشاهدة** — top-10 most-watched lessons list.
7. **اتجاه ساعات المشاهدة** — 12-month watch-hours trend line chart.
8. **مؤشرات الجودة والإتاحة** — accessibility/quality strip (HD coverage, captions coverage).
9. **الإجراء التالي** — narrative-arc CTA: "الانتقال إلى التجارب التفاعلية".

---

## 3. كتالوج المؤشرات (KPI Catalog)

### Hero KPIs (5 tiles)

| # | Short label | Extended descriptor | Unit | Format | Sample value | MoM trend |
|---|-------------|---------------------|------|--------|--------------|-----------|
| V1 | إجمالي الدروس المرئية | عدد الدروس المرئية المنشورة في المكتبة الوطنية | درس | abbreviated `48.7 ألف` | 48,750 | +1.2٪ |
| V2 | إجمالي ساعات المحتوى | مجموع ساعات المحتوى المرئي المتاح | ساعة | abbreviated `9.8 ألف` | 9,820 | +1.1٪ |
| V3 | المواد المُغطّاة | عدد المواد الدراسية التي يشملها المحتوى المرئي | مادة | full number `24` | 24 | ثابت |
| V4 | متوسط نسبة الإكمال | المتوسط المرجّح لنسبة المتعلمين الذين أكملوا الدرس حتى نهايته | نسبة | percent `84.2٪` | 84.2 | +0.6 نقطة |
| V5 | ساعات المشاهدة الشهرية | إجمالي ساعات المشاهدة المسجَّلة خلال آخر 30 يوماً | ساعة | abbreviated `8.42 مليون` | 8,420,000 | +4.8٪ |

**Methodology note:** "تُحتسب ساعات المشاهدة استناداً إلى الزمن الفعلي للمشاهدة دون احتساب المراجعة السريعة، وتُستثنى الجلسات التي تقل عن 30 ثانية."

### Section KPIs (within respective sections)

| # | Section | Short label | Sample value |
|---|---------|-------------|--------------|
| V6 | المرحلة | دروس المرحلة الابتدائية | 21,400 درس |
| V7 | المرحلة | دروس المرحلة المتوسطة | 14,200 درس |
| V8 | المرحلة | دروس المرحلة الثانوية | 13,150 درس |
| V9 | الجودة | الدروس بدقّة عالية HD أو أعلى | 96.4٪ من المكتبة |
| V10 | الإتاحة | الدروس المزوّدة بترجمة نصية | 88.7٪ من المكتبة |

---

## 4. محتوى البطاقات والأقسام

### Card — التوزيع حسب المرحلة الدراسية
- Title: توزيع الدروس حسب المرحلة الدراسية
- Insight: "تغطية متوازنة للمراحل الثلاث، مع كثافة أعلى في المرحلة الابتدائية."
- Bars (sorted): ابتدائي 21,400 / متوسط 14,200 / ثانوي 13,150

### Card — التغطية حسب المواد الدراسية (24-subject grid)
- Title: التغطية حسب المواد الدراسية
- Insight: "تشمل المكتبة 24 مادة دراسية تغطي المنهج الوطني عبر المراحل الثلاث."
- Each tile: subject name, lesson count, small icon
- Subjects (sample list, ordered roughly by depth):
  - اللغة العربية (5,840)
  - الرياضيات (5,210)
  - العلوم (4,180)
  - الدراسات الإسلامية (4,050)
  - اللغة الإنجليزية (3,920)
  - الاجتماعيات (2,640)
  - الفيزياء (2,180)
  - الكيمياء (1,950)
  - الأحياء (1,820)
  - علوم الحاسب (1,540)
  - التربية الفنية (1,210)
  - التربية البدنية (980)
  - المهارات الحياتية (920)
  - التفكير الناقد (870)
  - …(remaining 10 subjects in seed file)

### Card — دروس مختارة (Featured)
- Title: نماذج مختارة من الدروس
- Each card: thumbnail (placeholder), Arabic title, "{subject} · {stage} · {duration}"
- Sample featured set (locked for the demo):
  - "مقدمة في الجبر — معادلات الدرجة الأولى" — رياضيات · ثانوي · 18 دقيقة
  - "علم النبات: عملية التركيب الضوئي" — أحياء · متوسط · 14 دقيقة
  - "البلاغة العربية: التشبيه وأنواعه" — لغة عربية · ثانوي · 22 دقيقة
  - "خرائط الوطن: المملكة العربية السعودية" — اجتماعيات · ابتدائي · 12 دقيقة
  - "علوم الحاسب: الخوارزميات الأساسية" — حاسب · ثانوي · 20 دقيقة
  - "التجويد: أحكام النون الساكنة" — دراسات إسلامية · متوسط · 15 دقيقة

### Card — الأكثر مشاهدة (Top-watched list)
- Title: الدروس الأكثر مشاهدةً خلال آخر 30 يوماً
- List (top 10): rank · title · subject · stage · "{watch_count} مشاهدة"
- Footer link: "عرض القائمة الكاملة" (no-op in MVP; opens an expanded list view)

### Card — اتجاه ساعات المشاهدة
- Title: ساعات المشاهدة الشهرية خلال 12 شهراً
- Insight: "نمو متواصل في ساعات المشاهدة، بزيادة 27.5٪ خلال العام الدراسي."
- Y-axis: ساعات المشاهدة
- Series color: primary teal `#08798C`

### Card — مؤشرات الجودة والإتاحة
- Title: مؤشرات الجودة والإتاحة
- Two stats:
  - "96.4٪ — من المكتبة بدقّة عالية HD أو أعلى"
  - "88.7٪ — من المكتبة مزوّد بترجمة نصية للصمّ والمكفوفين"
- Footnote: "تشمل الترجمة النصية تعليقات مكتوبة موافقة لمعايير الإتاحة."

### Card — الإجراء التالي
- Title: تابع جولة العرض التنفيذي
- Body: "بعد المحتوى المرئي، تعرّف على التجارب التفاعلية والمحاكاة الرقمية."
- Primary button: "الانتقال إلى التجارب التفاعلية" → `/portal/content/experiments`

---

## 5. الأزرار والروابط (CTAs)

Inherited from `shell/01-global-shell.md`. Module-specific:
- "عرض القائمة الكاملة" — expands the top-watched list.
- "تشغيل عيّنة" — optional play action on a featured card (reads from a static sample URL in seed; no real video required for MVP demo).

---

## 6. الحالات الفارغة والأخطاء (Module-Specific)

| Context | Copy |
|---------|------|
| Catalog metrics unavailable | "لا تتوفر بيانات المكتبة في الفترة المحددة." |
| Subject grid empty after filter | "لا توجد مواد مطابقة لمعايير التصفية." |
| Featured list empty | "لم تُحدَّد دروس مختارة لهذه الفترة." |
| Top-watched empty | "لا توجد بيانات مشاهدة كافية لاستخراج القائمة." |
| Trend chart no data | "لا توجد بيانات كافية لرسم اتجاه ساعات المشاهدة." |

Generic states inherited from the shell document.

---

## 7. عينة بيانات أولية (Seed Data Sample)

```jsonc
// data/videos.json
{
  "lastUpdatedAt": "2026-04-27T09:14:00+03:00",
  "period": { "id": "last-30-days", "label": "آخر 30 يوماً" },
  "heroKpis": [
    { "id": "total-lessons",      "label": "إجمالي الدروس المرئية", "value": 48750,    "displayValue": "48.7 ألف",  "unit": "درس",  "trend": { "direction": "up",   "deltaPercent": 1.2 } },
    { "id": "content-hours",      "label": "إجمالي ساعات المحتوى",  "value": 9820,     "displayValue": "9.8 ألف",   "unit": "ساعة", "trend": { "direction": "up",   "deltaPercent": 1.1 } },
    { "id": "subjects-covered",   "label": "المواد المُغطّاة",       "value": 24,       "displayValue": "24",        "unit": "مادة", "trend": { "direction": "flat", "deltaPercent": 0   } },
    { "id": "completion-rate",    "label": "متوسط نسبة الإكمال",    "value": 84.2,     "displayValue": "84.2٪",     "unit": "نسبة", "trend": { "direction": "up",   "deltaPercent": 0.6, "vsLabel": "نقاط" } },
    { "id": "monthly-watch-hours","label": "ساعات المشاهدة الشهرية","value": 8420000,  "displayValue": "8.42 مليون","unit": "ساعة", "trend": { "direction": "up",   "deltaPercent": 4.8 } }
  ],
  "stageBreakdown": [
    { "stageId": "primary",   "label": "ابتدائي", "lessonsCount": 21400 },
    { "stageId": "middle",    "label": "متوسط",  "lessonsCount": 14200 },
    { "stageId": "secondary", "label": "ثانوي",  "lessonsCount": 13150 }
  ],
  "qualityIndicators": {
    "hdCoveragePercent": 96.4,
    "captionsCoveragePercent": 88.7
  },
  "subjectsRef": "data/videos-subjects.json",
  "featuredLessonsRef": "data/videos-featured.json",
  "topWatchedRef": "data/videos-top-watched.json",
  "watchHoursTrendRef": "data/videos-watch-trend.json"
}
```

### Sample subject coverage (excerpt — `data/videos-subjects.json`)

```jsonc
[
  { "subjectId": "arabic",         "name": "اللغة العربية",      "lessonsCount": 5840, "iconKey": "arabic" },
  { "subjectId": "math",           "name": "الرياضيات",          "lessonsCount": 5210, "iconKey": "math" },
  { "subjectId": "science",        "name": "العلوم",             "lessonsCount": 4180, "iconKey": "science" },
  { "subjectId": "islamic",        "name": "الدراسات الإسلامية", "lessonsCount": 4050, "iconKey": "islamic" },
  { "subjectId": "english",        "name": "اللغة الإنجليزية",   "lessonsCount": 3920, "iconKey": "english" },
  { "subjectId": "social-studies", "name": "الاجتماعيات",        "lessonsCount": 2640, "iconKey": "social" },
  { "subjectId": "physics",        "name": "الفيزياء",           "lessonsCount": 2180, "iconKey": "physics" },
  { "subjectId": "chemistry",      "name": "الكيمياء",           "lessonsCount": 1950, "iconKey": "chemistry" },
  { "subjectId": "biology",        "name": "الأحياء",            "lessonsCount": 1820, "iconKey": "biology" },
  { "subjectId": "cs",             "name": "علوم الحاسب",        "lessonsCount": 1540, "iconKey": "cs" },
  { "subjectId": "art",            "name": "التربية الفنية",     "lessonsCount": 1210, "iconKey": "art" },
  { "subjectId": "pe",             "name": "التربية البدنية",    "lessonsCount":  980, "iconKey": "pe" }
  // ... remaining 12 subjects in production seed
]
```

### Sample featured lessons (excerpt — `data/videos-featured.json`)

```jsonc
[
  {
    "id": "lesson-algebra-intro",
    "title": "مقدمة في الجبر — معادلات الدرجة الأولى",
    "subjectId": "math",
    "subjectName": "الرياضيات",
    "stageId": "secondary",
    "stageName": "ثانوي",
    "durationMinutes": 18,
    "thumbnailKey": "lesson-algebra-intro",
    "samplePlaybackUrl": "/sample-media/lesson-algebra-intro.mp4"
  },
  {
    "id": "lesson-photosynthesis",
    "title": "علم النبات: عملية التركيب الضوئي",
    "subjectId": "biology",
    "subjectName": "الأحياء",
    "stageId": "middle",
    "stageName": "متوسط",
    "durationMinutes": 14,
    "thumbnailKey": "lesson-photosynthesis",
    "samplePlaybackUrl": "/sample-media/lesson-photosynthesis.mp4"
  },
  {
    "id": "lesson-arabic-rhetoric-tashbih",
    "title": "البلاغة العربية: التشبيه وأنواعه",
    "subjectId": "arabic",
    "subjectName": "اللغة العربية",
    "stageId": "secondary",
    "stageName": "ثانوي",
    "durationMinutes": 22,
    "thumbnailKey": "lesson-arabic-rhetoric",
    "samplePlaybackUrl": "/sample-media/lesson-arabic-rhetoric.mp4"
  },
  {
    "id": "lesson-saudi-maps",
    "title": "خرائط الوطن: المملكة العربية السعودية",
    "subjectId": "social-studies",
    "subjectName": "الاجتماعيات",
    "stageId": "primary",
    "stageName": "ابتدائي",
    "durationMinutes": 12,
    "thumbnailKey": "lesson-saudi-maps",
    "samplePlaybackUrl": "/sample-media/lesson-saudi-maps.mp4"
  }
]
```

### Sample top-watched (excerpt — `data/videos-top-watched.json`)

```jsonc
[
  { "rank": 1, "lessonId": "lesson-algebra-intro",       "title": "مقدمة في الجبر — معادلات الدرجة الأولى", "subjectName": "الرياضيات",   "stageName": "ثانوي",   "watchCount": 184000 },
  { "rank": 2, "lessonId": "lesson-photosynthesis",      "title": "علم النبات: عملية التركيب الضوئي",        "subjectName": "الأحياء",     "stageName": "متوسط",   "watchCount": 162000 },
  { "rank": 3, "lessonId": "lesson-arabic-rhetoric-tashbih", "title": "البلاغة العربية: التشبيه وأنواعه",   "subjectName": "اللغة العربية","stageName": "ثانوي",   "watchCount": 148000 },
  { "rank": 4, "lessonId": "lesson-saudi-maps",          "title": "خرائط الوطن: المملكة العربية السعودية",    "subjectName": "الاجتماعيات", "stageName": "ابتدائي", "watchCount": 137000 },
  { "rank": 5, "lessonId": "lesson-tajweed-noon-sakinah","title": "التجويد: أحكام النون الساكنة",            "subjectName": "الدراسات الإسلامية","stageName": "متوسط", "watchCount": 129000 }
  // ... ranks 6–10 in production seed
]
```

### Sample 12-month watch-hours trend (excerpt — `data/videos-watch-trend.json`)

```jsonc
{
  "metric": "monthly-watch-hours",
  "label": "ساعات المشاهدة الشهرية",
  "unit": "ساعة",
  "points": [
    { "month": "2025-05", "value": 6600000 },
    { "month": "2025-06", "value": 6810000 },
    { "month": "2025-07", "value": 6950000 },
    { "month": "2025-08", "value": 7080000 },
    { "month": "2025-09", "value": 7320000 },
    { "month": "2025-10", "value": 7510000 },
    { "month": "2025-11", "value": 7720000 },
    { "month": "2025-12", "value": 7860000 },
    { "month": "2026-01", "value": 8010000 },
    { "month": "2026-02", "value": 8170000 },
    { "month": "2026-03", "value": 8290000 },
    { "month": "2026-04", "value": 8420000 }
  ]
}
```

---

## 8. ملاحظات الترحيل (Migration Notes — Static / API / CMS)

| Field | MVP source | Phase 2 destination | Reason |
|-------|------------|---------------------|--------|
| `heroKpis[*].value` | static seed | **API** (content & telemetry pipelines) | Live metrics |
| `stageBreakdown[*]` | static | **API** | Aggregation over content metadata |
| `qualityIndicators.*` | static | **API** | Computed from content metadata |
| `subjectsRef` data | static seed | **API + CMS** | Counts from API; subject names/icons from CMS |
| `featuredLessonsRef` | static seed | **CMS** | Editorial selection — must be human-curated |
| `topWatchedRef` data | static seed | **API** | Computed nightly from playback telemetry |
| `watchHoursTrendRef` | static 12-point series | **API** | Time-series store |
| Lesson metadata (titles, durations, thumbnails) | static seed | **CMS** (operational LMS) | Content management lives in the LMS |
| `samplePlaybackUrl` | static (sample MP4 served by the portal) | **CDN URL from LMS** | Real video distribution |

**Rule of thumb for this module:**
- **Featured lessons are always editorial** — never auto-generated. They live in a CMS even after the API integration.
- **Top-watched is always computed** — never edited manually.
- Subject taxonomy is shared across the portal — pulled from a single source-of-truth config.

---

**End of Video Lessons module. Proceed to `06-experiments.md` in the next commit.**
