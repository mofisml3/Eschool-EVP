# 15 — Unified Arabic Glossary
## مصطلحات موحّدة للبوابة

The single source of truth for every recurring term in the portal. **If a string appears in multiple modules, it must use the exact form defined here.** Inconsistencies are treated as defects during QA.

> Phase 2 readiness: every entry in this glossary will gain an `en` value when bilingual support is added. The Arabic forms below are stable and will not change.

---

## 1. مفاهيم المتعلمين والمعلمين (Learners & Teachers)

| المصطلح المعتمد | English equivalent (Phase 2) | Notes |
|-----------------|------------------------------|-------|
| المتعلم / المتعلمون | Learner / Learners | Preferred over "الطالب / الطلاب" in strategic and headline contexts |
| الطالب / الطلاب | Student(s) | Acceptable in operational contexts (e.g., "رعاية الطلاب"); avoid mixing in the same paragraph |
| المعلم / المعلمون | Teacher / Teachers | |
| الكادر التعليمي | Teaching workforce / Faculty | |
| ولي الأمر / أولياء الأمور | Parent / Guardians | |
| ذوو الاحتياجات الخاصة | Learners with special needs | Always plural; never "المعاقون" |
| المتعلم المتأخر أكاديمياً | At-risk / lagging learner | |

---

## 2. مراحل ومناطق وتخصصات (Stages, Regions, Disciplines)

| المصطلح المعتمد | Reference id | Notes |
|-----------------|--------------|-------|
| المرحلة الابتدائية | `primary` | Always with "ال" |
| المرحلة المتوسطة | `middle` | |
| المرحلة الثانوية | `secondary` | |
| المنطقة الإدارية | — | Use the official 13-region taxonomy in `config/regions.ts` |
| الرياض | `riyadh` | |
| مكة المكرمة | `makkah` | Always with "المكرمة" |
| المدينة المنورة | `madinah` | Always with "المنورة" |
| الشرقية | `eastern` | |
| القصيم | `qassim` | |
| عسير | `asir` | |
| تبوك | `tabuk` | |
| حائل | `hail` | |
| الحدود الشمالية | `northern` | |
| جازان | `jazan` | |
| نجران | `najran` | |
| الباحة | `bahah` | |
| الجوف | `jouf` | |
| التخصص | `discipline` | Used for experiment categories |
| المادة الدراسية | `subject` | Used in videos, teachers, assessments |

---

## 3. المحتوى التعليمي (Educational Content)

| المصطلح المعتمد | English equivalent | Notes |
|-----------------|--------------------|-------|
| الدرس المرئي | Video lesson | Avoid "الفيديو التعليمي" in formal copy |
| التجربة التفاعلية | Interactive experiment | |
| المختبر الافتراضي | Virtual lab | |
| المحاكاة التفاعلية | Interactive simulation | |
| النشاط المُلعَّب | Gamified activity | |
| التصوّر ثلاثي الأبعاد | 3D visualization | |
| ساعات المحتوى | Content hours | |
| ساعات المشاهدة | Watch hours | Distinct from content hours |
| نسبة الإكمال | Completion rate | |
| المنهج / المنهج الوطني | Curriculum / National curriculum | |
| الوحدة المنهجية | Curriculum unit | |
| الترجمة النصية | Captions | For accessibility, not "ترجمة الفيديو" |

---

## 4. التقييم والإتقان (Assessment & Mastery)

| المصطلح المعتمد | English equivalent | Notes |
|-----------------|--------------------|-------|
| التقييم | Assessment | |
| الإتقان | Mastery | |
| متوسط الإتقان | Average mastery | |
| نسبة الاجتياز | Pass rate | Threshold defined in `config/thresholds.ts` |
| التقييم التكويني | Formative assessment | |
| التقييم الختامي | Summative assessment | |
| التقييم التشخيصي | Diagnostic assessment | |
| تقدّم التعلّم | Learning progress | |
| تحسّن الأداء السنوي | Year-over-year improvement | |
| ممتاز / جيد جداً / جيد / مقبول / لم يجتز | Performance bands | Exact strings used in distribution charts |

---

## 5. التفاعل والاستخدام (Engagement & Usage)

| المصطلح المعتمد | English equivalent | Notes |
|-----------------|--------------------|-------|
| المتعلمون النشطون يومياً | Daily Active Learners (DAU) | |
| المتعلمون النشطون أسبوعياً | Weekly Active Learners (WAU) | |
| المتعلمون النشطون شهرياً | Monthly Active Learners (MAU) | |
| معدل الاستمرارية | Stickiness (DAU/MAU) | |
| الجلسة | Session | |
| متوسط مدة الجلسة | Average session duration | |
| ساعات الذروة | Peak hours | |
| التغطية الجغرافية | Geographic coverage | |

---

## 6. الدعم والرعاية (Support & Care)

| المصطلح المعتمد | English equivalent | Notes |
|-----------------|--------------------|-------|
| الاستفسار / التذكرة | Ticket / Inquiry | "استفسار" preferred in user-facing copy; "تذكرة" only in technical docs |
| متوسط زمن الاستجابة | Average response time | |
| الالتزام بمعايير الخدمة | SLA adherence | |
| الحلّ من أول تواصل | First-contact resolution | |
| رضا المستفيدين | Satisfaction | |
| الجلسة الإرشادية | Counseling session | |
| المتابعة الأكاديمية | Academic follow-up | |
| الإتاحة | Accessibility | The portal-wide concept (WCAG-aligned) |
| الشمول | Inclusion | The educational concept (special needs, gender, region) |
| الفجوة الرقمية | Digital divide | |
| لغة الإشارة | Sign language | |
| قارئ الشاشة | Screen reader | |
| التباين العالي | High contrast | |
| تكبير الخطوط | Font scaling | |

---

## 7. الأثر الاستراتيجي (Strategic Impact)

| المصطلح المعتمد | English equivalent | Notes |
|-----------------|--------------------|-------|
| الأثر الاستراتيجي | Strategic impact | |
| المواءمة | Alignment | Used for Vision 2030 and SDG 4 |
| رؤية المملكة 2030 | Saudi Vision 2030 | Always full form |
| الهدف الرابع للتنمية المستدامة | SDG 4 — Quality Education | First mention: full form. Subsequent: "الهدف الرابع" |
| غاية | Target | Lower-case in the SDG hierarchy: غايات الهدف الرابع |
| العدالة | Equity | |
| الكفاءة الاقتصادية | Economic efficiency | |
| القيمة الاجتماعية | Social value | |
| كلفة المتعلم | Cost per learner | |
| محطات استراتيجية | Strategic milestones | |
| خارطة الطريق | Roadmap | |
| المراجعة الاستراتيجية | Strategic review | |

---

## 8. التقارير والأدلة (Reports & Evidence)

| المصطلح المعتمد | English equivalent | Notes |
|-----------------|--------------------|-------|
| التقرير السنوي | Annual report | |
| التقرير الفصلي | Term report | |
| الملخص التنفيذي | Executive brief / Executive summary | |
| دراسة الحالة | Case study | |
| المنهجية | Methodology | |
| تقرير المواءمة | Alignment report | |
| إنفوغرافيك | Infographic | Loanword, no Arabic alternative used in this portal |
| تحميل | Download | Verb on buttons |
| معاينة | Preview | |

---

## 9. أزمنة وتنسيقات (Time & Formatting)

| المصطلح المعتمد | Notes |
|-----------------|-------|
| توقيت السعودية (UTC+3) | Always include UTC offset on first mention per page |
| اليوم / آخر 7 أيام / آخر 30 يوماً | Standard period filter labels |
| هذا الفصل الدراسي | This term |
| هذا العام الدراسي | This academic year |
| كل الفترات | All periods |
| آخر تحديث | Last updated |
| آخر مراجعة استراتيجية | Last strategic review (Impact module only) |
| آخر إضافة | Last added (Reports module only) |
| ميلادي / هجري | Gregorian / Hijri (Hijri deferred to a future enhancement) |

---

## 10. واجهة الاستخدام (UI Vocabulary — Reusable Strings)

| المصطلح المعتمد | Use |
|-----------------|-----|
| تسجيل الدخول | Login |
| تسجيل الخروج | Logout |
| الجلسة الحالية | Current session |
| التالي / السابق | Next / Previous |
| العودة | Back / Return |
| عرض التفاصيل | View details |
| عرض المزيد | View more |
| فتح التقرير | Open report |
| تحميل بصيغة PDF | Download as PDF |
| طباعة | Print |
| إغلاق | Close |
| تأكيد | Confirm |
| إلغاء | Cancel |
| تطبيق | Apply (filters) |
| مسح | Clear (filters) |
| إعادة المحاولة | Retry |
| تحديث البيانات | Refresh data |
| تغيير الفترة | Change period |
| منهجية احتساب المؤشر | Methodology |
| ملاحظة تحليلية | Analytical insight (one-line under each chart) |

---

## 11. عبارات محظورة (Banned Vocabulary — Hard No)

These appear nowhere in the portal:

- ❌ "اضغط هنا"
- ❌ "موافق" (use "تأكيد" or context-specific verb)
- ❌ "حسناً" (too colloquial)
- ❌ "أنت / اضغط / تابعنا" (informal address)
- ❌ Marketing absolutes without evidence: "الأفضل"، "الأقوى"، "ثوري"، "رائد جداً"
- ❌ Loanwords with Arabic equivalents: "داشبورد" → "اللوحة"، "كي بي آي" → "المؤشر"، "لوج إن" → "تسجيل الدخول"
- ❌ Emoji or decorative symbols in body copy
- ❌ "نحن فخورون / بكل سعادة / يسعدنا" (sentimental)
- ❌ Question marks ending statements: "؟" reserved for actual questions

See `docs/00-editorial-principles.md` § 10 for the full preferred-vs-banned mapping.

---

## 12. مرجعية مفاتيح المنهجية (Methodology Keys)

Every KPI in the portal carries a `methodologyKey`. The key references a methodology entry that opens in the Methodology dialog (see `shell/01-global-shell.md` § 8). The keys below are the canonical set:

| `methodologyKey` | المؤشر المرتبط |
|-----------------|----------------|
| `active-learners` | إجمالي المتعلمين الفاعلين / DAU / WAU / MAU |
| `stickiness` | معدل الاستمرارية |
| `video-lessons` | الدروس المرئية المتاحة |
| `interactive-experiments` | التجارب التفاعلية |
| `contributing-teachers` | المعلمون المساهمون |
| `geographic-coverage` | التغطية الجغرافية |
| `national-mastery` | متوسط الإتقان الوطني |
| `pass-rate` | متوسط نسبة الاجتياز |
| `yoy-improvement` | تحسّن الأداء السنوي |
| `sla-adherence` | الالتزام بمعايير الخدمة |
| `first-contact-resolution` | الحلّ من أول تواصل |
| `cost-reduction` | تخفيض كلفة المتعلم |
| `sdg4-alignment` | المواءمة مع الهدف الرابع |
| `vision-2030-alignment` | المواءمة مع رؤية المملكة 2030 |

Every methodology entry includes:
- `title` — the KPI name (Arabic)
- `definition` — what is being measured
- `formula` — how it is computed (in plain Arabic with embedded formulas where needed)
- `dataSource` — where the underlying data comes from
- `lastReviewedAt` — when the methodology was last reviewed

---

## 13. حوكمة المسرد (Glossary Governance)

- This file is the **tiebreaker** for any disagreement about Arabic phrasing.
- Adding a term: open a PR to this file, get sign-off from the Arabic editorial reviewer, then use it in a module document.
- Removing a term: only after confirming no module document references it.
- The build's integrity check fails if a string in `i18n/ar.json` references a glossary key that doesn't exist here.
- Phase 2 English values are added next to each Arabic entry in a single column extension — no restructure.

---

**End of glossary. End of `data-spec/`. End of the documentation foundation.**

The portal documentation set is now ready for the next phase: **wireframes and UI development**.
