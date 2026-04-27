# Wireframes — index and conventions

This folder holds low-fidelity wireframes for the highest-stakes screens of the EVP MVP. Wireframes are expressed as **annotated ASCII diagrams** embedded in markdown — they're version-controlled, diff-friendly, and need no external tool to read.

> **Scope of this wireframe set:** the 3 most-cited screens — Login, Executive Overview, Strategic Impact. The remaining 7 modules follow the same layout grammar; their wireframes can be derived from the module documents and these patterns when needed.

---

## 1. الغرض من هذه الوثيقة (Purpose)

- Lock the **structural composition** of each screen before pixel-level design begins.
- Communicate **RTL discipline**: where the sidebar lives, how cards flow, where logos sit, how filters align.
- Show **responsive behavior** at three breakpoints: desktop (≥1280), tablet (768–1023), mobile (<768).
- Reference back to the module documents for every content string — wireframes never re-author content.

These are NOT high-fidelity mockups. Color, typography, iconography, and exact pixel measurements are decided in the design phase.

---

## 2. اصطلاحات الرسم (Diagram Conventions)

| Symbol | Meaning |
|--------|---------|
| `┌─┐ │ │ └─┘` | Component box (card, panel, region) |
| `╔═╗ ║ ║ ╚═╝` | Page-level region boundary |
| `[ ... ]` | Interactive element (button, input, link) |
| `{ ... }` | Dynamic content (value injected from data) |
| `« ... »` | RTL marker — the content reads right-to-left within this region |
| `← →` | Arrow indicating navigation/flow direction (in RTL layouts, "next" points left) |
| `(A)` `(B)` ... | Annotation labels referenced in the spec below the wireframe |
| `▒▒▒` | Image / thumbnail / map placeholder |
| `▮▯▯▯` | Progress / scale indicator |
| `····` | Divider / separator |

### Direction reading discipline
The portal is **RTL**. The wireframes are drawn so that **the right edge of the diagram is the right edge of the screen** — same as the user sees it. Reading order goes **right → left**.

A small marker `(RTL)` is placed in the top-right corner of every page-level diagram as a reminder.

---

## 3. شبكة التخطيط (Layout Grid)

A 12-column responsive grid:

| Breakpoint | Container width | Columns | Gutter |
|------------|-----------------|---------|--------|
| Desktop ≥1280 | 1240px | 12 | 24px |
| Desktop 1024–1279 | 100% (32px padding each side) | 12 | 20px |
| Tablet 768–1023 | 100% (24px padding) | 8 | 16px |
| Mobile <768 | 100% (16px padding) | 4 | 12px |

The 8-pt spacing system applies (multiples of 8 for paddings/margins; multiples of 4 only for fine-tuning small components).

### Reserved structural regions

```
┌─────────────────────────────────────────────────────────────┐ ← top edge
│  (Top Bar — height 64px)                                    │
├──────────────────────────────────┬──────────────────────────┤
│                                  │                          │
│                                  │                          │
│   (Main content — fluid)         │   (Side Nav — 264px)     │
│                                  │   on the RIGHT in RTL    │
│                                  │                          │
├──────────────────────────────────┴──────────────────────────┤
│  (Footer — height ~120px)                                   │
└─────────────────────────────────────────────────────────────┘
```

The Login screen breaks this template — it has no sidebar and no top bar (just a centered form on a hero canvas).

---

## 4. عناصر الهوية البصرية في كل شاشة (Brand Identity Touchpoints)

Every wireframe assumes:
- The official **E-School logo** appears in (a) login hero, (b) top-bar right edge, (c) footer band, (d) print headers.
- Primary teal `#08798C` is reserved for: top-bar accent, primary CTAs, active nav state, lead chart series, KPI values.
- Secondary green `#71B36E` is reserved for: positive trends, success states, secondary chart series, progress indicators.
- White is the canvas; light-grey `#F4F6F7` is used for section backgrounds inside cards.
- The teal→green gradient (mirroring the logo's icon) appears as a thin ribbon only on the login hero — nowhere else in the authenticated portal.

---

## 5. ملف الترقيم (File Map)

```
docs/wireframes/
├── README.md          ← you are here
├── 01-login.md        ← Login screen wireframe (Module 02)
├── 02-overview.md     ← Executive Overview wireframe (Module 03)
└── 03-impact.md       ← Strategic Impact wireframe (Module 10)
```

Each wireframe file is structured the same way:

1. **Reference** — back to the module document the wireframe realizes.
2. **Desktop layout (≥1280)** — the canonical diagram + annotations.
3. **Tablet layout (768–1023)** — adjustments.
4. **Mobile layout (<768)** — collapse strategy.
5. **States** — loading / empty / error / focus / hover.
6. **Interaction notes** — keyboard order, narrative-arc continuation.
7. **Implementation handoff checklist** — what a developer can verify against this wireframe.

---

## 6. خارج النطاق (Out of Scope)

- ❌ Pixel-perfect typography sizes (decided in hi-fi)
- ❌ Final iconography (placeholders only)
- ❌ Final color values (use the palette above as guidance only)
- ❌ Animation timing curves (decided in hi-fi)
- ❌ Wireframes for the 7 non-priority modules (derive from these patterns + the module docs when needed)

---

**End of conventions. Proceed to `01-login.md` for the first wireframe.**
