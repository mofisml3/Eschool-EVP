# 02 — Executive Overview Wireframe
## اللوحة التنفيذية

> **Reference:** content and copy from `docs/modules/03-overview.md`. Shell elements (top bar, sidebar, footer) from `docs/shell/01-global-shell.md`. This file defines layout, composition, and responsive behavior only.

---

## 1. التخطيط الكلي — سطح المكتب (Desktop ≥ 1280px)

```
(RTL)                                                                                                  »

╔═══════════════════════════════════════════════════════════════════════════════════════════════════════╗
║  [👤 الجلسة الحالية ▾]      اللوحة التنفيذية                          ▒▒▒▒▒ E-SCHOOL ▒▒▒▒▒  ║   (1) Top bar (height 64px)
╠═══════════════════════════════════════════════════════════════════════╤═══════════════════════════════╣
║                                                                       │ ┌─ القائمة الجانبية ──┐  ✕   ║
║  ┌─────────────────────────────────────────────────────────────┐      │ │                      │      ║
║  │  المؤشرات الوطنية الكبرى لمشروع المدرسة الإلكترونية         │      │ │ ▣ اللوحة التنفيذية   │ ◄ active
║  │  عرضٌ موجز للأداء الوطني والتغطية الجغرافية…                 │      │ │ ▢ نشاط الطلاب…       │
║  │                                                              │      │ │ ▢ مكتبة الدروس…      │
║  │  آخر تحديث: 27 أبريل 2026 — 09:14         [الفترة: آخر 30 ▾]│  (2) │ │ ▢ التجارب التفاعلية  │
║  └─────────────────────────────────────────────────────────────┘      │ ├──────────────────────┤
║                                                                       │ │ ▢ المعلمون والأداء   │
║  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐                            │ │ ▢ التقييم وتقدّم…    │
║  │KPI1│ │KPI2│ │KPI3│ │KPI4│ │KPI5│ │KPI6│                       (3)  │ ├──────────────────────┤
║  └────┘ └────┘ └────┘ └────┘ └────┘ └────┘                            │ │ ▢ الدعم ورعاية الطلاب│
║                                                                       │ ├──────────────────────┤
║  ┌──────────────────────────────────┐  ┌─────────────────────────┐    │ │ ▢ الأثر الاستراتيجي  │
║  │  التغطية الجغرافية الوطنية         │  │ نمو المتعلمين شهرياً    │   │ │ ▢ مركز التقارير      │
║  │                                  │  │                         │    │ │                      │
║  │   ▒▒▒▒▒ Saudi Map ▒▒▒▒▒          │  │   /\__/\__/\__/         │    │ ├──────────────────────┤
║  │                                  │  │  📈 12-month line       │   │ │ عن البوابة            │
║  │   13 / 13 region                 │  │     chart               │    │ │ الإصدار 0.1           │
║  │                                  │  │                         │    │ └──────────────────────┘
║  │   « ملاحظة تحليلية »             │  │   « ملاحظة تحليلية »   │   │      Sidebar 264px wide
║  │   8/12 cols                       │  │   4/12 cols             │   │      RIGHT edge in RTL
║  └──────────────────────────────────┘  └─────────────────────────┘   │
║                                                              (4) (5) │
║                                                                       │
║  ┌──────────────────────────────────────────────────────────────┐    │
║  │  حجم المحتوى التعليمي المتاح                                  │    │
║  │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                          │    │
║  │  │48,750│ │9,820 │ │3,420 │ │ 24   │                          │    │
║  │  │درساً │ │ساعة  │ │تجربة │ │مادة  │                          │    │
║  │  └──────┘ └──────┘ └──────┘ └──────┘                          │ (6)│
║  │                              [استعراض مكتبة الدروس →]         │    │
║  └──────────────────────────────────────────────────────────────┘    │
║                                                                       │
║  ┌──────────────────────────────────┐  ┌─────────────────────────┐   │
║  │  متوسط الإتقان حسب المادة         │  │ لمحة عن الدعم            │   │
║  │  ▮▮▮▮▮▮▮▮▮▮▮▮ 82.4٪ عربية         │  │ متوسط الاستجابة: 14د    │   │
║  │  ▮▮▮▮▮▮▮▮▮▮▮▯ 81.9٪ إسلامية      │  │ التزام الخدمة: 98.6٪    │   │
║  │  ▮▮▮▮▮▮▮▮▮▮▯▯ 79.8٪ حاسب          │  │ استفسارات الشهر: 124,800│   │
║  │  ▮▮▮▮▮▮▮▮▮▮▯▯ 79.5٪ اجتماعيات    │  │                         │   │
║  │  ▮▮▮▮▮▮▮▮▮▮▯▯ 78.6٪ علوم           │  │ [الانتقال إلى الدعم →]  │   │
║  │  …                                │  │                         │   │
║  │  [تفاصيل التقييم →]                │  │                         │   │
║  │  8/12 cols                         │  │  4/12 cols              │   │
║  └──────────────────────────────────┘  └─────────────────────────┘   │
║                                                              (7) (8) │
║                                                                       │
║  ┌──────────────────────────────────┐  ┌─────────────────────────┐   │
║  │  مواءمة استراتيجية                  │  │ أحدث التقارير            │   │
║  │                                  │  │  ▒  التقرير السنوي 2025 │   │
║  │  8 / 10 غايات للهدف الرابع         │  │  ▒  ملخص Q1 2026        │   │
║  │  4 محاور من رؤية 2030              │  │  ▒  دراسة: الفجوة الرقمية│  │
║  │                                  │  │                         │   │
║  │  [تفاصيل الأثر الاستراتيجي →]     │  │  [مركز التقارير →]      │   │
║  │  8/12 cols                         │  │  4/12 cols              │   │
║  └──────────────────────────────────┘  └─────────────────────────┘   │
║                                                              (9) (10)│
║                                                                       │
║  ┌──────────────────────────────────────────────────────────────┐    │
║  │   تابع جولة العرض التنفيذي                                     │    │
║  │   ابدأ من حضور المتعلمين وتفاعلهم اليومي مع المنصة.            │ (11)│
║  │                                                              │    │
║  │   [   الانتقال إلى نشاط الطلاب وتفاعلهم  →  ]                │    │
║  └──────────────────────────────────────────────────────────────┘    │
║                                                                       │
╠═══════════════════════════════════════════════════════════════════════╧═══════════════════════════════╣
║  ▒ E-SCHOOL ▒ مشروع المدرسة…│ بوابة العرض التنفيذي · 0.1 · UTC+3│ © 2026 جميع الحقوق محفوظة         ║   (12) Footer
╚═══════════════════════════════════════════════════════════════════════════════════════════════════════╝
                                              ↑                                ↑
                                       Main content (~880px)            Sidebar (264px)
```

> **Diagram caveat:** ASCII can't perfectly express RTL. Read each cell **right→left** as the user sees it. The sidebar is on the **right edge of the screen** (drawn at the right edge of the diagram).

---

## 2. شرح المناطق (Region Annotations)

| Tag | Element | Source / reference | Notes |
|-----|---------|-------------------|-------|
| (1) | Top bar | `shell/01-global-shell.md` § 1 | 64px tall, white bg, bottom 1px divider |
| (2) | Hero strip | Module 03 § 2.1 | Heading + subtitle + last-update + period filter (right-aligned in RTL) |
| (3) | Hero KPIs row | Module 03 § 3 | 6 tiles in a single row (~144px each + 16px gap) |
| (4) | National map card | Module 03 § 4 / "التغطية الجغرافية الوطنية" | 8/12 cols width |
| (5) | Engagement trend card | Module 03 § 4 / "تفاعل المتعلمين عبر الزمن" | 4/12 cols width |
| (6) | Content footprint card | Module 03 § 4 / "حجم المحتوى التعليمي" | Full width, 4 sub-stats inside |
| (7) | Mastery-by-subject card | Module 03 § 4 / "مستوى الإتقان الوطني" | 8/12 cols |
| (8) | Support snapshot | Module 03 § 4 / "لمحة الرعاية والدعم" | 4/12 cols |
| (9) | Strategic alignment teaser | Module 03 § 4 / "المواءمة الاستراتيجية" | 8/12 cols |
| (10) | Latest reports widget | Module 03 § 4 / "أحدث التقارير المنشورة" | 4/12 cols |
| (11) | Narrative-arc CTA | Module 03 § 4 / "الإجراء التالي" | Full width, centered button |
| (12) | Footer | `shell/01-global-shell.md` § 3 | Dark teal `#04576A` band |

### Sidebar
- 9 nav items in fixed order, with two visual dividers (between items 4–5 and 7–8).
- Active item: "اللوحة التنفيذية" — background `#E6F2F4`, right-edge accent bar in `#08798C`, label semibold.
- Bottom block: "عن البوابة" link + version label — muted, 12px.
- Width: 264px expanded, 72px collapsed (icon-only).

---

## 3. تركيب البطاقات الفردية (Card-Level Composition)

### 3.1 KPI tile (one of the 6)

```
┌─────────────────────────────┐
│                             │
│   2.48 مليون                │  ← value, primary teal `#08798C`, large display
│   متعلم                     │  ← unit, smaller, muted
│                             │
│   إجمالي المتعلمين الفاعلين │  ← short label
│                             │
│   ▲ +7.4٪  مقارنة بالفترة  │  ← trend, green for "up"
│                             │
└─────────────────────────────┘
   width ≈ 144px on desktop
   height ≈ 144px (square-ish)
   border-radius 12px, soft shadow, white bg
```

Hover/focus: soft elevation + tooltip with extended descriptor and methodology link.

### 3.2 Map card

```
┌──────────────────────────────────────┐
│  التغطية الجغرافية على مستوى المملكة  │ ← title
│                                      │
│   ▒▒▒▒▒                              │
│   ▒▒▒▒▒▒▒                            │ ← Saudi Arabia silhouette,
│   ▒▒▒▒▒▒▒▒                           │   regions tinted by coverage level
│   ▒▒▒▒▒▒                             │   (full / high / medium / not-available)
│   ▒▒▒                                │
│                                      │
│   ─ تغطية كاملة                      │ ← legend, horizontal
│   ─ تغطية مرتفعة                     │
│   ─ تغطية متوسطة                     │
│                                      │
│   « يصل المشروع إلى جميع المناطق… »  │ ← italic muted insight
│                                      │
│   المصدر: قاعدة بيانات…              │ ← source line, tiny
└──────────────────────────────────────┘
```

Region tooltip on hover: `الرياض — 620,000 متعلم · 6,800 مدرسة · إتقان 80.1٪`

### 3.3 Trend card (engagement, 4-col version)

```
┌─────────────────────────────┐
│  نمو المتعلمين شهرياً        │
│  آخر 12 شهراً               │
│                             │
│   2.5M ┤              ___    │
│        │           ___/      │ ← line in `#08798C`
│   2.0M ┤        __/          │
│        │     __/             │
│   1.5M ┤  __/                │
│        ├─┬─┬─┬─┬─┬─┬─┬─┬─┬─ │
│        مايو            أبريل  │
│                             │
│  « نمو متواصل بزيادة 23.6٪ » │
└─────────────────────────────┘
```

### 3.4 Content footprint (4 sub-tiles inside one card)

```
┌─────────────────────────────────────────────────────────────┐
│  حجم المحتوى التعليمي المتاح                                  │
│                                                             │
│   ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐            │
│   │ 48,750 │  │ 9,820  │  │ 3,420  │  │   24   │            │
│   │ درساً │  │ ساعة   │  │ تجربة  │  │ مادة   │            │
│   └────────┘  └────────┘  └────────┘  └────────┘            │
│                                                             │
│                            [استعراض مكتبة الدروس →]          │
└─────────────────────────────────────────────────────────────┘
```

### 3.5 Mastery by subject (horizontal bars)

```
┌──────────────────────────────────────────────┐
│  متوسط الإتقان حسب المادة                     │
│                                              │
│  اللغة العربية     ▮▮▮▮▮▮▮▮▮▮▮▮ 82.4٪       │
│  الدراسات الإسلامية ▮▮▮▮▮▮▮▮▮▮▮▯ 81.9٪       │
│  علوم الحاسب       ▮▮▮▮▮▮▮▮▮▮▯▯ 79.8٪       │
│  الاجتماعيات       ▮▮▮▮▮▮▮▮▮▮▯▯ 79.5٪       │
│  العلوم            ▮▮▮▮▮▮▮▮▮▮▯▯ 78.6٪       │
│  الرياضيات         ▮▮▮▮▮▮▮▮▮▯▯▯ 76.8٪       │
│  …                                            │
│                                              │
│  « أعلى مستويات الإتقان في اللغة العربية… »  │
│                                              │
│                   [تفاصيل التقييم →]          │
└──────────────────────────────────────────────┘
```

### 3.6 Support snapshot (compact)

```
┌─────────────────────────────┐
│  لمحة عن الدعم               │
│                             │
│  متوسط الاستجابة:           │
│  14 دقيقة                    │
│                             │
│  التزام الخدمة:              │
│  98.6٪                      │
│                             │
│  استفسارات الشهر:            │
│  124,800                    │
│                             │
│  [الانتقال إلى الدعم →]      │
└─────────────────────────────┘
```

### 3.7 Strategic alignment teaser

```
┌──────────────────────────────────────────┐
│  مواءمة استراتيجية                         │
│                                          │
│  ┌─────────────┐    ┌─────────────────┐  │
│  │   8 / 10    │    │     4 محاور      │  │
│  │ غايات SDG 4 │    │  من رؤية 2030    │  │
│  └─────────────┘    └─────────────────┘  │
│                                          │
│  [تفاصيل الأثر الاستراتيجي →]             │
└──────────────────────────────────────────┘
```

### 3.8 Latest reports widget

```
┌──────────────────────────────┐
│  أحدث التقارير                │
│                              │
│  ▒  التقرير السنوي 2025      │
│      14 ديسمبر · 6.8MB · PDF │
│      [تحميل]                  │
│  ─────────────────────────── │
│  ▒  ملخص Q1 2026             │
│      20 أبريل · 1.4MB · PDF  │
│      [تحميل]                  │
│  ─────────────────────────── │
│  ▒  دراسة: الفجوة الرقمية    │
│      8 مارس · 3.2MB · PDF    │
│      [تحميل]                  │
│                              │
│  [مركز التقارير →]            │
└──────────────────────────────┘
```

### 3.9 Narrative-arc CTA (closing band)

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│             تابع جولة العرض التنفيذي                              │
│   ابدأ من حضور المتعلمين وتفاعلهم اليومي مع المنصة.              │
│                                                                │
│         [   الانتقال إلى نشاط الطلاب وتفاعلهم  →   ]          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

Sits within a subtle teal-tinted background `#E6F2F4` with the primary CTA in `#08798C`.

---

## 4. التخطيط — الجهاز اللوحي (Tablet 768–1023px)

Adjustments from desktop:

- **Sidebar collapses to icon-only (72px)** by default; user expands via the chevron at the top.
- **Hero KPIs:** 6 tiles wrap to **3 + 3** (two rows).
- **Two-column rows collapse to single column** in this order:
  - Map (full width) → Trend below
  - Mastery (full width) → Support below
  - Alignment (full width) → Reports below
- **Content footprint** sub-tiles stay in a row of 4 (just narrower).
- **Footer** stacks to two lines.

```
(RTL)                                                                    »

╔═════════════════════════════════════════════════════════════════════════╗
║ [👤 ▾]  اللوحة التنفيذية                            ▒ E-SCHOOL ▒        ║
╠══════════════════════════════════════════════════════════════════════╤══╣
║                                                                      │📋│
║  Hero strip (full width)                                             │👥│
║  ┌────┐┌────┐┌────┐                                                  │▶ │
║  │KPI1││KPI2││KPI3│   (row 1 of KPIs)                                │🔬│
║  └────┘└────┘└────┘                                                  │▾ │
║  ┌────┐┌────┐┌────┐                                                  │  │
║  │KPI4││KPI5││KPI6│   (row 2 of KPIs)                                │  │
║  └────┘└────┘└────┘                                                  │  │
║                                                                      │  │
║  ┌─────────────────────────────────────────────────────────────┐     │  │
║  │  Map card (full width)                                      │     │  │
║  └─────────────────────────────────────────────────────────────┘     │  │
║  ┌─────────────────────────────────────────────────────────────┐     │  │
║  │  Trend card (full width)                                    │     │  │
║  └─────────────────────────────────────────────────────────────┘     │  │
║  ...                                                                  │  │
╚═══════════════════════════════════════════════════════════════════════╧══╝
                                                                  Sidebar 72px collapsed
```

---

## 5. التخطيط — الجوال (Mobile < 768px)

```
(RTL)                          »

╔══════════════════════════════╗
║ [☰]  اللوحة التنفيذية  [👤▾]║   ← top bar: hamburger replaces sidebar
╠══════════════════════════════╣
║                              ║
║  Hero (stacked)              ║
║                              ║
║  [الفترة: آخر 30 ▾]          ║
║                              ║
║  ┌────┐  ┌────┐              ║   ← KPI tiles wrap 2 per row
║  │KPI1│  │KPI2│              ║
║  └────┘  └────┘              ║
║  ┌────┐  ┌────┐              ║
║  │KPI3│  │KPI4│              ║
║  └────┘  └────┘              ║
║  ┌────┐  ┌────┐              ║
║  │KPI5│  │KPI6│              ║
║  └────┘  └────┘              ║
║                              ║
║  ┌──────────────────────┐    ║
║  │  Map (full width)    │    ║
║  └──────────────────────┘    ║
║  ┌──────────────────────┐    ║
║  │  Trend (full width)  │    ║
║  └──────────────────────┘    ║
║  …                           ║
║                              ║
║  ┌──────────────────────┐    ║
║  │ Narrative arc CTA    │    ║
║  └──────────────────────┘    ║
║                              ║
╠══════════════════════════════╣
║  Footer (stacked)            ║
╚══════════════════════════════╝
```

- **Sidebar replaced by a hamburger drawer** (slides in from the right, full-height).
- **All multi-column rows collapse to single column.**
- **Hero KPIs** wrap to 2-per-row.
- **Period filter** moves below the hero on its own row.
- **Sticky bottom CTA** is NOT used — the user scrolls naturally to the narrative-arc card.

---

## 6. الحالات (States)

### 6.1 Loading
- **Page-level shimmer skeletons** for KPIs and cards as data resolves.
- The hero strip shows the heading immediately; KPIs and cards reveal as data arrives.
- Each card shimmer respects its final height to prevent layout shift.

### 6.2 Empty period
If the selected period has no data:

```
┌────────────────────────────────────────────────────────┐
│   اللوحة التنفيذية                                       │
│   لا تتوفر بيانات اللوحة التنفيذية في الفترة المحددة.    │
│                                                        │
│   [تغيير الفترة]                                         │
└────────────────────────────────────────────────────────┘
```

### 6.3 Partial empty (one card has no data)
Each affected card shows its own empty state in place — the rest of the page renders normally.

### 6.4 Error (server / network)
A page-level banner above the hero, reusing the shell error patterns:

```
┌────────────────────────────────────────────────────────┐
│  ⚠  حدث خلل غير متوقع في الخدمة. تم إبلاغ الفريق التقني. │
│                                              [إعادة المحاولة] │
└────────────────────────────────────────────────────────┘
```

### 6.5 Refreshed
Toast at top-end (top-left in RTL): "تم تحديث البيانات." auto-dismiss after 4s.

---

## 7. التفاعل والتنقّل (Interaction Notes)

### Period filter
- Top-end of the hero strip.
- Default: "آخر 30 يوماً".
- Changing the period **refetches all data on the page** (not per-card) and re-renders shimmer states briefly.

### Narrative arc
- Each section's footer link (`[الانتقال إلى …]`) and the closing CTA card lead to the next module in order.
- The sidebar always remains accessible — the arc is a nudge, not a forcing function.

### Drill-downs
- Each card's footer link navigates to the relevant module (Engagement, Content, Academics, Care, Impact, Reports).
- Map region clicks **do not** drill down in MVP — they show a tooltip only.
- KPI-tile clicks open a methodology dialog (not a drill-down).

### Keyboard navigation
- Tab order: top-bar logo → page title → period filter → each KPI tile → each card (in render order) → narrative-arc CTA → sidebar items → footer links.
- `Esc` closes any open methodology dialog.

### Print
- The "طباعة" action in the top bar prints a paginated, sidebar-less version of this page with the print header (logo + page title + date) at the top of every page.

---

## 8. قائمة التحقق التنفيذية (Implementation Handoff Checklist)

- [ ] All copy comes from `i18n/ar.json` under the `overview.*` namespace
- [ ] Layout matches the desktop / tablet / mobile diagrams
- [ ] Sidebar lives on the right at all breakpoints (RTL)
- [ ] Active sidebar item shows the right-edge accent in `#08798C`
- [ ] All 6 hero KPIs are populated from `overview.json#heroKpis[]`
- [ ] Saudi map uses the muted base + brand-tinted region overlay (no garish colors)
- [ ] All trend lines use `#08798C` as the primary series color
- [ ] Mastery bars use `#71B36E` for the fill
- [ ] All cards have a "ملاحظة تحليلية" insight line
- [ ] Source line ("المصدر: قاعدة بيانات…") visible at the bottom of each chart card
- [ ] Period filter refetches the whole page (not per-card)
- [ ] Empty-state copy uses the canonical phrasings from the shell document
- [ ] Narrative-arc CTA is the visual close of the page
- [ ] Tablet collapses to single-column rows in the documented order
- [ ] Mobile uses a hamburger drawer for the sidebar
- [ ] Keyboard tab order matches § 7
- [ ] Map region clicks do NOT drill down (tooltip only)

---

**End of Executive Overview wireframe. Proceed to `03-impact.md`.**
