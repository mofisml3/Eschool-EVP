/* ============================================================
   Brand A — "تعليم / Ta3leem"  ·  single source of truth
   Swap a brand = edit this file + brand/logo-*.svg + favicon.
   The 3 brand colors expand into 5 working roles, all derived,
   plus 4 rule colors for the Tajweed classification (in-family).
   ============================================================ */
(function () {
  var primary   = '#200058'; // deep indigo   (brand primary)
  var cyan      = '#00c3fe'; // vivid cyan     (brand secondary)
  var coral     = '#f6848e'; // coral          (brand accent)

  window.BRAND = {
    // ---- 5 working roles (all derived from the 3 above) ----
    primary:     primary,      // headers, main brand
    primaryDark: '#12002f',    // ink / deep gradient bottoms
    tint:        '#EDEAF7',    // light fills, card wash (from primary hue)
    accent:      cyan,         // secondary highlight, CTAs, active
    alert:       coral,        // warnings / limits / "wrong"

    // ---- neutrals derived to sit with the palette ----
    ink:      '#211842',       // body text on light
    inkSoft:  '#6b6288',       // secondary text
    paper:    '#F7F6FC',       // page background (very light lavender)
    line:     '#E2DDF0',       // hairline borders
    good:     '#1f9e8b',       // "correct" (teal, in cool family)

    // ---- the four rules of النون الساكنة والتنوين ----
    // distinct hues that stay in the indigo→cyan→pink→coral family
    rules: {
      idhhar: '#00a6d6', // الإظهار  — cyan (clear / apparent)
      idgham: '#7b3fd4', // الإدغام  — violet (merge, from primary)
      ikhfa:  '#d55fa6', // الإخفاء  — orchid (conceal, mid warm)
      iqlab:  '#f2707c'  // الإقلاب  — coral (flip, alert family)
    }
  };
})();
