# 02 — Login Screen
## شاشة تسجيل الدخول

The login screen is the first impression of the portal. It must convey institutional authority and trust within three seconds. There is **one** authorized credential set in the MVP, configured via environment variables. There is no "forgot password" flow, no "create account", no social login, no MFA in the MVP.

> **Brand discipline reminder:** the official E-School logo (Arabic wordmark + book/play mark) is the only graphic on this screen. No decorative imagery. No marketing slogans.

---

## 1. تخطيط الصفحة (Page Layout)

A single full-viewport layout, RTL, on a white canvas with a subtle teal→green gradient ribbon at the bottom edge (mirroring the official logo's icon).

### Recommended layout (desktop, ≥ 1024px)

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│                                                          │
│                  [ E-School Logo ]                       │
│                                                          │
│           بوابة العرض التنفيذي                           │
│           للمدرسة الإلكترونية                            │
│                                                          │
│   ┌────────────────────────────────────────┐             │
│   │  مرحباً بكم                             │             │
│   │  منصة موثوقة لعرض المؤشرات الوطنية      │             │
│   │  وأثر مشروع المدرسة الإلكترونية          │             │
│   │                                         │             │
│   │  [ اسم المستخدم            ]            │             │
│   │  [ كلمة المرور      👁     ]            │             │
│   │                                         │             │
│   │  [        تسجيل الدخول        ]         │             │
│   └────────────────────────────────────────┘             │
│                                                          │
│                                                          │
│  ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂  │
│      مشروع المدرسة الإلكترونية — وزارة التعليم            │
│      © 2026 جميع الحقوق محفوظة                            │
└──────────────────────────────────────────────────────────┘
```

### On tablet (768–1023px)
Same layout, narrower form card (max-width 480px), proportional spacing.

### On mobile (< 768px)
- Logo size reduced.
- Form card occupies the full width (with 16px page padding).
- The institutional subtitle ("منصة موثوقة…") truncates after one line and reveals on tap.
- Footer becomes a single line, smaller font.

---

## 2. عناصر الصفحة وصيغها النصية (Page Elements & Copy)

| Element | Arabic copy | Notes |
|---------|-------------|-------|
| Browser tab title | بوابة المدرسة الإلكترونية للعرض التنفيذي | |
| Document hero — line 1 | بوابة العرض التنفيذي | Color `#08798C`, large display weight |
| Document hero — line 2 | للمدرسة الإلكترونية | Color `#3A4A52`, lighter weight, same line size |
| Welcome heading (form card) | مرحباً بكم | Card heading |
| Welcome subtitle | منصة موثوقة لعرض المؤشرات الوطنية وأثر مشروع المدرسة الإلكترونية على المستوى الاستراتيجي. | One sentence; do not exceed |
| Username field label | اسم المستخدم | |
| Username field placeholder | أدخل اسم المستخدم | Used only as hint, not as a substitute for the label |
| Password field label | كلمة المرور | |
| Password field placeholder | أدخل كلمة المرور | |
| Show password toggle (icon button) | إظهار كلمة المرور / إخفاء كلمة المرور | Two states; aria-label updates accordingly |
| Primary button (idle) | تسجيل الدخول | Full-width inside card, `#08798C` background, white text |
| Primary button (in-flight) | جارٍ التحقق… | Button disabled |
| Caps-lock hint (optional) | تنبيه: مفتاح Caps Lock مُفعَّل | Subtle warning under the password field |
| Footer line 1 | مشروع المدرسة الإلكترونية — وزارة التعليم | |
| Footer line 2 | © 2026 جميع الحقوق محفوظة | |
| Footer link (optional, small) | عن البوابة | Opens a lightweight informational page |

### Forbidden / out of scope on this screen
- ❌ "تذكّرني" checkbox (no "remember me" in MVP — single trusted device assumption)
- ❌ "نسيت كلمة المرور؟" link
- ❌ "إنشاء حساب"
- ❌ Marketing taglines, animated illustrations, video backgrounds, testimonials
- ❌ Cookie banner (the portal sets only the session cookie; documented in About page)

---

## 3. حالات النموذج (Form States)

### 3.1 Idle (default)
- Button enabled when both fields are non-empty.
- Inputs in their default visual state (white background, `#E3E8EB` border).

### 3.2 Validating (in-flight)
- Button label switches to "جارٍ التحقق…"
- Button disabled with subtle spinner inside.
- Inputs become read-only during validation.

### 3.3 Field-level validation errors
| Trigger | Field | Inline message |
|---------|-------|----------------|
| Empty username on submit | اسم المستخدم | "يُرجى إدخال اسم المستخدم." |
| Empty password on submit | كلمة المرور | "يُرجى إدخال كلمة المرور." |
| Username with disallowed characters | اسم المستخدم | "يحتوي اسم المستخدم على رموز غير مسموح بها." |

Field error styling: 1px border in `#B0432F`, message below field in same color, 12px font.

### 3.4 Authentication failures (form-level)
A single banner above the form (not per-field). One-line, neutral, never blames the user.

| Server response | Banner copy |
|----------------|-------------|
| Invalid credentials | "تعذّر تسجيل الدخول. يُرجى التحقق من البيانات المُدخلة." |
| Account locked (after N failed attempts — configurable, optional in MVP) | "تم إيقاف الحساب مؤقتاً لأسباب أمنية. يُرجى التواصل مع مسؤول النظام." |
| Network error | "تعذّر الاتصال بالخدمة. يُرجى التحقق من الاتصال والمحاولة مجدداً." |
| Server error | "حدث خلل غير متوقع. تم إبلاغ الفريق التقني." |

The banner uses a calibrated amber background `#FCF4E5` with `#7B5915` text — never red, never alarmist. Reds are reserved for hard-error pages (404, 500), not authentication.

### 3.5 Success
- Brief success state on the button: "تم تسجيل الدخول"
- 250ms later: redirect to `/portal/overview` with a fade transition.
- No toast message — the destination page is its own confirmation.

---

## 4. اعتبارات أمنية على مستوى الواجهة (UI-level Security Considerations)

These are display-layer notes; the actual security policy is documented in the architecture file.

- Password field has `autocomplete="current-password"` and `type="password"`.
- Username field has `autocomplete="username"`.
- The form posts to a single auth endpoint; no client-side credential storage.
- After 5 consecutive failed attempts (configurable), the form switches to a 60-second cooldown with the message: "تم تجاوز عدد المحاولات المسموح بها. يُرجى المحاولة بعد دقيقة."
- After successful login, a session cookie is set; on 401 responses anywhere in the portal, the user is bounced back here with the message: "انتهت الجلسة لأسباب أمنية. يُرجى تسجيل الدخول مجدداً."

---

## 5. مدخلات بيئة العمل (Environment Inputs)

The MVP does not maintain a user database. Two environment variables hold the single authorized credential:

| Variable | Purpose |
|----------|---------|
| `EVP_AUTH_USERNAME` | Single authorized username |
| `EVP_AUTH_PASSWORD_HASH` | Bcrypt hash of the password |
| `EVP_SESSION_SECRET` | Secret used to sign the session cookie |
| `EVP_SESSION_TTL_MINUTES` | Session timeout (default: 60) |

These are referenced here so the login screen's behavior is fully specified end-to-end. They are configured in deployment, not in the UI.

---

## 6. بطاقة المعلومات الإضافية (Optional Info Strip — below form)

A single small line under the form card, muted color, for transparency:

> "تتم حماية الجلسة بمعيار أمني معتمد. تنتهي الجلسة تلقائياً بعد فترة من عدم النشاط."

This line builds confidence with security-conscious stakeholders without overpromising.

---

## 7. نسخة مطبوعة / مشاركة شاشة (Print & Screen-Share Considerations)

- The login screen is occasionally screen-shared during demos. Therefore:
  - No real credentials are ever pre-filled.
  - The page must look polished even when zoomed (text remains crisp, logo SVG-based).
  - The teal→green ribbon at the bottom is decorative only — it should not contain text that becomes unreadable when the page is downscaled for projection.

---

## 8. إمكانية الوصول (Accessibility)

- Each input has an associated `<label>` (visually present, not just `aria-label`).
- The form has a single `<form>` landmark with `aria-labelledby="login-heading"`.
- Submit on `Enter` from either input.
- Banner errors use `role="alert"` and are programmatically focused on appearance.
- Caps-lock hint uses `role="status"`.
- Focus order: username → password → show-password toggle → submit button → footer link.
- All copy meets WCAG AA contrast against white.

---

## 9. عينة بيانات المحتوى (Content Sample for `i18n/ar.json`)

Suggested key namespace for this screen — used by the UI later. Placed here so wireframes can plug it in directly.

```jsonc
// i18n/ar.json (excerpt)
{
  "login": {
    "tabTitle": "بوابة المدرسة الإلكترونية للعرض التنفيذي",
    "heroLine1": "بوابة العرض التنفيذي",
    "heroLine2": "للمدرسة الإلكترونية",
    "welcomeHeading": "مرحباً بكم",
    "welcomeSubtitle": "منصة موثوقة لعرض المؤشرات الوطنية وأثر مشروع المدرسة الإلكترونية على المستوى الاستراتيجي.",
    "fields": {
      "usernameLabel": "اسم المستخدم",
      "usernamePlaceholder": "أدخل اسم المستخدم",
      "passwordLabel": "كلمة المرور",
      "passwordPlaceholder": "أدخل كلمة المرور",
      "showPassword": "إظهار كلمة المرور",
      "hidePassword": "إخفاء كلمة المرور"
    },
    "submit": {
      "idle": "تسجيل الدخول",
      "loading": "جارٍ التحقق…",
      "success": "تم تسجيل الدخول"
    },
    "validation": {
      "usernameRequired": "يُرجى إدخال اسم المستخدم.",
      "passwordRequired": "يُرجى إدخال كلمة المرور.",
      "usernameInvalidChars": "يحتوي اسم المستخدم على رموز غير مسموح بها."
    },
    "errors": {
      "invalidCredentials": "تعذّر تسجيل الدخول. يُرجى التحقق من البيانات المُدخلة.",
      "accountLocked": "تم إيقاف الحساب مؤقتاً لأسباب أمنية. يُرجى التواصل مع مسؤول النظام.",
      "network": "تعذّر الاتصال بالخدمة. يُرجى التحقق من الاتصال والمحاولة مجدداً.",
      "server": "حدث خلل غير متوقع. تم إبلاغ الفريق التقني.",
      "rateLimited": "تم تجاوز عدد المحاولات المسموح بها. يُرجى المحاولة بعد دقيقة.",
      "sessionExpired": "انتهت الجلسة لأسباب أمنية. يُرجى تسجيل الدخول مجدداً."
    },
    "capsLockHint": "تنبيه: مفتاح Caps Lock مُفعَّل",
    "infoStrip": "تتم حماية الجلسة بمعيار أمني معتمد. تنتهي الجلسة تلقائياً بعد فترة من عدم النشاط.",
    "footer": {
      "line1": "مشروع المدرسة الإلكترونية — وزارة التعليم",
      "line2": "© 2026 جميع الحقوق محفوظة",
      "aboutLink": "عن البوابة"
    }
  }
}
```

> The same key shape will accept an English value in Phase 2 (e.g., `i18n/en.json` mirroring this structure). No code change is required to add it.

---

**End of login screen. Proceed to `modules/03-overview.md` (Executive Overview) — first module document, due in Commit 2.**
