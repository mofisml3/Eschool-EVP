# 00 — Editorial Principles
## المبادئ التحريرية لبوابة العرض التنفيذي

This document defines the voice, tone, language register, formatting conventions, and editorial discipline that govern every Arabic string in the portal. It is the first reference point for anyone writing, reviewing, or translating content. No screen, card, or KPI label may diverge from these principles without an explicit editorial waiver.

---

## 1. الجمهور المستهدف (Audience)

The portal is read by:

- معالي وزير التعليم وقيادات الوزارة العليا
- وكلاء الوزارة ومديرو الإدارات الاستراتيجية
- ممثلو الجهات الوطنية ذات العلاقة (مثل هيئة تقويم التعليم، صندوق التنمية، الهيئات الإشرافية)
- ضيوف استراتيجيون مُصرَّح لهم (دون أدوار تشغيلية)

The reader is **a senior decision-maker, not an operator**. The copy must respect their time, speak with calm authority, and never explain the obvious or sell with adjectives.

---

## 2. الصوت والنبرة (Voice & Tone)

### Voice — what the portal sounds like
- **رسمي** (formal) — government register, no colloquialisms
- **موضوعي** (objective) — facts before adjectives
- **هادئ وواثق** (calm and confident) — never excited, never apologetic
- **مُوجَز** (concise) — every sentence earns its place

### Tone — how that voice flexes by section
| Section | Tonal lean |
|---------|------------|
| Login & shell | Welcoming, trustworthy, restrained |
| Executive Overview | Authoritative, headline-driven |
| Engagement / Content / Teachers | Evidential, descriptive |
| Assessments | Analytical, precise |
| Care | Humane, dignified |
| Strategic Impact | Visionary but measured |
| Reports | Documentary, neutral |

### What we never sound like
- ❌ تسويقي مبالغ فيه ("الأفضل"، "الرائد"، "الأقوى" دون دليل)
- ❌ تقني مفرط (jargon, acronyms without definition)
- ❌ عاطفي ("نحن فخورون"، "بكل حماس") — replace with measured statement of fact
- ❌ استخدام صيغة المخاطب غير الرسمية ("أنت"، "اضغط هنا")
- ❌ عبارات استهلاكية مأخوذة من تطبيقات الجوّال

---

## 3. السجل اللغوي (Language Register)

- **الفصحى الحديثة (MSA)** is the only acceptable register.
- Use **صيغة الجمع للحضرة الرسمية** for institutional voice (e.g., "نقدّم"، "نعرض") only when speaking *as the program*. Default to impersonal third-person factual statements (e.g., "يبلغ عدد المتعلمين الفاعلين…").
- Prefer **الجملة الاسمية** for KPI labels and headings ("إجمالي المتعلمين الفاعلين") and **الجملة الفعلية** for narrative paragraphs.
- Avoid passive voice unless the actor is irrelevant or unknown.
- Address the reader, when needed, with **حضرة المسؤول** or **الزائر الكريم** — not "أنت".

---

## 4. المصطلحات الأساسية (Core Terminology)

A canonical glossary lives in `data-spec/15-glossary.md`. The non-negotiable terms:

| المصطلح المعتمد | English equivalent | Notes |
|-----------------|--------------------|-------|
| المتعلم / المتعلمون | Learner(s) | Preferred over "الطالب" in strategic contexts; "الطلاب" acceptable in operational contexts |
| المعلم / المعلمون | Teacher(s) | |
| الدرس المرئي | Video lesson | Avoid "الفيديو التعليمي" outside casual contexts |
| التجربة التفاعلية | Interactive experiment | |
| المؤشر | KPI / Indicator | |
| اللوحة التنفيذية | Executive Overview | |
| التفاعل | Engagement | |
| الإتقان | Mastery | |
| الشمول | Inclusion | |
| الإتاحة | Accessibility | |
| الأثر الاستراتيجي | Strategic Impact | |
| التغطية الجغرافية | Geographic coverage | |
| الرعاية | Care / duty of care | |
| المنطقة الإدارية | Administrative region | Use the official 13-region taxonomy |

Inconsistency in these terms is treated as a defect.

---

## 5. الأرقام والتنسيق العددي (Numerals & Number Formatting)

### Default decision — MVP
- **Western digits (0–9)** are the default everywhere: KPIs, charts, tables, dates, file sizes, durations.
- Rationale: chart libraries, exported PDFs, and mixed Latin/Arabic content render Western digits more reliably; this matches the official tone of recent Saudi government dashboards.
- Arabic-Indic digits (٠–٩) are **reserved for ceremonial prose** (e.g., a foreword paragraph quoting Vision 2030) and are not used in the live UI in MVP. A future toggle is planned but not built.

### Formatting rules
- Thousands separator: comma (`،` Arabic comma is **not** used as a thousands separator). Use the Latin comma `,` — example: `2,480,000`.
- Decimal separator: dot (`.`) — example: `78.4٪`.
- Percentages: number + Arabic percent sign `٪` (U+066A), no space — example: `92٪`. Latin `%` is acceptable in dense table cells if `٪` causes layout issues; pick one and apply consistently.
- Large numbers in headlines may be abbreviated: `2.48 مليون`، `48.7 ألف`. Do not mix `M`/`K` Latin abbreviations.
- Negative numbers: prefix with the Arabic minus or use parentheses in tables.
- Ordinals in prose: "الأول، الثاني، الثالث" not "1st, 2nd".

### Units of measure
| Quantity | Arabic unit | Example |
|----------|-------------|---------|
| Time (short) | دقيقة / دقائق | 14 دقيقة |
| Time (long) | ساعة / ساعات | 9,820 ساعة |
| Count of people | متعلم / متعلمون | 2,480,000 متعلم |
| Schools | مدرسة / مدارس | 27,400 مدرسة |
| Regions | منطقة / مناطق | 13 منطقة |
| Lessons | درس / دروس | 48,750 درساً |
| Subjects | مادة / مواد | 24 مادة |

Always use the correct **تمييز** form: `48 درساً`، `100 درسٍ`، `1,000 درس`.

---

## 6. التواريخ والأزمنة (Dates & Time)

- **Default calendar:** الميلادي (Gregorian).
- Date format in UI: `27 أبريل 2026` (day + Arabic month name + year). Avoid numeric-only `27/04/2026` except in dense tables.
- Months are spelled in **Levantine/MSA Arabic month names** (يناير، فبراير، …، ديسمبر). Do not use the Syriac names (كانون الثاني، شباط…) in this portal.
- **هجري (Hijri):** documented as a Phase 2 enhancement. Out of scope for MVP.
- Time zone: **توقيت السعودية (UTC+3)**. The footer states this once.
- Time format: 24-hour by default in tables (`14:30`); 12-hour with `صباحاً / مساءً` only in narrative copy.
- Relative time phrasing: "قبل 3 دقائق"، "قبل ساعتين"، "أمس"، "اليوم"، "هذا الأسبوع". Avoid English-style "5m ago".
- Periods in filters: "اليوم"، "آخر 7 أيام"، "آخر 30 يوماً"، "هذا الفصل الدراسي"، "هذا العام الدراسي".

---

## 7. علامات الترقيم (Punctuation)

Use Arabic punctuation everywhere Arabic text is read:

| Mark | Use |
|------|-----|
| `،` (Arabic comma, U+060C) | Default comma |
| `؛` (Arabic semicolon, U+061B) | Semicolon |
| `؟` (Arabic question mark, U+061F) | Question mark |
| `.` | Full stop (Latin dot is standard in Arabic) |
| `:` | Colon |
| `«…»` or `"…"` | Quotation marks. Prefer `«…»` for formal copy |

- Never use `,` `;` `?` (Latin) in Arabic body text.
- Latin acronyms inside Arabic (e.g., `UNESCO`, `SDG 4`) keep their Latin form and are not transliterated.
- Numbers and Latin acronyms inside an Arabic sentence retain LTR rendering automatically; do not insert manual direction marks unless a specific layout bug requires it.

---

## 8. النصوص ثنائية الاتجاه (Bidirectional Text)

- The whole portal is `<html dir="rtl" lang="ar">`.
- Latin-script tokens (URLs, file names, code, acronyms) embedded in Arabic prose render LTR automatically — no manual override needed in 99% of cases.
- For mixed-direction edge cases (e.g., a parenthesized Latin acronym at the start of a line), wrap the Latin token in a `<span dir="ltr">` rather than inserting Unicode control characters.
- Numerals inside Arabic sentences keep their natural LTR reading order.

---

## 9. الأطوال والإيجاز (Length & Concision)

| Element | Maximum length |
|---------|----------------|
| KPI short label | ≤ 4 words |
| KPI extended descriptor | ≤ 18 words |
| Page hero subtitle | ≤ 22 words |
| Card title | ≤ 6 words |
| Card description | ≤ 30 words |
| Button label (CTA) | ≤ 3 words |
| Empty-state body | ≤ 25 words |
| Error message | ≤ 20 words |
| Tooltip | ≤ 14 words |

If a string exceeds the limit, rewrite — do not extend.

---

## 10. الكلمات المحظورة والمفضّلة (Banned vs. Preferred Vocabulary)

| ❌ تجنّب | ✅ استخدم بدلاً منها |
|---------|----------------------|
| "الأفضل في المنطقة" | "من بين الأكبر إقليمياً" — مدعوماً برقم |
| "ثوري"، "رائد"، "متطور جداً" | حذف الصفات والاكتفاء بالمعطى الرقمي |
| "نحن فخورون بـ…" | "يُسجَّل في هذه المرحلة…" |
| "بكل سهولة"، "بسرعة فائقة" | حذف، أو ذكر الزمن الفعلي |
| "اضغط هنا" | "عرض التفاصيل"، "تحميل التقرير" |
| "مرحباً بك" (مفرد مخاطب) | "مرحباً بكم" |
| "لوج إن"، "داشبورد"، "كي بي آي" | "تسجيل الدخول"، "اللوحة"، "المؤشر" |
| "عذراً، حدث خطأ ما!" | "تعذّر إكمال العملية. يرجى المحاولة لاحقاً." |

---

## 11. صيغ موحّدة للحالات (Unified State Phrasings)

These exact strings are the canonical phrasings — reuse them everywhere unless a screen needs a context-specific override.

### Loading states
- "جارٍ تحميل البيانات…"
- "جارٍ التحقق…" (for in-flight auth)
- "جارٍ إعداد التقرير…" (for downloads)

### Empty states
- Generic: "لا تتوفر بيانات لعرضها في الفترة المحددة."
- After filter: "لا توجد نتائج مطابقة لمعايير التصفية الحالية."
- Reports library empty: "لم تُضَف تقارير في هذه الفئة بعد."

### Error states
- Generic: "تعذّر إكمال العملية. يرجى المحاولة مرة أخرى."
- Network: "تعذّر الاتصال بالخدمة. يُرجى التحقق من الاتصال."
- Server: "حدث خلل غير متوقع في الخدمة. تم إبلاغ الفريق التقني."
- 404: "الصفحة المطلوبة غير متاحة."
- Session expired: "انتهت الجلسة لأسباب أمنية. يُرجى تسجيل الدخول مجدداً."

### Confirmation / acknowledgement
- "تم بنجاح."
- "تم تحميل التقرير."
- "تم تسجيل الخروج."

---

## 12. حوكمة المراجعة (Review Governance)

1. Any new Arabic string is drafted in the relevant `.md` document under `docs/`.
2. The Arabic editorial reviewer (named in the project charter) signs off on the string.
3. Only after sign-off is the string entered into `i18n/ar.json` and used in the UI.
4. Changes to an existing string follow the same path — the `.md` file is updated first.
5. The glossary (`data-spec/15-glossary.md`) is the tiebreaker for any disagreement.

A string in code that does not appear in the relevant `.md` document is treated as a defect during QA.

---

## 13. الجاهزية للنسخة الإنجليزية المستقبلية (Future English Readiness)

Although the MVP ships Arabic-only, every editorial decision in this document has an English-readiness corollary so Phase 2 is additive, not a refactor:

- Every Arabic string lives in a dictionary and is referenced by a key — never hardcoded. The same key will hold the English value when added.
- Logical CSS (`margin-inline-start` etc.) means LTR layouts work without per-component rewrites.
- The glossary will be extended with English equivalents at the start of Phase 2.
- Numerals and date formats in Arabic already use Western digits and Gregorian — minimal divergence from the eventual English version.
- The voice and tone guide above already maps cleanly to UNESCO/UNICEF English register; the English copy will not be a translation of Arabic but a parallel rewrite for international audiences.

---

**End of editorial principles. Proceed to `shell/01-global-shell.md`.**
