# 01 — Login Screen Wireframe
## شاشة تسجيل الدخول

> **Reference:** content and copy come from `docs/shell/02-login.md`. This file defines layout, composition, and responsive behavior only. No copy is re-authored here.

---

## 1. التخطيط — سطح المكتب (Desktop ≥ 1280px)

```
(RTL)                                                                      »

╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║                                                                          ║
║                            ┌──────────────────┐                          ║
║                            │   ▒▒▒▒▒▒▒▒▒▒▒    │   (A) Logo wordmark      ║
║                            │   ▒  E-SCHOOL ▒  │       Width ≈ 320px      ║
║                            │   ▒   LOGO   ▒   │       Centered           ║
║                            │   ▒▒▒▒▒▒▒▒▒▒▒    │                          ║
║                            └──────────────────┘                          ║
║                                                                          ║
║                       بوابة العرض التنفيذي                               ║   (B) Hero line 1
║                       للمدرسة الإلكترونية                                ║   (B) Hero line 2
║                                                                          ║
║              ┌──────────────────────────────────────────┐                ║
║              │                                          │                ║
║              │                مرحباً بكم                │  (C) Card title
║              │                                          │                ║
║              │   منصة موثوقة لعرض المؤشرات الوطنية…    │  (D) Subtitle
║              │                                          │                ║
║              │   اسم المستخدم                          │  (E) Username
║              │   ┌──────────────────────────────────┐  │       label + input
║              │   │ [ ............................. ] │  │                ║
║              │   └──────────────────────────────────┘  │                ║
║              │                                          │                ║
║              │   كلمة المرور                            │  (F) Password
║              │   ┌──────────────────────────────────┐  │       label + input + toggle
║              │   │ [ ........................ ] [👁] │  │                ║
║              │   └──────────────────────────────────┘  │                ║
║              │                                          │                ║
║              │   ┌──────────────────────────────────┐  │                ║
║              │   │       تسجيل الدخول              │  │  (G) Primary CTA
║              │   └──────────────────────────────────┘  │       full-width inside card
║              │                                          │                ║
║              └──────────────────────────────────────────┘                ║
║                                                                          ║
║              تتم حماية الجلسة بمعيار أمني معتمد...                       ║   (H) Info strip (muted)
║                                                                          ║
║                                                                          ║
║  ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂   ║   (I) Teal→green gradient ribbon
║       مشروع المدرسة الإلكترونية — وزارة التعليم                          ║       Decorative only, ~80px tall
║       © 2026 جميع الحقوق محفوظة                  عن البوابة             ║   (J) Footer (right + left columns in RTL)
╚══════════════════════════════════════════════════════════════════════════╝
```

### Annotations

| Tag | Element | Source string | Notes |
|-----|---------|---------------|-------|
| (A) | E-School logo | — (asset) | SVG, ~320px wide, vertically padded ~120px from top |
| (B) | Hero lines 1 + 2 | `login.heroLine1`, `login.heroLine2` | Display weight, primary teal then neutral grey |
| (C) | Card title | `login.welcomeHeading` | Card heading |
| (D) | Subtitle | `login.welcomeSubtitle` | Single line; truncates on mobile |
| (E) | Username field | `login.fields.usernameLabel` + placeholder | Standard text input |
| (F) | Password field + toggle | `login.fields.passwordLabel` + show/hide | Toggle is an icon button on the inline-end side |
| (G) | Primary CTA | `login.submit.idle` / `login.submit.loading` / `login.submit.success` | Full width inside card; 48px tall |
| (H) | Security info strip | `login.infoStrip` | Muted color, single line, below card |
| (I) | Gradient ribbon | — | Decorative only; sits above the footer |
| (J) | Footer | `login.footer.line1`, `login.footer.line2`, `login.footer.aboutLink` | Right column: identity. Left column: copyright + about link |

### Card geometry
- Card max-width: **480px**
- Card padding: **40px** (top/bottom), **32px** (sides)
- Card background: white, border-radius 16px, soft shadow
- Vertical rhythm: hero block top 120px → 48px gap → card → 32px gap → info strip → fluid space → ribbon → footer
- Card horizontally centered on the viewport

---

## 2. التخطيط — الجهاز اللوحي (Tablet 768–1023px)

```
(RTL)                                                       »

╔════════════════════════════════════════════════════════════╗
║                                                            ║
║                  ┌────────────────────┐                    ║
║                  │   ▒  E-SCHOOL  ▒   │  (A) Logo ~260px  ║
║                  └────────────────────┘                    ║
║                                                            ║
║              بوابة العرض التنفيذي                          ║
║              للمدرسة الإلكترونية                          ║
║                                                            ║
║       ┌──────────────────────────────────────┐             ║
║       │            مرحباً بكم                  │  (C)       ║
║       │                                       │             ║
║       │  منصة موثوقة لعرض المؤشرات الوطنية…  │  (D)       ║
║       │                                       │             ║
║       │  اسم المستخدم                         │  (E)       ║
║       │  [ ............................... ] │             ║
║       │                                       │             ║
║       │  كلمة المرور                           │  (F)       ║
║       │  [ ......................... ] [👁]   │             ║
║       │                                       │             ║
║       │  [        تسجيل الدخول        ]       │  (G)       ║
║       └──────────────────────────────────────┘             ║
║                                                            ║
║       تتم حماية الجلسة...                                  ║  (H)       ║
║                                                            ║
║  ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂   ║  (I)
║       مشروع المدرسة الإلكترونية — وزارة التعليم            ║  (J)
║       © 2026                              عن البوابة      ║
╚════════════════════════════════════════════════════════════╝
```

Adjustments from desktop:
- Logo width reduced (~260px)
- Card max-width unchanged (480px) — visual breathing room reduced
- Hero block top spacing reduced to 80px

---

## 3. التخطيط — الجوال (Mobile < 768px)

```
(RTL)                          »

╔══════════════════════════════╗
║                              ║
║      ┌──────────────┐        ║
║      │  ▒ E-SCHOOL ▒│  (A)  ║   Logo ~180px
║      └──────────────┘        ║
║                              ║
║   بوابة العرض التنفيذي       ║   (B) Hero line 1
║   للمدرسة الإلكترونية        ║   (B) Hero line 2
║                              ║
║  ┌──────────────────────┐    ║
║  │     مرحباً بكم        │   ║   (C)
║  │                      │    ║
║  │ منصة موثوقة لعرض…   │    ║   (D) — truncates to 1 line, expands on tap
║  │                      │    ║
║  │ اسم المستخدم        │    ║   (E)
║  │ [ ................ ] │   ║
║  │                      │    ║
║  │ كلمة المرور          │    ║   (F)
║  │ [ ..............] 👁│   ║
║  │                      │    ║
║  │ [   تسجيل الدخول   ] │   ║   (G)
║  └──────────────────────┘    ║
║                              ║
║  تتم حماية الجلسة...         ║   (H) — smaller, 12px
║                              ║
║  ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂   ║   (I)
║  مشروع المدرسة الإلكترونية   ║   (J) — single column, stacked
║  © 2026 · عن البوابة         ║
╚══════════════════════════════╝
```

Adjustments from tablet:
- Logo width ~180px
- Card occupies full content width (16px page padding each side)
- Subtitle (D) truncates to one line; tap-to-expand reveals full text
- Footer collapses to a single stacked column with bullet separator

---

## 4. الحالات (States)

### 4.1 Idle (default)
- Submit button enabled when both fields are non-empty.
- Inputs in their default visual state (white bg, neutral border).

### 4.2 Validating (in-flight)
- Submit label switches to `login.submit.loading`.
- Inline spinner inside the button.
- Both inputs become read-only.

### 4.3 Field-level validation error
```
   اسم المستخدم
   ┌──────────────────────────────────┐
   │ [                              ] │  ← red border `#B0432F`
   └──────────────────────────────────┘
   يُرجى إدخال اسم المستخدم.            ← inline error, 12px, same color
```

### 4.4 Form-level auth failure (banner above the card)
```
              ┌──────────────────────────────────────────┐
              │  ⚠  تعذّر تسجيل الدخول. يُرجى التحقق من   │  ← amber bg #FCF4E5
              │      البيانات المُدخلة.                    │     amber text #7B5915
              └──────────────────────────────────────────┘
              ┌──────────────────────────────────────────┐
              │                مرحباً بكم                │
              │                                          │
              │              ... (form) ...              │
              └──────────────────────────────────────────┘
```
Banner is dismissible (small × on the inline-end side) and `role="alert"`.

### 4.5 Caps-lock hint
Sub-text appears below the password field:
```
   كلمة المرور
   [ ........................ ] [👁]
   تنبيه: مفتاح Caps Lock مُفعَّل      ← amber, 12px, role="status"
```

### 4.6 Success
- Brief success state: button label → "تم تسجيل الدخول" with a check icon.
- 250ms fade transition → redirect to `/portal/overview`.

---

## 5. التفاعل (Interaction Notes)

### Keyboard / focus order
1. Username input
2. Password input
3. Show-password toggle
4. Submit button
5. Footer "عن البوابة" link

`Enter` from any input submits the form. `Esc` clears focus from inputs (no form clear).

### Focus rings
All focusable elements show a 2px outline in `#08798C` with 2px offset.

### Screen reader notes
- The form has `aria-labelledby="login-heading"` referencing the welcome heading.
- The submit button announces its loading state via `aria-busy="true"` during validation.
- The auth-failure banner is `role="alert"` and receives focus on appearance.

### Reduced motion
The 250ms fade on successful login is replaced by an instant transition when `prefers-reduced-motion: reduce` is set.

---

## 6. قائمة التحقق التنفيذية (Implementation Handoff Checklist)

A developer should be able to tick all of these before considering the login screen done:

- [ ] Layout matches the desktop / tablet / mobile diagrams above
- [ ] All copy comes from `i18n/ar.json` under the `login.*` namespace — no hardcoded Arabic
- [ ] `<html dir="rtl" lang="ar">` is set
- [ ] E-School SVG logo renders at the documented widths per breakpoint
- [ ] Primary teal `#08798C` is used for the submit button background
- [ ] Teal→green gradient ribbon is implemented as a CSS gradient — no raster image
- [ ] All field labels are real `<label>` elements, not `aria-label`
- [ ] Submit button reaches 4.5:1 contrast ratio against the white card
- [ ] Validation, auth-failure, caps-lock, and success states render as specified
- [ ] Keyboard tab order matches the documented sequence
- [ ] No "remember me", no "forgot password", no MFA in the MVP build
- [ ] On `401` from any subsequent request, the user is redirected here with the `sessionExpired` banner
- [ ] No copy on this screen is duplicated outside `login.*` (avoid silent drift)

---

**End of login wireframe. Proceed to `02-overview.md`.**
