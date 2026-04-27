# 01 — Global Shell
## الهيكل العام للبوابة (الترويسة، الشريط الجانبي، التذييل، والحالات المشتركة)

This document specifies every string and structural element that appears outside individual modules — the chrome of the application. Anything here is rendered on every authenticated page.

> **Direction:** RTL throughout. The sidebar lives on the **right**. The top bar reads from right to left. Logical CSS properties (`inline-start`, `inline-end`) are used so layout is direction-aware.

---

## 1. الترويسة العلوية (Top Bar)

### Layout (RTL reading order: right → left)

```
[ E-School Logo ]   [ Page Title  /  Breadcrumbs ]                    [ Session Menu ]
   right edge                center                                         left edge
```

### Elements

| Element | Arabic content | Notes |
|---------|---------------|-------|
| Logo (right) | Official E-School logo (Arabic wordmark + book/play mark) | Clickable → returns to `/portal/overview`. Tooltip: "العودة إلى اللوحة التنفيذية" |
| Page title | Dynamic, sourced from each module file | Bold, primary teal `#08798C` |
| Breadcrumbs | e.g. "الرئيسية ‹ المحتوى ‹ مكتبة الدروس المرئية" | Separator `‹` (RTL), each segment is a link except the last |
| Session menu trigger (left) | User avatar/icon + label "الجلسة الحالية" | Opens a small popover |
| Session menu — content | • "آخر تسجيل دخول: 27 أبريل 2026، 09:14"<br>• "تسجيل الخروج" | Logout is a destructive action, styled as a quiet link not a red button |

### Tooltips
- Logo: "العودة إلى اللوحة التنفيذية"
- Breadcrumb root: "الرئيسية"
- Session menu: "الجلسة الحالية وتسجيل الخروج"

### Print/export bar (when on a report or print-friendly page)
- "طباعة"
- "تحميل بصيغة PDF"
- "نسخة للعرض" (presentation mode)

---

## 2. الشريط الجانبي (Side Navigation)

### Position
- Right side of the viewport (RTL).
- Width: 264px expanded, 72px collapsed (icon-only).
- Collapsible via a chevron at the top of the sidebar — tooltip: "طي/توسيع القائمة".

### Navigation items (in fixed order)

| # | Icon hint | Label (Arabic) | Route | Short descriptor (tooltip in collapsed mode) |
|---|-----------|---------------|-------|-----------------------------------------------|
| 1 | `layout-dashboard` | اللوحة التنفيذية | `/portal/overview` | المؤشرات الوطنية الكبرى |
| 2 | `users` | نشاط الطلاب وتفاعلهم | `/portal/engagement` | حضور المتعلمين وتفاعلهم |
| 3 | `play-circle` | مكتبة الدروس المرئية | `/portal/content/videos` | عرض المحتوى المرئي وحجمه |
| 4 | `flask-conical` | التجارب التفاعلية | `/portal/content/experiments` | المختبرات والمحاكاة الرقمية |
| 5 | `graduation-cap` | المعلمون والأداء الأكاديمي | `/portal/academics/teachers` | الكادر التعليمي ومخرجاته |
| 6 | `clipboard-check` | التقييم وتقدّم التعلّم | `/portal/academics/assessments` | مؤشرات الإتقان والتقدّم |
| 7 | `heart-pulse` | الدعم ورعاية الطلاب | `/portal/care` | الرعاية والشمول والإتاحة |
| 8 | `target` | الأثر الاستراتيجي والقيمة | `/portal/impact` | المواءمة مع الرؤية الوطنية وأهداف الأمم المتحدة |
| 9 | `file-text` | مركز التقارير والأدلة | `/portal/reports` | الأدلة والتقارير القابلة للتحميل |

### Sidebar footer block (bottom of sidebar)
- Link: "عن البوابة" → `/portal/about`
- Version label: `الإصدار 0.1` — small, muted, read-only

### Visual states
- **Active item:** background `#E6F2F4` (brand-primary-50), right-edge accent bar in `#08798C`, label in `#08798C` semibold.
- **Hover item:** background `#F4F6F7`.
- **Disabled item:** N/A in MVP — every section is always available.

### Section grouping (subtle, no labels)
A 1px divider between items 4 and 5, and between 7 and 8, to visually group:
- (1) Overview
- (2–4) Activity & Content
- (5–6) Academics
- (7) Care
- (8–9) Strategic & Evidence

---

## 3. التذييل (Footer)

The footer appears at the bottom of every page (sticks to the bottom on short pages; flows naturally on long ones).

### Layout (RTL)
A single dark-teal band (`#04576A`) with white text, three columns:

| Right column | Center column | Left column |
|--------------|---------------|-------------|
| E-School logo (white variant) + "مشروع المدرسة الإلكترونية — وزارة التعليم" | "بوابة العرض التنفيذي · إصدار 0.1 · توقيت السعودية (UTC+3)" | "© 2026 جميع الحقوق محفوظة" |

### Optional second row (small, lighter)
- Link: "عن البوابة"
- Link: "منهجية احتساب المؤشرات" → `/portal/about#methodology`
- Link: "مصادر البيانات" → `/portal/about#sources`

No social media icons. No external links other than the methodology and sources anchors.

---

## 4. الأزرار والروابط القياسية (Standard Buttons & Links)

These canonical labels are reused everywhere. The KPI catalogs and module files reference them by purpose, not by string.

### Primary actions
| Purpose | Label |
|---------|-------|
| Login | تسجيل الدخول |
| Logout | تسجيل الخروج |
| Continue narrative arc | التالي |
| Return | العودة |
| Open details | عرض التفاصيل |
| View more items | عرض المزيد |
| Open report | فتح التقرير |
| Download | تحميل |
| Download PDF | تحميل بصيغة PDF |
| Print | طباعة |
| Close dialog | إغلاق |
| Confirm | تأكيد |
| Cancel | إلغاء |
| Apply filter | تطبيق |
| Clear filter | مسح |
| Try again (after error) | إعادة المحاولة |
| Refresh data | تحديث البيانات |
| Switch period | تغيير الفترة |

### Quiet/tertiary links
- "اقرأ المزيد"
- "تفاصيل المنهجية"
- "مصدر البيانات"

### Forbidden labels
- ❌ "اضغط هنا"
- ❌ "موافق" (use "تأكيد" or a context-specific verb)
- ❌ "حسناً" — too colloquial
- ❌ "اشترك"، "سجّل" — irrelevant in a read-only portal

---

## 5. مكوّنات شائعة (Common Components)

### KPI Tile (المؤشّر السريع)
A single KPI card has:
- **القيمة** — large number, primary teal `#08798C`
- **الوحدة** — small label below or next to the value
- **العنوان المختصر** — under the value
- **اتجاه التغيّر** — small arrow + percent vs. previous period (green for positive, amber for caution, red used very sparingly)
- **الوصف الموسّع** — accessible via tooltip on hover/focus
- **رابط "عرض التفاصيل"** — optional, leads to the relevant module page

Every KPI tile must read aloud meaningfully without context (screen-reader friendly).

### Chart card
- **عنوان الرسم البياني** — short, descriptive
- **فترة الزمن** — e.g., "آخر 12 شهراً"
- **ملاحظة تحليلية** — one-line insight in Arabic, italicized, muted color
- **زر التحميل** — optional, "تحميل البيانات"
- Source line: "المصدر: قاعدة بيانات المدرسة الإلكترونية — تحديث 27 أبريل 2026"

### Table
- Column headers: bold, `#3A4A52`.
- Numerical columns: left-aligned (LTR within the cell), Arabic-readable headers right-aligned.
- Pagination strings: "السابق"، "التالي"، "الصفحة 1 من 12"، "إجمالي السجلات: 240".
- Empty: see common states below.
- Sort indicators: ascending arrow ▲ "تصاعدي"، descending ▼ "تنازلي".

### Filter bar
Standard filter labels:
- "الفترة الزمنية"
- "المنطقة الإدارية"
- "المرحلة الدراسية"
- "المادة الدراسية"
- "الجنس" — only when the indicator requires it (and methodology is explained inline)

### Map (national footprint)
- Title: "التغطية الجغرافية على مستوى المملكة"
- Legend labels: "تغطية كاملة"، "تغطية مرتفعة"، "تغطية متوسطة"، "بيانات غير متوفرة"
- Region tooltip pattern: `{region_name} — {metric_label}: {value}`

---

## 6. الحالات المشتركة (Common UI States)

### 6.1 Loading
| Context | Copy | Notes |
|---------|------|-------|
| Page-level | "جارٍ تحميل البيانات…" | Centered, with subtle skeleton shimmer |
| Card-level | "جارٍ التحميل…" | In-card |
| Button (in-flight) | "جارٍ التحقق…" / "جارٍ التحميل…" | Replaces button label, button disabled |
| Report generation | "جارٍ إعداد التقرير…" | With brief progress hint |

### 6.2 Empty
| Context | Copy |
|---------|------|
| No data for period | "لا تتوفر بيانات لعرضها في الفترة المحددة." |
| No filter results | "لا توجد نتائج مطابقة لمعايير التصفية الحالية." |
| Empty list | "لا توجد عناصر لعرضها في هذا القسم حالياً." |
| Reports library empty category | "لم تُضَف تقارير في هذه الفئة بعد." |
| Search no match | "لم يُعثر على نتائج. يُرجى تعديل كلمات البحث." |

Every empty state shows:
- A neutral icon (no emoji, no illustration of sad faces)
- The copy above
- A subtle secondary action when applicable: "تعديل التصفية" or "العودة إلى القائمة الكاملة"

### 6.3 Error
| Context | Copy |
|---------|------|
| Generic | "تعذّر إكمال العملية. يُرجى المحاولة مرة أخرى." |
| Network | "تعذّر الاتصال بالخدمة. يُرجى التحقق من الاتصال." |
| Server / 5xx | "حدث خلل غير متوقع في الخدمة. تم إبلاغ الفريق التقني." |
| Not found / 404 | "الصفحة المطلوبة غير متاحة." |
| Session expired | "انتهت الجلسة لأسباب أمنية. يُرجى تسجيل الدخول مجدداً." |
| Unauthorized | "لا توجد صلاحية للوصول إلى هذا المحتوى." |

Every error state offers a recovery action:
- "إعادة المحاولة"
- "العودة إلى الرئيسية"
- "تسجيل الدخول مجدداً"

### 6.4 Confirmation / Toasts
- Download started: "بدأ تحميل التقرير."
- Download complete: "تم تحميل التقرير بنجاح."
- Logout: "تم تسجيل الخروج بنجاح."
- Filter applied: "تم تطبيق التصفية."

Toasts auto-dismiss after 4 seconds. They never block the UI.

---

## 7. الفلاتر الزمنية القياسية (Standard Period Filter)

A single, reusable filter component sits at the top of every data-bearing page (Overview, Engagement, Videos, Experiments, Teachers, Assessments, Care).

### Period options
- "اليوم"
- "آخر 7 أيام"
- "آخر 30 يوماً" *(default)*
- "هذا الفصل الدراسي"
- "هذا العام الدراسي"
- "كل الفترات"

### Comparison toggle
- "مقارنة بالفترة السابقة" *(off by default)*

### Region filter (optional, where applicable)
- Default: "كل المناطق"
- Options: the 13 administrative regions

### Stage filter (optional, where applicable)
- Default: "كل المراحل"
- Options: "الابتدائية"، "المتوسطة"، "الثانوية"

---

## 8. أنماط النوافذ المنبثقة (Modals & Dialogs)

The MVP uses dialogs only for:
- Logout confirmation
- Report download confirmation (when a report is large)
- Methodology preview ("منهجية احتساب المؤشر")

### Logout confirmation
- Title: "تأكيد تسجيل الخروج"
- Body: "هل تودّ إنهاء الجلسة الحالية؟"
- Primary: "تأكيد تسجيل الخروج"
- Secondary: "إلغاء"

### Methodology preview
- Title: "منهجية احتساب: {اسم المؤشر}"
- Body: paragraph from the module file
- Footer link: "الاطّلاع على الوثيقة الكاملة"

No other modals exist in the MVP. No interruptive popups, no marketing modals, no "rate this page" prompts.

---

## 9. إمكانية الوصول (Accessibility — Arabic UI)

- Target WCAG 2.1 AA.
- Color contrast ≥ 4.5:1 for text against background.
- Focus rings visible in `#08798C` with 2px outline and 2px offset.
- Every interactive element has an accessible name in Arabic.
- Charts include a "عرض البيانات بشكل جدولي" link as a textual fallback.
- Screen-reader language attribute is `lang="ar"` everywhere; embedded Latin spans get `lang="en"`.
- Keyboard navigation order respects visual right-to-left order.
- No information conveyed by color alone.

---

## 10. عناصر تظهر مرة واحدة فقط (Singletons)

Some UI strings appear in a single, well-known place — listed here so they're not lost:

| Where | Arabic |
|-------|--------|
| App tab title pattern | `{اسم الصفحة} — بوابة المدرسة الإلكترونية للعرض التنفيذي` |
| Default tab title (login) | `بوابة المدرسة الإلكترونية للعرض التنفيذي` |
| 404 hero heading | "الصفحة المطلوبة غير متاحة" |
| Maintenance banner (future) | "البوابة قيد الصيانة. سنعاود العمل قريباً." |
| Print header (every report) | E-School logo + "بوابة العرض التنفيذي · {اسم الصفحة} · {تاريخ الطباعة}" |
| Print footer (every report) | "مصدر البيانات: قاعدة بيانات المدرسة الإلكترونية — وزارة التعليم" |

---

**End of global shell. Proceed to `02-login.md`.**
