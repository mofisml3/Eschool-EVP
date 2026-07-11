/* global React, ReactDOM */
const { useState, useEffect, useRef, useCallback, useMemo } = React;

// ============================================================================
// Math helpers
// ============================================================================
const L = 10;                       // ladder length in metres
const X_MIN = 0.05;
const X_MAX = 9.95;                 // hard upper bound (safety)
const X_TARGET = 8;                 // checkpoint
const X_START = 2;

const yOf  = (x) => Math.sqrt(L * L - x * x);
const thOf = (x) => Math.atan2(yOf(x), x);                    // angle with floor
const dyOf = (x, dxdt) => -(x / yOf(x)) * dxdt;               // dy/dt
const dthOf = (x, dxdt) => -dxdt / yOf(x);                    // dθ/dt (rad/s)

const fmt = (n, d = 2) => {
  if (!Number.isFinite(n)) return "—";
  const v = n.toFixed(d);
  // avoid -0.00
  return (Math.abs(parseFloat(v)) < Math.pow(10, -d) / 2) ? (0).toFixed(d) : v;
};

// ============================================================================
// SVG scene
// ============================================================================
function Scene({ x, dxdt, running, showDyArrow }) {
  // World→SVG mapping
  const W = 600, H = 520;
  const WALL_X = 540;       // wall is at this x-coord (right side)
  const FLOOR_Y = 460;      // floor at this y-coord
  const PX_PER_M = 40;      // 1m = 40px

  const y = yOf(x);
  const Bx = WALL_X - x * PX_PER_M;   // ladder bottom
  const By = FLOOR_Y;
  const Tx = WALL_X;
  const Ty = FLOOR_Y - y * PX_PER_M;  // ladder top

  // angle θ between ladder and floor
  const theta = thOf(x);
  const thetaDeg = theta * 180 / Math.PI;

  // angle arc — from (Bx + r, By) sweeping CCW (in math) which is up-left in SVG
  const arcR = Math.min(46, Math.max(22, 12 + 4 * x));
  const arcStart = { x: Bx + arcR, y: By };
  const arcEnd   = { x: Bx + arcR * Math.cos(theta), y: By - arcR * Math.sin(theta) };
  const largeArc = 0;
  const sweep = 0; // SVG sweep flag: 0 = CCW in screen coords (since y flipped, this draws upward)
  const arcPath =
    `M ${Bx} ${By} L ${arcStart.x} ${arcStart.y} A ${arcR} ${arcR} 0 ${largeArc} ${sweep} ${arcEnd.x} ${arcEnd.y} Z`;

  // rung positions along ladder
  const rungs = [];
  const len = Math.hypot(Tx - Bx, Ty - By);
  const nRungs = 8;
  for (let i = 1; i < nRungs; i++) {
    const t = i / nRungs;
    const cx = Bx + (Tx - Bx) * t;
    const cy = By + (Ty - By) * t;
    // perpendicular vector (normalised)
    const px = -(Ty - By) / len;
    const py =  (Tx - Bx) / len;
    const rL = 12;
    rungs.push(
      <line key={i} className="ladder-rungs"
        x1={cx - px * rL} y1={cy - py * rL}
        x2={cx + px * rL} y2={cy + py * rL} />
    );
  }

  // dy/dt arrow on top of ladder (downward, length proportional to |dy/dt|)
  const dy = dyOf(x, dxdt);
  const arrowLen = Math.min(60, Math.max(18, Math.abs(dy) * 14));

  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
      <defs>
        <marker id="arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#b13a2e" />
        </marker>
        <pattern id="hatch-wall" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="10" stroke="#b8a76e" strokeWidth="1.2" opacity="0.55"/>
        </pattern>
        <pattern id="hatch-floor" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(-45)">
          <line x1="0" y1="0" x2="0" y2="10" stroke="#b8a76e" strokeWidth="1.2" opacity="0.55"/>
        </pattern>
      </defs>

      {/* Floor */}
      <rect x="20" y={FLOOR_Y} width={WALL_X - 20 + 40} height="50" fill="url(#hatch-floor)" />
      <line x1="20" y1={FLOOR_Y} x2={WALL_X + 40} y2={FLOOR_Y} className="floor-edge" />

      {/* Wall */}
      <rect x={WALL_X} y="20" width="50" height={FLOOR_Y - 20} fill="url(#hatch-wall)" />
      <line x1={WALL_X} y1="20" x2={WALL_X} y2={FLOOR_Y} className="wall-edge" />

      {/* x measurement (along floor) */}
      <line className="measure" x1={Bx} y1={FLOOR_Y + 28} x2={WALL_X} y2={FLOOR_Y + 28} />
      <line className="measure-tick" x1={Bx} y1={FLOOR_Y + 22} x2={Bx} y2={FLOOR_Y + 34} />
      <line className="measure-tick" x1={WALL_X} y1={FLOOR_Y + 22} x2={WALL_X} y2={FLOOR_Y + 34} />
      <text className="measure-label x"
            x={(Bx + WALL_X) / 2} y={FLOOR_Y + 46}
            textAnchor="middle">x = {fmt(x)} m</text>

      {/* y measurement (along wall) */}
      <line className="measure" x1={WALL_X + 28} y1={Ty} x2={WALL_X + 28} y2={FLOOR_Y} />
      <line className="measure-tick" x1={WALL_X + 22} y1={Ty} x2={WALL_X + 34} y2={Ty} />
      <line className="measure-tick" x1={WALL_X + 22} y1={FLOOR_Y} x2={WALL_X + 34} y2={FLOOR_Y} />
      <text className="measure-label y"
            x={WALL_X + 46} y={(Ty + FLOOR_Y) / 2 + 5}
            transform={`rotate(90, ${WALL_X + 46}, ${(Ty + FLOOR_Y) / 2 + 5})`}
            textAnchor="middle">y = {fmt(y)} m</text>

      {/* angle arc */}
      {x < 9.7 && (
        <>
          <path className="angle-arc" d={arcPath} />
          <text className="angle-label"
                x={Bx + (arcR + 14) * Math.cos(theta / 2)}
                y={By - (arcR + 14) * Math.sin(theta / 2) + 4}
                textAnchor="middle">θ = {fmt(thetaDeg, 1)}°</text>
        </>
      )}

      {/* Ladder */}
      <line className="ladder-rungs"
        x1={Bx + ((Tx-Bx)/len) * -6} y1={By + ((Ty-By)/len) * -6}
        x2={Bx} y2={By} stroke="transparent" />
      {rungs}
      <line className="ladder" x1={Bx} y1={By} x2={Tx} y2={Ty} />
      <circle cx={Bx} cy={By} r="6" className="ladder-foot" />
      <circle cx={Tx} cy={Ty} r="6" className="ladder-foot" />

      {/* dy/dt downward arrow on top of ladder */}
      {showDyArrow && Math.abs(dy) > 0.05 && (
        <>
          <path className="dy-arrow"
            d={`M ${Tx - 18} ${Ty + 6} L ${Tx - 18} ${Ty + 6 + arrowLen}`}/>
          <text className="note-flag"
            x={Tx - 26} y={Ty + 6 + arrowLen / 2 + 4}
            textAnchor="end">y ↓</text>
        </>
      )}

      {/* origin label */}
      <text x={WALL_X + 6} y={FLOOR_Y + 14} fontSize="10" fill="#8a94a3" fontFamily="JetBrains Mono">O</text>
    </svg>
  );
}

// ============================================================================
// Icons
// ============================================================================
const Icon = {
  Play: () => <svg viewBox="0 0 16 16"><path d="M4 3 L13 8 L4 13 Z" fill="currentColor"/></svg>,
  Pause: () => <svg viewBox="0 0 16 16"><rect x="4" y="3" width="3" height="10" fill="currentColor"/><rect x="9" y="3" width="3" height="10" fill="currentColor"/></svg>,
  Reset: () => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8a5 5 0 1 0 1.5-3.5"/><path d="M3 3 L3 6 L6 6"/></svg>,
  Step: () => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="4" cy="8" r="1.2" fill="currentColor"/><circle cx="8" cy="8" r="1.2" fill="currentColor"/><circle cx="12" cy="8" r="1.2" fill="currentColor"/></svg>,
  Close: () => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 3 L13 13 M13 3 L3 13"/></svg>,
};

// ============================================================================
// Step-by-step derivation content
// ============================================================================
const STEPS = [
  {
    title: "تطبيق مبرهنة فيثاغورس",
    formulaJSX: (
      <span>
        <span className="hl">x</span><sup>2</sup> + <span className="hl">y</span><sup>2</sup> = 100
      </span>
    ),
    note: "السلم وحائطه وأرضيته يكوّنون مثلثاً قائم الزاوية، وطول السلم ثابت = 10 m. هذه علاقة جبرية ثابتة، لكنها تربط بين كميتَين تتغيران مع الزمن: x و y.",
  },
  {
    title: "الاشتقاق الضمني بالنسبة للزمن",
    formulaJSX: (
      <span>
        2x · <span className="hl">dx/dt</span> + 2y · <span className="hl">dy/dt</span> = 0
      </span>
    ),
    note: "نشتق طرفَي المعادلة بالنسبة إلى t باستخدام قاعدة السلسلة. الطرف الأيمن صفر لأن 100 ثابت. كل حد يحتوي على معدل تغير الكمية بالنسبة للزمن.",
  },
  {
    title: "التعويض بالقيم عند x = 8",
    formulaJSX: (
      <span>
        2(<span className="hl">8</span>)(<span className="hl">2</span>) + 2(<span className="hl">6</span>) · dy/dt = 0
      </span>
    ),
    note: "عند x = 8 ⟹ y = √(100 − 64) = 6. نُعوّض x = 8 m و y = 6 m و dx/dt = 2 m/s، ونحلّ من أجل dy/dt.",
  },
  {
    title: "النتيجة",
    formulaJSX: (
      <span>
        dy/dt = <span className="neg">−32 / 12</span> = <span className="neg">−8/3 m/s</span>
      </span>
    ),
    note: "الإشارة السالبة لا تعني خطأً، بل تعني أن y يتناقص مع الزمن — أي أن الطرف العلوي للسلم ينزلق إلى الأسفل. هذا ما تراه في الرسم.",
  },
];

// ============================================================================
// MCQ content
// ============================================================================
const MCQ = {
  q: "لماذا dy/dt سالبة رغم أن السلم يتحرك؟",
  options: [
    { id: "a", text: "لأن السلم يفقد طاقته فتتباطأ حركته مع الزمن.", correct: false,
      feedback: "تباطؤ الحركة ليس له علاقة بإشارة المعدل. الإشارة السالبة لا تتحدث عن السرعة، بل عن اتجاه التغير — هل الكمية تزداد أم تنقص." },
    { id: "b", text: "لأن الطرف العلوي للسلم ينزلق إلى الأسفل، فيتناقص y. الإشارة السالبة تعني نقصاناً، لا خطأً.", correct: true,
      feedback: "إجابة صحيحة! الإشارة السالبة للمعدل الزمني تعني دائماً أن الكمية تتناقص بالزمن. لاحظ أن y في الرسم ينخفض فعلاً، تماماً كما تخبرك المعادلة." },
    { id: "c", text: "لأن هناك خطأً في الاشتقاق الضمني عند إنزال 2 من القوة.", correct: false,
      feedback: "الاشتقاق سليم: مشتقة x² هي 2x·(dx/dt) بقاعدة السلسلة. السالب يأتي من نقل الحد عبر علامة المساواة وحلّ dy/dt — وهو الذي يكشف اتجاه الحركة." },
  ],
};

// ============================================================================
// Panel row
// ============================================================================
function PanelRow({ sym, desc, value, unit, sign }) {
  return (
    <div className="row" data-sign={sign}>
      <span className="dot" />
      <span className="lbl">
        <span className="sym">{sym}</span>
        <span className="desc">{desc}</span>
      </span>
      <span className="val">
        <span>{value}</span>
        <span className="unit">{unit}</span>
      </span>
    </div>
  );
}

// ============================================================================
// Main app
// ============================================================================
function App() {
  const [x, setX] = useState(X_START);
  const [dxdt, setDxdt] = useState(2);
  const [running, setRunning] = useState(false);
  const [reachedX8, setReachedX8] = useState(false);

  // overlays
  const [showStep, setShowStep] = useState(false);
  const [stepIdx, setStepIdx] = useState(0);
  const [showCheckpoint, setShowCheckpoint] = useState(false);
  const [showMcq, setShowMcq] = useState(false);
  const [mcqChoice, setMcqChoice] = useState(null);

  // session log
  const [dyMin, setDyMin] = useState(null);
  const [dyMax, setDyMax] = useState(null);

  // refs to keep current values inside rAF without retriggering
  const xRef = useRef(x);
  const dxdtRef = useRef(dxdt);
  const runningRef = useRef(false);
  const reachedX8Ref = useRef(false);
  useEffect(() => { xRef.current = x; }, [x]);
  useEffect(() => { dxdtRef.current = dxdt; }, [dxdt]);
  useEffect(() => { runningRef.current = running; }, [running]);
  useEffect(() => { reachedX8Ref.current = reachedX8; }, [reachedX8]);

  // session log update
  useEffect(() => {
    if (!running) return;
    const dy = dyOf(x, dxdt);
    if (dyMin == null || dy < dyMin) setDyMin(dy);
    if (dyMax == null || dy > dyMax) setDyMax(dy);
  }, [x, dxdt, running]);

  // animation loop
  useEffect(() => {
    let raf;
    let prev = performance.now();
    const tick = (t) => {
      const dt = Math.min(0.05, (t - prev) / 1000);
      prev = t;
      if (runningRef.current) {
        let nx = xRef.current + dxdtRef.current * dt;
        // auto-pause at x = 8 (first crossing this session)
        if (!reachedX8Ref.current && nx >= X_TARGET) {
          nx = X_TARGET;
          reachedX8Ref.current = true;
          setReachedX8(true);
          setRunning(false);
          setShowCheckpoint(true);
        }
        if (nx >= X_MAX) {
          nx = X_MAX;
          setRunning(false);
        }
        setX(nx);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // keyboard
  useEffect(() => {
    const onKey = (e) => {
      // ignore when typing
      if (e.target.matches("input, textarea")) return;
      if (e.code === "Space") { e.preventDefault(); togglePlay(); }
      else if (e.key === "r" || e.key === "R") { reset(); }
      else if (e.key === "Escape") {
        if (showStep) setShowStep(false);
        if (showCheckpoint) setShowCheckpoint(false);
        if (showMcq) setShowMcq(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const togglePlay = () => {
    if (x >= X_MAX - 0.01) return;          // at the bottom — block play until reset
    if (showStep) return;                   // frozen during step mode
    setRunning((r) => !r);
  };

  const reset = () => {
    setRunning(false);
    setX(X_START);
    setReachedX8(false);
    setShowCheckpoint(false);
    setShowMcq(false);
    setMcqChoice(null);
    setShowStep(false);
  };

  // freeze sim when step mode opens
  useEffect(() => { if (showStep) setRunning(false); }, [showStep]);

  // derived
  const y = yOf(x);
  const theta = thOf(x);
  const dy = dyOf(x, dxdt);
  const dth = dthOf(x, dxdt);

  const signOf = (n) => Math.abs(n) < 1e-4 ? "zero" : (n > 0 ? "pos" : "neg");

  const status = running ? "running" : (x >= X_MAX - 0.01 ? "stopped" : "paused");
  const statusLabel = running ? "قيد التشغيل" : (x >= X_MAX - 0.01 ? "متوقف" : "متوقف مؤقتاً");

  // slider visual fill prop
  const sliderP = (dxdt - 1) / 3;

  return (
    <div className="app" dir="rtl">
      {/* HEADER */}
      <div className="header">
        <div className="brand">
          <div className="dot">∂</div>
          <div>
            <h1>محاكاة السلم المنزلق</h1>
            <span className="sub">المعدلات المرتبطة · مثال 4</span>
          </div>
        </div>

        <div className="equation-chip" aria-label="المعادلة الأساسية">
          <span className="eq">x<sup>2</sup> + y<sup>2</sup> = 100</span>
          <span className="label">المعادلة الأساسية</span>
        </div>

        <div className="header-meta">
          <span>اختصارات:</span>
          <span className="kbd">Space</span>
          <span>تشغيل/إيقاف</span>
          <span className="kbd">R</span>
          <span>إعادة</span>
        </div>
      </div>

      {/* MAIN */}
      <div className="main">
        {/* Scene first in DOM → first grid column → visually on the right in RTL */}
        <section className="scene" aria-label="رسم السلم">
          <div className="scene-status" data-state={status}>
            <span className="led" />
            <span>{statusLabel}</span>
          </div>
          <div className="scene-tag">
            <span className="pill">L = 10 m</span>
          </div>
          <Scene x={x} dxdt={dxdt} running={running} showDyArrow={true} />
        </section>

        {/* Panel second in DOM → second grid column → visually on the left in RTL */}
        <aside className="panel" aria-label="اللوحة الرقمية">
          <div className="panel-section-label">القيم اللحظية</div>

          <PanelRow sym="x" desc="بُعد قدم السلم عن الحائط"
            value={fmt(x)} unit="m" sign="pos" />
          <PanelRow sym="y" desc="ارتفاع رأس السلم"
            value={fmt(y)} unit="m" sign="pos" />
          <PanelRow sym="θ" desc="زاوية السلم مع الأرض"
            value={fmt(theta * 180 / Math.PI, 1) + "°"} unit="" sign="pos" />

          <div className="panel-section-label" style={{ marginTop: 6 }}>المعدلات الزمنية</div>

          <PanelRow sym="dx/dt" desc="ثابت — يضبطه المستخدم"
            value={fmt(dxdt)} unit="m/s" sign="pos" />
          <PanelRow sym="dy/dt" desc="معدل تغير y بالزمن"
            value={fmt(dy, 3)} unit="m/s" sign={signOf(dy * (running || dy < 0 ? 1 : 0) || dy)} />
          <PanelRow sym="dθ/dt" desc="معدل تغير θ بالزمن"
            value={fmt(dth, 3)} unit="rad/s" sign={signOf(dth)} />

          <div className="minmax" aria-label="ملخص الجلسة">
            <div className="cell">
              <div className="k">أعلى dy/dt</div>
              <div className="v">{dyMax == null ? "—" : fmt(dyMax, 3)}</div>
            </div>
            <div className="cell">
              <div className="k">أدنى dy/dt</div>
              <div className="v">{dyMin == null ? "—" : fmt(dyMin, 3)}</div>
            </div>
          </div>
        </aside>
      </div>

      {/* CONTROLS */}
      <div className="controls">
        <div className="slider-block">
          <div className="name">
            <span className="sym">dx/dt</span>
            <span className="desc">معدل ابتعاد القدم</span>
          </div>
          <div className="slider">
            <input type="range" min="1" max="4" step="0.1"
              value={dxdt}
              onChange={(e) => setDxdt(parseFloat(e.target.value))}
              style={{ "--p": sliderP }}
              aria-label="ضبط dx/dt"
            />
            <div className="tick-row">
              <span>1</span><span>2</span><span>3</span><span>4</span>
            </div>
          </div>
          <div className="readout">{fmt(dxdt, 1)}<span className="unit">m/s</span></div>
        </div>

        <div className="btn-cluster">
          <button className="btn" data-variant="primary" onClick={togglePlay} aria-label={running ? "إيقاف" : "تشغيل"}>
            {running ? <Icon.Pause /> : <Icon.Play />}
            <span>{running ? "إيقاف مؤقت" : "تشغيل"}</span>
          </button>
          <button className="btn" onClick={reset}>
            <Icon.Reset /> <span>إعادة تعيين</span>
          </button>
          <button className="btn" onClick={() => { setShowStep(true); setStepIdx(0); }}>
            <Icon.Step /> <span>خطوة بخطوة</span>
          </button>
        </div>
      </div>

      {/* STEP MODE OVERLAY */}
      {showStep && (
        <div className="overlay" role="dialog" aria-modal="true">
          <div className="modal">
            <button className="close" onClick={() => setShowStep(false)} aria-label="إغلاق"><Icon.Close /></button>
            <h2>اشتقاق dy/dt — خطوة بخطوة</h2>
            <p className="lead">المحاكاة مُجمَّدة. تتبّع الاستدلال من المعادلة الجبرية إلى المعدل الزمني.</p>

            <div className="step-tracker">
              {STEPS.map((_, i) => (
                <span key={i} className={`pip ${i === stepIdx ? "active" : i < stepIdx ? "done" : ""}`} />
              ))}
            </div>

            <div className="step-card">
              <div className="head">
                <span className="num">{stepIdx + 1}</span>
                <span className="title">{STEPS[stepIdx].title}</span>
              </div>
              <div className="formula">{STEPS[stepIdx].formulaJSX}</div>
              <div className="note">{STEPS[stepIdx].note}</div>
            </div>

            <div className="modal-actions">
              <button className="btn" data-variant="ghost"
                onClick={() => setStepIdx(Math.max(0, stepIdx - 1))}
                disabled={stepIdx === 0}>السابق</button>
              {stepIdx < STEPS.length - 1 ? (
                <button className="btn" data-variant="primary"
                  onClick={() => setStepIdx(stepIdx + 1)}>التالي</button>
              ) : (
                <button className="btn" data-variant="primary"
                  onClick={() => setShowStep(false)}>إنهاء الشرح</button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CHECKPOINT OVERLAY */}
      {showCheckpoint && (
        <div className="overlay" role="dialog" aria-modal="true">
          <div className="modal">
            <button className="close" onClick={() => setShowCheckpoint(false)} aria-label="إغلاق"><Icon.Close /></button>
            <h2>نقطة التحقق — لحظة مثال‑4</h2>
            <p className="lead">وصلت قدم السلم إلى <span className="mono">x = 8 m</span>. قارن قيم المحاكاة بالنتائج النظرية من الكتاب.</p>

            <div className="checkpoint-banner">
              <span className="badge mono">x = 8</span>
              <span className="text">جميع القيم مجمَّدة الآن للمقارنة. اضغط متابعة عند الجاهزية.</span>
            </div>

            <table className="cmp-table">
              <thead>
                <tr><th>الكمية</th><th>قيمة المحاكاة</th><th>قيمة مثال‑4</th><th>تطابق</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td className="k">y</td>
                  <td className="v">{fmt(yOf(8), 3)} m</td>
                  <td className="v">6 m</td>
                  <td className="match">✓</td>
                </tr>
                <tr>
                  <td className="k">dy/dt</td>
                  <td className="v">{fmt(dyOf(8, 2), 3)} m/s</td>
                  <td className="v">−8/3 m/s</td>
                  <td className="match">{Math.abs(dyOf(8, 2) - (-8/3)) < 0.001 ? "✓" : "—"}</td>
                </tr>
                <tr>
                  <td className="k">dθ/dt</td>
                  <td className="v">{fmt(dthOf(8, 2), 3)} rad/s</td>
                  <td className="v">−1/3 rad/s</td>
                  <td className="match">{Math.abs(dthOf(8, 2) - (-1/3)) < 0.001 ? "✓" : "—"}</td>
                </tr>
              </tbody>
            </table>

            <div className="feedback" data-kind={Math.abs(dxdt - 2) < 0.001 ? "correct" : "wrong"}>
              {Math.abs(dxdt - 2) < 0.001
                ? "ممتاز! قيم المحاكاة تتطابق مع الحل النظري لمثال‑4. الإشارة السالبة في dy/dt و dθ/dt تؤكد أن y و θ يتناقصان فعلاً — بالضبط كما رأيت في الرسم."
                : `قيمتك الحالية dx/dt = ${fmt(dxdt,1)} m/s. لتطابق مثال‑4 بالضبط، اضبط dx/dt على 2 m/s، أعد التعيين، وشغّل المحاكاة من جديد. حسبت المحاكاة dy/dt الذي يقابل قيمتك الحالية: ${fmt(dyOf(8,dxdt),3)} m/s.`}
            </div>

            <div className="modal-actions">
              <button className="btn" data-variant="primary"
                onClick={() => { setShowCheckpoint(false); setShowMcq(true); }}>
                متابعة إلى السؤال التأملي
              </button>
              <button className="btn" onClick={() => setShowCheckpoint(false)}>إغلاق ومواصلة المحاكاة</button>
            </div>
          </div>
        </div>
      )}

      {/* MCQ OVERLAY */}
      {showMcq && (
        <div className="overlay" role="dialog" aria-modal="true">
          <div className="modal">
            <button className="close" onClick={() => setShowMcq(false)} aria-label="إغلاق"><Icon.Close /></button>
            <h2>سؤال تأملي</h2>
            <p className="lead">{MCQ.q}</p>

            <div className="mcq-options">
              {MCQ.options.map((opt, i) => {
                let state = null;
                if (mcqChoice != null) {
                  if (mcqChoice === opt.id) state = opt.correct ? "correct" : "wrong";
                  else if (opt.correct) state = "correct";
                  else state = "dimmed";
                }
                return (
                  <button key={opt.id} className="mcq-option" data-state={state}
                    onClick={() => mcqChoice == null && setMcqChoice(opt.id)}
                    disabled={mcqChoice != null}>
                    <span className="letter">{["A","B","C"][i]}</span>
                    <span>{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {mcqChoice && (() => {
              const picked = MCQ.options.find(o => o.id === mcqChoice);
              return (
                <div className="feedback" data-kind={picked.correct ? "correct" : "wrong"}>
                  {picked.feedback}
                </div>
              );
            })()}

            <div className="modal-actions">
              {mcqChoice && !MCQ.options.find(o => o.id === mcqChoice).correct && (
                <button className="btn" onClick={() => setMcqChoice(null)}>حاول مجدداً</button>
              )}
              {mcqChoice && (
                <button className="btn" data-variant="primary"
                  onClick={() => { setShowMcq(false); reset(); }}>
                  إعادة المحاكاة بقيمة جديدة
                </button>
              )}
              <button className="btn" data-variant="ghost"
                onClick={() => setShowMcq(false)}>إغلاق</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
