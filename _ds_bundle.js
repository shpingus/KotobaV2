/* @ds-bundle: {"format":3,"namespace":"MichiDesignSystem_2b01f5","components":[{"name":"SenseiCard","sourcePath":"components/adaptive/SenseiCard.jsx"},{"name":"SenseiChip","sourcePath":"components/adaptive/SenseiCard.jsx"},{"name":"SkillRadar","sourcePath":"components/adaptive/SkillRadar.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"KanaTile","sourcePath":"components/learning/KanaTile.jsx"},{"name":"LessonNode","sourcePath":"components/learning/LessonNode.jsx"},{"name":"LevelBadge","sourcePath":"components/progress/LevelBadge.jsx"},{"name":"ProgressRing","sourcePath":"components/progress/ProgressRing.jsx"},{"name":"StreakCounter","sourcePath":"components/progress/StreakCounter.jsx"},{"name":"XPBar","sourcePath":"components/progress/XPBar.jsx"},{"name":"BossNode","sourcePath":"components/rpg/BossNode.jsx"},{"name":"PixelOni","sourcePath":"components/rpg/BossNode.jsx"},{"name":"PixelSprite","sourcePath":"components/rpg/Companion.jsx"},{"name":"Companion","sourcePath":"components/rpg/Companion.jsx"},{"name":"PowerLevel","sourcePath":"components/rpg/PowerLevel.jsx"},{"name":"QuestCard","sourcePath":"components/rpg/QuestCard.jsx"},{"name":"StatBar","sourcePath":"components/rpg/StatBar.jsx"},{"name":"ToriiGate","sourcePath":"components/rpg/ToriiGate.jsx"}],"sourceHashes":{"components/adaptive/SenseiCard.jsx":"4f29e7647dcf","components/adaptive/SkillRadar.jsx":"8639884d4c92","components/core/Avatar.jsx":"68666c267ef7","components/core/Badge.jsx":"757eede3002d","components/core/Button.jsx":"f88663bf7eb4","components/core/Card.jsx":"ad088e83d16b","components/core/IconButton.jsx":"d5aaaf091eea","components/core/Tag.jsx":"369e0abf01d3","components/forms/Input.jsx":"e7f77e9bb28f","components/learning/KanaTile.jsx":"88d6aee27c43","components/learning/LessonNode.jsx":"ba0d5578b9f1","components/progress/LevelBadge.jsx":"04092fcc4f23","components/progress/ProgressRing.jsx":"002199387c51","components/progress/StreakCounter.jsx":"0a6786babcc6","components/progress/XPBar.jsx":"7643edd60c36","components/rpg/BossNode.jsx":"2ce79ceebb9b","components/rpg/Companion.jsx":"789528ee5c29","components/rpg/PowerLevel.jsx":"9c7323e7ebf4","components/rpg/QuestCard.jsx":"134f349cc43a","components/rpg/StatBar.jsx":"629dd40f26b5","components/rpg/ToriiGate.jsx":"b3d102612c38","ui_kits/mobile_app/BossBattle.jsx":"da94e12d29ad","ui_kits/mobile_app/CharacterSheet.jsx":"a5f6eb36f15b","ui_kits/mobile_app/GatePassage.jsx":"a8d6fbfca6e5","ui_kits/mobile_app/HomePath.jsx":"bfbe1859c450","ui_kits/mobile_app/Lesson.jsx":"81839afca3b9","ui_kits/mobile_app/Onboarding.jsx":"210b88b691a1","ui_kits/mobile_app/Profile.jsx":"0015ef5396d4","ui_kits/mobile_app/challenges/ChallengeEngine.jsx":"b716914671b7","ui_kits/mobile_app/challenges/ChallengeShell.jsx":"644bbb0fe248","ui_kits/mobile_app/challenges/PairMatch.jsx":"1fc1bf8634c3","ui_kits/mobile_app/challenges/Practice.jsx":"88734dd9842f","ui_kits/mobile_app/challenges/SRSCards.jsx":"43d14725d9ef","ui_kits/mobile_app/challenges/WordRain.jsx":"8b557526c34b","ui_kits/mobile_app/challenges/words.js":"ee3c3ee1fc8f","ui_kits/mobile_app/ios-frame.jsx":"be3343be4b51","ui_kits/mobile_app/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MichiDesignSystem_2b01f5 = window.MichiDesignSystem_2b01f5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/adaptive/SenseiCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kotoba SenseiCard — the adaptive-learning voice. Sensei notices patterns
 * (confusions, weak skills, due reviews) and offers a crafted practice set.
 * This is where the LLM layer surfaces in the UI: specific, kind, actionable.
 */

const Sparkle = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "18",
  height: "18",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2l1.9 5.7L20 9.6l-5.4 2.4L12 18l-2.6-6L4 9.6l6.1-1.9L12 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 14l.9 2.6L22.5 18l-2.6 1.4L19 22l-.9-2.6L15.5 18l2.6-1.4L19 14z",
  opacity: "0.7"
}));
const CSS = `
.kotoba-sensei{
  position:relative; width:100%; box-sizing:border-box;
  background:var(--brand-subtle);
  border:var(--border-base) solid var(--ai-200);
  border-radius:var(--radius-lg); padding:16px;
  font-family:var(--font-body); overflow:hidden;
}
.kotoba-sensei-head{ display:flex; align-items:center; gap:8px; margin-bottom:8px; }
.kotoba-sensei-chip{
  display:inline-flex; align-items:center; justify-content:center;
  width:30px; height:30px; border-radius:50%;
  background:var(--brand); color:#fff; flex:none;
}
.kotoba-sensei-eyebrow{
  font-size:var(--text-3xs); font-weight:800; letter-spacing:var(--tracking-caps);
  text-transform:uppercase; color:var(--brand-strong);
}
.kotoba-sensei-title{ font-size:var(--text-md); font-weight:700; color:var(--text-strong); line-height:1.3; }
.kotoba-sensei-body{ font-size:var(--text-sm); color:var(--text-body); line-height:1.5; margin-top:6px; }
.kotoba-sensei-body .jp, .kotoba-sensei-body .kotoba-sensei-jp{
  font-family:var(--font-jp-display); font-weight:700; color:var(--brand-strong);
  background:#fff; border-radius:6px; padding:1px 6px; margin:0 1px;
}
.kotoba-sensei-actions{ display:flex; gap:10px; margin-top:14px; align-items:center; }
`;
function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
function SenseiCard({
  eyebrow = 'Sensei noticed',
  title,
  children,
  actions,
  className = '',
  ...rest
}) {
  useInjected('kotoba-sensei-css', CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `kotoba-sensei ${className}`
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "kotoba-sensei-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kotoba-sensei-chip"
  }, /*#__PURE__*/React.createElement(Sparkle, null)), /*#__PURE__*/React.createElement("span", {
    className: "kotoba-sensei-eyebrow"
  }, eyebrow)), title && /*#__PURE__*/React.createElement("div", {
    className: "kotoba-sensei-title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "kotoba-sensei-body"
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    className: "kotoba-sensei-actions"
  }, actions));
}

/** Small inline chip marking adaptive content, e.g. on a tuned lesson. */
function SenseiChip({
  children = 'Tuned for you',
  className = '',
  ...rest
}) {
  useInjected('kotoba-sensei-css', CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 700,
      color: 'var(--brand-strong)',
      background: 'var(--brand-soft)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)'
    }
  }, rest), /*#__PURE__*/React.createElement(Sparkle, null), children);
}
Object.assign(__ds_scope, { SenseiCard, SenseiChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/adaptive/SenseiCard.jsx", error: String((e && e.message) || e) }); }

// components/adaptive/SkillRadar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kotoba SkillRadar — a 4-axis radar of the learner's skills. The shape makes
 * weakness obvious at a glance; sensei points at the dent.
 */

function SkillRadar({
  stats = [],
  // [{ label, jp, value }] — up to 6 axes, typically 4
  max = 100,
  size = 180,
  color = 'var(--brand)',
  className = '',
  ...rest
}) {
  const n = stats.length || 1;
  const cx = size / 2,
    cy = size / 2;
  const rMax = size * 0.34;
  const angle = i => Math.PI * 2 * i / n - Math.PI / 2;
  const pt = (i, r) => [cx + r * Math.cos(angle(i)), cy + r * Math.sin(angle(i))];
  const poly = r => stats.map((_, i) => pt(i, r).join(',')).join(' ');
  const dataPoly = stats.map((s, i) => pt(i, rMax * Math.max(0.05, Math.min(1, s.value / max))).join(',')).join(' ');
  const weakest = stats.reduce((w, s, i) => s.value < stats[w].value ? i : w, 0);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `kotoba-radar ${className}`,
    style: {
      display: 'inline-flex'
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    "aria-hidden": "true"
  }, [1, 0.66, 0.33].map(f => /*#__PURE__*/React.createElement("polygon", {
    key: f,
    points: poly(rMax * f),
    fill: "none",
    stroke: "var(--border-subtle)",
    strokeWidth: "1.5"
  })), stats.map((_, i) => {
    const [x, y] = pt(i, rMax);
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: cx,
      y1: cy,
      x2: x,
      y2: y,
      stroke: "var(--border-subtle)",
      strokeWidth: "1.5"
    });
  }), /*#__PURE__*/React.createElement("polygon", {
    points: dataPoly,
    fill: color,
    opacity: "0.22"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: dataPoly,
    fill: "none",
    stroke: color,
    strokeWidth: "2.5",
    strokeLinejoin: "round"
  }), stats.map((s, i) => {
    const [x, y] = pt(i, rMax * Math.max(0.05, Math.min(1, s.value / max)));
    const weak = i === weakest;
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: x,
      cy: y,
      r: weak ? 5 : 3.5,
      fill: weak ? 'var(--torii)' : color,
      stroke: "#fff",
      strokeWidth: "2"
    });
  }), stats.map((s, i) => {
    const [x, y] = pt(i, rMax + size * 0.105);
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("text", {
      x: x,
      y: y - 3,
      textAnchor: "middle",
      fontFamily: "var(--font-jp-display)",
      fontWeight: "700",
      fontSize: size * 0.075,
      fill: i === weakest ? 'var(--torii)' : 'var(--text-strong)'
    }, s.jp), /*#__PURE__*/React.createElement("text", {
      x: x,
      y: y + size * 0.062,
      textAnchor: "middle",
      fontFamily: "var(--font-body)",
      fontWeight: "600",
      fontSize: size * 0.052,
      fill: "var(--text-muted)"
    }, s.label));
  })));
}
Object.assign(__ds_scope, { SkillRadar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/adaptive/SkillRadar.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kotoba Avatar — circular user image or initials, with an optional
 * progress ring (used to show streak/level around the profile photo).
 */

const CSS = `
.kotoba-avatar{
  position:relative; display:inline-flex; align-items:center; justify-content:center;
  border-radius:50%; background:var(--ai-200); color:var(--brand-strong);
  font-family:var(--font-display); font-weight:700; overflow:hidden; flex:none;
}
.kotoba-avatar img{ width:100%; height:100%; object-fit:cover; }
.kotoba-avatar[data-size="sm"]{ width:36px; height:36px; font-size:14px; }
.kotoba-avatar[data-size="md"]{ width:48px; height:48px; font-size:18px; }
.kotoba-avatar[data-size="lg"]{ width:64px; height:64px; font-size:24px; }
.kotoba-avatar[data-size="xl"]{ width:88px; height:88px; font-size:32px; }
.kotoba-avatar-wrap{ position:relative; display:inline-flex; padding:4px; border-radius:50%; }
.kotoba-avatar-wrap[data-ring="true"]{ background:conic-gradient(var(--accent) var(--ring-pct,70%), var(--surface-sunken) 0); }
.kotoba-avatar-wrap[data-ring="true"] .kotoba-avatar{ border:3px solid var(--surface-card); }
`;
function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
function Avatar({
  src,
  name = '',
  size = 'md',
  ring = false,
  ringPercent = 70,
  className = '',
  ...rest
}) {
  useInjected('kotoba-avatar-css', CSS);
  const initials = name.split(' ').map(p => p[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  const inner = /*#__PURE__*/React.createElement("span", _extends({
    className: `kotoba-avatar ${className}`,
    "data-size": size
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials || '?');
  if (!ring) return inner;
  return /*#__PURE__*/React.createElement("span", {
    className: "kotoba-avatar-wrap",
    "data-ring": "true",
    style: {
      '--ring-pct': `${ringPercent}%`
    }
  }, inner);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kotoba Badge — a small status/count pill. Soft-filled by default.
 */

const CSS = `
.kotoba-badge{
  display:inline-flex; align-items:center; gap:5px;
  font-family:var(--font-body); font-weight:700; line-height:1;
  font-size:var(--text-2xs); letter-spacing:0.01em;
  padding:5px 10px; border-radius:var(--radius-pill);
  background:var(--brand-soft); color:var(--brand-strong);
}
.kotoba-badge[data-size="sm"]{ font-size:var(--text-3xs); padding:3px 8px; }
.kotoba-badge[data-size="lg"]{ font-size:var(--text-sm); padding:7px 13px; }
.kotoba-badge[data-tone="accent"]{ background:var(--accent-soft); color:var(--kaki-700); }
.kotoba-badge[data-tone="success"]{ background:var(--success-soft); color:var(--wakaba-700); }
.kotoba-badge[data-tone="warning"]{ background:var(--warning-soft); color:var(--kihada-700); }
.kotoba-badge[data-tone="danger"]{ background:var(--danger-soft); color:var(--beni-700); }
.kotoba-badge[data-tone="neutral"]{ background:var(--surface-sunken); color:var(--text-body); }
.kotoba-badge[data-solid="true"]{ color:#fff; }
.kotoba-badge[data-solid="true"][data-tone="brand"]{ background:var(--brand); }
.kotoba-badge[data-solid="true"][data-tone="accent"]{ background:var(--accent); }
.kotoba-badge[data-solid="true"][data-tone="success"]{ background:var(--success); }
.kotoba-badge[data-solid="true"][data-tone="danger"]{ background:var(--danger); }
.kotoba-badge .kotoba-badge-dot{ width:6px; height:6px; border-radius:50%; background:currentColor; }
`;
function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
function Badge({
  children,
  tone = 'brand',
  size = 'md',
  solid = false,
  dot = false,
  className = '',
  ...rest
}) {
  useInjected('kotoba-badge-css', CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `kotoba-badge ${className}`,
    "data-tone": tone,
    "data-size": size === 'md' ? undefined : size,
    "data-solid": solid || undefined
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "kotoba-badge-dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kotoba Button — the primary tactile action.
 * Pill-shaped with a solid 3-D bottom edge that compresses on press,
 * giving the satisfying "click" that signals forward progress.
 */

const CSS = `
.kotoba-btn{
  --edge: var(--ai-800);
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  font-family:var(--font-body); font-weight:700; line-height:1;
  border:none; cursor:pointer; white-space:nowrap; text-decoration:none;
  border-radius:var(--radius-pill);
  background:var(--brand); color:var(--on-brand);
  box-shadow:0 var(--press-depth) 0 var(--edge);
  transition:transform var(--dur-fast) var(--ease-out),
             box-shadow var(--dur-fast) var(--ease-out),
             background var(--dur-fast) var(--ease-out),
             filter var(--dur-fast) var(--ease-out);
  -webkit-tap-highlight-color:transparent; user-select:none;
}
.kotoba-btn:hover{ filter:brightness(1.04); }
.kotoba-btn:active{ transform:translateY(var(--press-depth)); box-shadow:0 0 0 var(--edge); }
.kotoba-btn:focus-visible{ outline:none; box-shadow:0 var(--press-depth) 0 var(--edge), var(--ring); }

.kotoba-btn[data-size="sm"]{ padding:9px 16px; font-size:var(--text-sm); min-height:40px; }
.kotoba-btn[data-size="md"]{ padding:13px 22px; font-size:var(--text-md); min-height:48px; }
.kotoba-btn[data-size="lg"]{ padding:17px 30px; font-size:var(--text-lg); min-height:56px; }

.kotoba-btn[data-variant="accent"]{ background:var(--accent); color:var(--on-accent); --edge:var(--kaki-700); }
.kotoba-btn[data-variant="success"]{ background:var(--success); color:var(--on-success); --edge:var(--wakaba-700); }
.kotoba-btn[data-variant="danger"]{ background:var(--danger); color:var(--on-danger); --edge:var(--beni-700); }
.kotoba-btn[data-variant="secondary"]{
  background:var(--surface-card); color:var(--brand-strong);
  --edge:var(--sumi-300); box-shadow:0 var(--press-depth) 0 var(--edge); border:var(--border-thin) solid var(--border-default);
}
.kotoba-btn[data-variant="ghost"]{
  background:transparent; color:var(--text-body); box-shadow:none; font-weight:600;
}
.kotoba-btn[data-variant="ghost"]:hover{ background:var(--surface-sunken); filter:none; }
.kotoba-btn[data-variant="ghost"]:active{ transform:none; }

.kotoba-btn[data-full="true"]{ width:100%; }
.kotoba-btn[disabled]{ opacity:0.5; cursor:not-allowed; filter:none; transform:none; box-shadow:0 var(--press-depth) 0 var(--edge); }
.kotoba-btn[data-variant="ghost"][disabled]{ box-shadow:none; }
`;
function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon = null,
  iconRight = null,
  as = 'button',
  className = '',
  ...rest
}) {
  useInjected('kotoba-btn-css', CSS);
  const Tag = as;
  const v = variant === 'primary' ? undefined : variant;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `kotoba-btn ${className}`,
    "data-variant": v,
    "data-size": size,
    "data-full": fullWidth || undefined
  }, rest), icon, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kotoba Card — the base surface. Soft indigo-tinted shadow, generous radius.
 * Pass `interactive` for a hover-lift (use on tappable cards).
 */

const CSS = `
.kotoba-card{
  background:var(--surface-card);
  border:var(--border-thin) solid var(--border-subtle);
  border-radius:var(--radius-lg);
  box-shadow:var(--shadow-sm);
  padding:var(--space-5);
  transition:transform var(--dur-base) var(--ease-out),
             box-shadow var(--dur-base) var(--ease-out);
}
.kotoba-card[data-pad="sm"]{ padding:var(--space-4); }
.kotoba-card[data-pad="lg"]{ padding:var(--space-7); }
.kotoba-card[data-pad="none"]{ padding:0; }
.kotoba-card[data-elevation="flat"]{ box-shadow:none; }
.kotoba-card[data-elevation="md"]{ box-shadow:var(--shadow-md); }
.kotoba-card[data-elevation="lg"]{ box-shadow:var(--shadow-lg); }
.kotoba-card[data-interactive="true"]{ cursor:pointer; }
.kotoba-card[data-interactive="true"]:hover{ transform:translateY(-3px); box-shadow:var(--shadow-lg); }
.kotoba-card[data-interactive="true"]:active{ transform:translateY(-1px); }
.kotoba-card[data-tone="brand"]{ background:var(--brand-subtle); border-color:var(--ai-100); }
.kotoba-card[data-tone="inverse"]{ background:var(--surface-inverse); border-color:transparent; color:var(--text-on-dark); }
`;
function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
function Card({
  children,
  pad = 'md',
  elevation = 'sm',
  tone = 'default',
  interactive = false,
  as = 'div',
  className = '',
  ...rest
}) {
  useInjected('kotoba-card-css', CSS);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `kotoba-card ${className}`,
    "data-pad": pad === 'md' ? undefined : pad,
    "data-elevation": elevation === 'sm' ? undefined : elevation,
    "data-tone": tone === 'default' ? undefined : tone,
    "data-interactive": interactive || undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kotoba IconButton — a compact, icon-only action.
 * Circular by default; used for nav, close, audio replay, etc.
 */

const CSS = `
.kotoba-iconbtn{
  display:inline-flex; align-items:center; justify-content:center;
  border:none; cursor:pointer; padding:0;
  border-radius:var(--radius-pill);
  background:var(--surface-sunken); color:var(--text-body);
  transition:background var(--dur-fast) var(--ease-out),
             transform var(--dur-fast) var(--ease-out),
             color var(--dur-fast) var(--ease-out);
  -webkit-tap-highlight-color:transparent;
}
.kotoba-iconbtn:hover{ background:var(--sumi-200); }
.kotoba-iconbtn:active{ transform:scale(0.92); }
.kotoba-iconbtn:focus-visible{ outline:none; box-shadow:var(--ring); }
.kotoba-iconbtn[data-size="sm"]{ width:36px; height:36px; }
.kotoba-iconbtn[data-size="md"]{ width:44px; height:44px; }
.kotoba-iconbtn[data-size="lg"]{ width:52px; height:52px; }
.kotoba-iconbtn[data-variant="brand"]{ background:var(--brand-soft); color:var(--brand-strong); }
.kotoba-iconbtn[data-variant="brand"]:hover{ background:var(--ai-200); }
.kotoba-iconbtn[data-variant="accent"]{ background:var(--accent); color:var(--on-accent); }
.kotoba-iconbtn[data-variant="accent"]:hover{ filter:brightness(1.05); background:var(--accent); }
.kotoba-iconbtn[data-variant="ghost"]{ background:transparent; }
.kotoba-iconbtn[data-variant="ghost"]:hover{ background:var(--surface-sunken); }
.kotoba-iconbtn[data-square="true"]{ border-radius:var(--radius-md); }
.kotoba-iconbtn[disabled]{ opacity:0.45; cursor:not-allowed; }
.kotoba-iconbtn svg, .kotoba-iconbtn i{ width:55%; height:55%; }
`;
function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
function IconButton({
  children,
  variant = 'neutral',
  size = 'md',
  square = false,
  label,
  className = '',
  ...rest
}) {
  useInjected('kotoba-iconbtn-css', CSS);
  const v = variant === 'neutral' ? undefined : variant;
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `kotoba-iconbtn ${className}`,
    "data-variant": v,
    "data-size": size,
    "data-square": square || undefined,
    "aria-label": label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kotoba Tag — a chip for topics/filters. Can be selectable or removable.
 */

const CSS = `
.kotoba-tag{
  display:inline-flex; align-items:center; gap:6px;
  font-family:var(--font-body); font-weight:600; font-size:var(--text-sm);
  padding:7px 13px; border-radius:var(--radius-pill);
  background:var(--surface-card); color:var(--text-body);
  border:var(--border-thin) solid var(--border-default);
  cursor:default; transition:all var(--dur-fast) var(--ease-out);
  -webkit-tap-highlight-color:transparent;
}
.kotoba-tag[data-clickable="true"]{ cursor:pointer; }
.kotoba-tag[data-clickable="true"]:hover{ border-color:var(--border-brand); color:var(--brand-strong); }
.kotoba-tag[data-selected="true"]{ background:var(--brand-soft); border-color:var(--ai-300); color:var(--brand-strong); }
.kotoba-tag .kotoba-tag-x{
  display:inline-flex; align-items:center; justify-content:center;
  width:16px; height:16px; border-radius:50%; margin-right:-3px;
  background:var(--surface-sunken); cursor:pointer; font-size:11px; line-height:1;
}
.kotoba-tag .kotoba-tag-x:hover{ background:var(--sumi-300); }
`;
function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
function Tag({
  children,
  selected = false,
  onRemove,
  icon = null,
  onClick,
  className = '',
  ...rest
}) {
  useInjected('kotoba-tag-css', CSS);
  const clickable = !!onClick || selected !== undefined && onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `kotoba-tag ${className}`,
    "data-selected": selected || undefined,
    "data-clickable": onClick ? 'true' : undefined,
    onClick: onClick
  }, rest), icon, children, onRemove && /*#__PURE__*/React.createElement("span", {
    className: "kotoba-tag-x",
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kotoba Input — labelled text field with helper/error states and optional
 * leading icon. Calm by default, indigo focus ring, persimmon-free errors.
 */

const CSS = `
.kotoba-field{ display:flex; flex-direction:column; gap:6px; font-family:var(--font-body); }
.kotoba-field-label{ font-size:var(--text-sm); font-weight:600; color:var(--text-strong); }
.kotoba-field-label .req{ color:var(--danger); margin-left:2px; }
.kotoba-input-wrap{ position:relative; display:flex; align-items:center; }
.kotoba-input-wrap .kotoba-input-icon{
  position:absolute; left:14px; display:inline-flex; color:var(--text-muted); pointer-events:none;
}
.kotoba-input-wrap .kotoba-input-icon svg, .kotoba-input-wrap .kotoba-input-icon i{ width:18px; height:18px; }
.kotoba-input{
  width:100%; box-sizing:border-box; font-family:var(--font-body); font-size:var(--text-md);
  color:var(--text-strong); background:var(--surface-card);
  border:var(--border-base) solid var(--border-default);
  border-radius:var(--radius-md); padding:12px 14px; min-height:48px;
  transition:border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
  outline:none;
}
.kotoba-input::placeholder{ color:var(--text-faint); }
.kotoba-input:hover{ border-color:var(--border-strong); }
.kotoba-input:focus{ border-color:var(--brand); box-shadow:var(--ring); }
.kotoba-input-wrap[data-has-icon="true"] .kotoba-input{ padding-left:42px; }
.kotoba-field[data-invalid="true"] .kotoba-input{ border-color:var(--danger); }
.kotoba-field[data-invalid="true"] .kotoba-input:focus{ box-shadow:0 0 0 4px var(--danger-soft); }
.kotoba-field-help{ font-size:var(--text-xs); color:var(--text-muted); }
.kotoba-field[data-invalid="true"] .kotoba-field-help{ color:var(--danger); }
.kotoba-input:disabled{ background:var(--surface-sunken); color:var(--text-faint); cursor:not-allowed; }
`;
function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
function Input({
  label,
  helperText,
  error,
  icon = null,
  required = false,
  id,
  className = '',
  ...rest
}) {
  useInjected('kotoba-input-css', CSS);
  const autoId = React.useId();
  const fieldId = id || autoId;
  const invalid = !!error;
  const help = error || helperText;
  return /*#__PURE__*/React.createElement("div", {
    className: `kotoba-field ${className}`,
    "data-invalid": invalid || undefined
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "kotoba-field-label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "kotoba-input-wrap",
    "data-has-icon": icon ? 'true' : undefined
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "kotoba-input-icon"
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: "kotoba-input",
    "aria-invalid": invalid || undefined,
    required: required
  }, rest))), help && /*#__PURE__*/React.createElement("span", {
    className: "kotoba-field-help"
  }, help));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/learning/KanaTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kotoba KanaTile — a character study/answer tile. Big kana or kanji with
 * optional reading (romaji/furigana) and meaning. Used in lessons, review
 * grids, and multiple-choice answers (with selected/correct/wrong states).
 */

const CSS = `
.kotoba-tile{
  display:inline-flex; flex-direction:column; align-items:center; justify-content:center; gap:4px;
  min-width:84px; padding:16px 18px; border-radius:var(--radius-lg); cursor:pointer;
  background:var(--surface-card); border:var(--border-base) solid var(--border-default);
  box-shadow:0 4px 0 var(--sumi-200);
  transition:transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), border-color var(--dur-fast), background var(--dur-fast);
  -webkit-tap-highlight-color:transparent; text-align:center;
}
.kotoba-tile:hover{ border-color:var(--border-brand); }
.kotoba-tile:active{ transform:translateY(4px); box-shadow:0 0 0 var(--sumi-200); }
.kotoba-tile:focus-visible{ outline:none; box-shadow:0 4px 0 var(--sumi-200), var(--ring); }
.kotoba-tile[data-static="true"]{ cursor:default; }
.kotoba-tile[data-static="true"]:hover{ border-color:var(--border-default); }
.kotoba-tile[data-static="true"]:active{ transform:none; box-shadow:0 4px 0 var(--sumi-200); }

.kotoba-tile .glyph{ font-family:var(--font-jp-display); font-weight:700; color:var(--text-strong); line-height:1; }
.kotoba-tile .reading{ font-family:var(--font-num); font-weight:600; font-size:var(--text-sm); color:var(--brand-strong); }
.kotoba-tile .meaning{ font-family:var(--font-body); font-size:var(--text-xs); color:var(--text-muted); }
.kotoba-tile[data-size="sm"] .glyph{ font-size:30px; }
.kotoba-tile[data-size="md"] .glyph{ font-size:44px; }
.kotoba-tile[data-size="lg"] .glyph{ font-size:64px; }

.kotoba-tile[data-state="selected"]{ background:var(--brand-soft); border-color:var(--ai-300); box-shadow:0 4px 0 var(--ai-200); }
.kotoba-tile[data-state="correct"]{ background:var(--success-soft); border-color:var(--wakaba-400); box-shadow:0 4px 0 var(--wakaba-200); }
.kotoba-tile[data-state="correct"] .reading{ color:var(--wakaba-700); }
.kotoba-tile[data-state="wrong"]{ background:var(--danger-soft); border-color:var(--beni-300); box-shadow:0 4px 0 var(--beni-200); }
.kotoba-tile[data-state="wrong"] .glyph{ color:var(--beni-700); }
`;
function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
function KanaTile({
  glyph,
  reading,
  meaning,
  size = 'md',
  state = 'default',
  interactive = true,
  as,
  className = '',
  ...rest
}) {
  useInjected('kotoba-tile-css', CSS);
  const Tag = as || (interactive ? 'button' : 'div');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `kotoba-tile ${className}`,
    "data-size": size,
    "data-state": state === 'default' ? undefined : state,
    "data-static": !interactive || undefined
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "glyph jp-display"
  }, glyph), reading && /*#__PURE__*/React.createElement("span", {
    className: "reading"
  }, reading), meaning && /*#__PURE__*/React.createElement("span", {
    className: "meaning"
  }, meaning));
}
Object.assign(__ds_scope, { KanaTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/KanaTile.jsx", error: String((e && e.message) || e) }); }

// components/learning/LessonNode.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kotoba LessonNode — a stepping stone on the learning path. Circular, tactile,
 * with states for locked / available / current / complete. The "current" node
 * pulses to always show the learner their next step.
 */

const Icons = {
  check: /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }),
  lock: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    width: "16",
    height: "10",
    x: "4",
    y: "11",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 11V7a4 4 0 0 1 8 0v4"
  })),
  star: /*#__PURE__*/React.createElement("path", {
    d: "m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.6l1-5.8L3.5 9.7l5.9-.9z"
  }),
  book: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 19V5"
  })),
  crown: /*#__PURE__*/React.createElement("path", {
    d: "M3 7l4 4 5-7 5 7 4-4-2 12H5z"
  })
};
const CSS = `
.kotoba-node-wrap{ display:inline-flex; flex-direction:column; align-items:center; gap:8px; }
.kotoba-node{
  --face:var(--brand); --edge:var(--ai-800); --ink:#fff;
  position:relative; display:inline-flex; align-items:center; justify-content:center;
  width:68px; height:68px; border-radius:50%; border:none; cursor:pointer; padding:0;
  background:var(--face); color:var(--ink);
  box-shadow:0 6px 0 var(--edge);
  transition:transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), filter var(--dur-fast);
  -webkit-tap-highlight-color:transparent;
}
.kotoba-node svg{ width:30px; height:30px; }
.kotoba-node:hover{ filter:brightness(1.05); }
.kotoba-node:active{ transform:translateY(6px); box-shadow:0 0 0 var(--edge); }
.kotoba-node:focus-visible{ outline:none; box-shadow:0 6px 0 var(--edge), var(--ring); }

.kotoba-node[data-size="sm"]{ width:52px; height:52px; box-shadow:0 5px 0 var(--edge); }
.kotoba-node[data-size="sm"] svg{ width:22px; height:22px; }
.kotoba-node[data-size="lg"]{ width:84px; height:84px; box-shadow:0 7px 0 var(--edge); }
.kotoba-node[data-size="lg"] svg{ width:38px; height:38px; }

.kotoba-node[data-state="complete"]{ --face:var(--success); --edge:var(--wakaba-700); }
.kotoba-node[data-state="mastered"]{ --face:var(--kihada-400); --edge:var(--kihada-600); --ink:#fff; }
.kotoba-node[data-state="locked"]{ --face:var(--surface-sunken); --edge:var(--sumi-300); --ink:var(--text-faint); cursor:not-allowed; }
.kotoba-node[data-state="locked"]:hover{ filter:none; }
.kotoba-node[data-state="locked"]:active{ transform:none; box-shadow:0 6px 0 var(--edge); }
.kotoba-node[data-state="available"]{ --face:var(--surface-card); --edge:var(--sumi-200); --ink:var(--brand); border:var(--border-base) solid var(--border-subtle); }

.kotoba-node[data-current="true"]::before{
  content:""; position:absolute; inset:-9px; border-radius:50%;
  border:3px solid var(--accent); opacity:0.6;
  animation:kotoba-node-pulse 1.8s var(--ease-out) infinite;
}
@keyframes kotoba-node-pulse{
  0%{ transform:scale(0.96); opacity:0.7; }
  70%{ transform:scale(1.12); opacity:0; }
  100%{ opacity:0; }
}
@media (prefers-reduced-motion: reduce){ .kotoba-node[data-current="true"]::before{ animation:none; opacity:0.5; } }

.kotoba-node-start{
  position:absolute; top:-22px; left:50%; transform:translateX(-50%);
  font-family:var(--font-body); font-weight:800; font-size:11px; letter-spacing:0.08em;
  color:var(--accent); background:var(--surface-card); border:var(--border-base) solid var(--accent);
  padding:2px 9px; border-radius:var(--radius-pill); box-shadow:var(--shadow-sm); white-space:nowrap;
}
.kotoba-node-label{ font-family:var(--font-body); font-weight:600; font-size:var(--text-xs); color:var(--text-muted); max-width:96px; text-align:center; }
`;
function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
function LessonNode({
  state = 'available',
  icon = 'book',
  size = 'md',
  current = false,
  label,
  startLabel = 'START',
  className = '',
  ...rest
}) {
  useInjected('kotoba-node-css', CSS);
  let glyph = icon;
  if (state === 'locked') glyph = 'lock';else if (state === 'complete') glyph = 'check';else if (state === 'mastered') glyph = 'crown';
  const node = Icons[glyph] || Icons.book;
  const stroke = glyph === 'check';
  return /*#__PURE__*/React.createElement("span", {
    className: "kotoba-node-wrap"
  }, /*#__PURE__*/React.createElement("button", _extends({
    className: `kotoba-node ${className}`,
    "data-state": state,
    "data-size": size === 'md' ? undefined : size,
    "data-current": current || undefined,
    disabled: state === 'locked'
  }, rest), current && /*#__PURE__*/React.createElement("span", {
    className: "kotoba-node-start"
  }, startLabel), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: stroke ? 'none' : 'currentColor',
    stroke: stroke ? 'currentColor' : 'none',
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, node)), label && /*#__PURE__*/React.createElement("span", {
    className: "kotoba-node-label"
  }, label));
}
Object.assign(__ds_scope, { LessonNode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/LessonNode.jsx", error: String((e && e.message) || e) }); }

// components/progress/LevelBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kotoba LevelBadge — the JLPT tier marker (Pre-N5 → N1). Each tier carries its
 * own belt-color. Optionally shows progress *within* the tier as a base bar.
 */

const CSS = `
.kotoba-level{
  --tier:var(--tier-n5);
  position:relative; display:inline-flex; flex-direction:column;
  align-items:center; justify-content:center;
  border-radius:var(--radius-lg); color:#fff; overflow:hidden;
  font-family:var(--font-display); font-weight:700; line-height:1;
  background:var(--tier); box-shadow:var(--shadow-sm);
}
.kotoba-level[data-tier="pre"]{ --tier:var(--tier-pre); }
.kotoba-level[data-tier="n5"]{ --tier:var(--tier-n5); }
.kotoba-level[data-tier="n4"]{ --tier:var(--tier-n4); }
.kotoba-level[data-tier="n3"]{ --tier:var(--tier-n3); }
.kotoba-level[data-tier="n2"]{ --tier:var(--tier-n2); }
.kotoba-level[data-tier="n1"]{ --tier:var(--tier-n1); }
.kotoba-level[data-size="sm"]{ width:40px; height:40px; font-size:14px; }
.kotoba-level[data-size="md"]{ width:60px; height:60px; font-size:22px; }
.kotoba-level[data-size="lg"]{ width:96px; height:96px; font-size:36px; border-radius:var(--radius-xl); }
.kotoba-level .kotoba-level-cap{ font-family:var(--font-body); font-weight:700; font-size:0.42em; opacity:0.85; letter-spacing:0.05em; margin-bottom:2px; }
.kotoba-level .kotoba-level-prog{ position:absolute; left:0; right:0; bottom:0; height:0.18em; background:rgba(255,255,255,0.28); }
.kotoba-level .kotoba-level-prog > i{ display:block; height:100%; background:rgba(255,255,255,0.95); transition:width var(--dur-slow) var(--ease-out); }
.kotoba-level[data-soft="true"]{ background:color-mix(in srgb, var(--tier) 16%, white); color:var(--tier); box-shadow:none; border:var(--border-base) solid color-mix(in srgb, var(--tier) 35%, white); }
`;
function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
const LABELS = {
  pre: 'PRE',
  n5: 'N5',
  n4: 'N4',
  n3: 'N3',
  n2: 'N2',
  n1: 'N1'
};
function LevelBadge({
  tier = 'n5',
  size = 'md',
  soft = false,
  showCaption = true,
  progress = null,
  className = '',
  ...rest
}) {
  useInjected('kotoba-level-css', CSS);
  const isPre = tier === 'pre';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `kotoba-level ${className}`,
    "data-tier": tier,
    "data-size": size,
    "data-soft": soft || undefined
  }, rest), showCaption && !isPre && /*#__PURE__*/React.createElement("span", {
    className: "kotoba-level-cap"
  }, "JLPT"), /*#__PURE__*/React.createElement("span", null, isPre ? 'Pre' : LABELS[tier].replace('N', 'N')), progress != null && /*#__PURE__*/React.createElement("span", {
    className: "kotoba-level-prog"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: `${Math.max(0, Math.min(100, progress))}%`
    }
  })));
}
Object.assign(__ds_scope, { LevelBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/progress/LevelBadge.jsx", error: String((e && e.message) || e) }); }

// components/progress/ProgressRing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kotoba ProgressRing — circular progress indicator (SVG). Renders any content
 * in the center (a number, icon, or %). Used for daily goals and lesson sets.
 */

function ProgressRing({
  value = 0,
  max = 100,
  size = 72,
  thickness = 8,
  color = 'var(--brand)',
  track = 'var(--surface-sunken)',
  rounded = true,
  children,
  className = '',
  ...rest
}) {
  const pct = Math.max(0, Math.min(1, max ? value / max : 0));
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - pct);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `kotoba-ring ${className}`,
    style: {
      position: 'relative',
      width: size,
      height: size,
      display: 'inline-flex'
    },
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": max
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: track,
    strokeWidth: thickness
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: thickness,
    strokeLinecap: rounded ? 'round' : 'butt',
    strokeDasharray: c,
    strokeDashoffset: offset,
    style: {
      transition: 'stroke-dashoffset var(--dur-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-num)',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, children));
}
Object.assign(__ds_scope, { ProgressRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/progress/ProgressRing.jsx", error: String((e && e.message) || e) }); }

// components/progress/StreakCounter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kotoba StreakCounter — the daily flame. Shows consecutive-day count with a
 * persimmon flame. Goes muted/grey when the streak is at risk or broken.
 */

const Flame = ({
  size = 20
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2c.5 3 2 4.9 4 6.5 2 1.6 3 3.5 3 5.7A7 7 0 0 1 5 14.2c0-1.6.6-3 1.6-4.2.3 1 1 1.8 2 2.1.5-2 .2-4 1.4-5.6C12.2 5 12.4 3.5 12 2z"
}));
const CSS = `
.kotoba-streak{
  display:inline-flex; align-items:center; gap:8px;
  font-family:var(--font-num); font-weight:800; line-height:1;
  color:var(--accent);
}
.kotoba-streak .kotoba-streak-flame{
  display:inline-flex; align-items:center; justify-content:center;
  width:1.6em; height:1.6em; border-radius:50%;
  background:var(--accent-soft); color:var(--accent);
}
.kotoba-streak[data-size="sm"]{ font-size:18px; }
.kotoba-streak[data-size="md"]{ font-size:24px; }
.kotoba-streak[data-size="lg"]{ font-size:40px; }
.kotoba-streak .kotoba-streak-label{ font-family:var(--font-body); font-weight:600; font-size:0.5em; color:var(--text-muted); }
.kotoba-streak[data-state="risk"]{ color:var(--kihada-500); }
.kotoba-streak[data-state="risk"] .kotoba-streak-flame{ background:var(--warning-soft); color:var(--kihada-500); }
.kotoba-streak[data-state="off"]{ color:var(--text-faint); }
.kotoba-streak[data-state="off"] .kotoba-streak-flame{ background:var(--surface-sunken); color:var(--text-faint); }
`;
function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
function StreakCounter({
  days = 0,
  size = 'md',
  state = 'active',
  showLabel = true,
  className = '',
  ...rest
}) {
  useInjected('kotoba-streak-css', CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `kotoba-streak ${className}`,
    "data-size": size,
    "data-state": state === 'active' ? undefined : state
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "kotoba-streak-flame"
  }, /*#__PURE__*/React.createElement(Flame, {
    size: "1em"
  })), /*#__PURE__*/React.createElement("span", null, days), showLabel && /*#__PURE__*/React.createElement("span", {
    className: "kotoba-streak-label"
  }, "day", days === 1 ? '' : 's'));
}
Object.assign(__ds_scope, { StreakCounter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/progress/StreakCounter.jsx", error: String((e && e.message) || e) }); }

// components/progress/XPBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kotoba XPBar — horizontal experience bar toward the next level. Shows the
 * current level chip, a filled track, and the value/goal.
 */

const CSS = `
.kotoba-xp{ display:flex; flex-direction:column; gap:6px; font-family:var(--font-body); width:100%; }
.kotoba-xp-head{ display:flex; align-items:center; justify-content:space-between; gap:10px; }
.kotoba-xp-level{
  display:inline-flex; align-items:center; gap:6px;
  font-family:var(--font-num); font-weight:800; font-size:var(--text-sm);
  color:var(--brand-strong);
}
.kotoba-xp-level .lvl{
  display:inline-flex; align-items:center; justify-content:center;
  min-width:24px; height:24px; padding:0 7px; border-radius:var(--radius-pill);
  background:var(--brand); color:var(--on-brand); font-size:var(--text-xs);
}
.kotoba-xp-count{ font-family:var(--font-num); font-weight:600; font-size:var(--text-xs); color:var(--text-muted); }
.kotoba-xp-track{
  position:relative; height:12px; border-radius:var(--radius-pill);
  background:var(--surface-sunken); overflow:hidden;
}
.kotoba-xp-fill{
  height:100%; border-radius:var(--radius-pill);
  background:linear-gradient(90deg, var(--kaki-400), var(--accent));
  transition:width var(--dur-slow) var(--ease-out);
}
.kotoba-xp[data-tone="brand"] .kotoba-xp-fill{ background:linear-gradient(90deg, var(--ai-400), var(--brand)); }
.kotoba-xp[data-tone="success"] .kotoba-xp-fill{ background:linear-gradient(90deg, var(--wakaba-400), var(--success)); }
`;
function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
function XPBar({
  value = 0,
  max = 100,
  level,
  tone = 'accent',
  showCount = true,
  unit = 'XP',
  className = '',
  ...rest
}) {
  useInjected('kotoba-xp-css', CSS);
  const pct = Math.max(0, Math.min(100, max ? value / max * 100 : 0));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `kotoba-xp ${className}`,
    "data-tone": tone === 'accent' ? undefined : tone
  }, rest), (level != null || showCount) && /*#__PURE__*/React.createElement("div", {
    className: "kotoba-xp-head"
  }, level != null ? /*#__PURE__*/React.createElement("span", {
    className: "kotoba-xp-level"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lvl"
  }, "Lv ", level)) : /*#__PURE__*/React.createElement("span", null), showCount && /*#__PURE__*/React.createElement("span", {
    className: "kotoba-xp-count"
  }, value.toLocaleString(), " / ", max.toLocaleString(), " ", unit)), /*#__PURE__*/React.createElement("div", {
    className: "kotoba-xp-track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kotoba-xp-fill",
    style: {
      width: `${pct}%`
    }
  })));
}
Object.assign(__ds_scope, { XPBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/progress/XPBar.jsx", error: String((e && e.message) || e) }); }

// components/rpg/Companion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kotoba Companion — the learner's kotodama (言霊, "word spirit"), a pixel-art
 * chibi companion that walks the path with you and evolves as your Japanese
 * grows. Rendered from pixel matrices as crisp SVG — no image assets needed.
 * Stage 1: newborn spirit · Stage 2: persimmon scarf traveler · Stage 3: gold-touched guardian.
 */

const PALETTE = {
  O: '#1F284F',
  // outline · ai-900
  B: '#4F61BE',
  // body · ai-500
  L: '#94A2DF',
  // body highlight · ai-300
  W: '#FFFFFF',
  // eye white
  K: '#171A24',
  // pupil
  S: '#F15F2C',
  // scarf · kaki-500
  D: '#D94A1C',
  // scarf shade · kaki-600
  G: '#ECBC49',
  // gold · kihada-300
  R: '#FFC2A8' // blush · kaki-200
};

// 12 columns wide. '.' = transparent.
const STAGE_1 = ['....OOOO....', '..OOBBBBOO..', '.OBBLBLBBBO.', '.OBBBBBBBBO.', '.OBWWBBWWBO.', '.OBWKBBWKBO.', 'OBRBBOOBBRBO', 'OBBBBBBBBBBO', '.OBBBBBBBBO.', '.OBBBBBBBBO.', '..OBBOOBBO..', '...OBO.OBO..', '....O...O...'];
const STAGE_2 = ['....OOOO....', '..OOBBBBOO..', '.OBBLBLBBBO.', '.OBBBBBBBBO.', '.OBWWBBWWBO.', '.OBWKBBWKBO.', 'OBBBBOOBBBBO', 'OBBBBBBBBBBO', '.OSSSSSSSSO.', '.OSSDDDDSSO.', '..OBBOOBSSO.', '...OBO.OSO..', '....O...O...'];
const STAGE_3 = ['.G..OOOO..G.', '..OOBBBBOO..', '.OBBLBLBBBO.', '.OGGGGGGGGO.', '.OBWWBBWWBO.', '.OBWKBBWKBO.', 'OBBBBOOBBBBO', 'OBBBBBBBBBBO', '.OSSSSSSSSO.', '.OSSDDDDSSO.', 'G.OBBOOBSSO.', '...OBO.OSO..', '....O...O...'];
const STAGES = {
  1: STAGE_1,
  2: STAGE_2,
  3: STAGE_3
};
const CSS = `
.kotoba-companion{ display:inline-flex; }
.kotoba-companion[data-floating="true"]{ animation:kotoba-companion-float 2.6s ease-in-out infinite; }
@keyframes kotoba-companion-float{
  0%,100%{ transform:translateY(0); }
  50%{ transform:translateY(-7%); }
}
@media (prefers-reduced-motion: reduce){
  .kotoba-companion[data-floating="true"]{ animation:none; }
}
`;
function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

/** Renders any pixel matrix as crisp SVG. Shared by Companion and BossNode. */
function PixelSprite({
  matrix,
  palette = PALETTE,
  size = 72,
  className = '',
  style,
  ...rest
}) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const rects = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const c = matrix[y][x];
      if (c === '.' || !palette[c]) continue;
      rects.push(/*#__PURE__*/React.createElement("rect", {
        key: `${x}-${y}`,
        x: x,
        y: y,
        width: "1.02",
        height: "1.02",
        fill: palette[c]
      }));
    }
  }
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: `0 0 ${cols} ${rows}`,
    width: size,
    height: size * rows / cols,
    shapeRendering: "crispEdges",
    className: className,
    style: {
      imageRendering: 'pixelated',
      ...style
    },
    "aria-hidden": "true"
  }, rest), rects);
}
function Companion({
  stage = 1,
  size = 72,
  floating = false,
  className = '',
  ...rest
}) {
  useInjected('kotoba-companion-css', CSS);
  const matrix = STAGES[stage] || STAGE_1;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `kotoba-companion ${className}`,
    "data-floating": floating || undefined
  }, rest), /*#__PURE__*/React.createElement(PixelSprite, {
    matrix: matrix,
    size: size
  }));
}
Object.assign(__ds_scope, { PixelSprite, Companion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/rpg/Companion.jsx", error: String((e && e.message) || e) }); }

// components/rpg/BossNode.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kotoba BossNode — an optional boss encounter on (or near) the path. A pixel
 * oni guards bonus rewards; defeating it is a special challenge that uses the
 * learner's stats. Never blocks the main path — bosses are side-quests.
 */

const ONI_PALETTE = {
  O: '#571C12',
  // outline · shu-900
  R: '#DA5839',
  // body · shu-400
  D: '#A82E16',
  // shade · shu-600
  W: '#FFFFFF',
  // eyes/teeth
  K: '#171A24',
  // pupil/brow
  G: '#ECBC49' // horns · gold
};
const ONI = ['.G........G.', '.GG......GG.', '..OOOOOOOO..', '.ORRRRRRRRO.', '.ORKRRRRKRO.', '.ORWKRRKWRO.', 'ORRRRRRRRRRO', 'ORWWWWWWWWRO', '.ORRDDDDRRO.', '..ORRRRRRO..', '..ORO..ORO..', '...O....O...'];
const CSS = `
.kotoba-boss-wrap{ display:inline-flex; flex-direction:column; align-items:center; gap:8px; }
.kotoba-boss{
  position:relative; display:inline-flex; align-items:center; justify-content:center;
  border:none; cursor:pointer; padding:0; border-radius:50%;
  background:var(--torii-soft); border:3px solid var(--torii);
  box-shadow:0 5px 0 var(--torii-deep);
  transition:transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), filter var(--dur-fast);
  -webkit-tap-highlight-color:transparent;
}
.kotoba-boss:hover{ filter:brightness(1.04); }
.kotoba-boss:active{ transform:translateY(5px); box-shadow:0 0 0 var(--torii-deep); }
.kotoba-boss:focus-visible{ outline:none; box-shadow:0 5px 0 var(--torii-deep), var(--ring); }
.kotoba-boss[data-size="sm"]{ width:56px; height:56px; }
.kotoba-boss[data-size="md"]{ width:76px; height:76px; }
.kotoba-boss[data-size="lg"]{ width:96px; height:96px; }
.kotoba-boss[data-state="locked"]{ filter:grayscale(1) opacity(0.6); cursor:not-allowed; }
.kotoba-boss[data-state="locked"]:active{ transform:none; box-shadow:0 5px 0 var(--torii-deep); }
.kotoba-boss[data-state="defeated"]{ background:var(--success-soft); border-color:var(--success); box-shadow:0 5px 0 var(--wakaba-700); filter:saturate(0.7); }
.kotoba-boss .kotoba-boss-flag{
  position:absolute; top:-12px; left:50%; transform:translateX(-50%);
  font-family:var(--font-body); font-weight:800; font-size:10px; letter-spacing:0.08em;
  background:var(--torii); color:#fff; padding:2px 8px; border-radius:var(--radius-pill);
  white-space:nowrap; box-shadow:var(--shadow-sm);
}
.kotoba-boss[data-state="defeated"] .kotoba-boss-flag{ background:var(--success); }
.kotoba-boss-label{ font-family:var(--font-body); font-weight:600; font-size:var(--text-xs); color:var(--text-muted); max-width:110px; text-align:center; }
@keyframes kotoba-boss-shake{
  0%,100%{ transform:translateX(0); }
  20%{ transform:translateX(-5px) rotate(-4deg); }
  45%{ transform:translateX(4px) rotate(3deg); }
  70%{ transform:translateX(-3px); }
}
`;
function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
function BossNode({
  state = 'available',
  // available | locked | defeated
  size = 'md',
  label,
  flag = 'BOSS',
  className = '',
  ...rest
}) {
  useInjected('kotoba-boss-css', CSS);
  const spriteSize = size === 'sm' ? 34 : size === 'lg' ? 60 : 46;
  return /*#__PURE__*/React.createElement("span", {
    className: "kotoba-boss-wrap"
  }, /*#__PURE__*/React.createElement("button", _extends({
    className: `kotoba-boss ${className}`,
    "data-state": state,
    "data-size": size,
    disabled: state === 'locked'
  }, rest), flag && /*#__PURE__*/React.createElement("span", {
    className: "kotoba-boss-flag"
  }, state === 'defeated' ? 'CLEAR' : flag), /*#__PURE__*/React.createElement(__ds_scope.PixelSprite, {
    matrix: ONI,
    palette: ONI_PALETTE,
    size: spriteSize
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "kotoba-boss-label"
  }, label));
}

/** Bare oni sprite (no node chrome) — for battle headers, intros, lists. */
function PixelOni({
  size = 40,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.PixelSprite, _extends({
    matrix: ONI,
    palette: ONI_PALETTE,
    size: size
  }, rest));
}
Object.assign(__ds_scope, { BossNode, PixelOni });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/rpg/BossNode.jsx", error: String((e && e.message) || e) }); }

// components/rpg/PowerLevel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kotoba PowerLevel — the aggregate "word power" (言力) medallion. One number
 * that sums the four skill stats; used to gate boss challenges.
 */

const CSS = `
.kotoba-power{
  display:inline-flex; align-items:center; gap:10px;
  font-family:var(--font-num); line-height:1;
}
.kotoba-power .kotoba-power-medal{
  display:inline-flex; flex-direction:column; align-items:center; justify-content:center;
  border-radius:50%; background:var(--power); color:var(--sumi-900);
  box-shadow:0 4px 0 var(--power-deep), var(--shadow-sm);
  border:3px solid #fff;
}
.kotoba-power[data-size="sm"] .kotoba-power-medal{ width:44px; height:44px; }
.kotoba-power[data-size="md"] .kotoba-power-medal{ width:60px; height:60px; }
.kotoba-power[data-size="lg"] .kotoba-power-medal{ width:84px; height:84px; }
.kotoba-power .kotoba-power-kanji{ font-family:var(--font-jp-display); font-weight:900; }
.kotoba-power[data-size="sm"] .kotoba-power-kanji{ font-size:18px; }
.kotoba-power[data-size="md"] .kotoba-power-kanji{ font-size:26px; }
.kotoba-power[data-size="lg"] .kotoba-power-kanji{ font-size:38px; }
.kotoba-power .kotoba-power-num{ font-weight:800; color:var(--text-strong); }
.kotoba-power[data-size="sm"] .kotoba-power-num{ font-size:20px; }
.kotoba-power[data-size="md"] .kotoba-power-num{ font-size:28px; }
.kotoba-power[data-size="lg"] .kotoba-power-num{ font-size:40px; }
.kotoba-power .kotoba-power-label{ font-family:var(--font-body); font-weight:600; font-size:12px; color:var(--text-muted); margin-top:3px; }
`;
function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
function PowerLevel({
  value = 0,
  size = 'md',
  label = 'Power',
  showLabel = true,
  className = '',
  ...rest
}) {
  useInjected('kotoba-power-css', CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `kotoba-power ${className}`,
    "data-size": size
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "kotoba-power-medal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kotoba-power-kanji"
  }, "\u529B")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "kotoba-power-num"
  }, value), showLabel && /*#__PURE__*/React.createElement("span", {
    className: "kotoba-power-label"
  }, label)));
}
Object.assign(__ds_scope, { PowerLevel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/rpg/PowerLevel.jsx", error: String((e && e.message) || e) }); }

// components/rpg/QuestCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kotoba QuestCard — a quest woven into the path: a goal, progress, and a
 * reward. Quests are optional momentum-builders, never fear-based.
 */

const CSS = `
.kotoba-quest{
  display:flex; align-items:center; gap:14px; width:100%; box-sizing:border-box;
  background:var(--surface-card); border:var(--border-thin) solid var(--border-subtle);
  border-radius:var(--radius-lg); padding:14px 16px; box-shadow:var(--shadow-sm);
  font-family:var(--font-body); text-align:left;
}
.kotoba-quest .kotoba-quest-icon{
  flex:none; width:44px; height:44px; border-radius:var(--radius-md);
  display:inline-flex; align-items:center; justify-content:center;
  background:var(--torii-soft); color:var(--torii);
}
.kotoba-quest .kotoba-quest-icon svg, .kotoba-quest .kotoba-quest-icon i{ width:22px; height:22px; }
.kotoba-quest-main{ flex:1; min-width:0; }
.kotoba-quest-title{ font-size:var(--text-sm); font-weight:700; color:var(--text-strong); }
.kotoba-quest-sub{ font-size:var(--text-2xs); color:var(--text-muted); margin-top:1px; }
.kotoba-quest-track{ height:6px; border-radius:999px; background:var(--surface-sunken); overflow:hidden; margin-top:7px; }
.kotoba-quest-fill{ height:100%; border-radius:999px; background:var(--torii); transition:width var(--dur-slow) var(--ease-out); }
.kotoba-quest-reward{
  flex:none; display:inline-flex; align-items:center; gap:4px;
  font-family:var(--font-num); font-weight:800; font-size:var(--text-xs);
  color:var(--power-deep); background:var(--power-soft);
  padding:6px 10px; border-radius:var(--radius-pill);
}
.kotoba-quest[data-done="true"] .kotoba-quest-icon{ background:var(--success-soft); color:var(--success); }
.kotoba-quest[data-done="true"] .kotoba-quest-fill{ background:var(--success); }
`;
function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
function QuestCard({
  title,
  icon = null,
  value = 0,
  max = 1,
  reward,
  subtitle,
  done = false,
  className = '',
  ...rest
}) {
  useInjected('kotoba-quest-css', CSS);
  const pct = done ? 100 : Math.max(0, Math.min(100, max ? value / max * 100 : 0));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `kotoba-quest ${className}`,
    "data-done": done || undefined
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "kotoba-quest-icon"
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "kotoba-quest-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kotoba-quest-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "kotoba-quest-sub"
  }, subtitle || `${value} / ${max}`), /*#__PURE__*/React.createElement("div", {
    className: "kotoba-quest-track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kotoba-quest-fill",
    style: {
      width: `${pct}%`
    }
  }))), reward && /*#__PURE__*/React.createElement("span", {
    className: "kotoba-quest-reward"
  }, reward));
}
Object.assign(__ds_scope, { QuestCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/rpg/QuestCard.jsx", error: String((e && e.message) || e) }); }

// components/rpg/StatBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kotoba StatBar — one character skill stat: kanji chip + label + bar + value.
 * The four canonical stats are Vocabulary 語彙, Grammar 文法, Listening 聴解,
 * Reading 読解. These feed boss challenges and the aggregate Power level.
 */

const CSS = `
.kotoba-stat{ display:flex; align-items:center; gap:12px; font-family:var(--font-body); width:100%; }
.kotoba-stat .kotoba-stat-kanji{
  flex:none; width:38px; height:38px; border-radius:var(--radius-sm);
  display:inline-flex; align-items:center; justify-content:center;
  font-family:var(--font-jp-display); font-weight:700; font-size:17px;
  background:var(--brand-soft); color:var(--brand-strong);
}
.kotoba-stat-main{ flex:1; min-width:0; }
.kotoba-stat-head{ display:flex; justify-content:space-between; align-items:baseline; margin-bottom:5px; }
.kotoba-stat-label{ font-size:var(--text-sm); font-weight:700; color:var(--text-strong); }
.kotoba-stat-val{ font-family:var(--font-num); font-weight:700; font-size:var(--text-xs); color:var(--text-muted); }
.kotoba-stat-track{ height:8px; border-radius:999px; background:var(--surface-sunken); overflow:hidden; }
.kotoba-stat-fill{ height:100%; border-radius:999px; background:var(--brand); transition:width var(--dur-slow) var(--ease-out); }
.kotoba-stat[data-tone="accent"] .kotoba-stat-kanji{ background:var(--accent-soft); color:var(--kaki-700); }
.kotoba-stat[data-tone="accent"] .kotoba-stat-fill{ background:var(--accent); }
.kotoba-stat[data-tone="success"] .kotoba-stat-kanji{ background:var(--success-soft); color:var(--wakaba-700); }
.kotoba-stat[data-tone="success"] .kotoba-stat-fill{ background:var(--success); }
.kotoba-stat[data-tone="gold"] .kotoba-stat-kanji{ background:var(--power-soft); color:var(--power-deep); }
.kotoba-stat[data-tone="gold"] .kotoba-stat-fill{ background:var(--power); }
.kotoba-stat[data-tone="torii"] .kotoba-stat-kanji{ background:var(--torii-soft); color:var(--torii-deep); }
.kotoba-stat[data-tone="torii"] .kotoba-stat-fill{ background:var(--torii); }
.kotoba-stat[data-weak="true"] .kotoba-stat-val{ color:var(--torii); }
`;
function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
function StatBar({
  label,
  jp,
  value = 0,
  max = 100,
  tone = 'brand',
  weak = false,
  className = '',
  ...rest
}) {
  useInjected('kotoba-stat-css', CSS);
  const pct = Math.max(0, Math.min(100, max ? value / max * 100 : 0));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `kotoba-stat ${className}`,
    "data-tone": tone === 'brand' ? undefined : tone,
    "data-weak": weak || undefined
  }, rest), jp && /*#__PURE__*/React.createElement("span", {
    className: "kotoba-stat-kanji jp-display"
  }, jp), /*#__PURE__*/React.createElement("div", {
    className: "kotoba-stat-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kotoba-stat-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kotoba-stat-label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "kotoba-stat-val"
  }, value, weak && ' · focus')), /*#__PURE__*/React.createElement("div", {
    className: "kotoba-stat-track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kotoba-stat-fill",
    style: {
      width: `${pct}%`
    }
  }))));
}
Object.assign(__ds_scope, { StatBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/rpg/StatBar.jsx", error: String((e && e.message) || e) }); }

// components/rpg/ToriiGate.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kotoba ToriiGate — the vermillion gate. Marks passage: unit checkpoints on
 * the path, grand JLPT tier gates, and celebratory brand moments. Drawn as
 * flat geometric SVG in Shu vermillion with an optional plaque (gaku) label.
 */

const CSS = `
.kotoba-torii{ display:inline-flex; flex-direction:column; align-items:center; gap:8px; }
.kotoba-torii .kotoba-torii-caption{
  font-family:var(--font-body); font-weight:600; font-size:var(--text-xs);
  color:var(--text-muted); text-align:center;
}
.kotoba-torii[data-state="locked"] svg{ opacity:0.9; }
`;
function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
function ToriiGate({
  size = 96,
  state = 'open',
  // open | locked | passed
  plaque,
  // short label on the gaku (e.g. "二" or "N4")
  caption,
  // text under the gate
  className = '',
  ...rest
}) {
  useInjected('kotoba-torii-css', CSS);
  const locked = state === 'locked';
  const main = locked ? 'var(--sumi-300)' : 'var(--torii)';
  const deep = locked ? 'var(--sumi-400)' : 'var(--torii-deep)';
  const plaqueBg = locked ? 'var(--sumi-100)' : '#FFF7F0';
  const plaqueInk = locked ? 'var(--text-faint)' : 'var(--torii-deep)';
  const w = size;
  const h = size * 0.92;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `kotoba-torii ${className}`,
    "data-state": state
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    viewBox: "0 0 120 110",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 22 Q60 8 116 22 L116 13 Q60 -1 4 13 Z",
    fill: deep
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 24 Q60 13 110 24 L110 32 Q60 22 10 32 Z",
    fill: main
  }), /*#__PURE__*/React.createElement("rect", {
    x: "55.5",
    y: "30",
    width: "9",
    height: "22",
    fill: main
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "50",
    width: "92",
    height: "9",
    rx: "1.5",
    fill: main
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 30 L34 30 L31 104 L19 104 Z",
    fill: main
  }), /*#__PURE__*/React.createElement("path", {
    d: "M86 30 L98 30 L101 104 L89 104 Z",
    fill: main
  }), /*#__PURE__*/React.createElement("rect", {
    x: "16.5",
    y: "100",
    width: "17",
    height: "7",
    rx: "2",
    fill: deep
  }), /*#__PURE__*/React.createElement("rect", {
    x: "86.5",
    y: "100",
    width: "17",
    height: "7",
    rx: "2",
    fill: deep
  }), plaque != null && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "48",
    y: "31",
    width: "24",
    height: "20",
    rx: "3",
    fill: plaqueBg,
    stroke: deep,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: "60",
    y: "45.5",
    textAnchor: "middle",
    fontFamily: "'Zen Maru Gothic','Space Grotesk',sans-serif",
    fontWeight: "700",
    fontSize: "12",
    fill: plaqueInk
  }, plaque)), state === 'passed' && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "94",
    cy: "72",
    r: "10",
    fill: "var(--success)",
    stroke: "#fff",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M89.5 72 L92.8 75.3 L98.5 68.8",
    stroke: "#fff",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  }))), caption && /*#__PURE__*/React.createElement("span", {
    className: "kotoba-torii-caption"
  }, caption));
}
Object.assign(__ds_scope, { ToriiGate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/rpg/ToriiGate.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/BossBattle.jsx
try { (() => {
// Kotoba — Boss battle (intro → quiz battle → victory). Optional challenge:
// correct answers strike the oni; wrong answers cost a heart. Calm, not scary.
// Exposes window.BossBattle.

const BossBattle = function () {
  const NS = window.MichiDesignSystem_2b01f5;
  const {
    BossNode,
    Companion,
    KanaTile,
    Button,
    IconButton,
    PowerLevel,
    Badge
  } = NS;
  const I = (n, props = {}) => React.createElement('i', {
    'data-lucide': n,
    ...props
  });
  const QUESTIONS = [{
    prompt: 'Strike with the reading of',
    word: '川',
    gloss: 'river',
    options: [{
      t: 'kawa',
      ok: true
    }, {
      t: 'yama'
    }, {
      t: 'kana'
    }, {
      t: 'kawi'
    }]
  }, {
    prompt: 'Strike with the kana for',
    word: 'sa',
    gloss: null,
    options: [{
      t: 'き'
    }, {
      t: 'さ',
      ok: true
    }, {
      t: 'ち'
    }, {
      t: 'せ'
    }]
  }, {
    prompt: 'Strike with the meaning of',
    word: '火',
    gloss: 'hi',
    options: [{
      t: 'water'
    }, {
      t: 'tree'
    }, {
      t: 'fire',
      ok: true
    }, {
      t: 'gold'
    }]
  }];
  const BOSS_HP = 3;
  function HPBar({
    value,
    max,
    color,
    label
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 11,
        fontWeight: 700,
        color: 'var(--text-muted)',
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
      className: "num"
    }, value, "/", max)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 10,
        borderRadius: 999,
        background: 'var(--surface-sunken)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        width: `${value / max * 100}%`,
        background: color,
        borderRadius: 999,
        transition: 'width .35s var(--ease-out)'
      }
    })));
  }
  return function BossBattle({
    onExit,
    onWin
  }) {
    const [phase, setPhase] = React.useState('intro'); // intro | battle | victory
    const [qi, setQi] = React.useState(0);
    const [bossHp, setBossHp] = React.useState(BOSS_HP);
    const [hearts, setHearts] = React.useState(3);
    const [sel, setSel] = React.useState(null);
    const [checked, setChecked] = React.useState(false);
    const [shake, setShake] = React.useState(false);
    React.useEffect(() => {
      window.lucide && window.lucide.createIcons();
    });
    if (phase === 'intro') {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '70px 26px 32px',
          boxSizing: 'border-box',
          textAlign: 'center',
          background: 'linear-gradient(180deg, var(--torii-soft), var(--bg-canvas) 55%)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: '0.12em',
          color: 'var(--torii)',
          textTransform: 'uppercase'
        }
      }, "Boss challenge \xB7 optional"), /*#__PURE__*/React.createElement("h2", {
        style: {
          fontSize: 28,
          marginTop: 8
        }
      }, "Hiragana Oni"), /*#__PURE__*/React.createElement("div", {
        className: "jp-display",
        style: {
          fontSize: 16,
          color: 'var(--text-muted)',
          marginTop: 2
        }
      }, "\u3072\u3089\u304C\u306A\u306E\u9B3C"), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          gap: 34,
          margin: '30px 0 22px'
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NS.Companion, {
        stage: 2,
        size: 74,
        floating: true
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          fontWeight: 700,
          color: 'var(--brand)',
          marginTop: 6
        }
      }, "Y\u016Bki \xB7 49")), /*#__PURE__*/React.createElement("div", {
        className: "jp-display",
        style: {
          fontSize: 22,
          color: 'var(--text-faint)',
          paddingBottom: 34
        }
      }, "VS"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BossNode, {
        size: "lg",
        flag: null,
        style: {
          pointerEvents: 'none'
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          fontWeight: 700,
          color: 'var(--torii)',
          marginTop: 6
        }
      }, "Oni \xB7 12"))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center',
          gap: 8,
          marginBottom: 26
        }
      }, /*#__PURE__*/React.createElement(Badge, {
        tone: "warning"
      }, "Reward: +150 XP"), /*#__PURE__*/React.createElement(Badge, {
        tone: "brand"
      }, "Power +2")), /*#__PURE__*/React.createElement(Button, {
        size: "lg",
        fullWidth: true,
        variant: "danger",
        style: {
          background: 'var(--torii)'
        },
        onClick: () => setPhase('battle')
      }, "Begin battle"), /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: onExit,
        style: {
          marginTop: 8
        }
      }, "Not yet"));
    }
    if (phase === 'victory') {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '70px 28px 32px',
          boxSizing: 'border-box',
          textAlign: 'center',
          background: 'var(--ai-700)',
          position: 'relative',
          overflow: 'hidden'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          inset: 0,
          opacity: 0.14,
          backgroundImage: 'url(../../assets/seigaiha.svg)',
          backgroundSize: 120
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'relative',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }
      }, /*#__PURE__*/React.createElement(NS.ToriiGate, {
        size: 130,
        plaque: "\u52DD"
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 30,
          color: '#fff',
          marginTop: 14
        }
      }, "Oni defeated!"), /*#__PURE__*/React.createElement("div", {
        className: "jp-display",
        style: {
          fontSize: 17,
          color: 'rgba(255,255,255,0.85)',
          marginTop: 2
        }
      }, "\u898B\u4E8B\u306A\u52DD\u5229"), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 10,
          marginTop: 22
        }
      }, /*#__PURE__*/React.createElement(Badge, {
        tone: "warning",
        solid: true
      }, "+150 XP"), /*#__PURE__*/React.createElement(Badge, {
        tone: "brand",
        solid: true,
        style: {
          background: 'rgba(255,255,255,0.2)'
        }
      }, "Power 49 \u2192 51")), /*#__PURE__*/React.createElement("div", {
        style: {
          height: 30
        }
      }), /*#__PURE__*/React.createElement(Button, {
        fullWidth: true,
        size: "lg",
        variant: "accent",
        onClick: onWin
      }, "Claim reward")));
    }

    // battle
    const q = QUESTIONS[qi % QUESTIONS.length];
    const tileState = i => {
      if (!checked) return sel === i ? 'selected' : 'default';
      if (q.options[i].ok) return 'correct';
      if (sel === i) return 'wrong';
      return 'default';
    };
    const onCheck = () => {
      if (sel == null) return;
      setChecked(true);
      if (q.options[sel].ok) {
        setShake(true);
        setTimeout(() => setShake(false), 450);
        setBossHp(h => h - 1);
      } else {
        setHearts(h => Math.max(0, h - 1));
      }
    };
    const onNext = () => {
      if (bossHp <= 0) {
        setPhase('victory');
        return;
      }
      setQi(qi + 1);
      setSel(null);
      setChecked(false);
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg-canvas)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '54px 18px 10px',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'var(--torii-soft)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Retreat",
      variant: "ghost",
      size: "sm",
      onClick: onExit
    }, I('flag', {
      style: {
        width: 20,
        height: 20
      }
    })), /*#__PURE__*/React.createElement(HPBar, {
      value: hearts,
      max: 3,
      color: "var(--brand)",
      label: "Y\u016Bki"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        animation: shake ? 'kotoba-boss-shake .4s var(--ease-out)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(NS.PixelOni, {
      size: 40
    })), /*#__PURE__*/React.createElement(HPBar, {
      value: bossHp,
      max: BOSS_HP,
      color: "var(--torii)",
      label: "Oni"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        padding: '22px 24px 0',
        overflow: 'auto'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 24,
        lineHeight: 1.3
      }
    }, q.prompt, " ", /*#__PURE__*/React.createElement("span", {
      className: "jp-display",
      style: {
        color: 'var(--torii)'
      }
    }, q.word), q.gloss && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)',
        fontWeight: 400
      }
    }, " (", q.gloss, ")")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 13,
        marginTop: 22,
        paddingBottom: 20
      }
    }, q.options.map((o, i) => /*#__PURE__*/React.createElement(KanaTile, {
      key: i,
      glyph: o.t,
      size: "sm",
      state: tileState(i),
      interactive: !checked,
      onClick: () => !checked && setSel(i),
      style: {
        width: '100%',
        boxSizing: 'border-box'
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 24px 36px'
      }
    }, !checked ? /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      size: "lg",
      style: {
        background: 'var(--torii)'
      },
      onClick: onCheck,
      disabled: sel == null
    }, "Strike") : /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      size: "lg",
      variant: q.options[sel]?.ok ? 'success' : 'secondary',
      onClick: onNext
    }, bossHp <= 0 ? 'Finish him!' : 'Next')));
  };
}();
Object.assign(window, {
  BossBattle
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/BossBattle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/CharacterSheet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Kotoba — Character sheet (the kotodama: stats, power, radar, quests, challenges)
// Exposes window.CharacterSheet.

const CharacterSheet = function () {
  const NS = window.MichiDesignSystem_2b01f5;
  const {
    Companion,
    PowerLevel,
    StatBar,
    SkillRadar,
    QuestCard,
    BossNode,
    SenseiCard,
    Card,
    Badge,
    Button
  } = NS;
  const I = (n, props = {}) => React.createElement('i', {
    'data-lucide': n,
    ...props
  });
  const STATS = [{
    label: 'Vocabulary',
    jp: '語彙',
    value: 62,
    tone: 'brand'
  }, {
    label: 'Grammar',
    jp: '文法',
    value: 48,
    tone: 'accent'
  }, {
    label: 'Listening',
    jp: '聴解',
    value: 31,
    tone: 'torii',
    weak: true
  }, {
    label: 'Reading',
    jp: '読解',
    value: 55,
    tone: 'success'
  }];
  return function CharacterSheet({
    onStartPractice,
    onBoss
  }) {
    React.useEffect(() => {
      window.lucide && window.lucide.createIcons();
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: '100%',
        background: 'var(--bg-canvas)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--ai-700)',
        padding: '64px 20px 24px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        opacity: 0.13,
        backgroundImage: 'url(../../assets/seigaiha.svg)',
        backgroundSize: 110
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Companion, {
      stage: 2,
      size: 104,
      floating: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 26,
        color: '#fff',
        marginTop: 10
      }
    }, "Y\u016Bki ", /*#__PURE__*/React.createElement("span", {
      className: "jp-display",
      style: {
        fontSize: 19,
        opacity: 0.8
      }
    }, "\u52C7\u6C17")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.75)',
        marginTop: 2
      }
    }, "Your kotodama \xB7 Stage 2 \u2014 Scarf Traveler"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: 8,
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral",
      size: "sm",
      style: {
        background: 'rgba(255,255,255,0.16)',
        color: '#fff'
      }
    }, "Evolves at Power 60")))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '18px 20px 28px'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      style: {
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(PowerLevel, {
      value: 49,
      label: "Word power \u8A00\u529B"
    }), /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      size: "sm"
    }, "+2 this week")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 13
      }
    }, STATS.map(s => /*#__PURE__*/React.createElement(StatBar, _extends({
      key: s.label
    }, s))))), /*#__PURE__*/React.createElement(Card, {
      style: {
        marginBottom: 14,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        alignSelf: 'flex-start',
        fontWeight: 700,
        color: 'var(--text-strong)',
        fontSize: 16,
        marginBottom: 4
      }
    }, "Sensei's read"), /*#__PURE__*/React.createElement(SkillRadar, {
      size: 196,
      stats: STATS
    }), /*#__PURE__*/React.createElement(SenseiCard, {
      style: {
        marginTop: 6
      },
      title: "Listening is your opening",
      actions: /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "accent",
        onClick: onStartPractice
      }, "Train listening \xB7 3 min")
    }, "Audio drills will raise it fastest \u2014 and unlock the Grammar Oni gate.")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: 'var(--text-strong)',
        fontSize: 16,
        margin: '4px 0 10px'
      }
    }, "Active quests"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement(QuestCard, {
      title: "Learn 20 food words",
      icon: I('utensils'),
      value: 13,
      max: 20,
      reward: "+80 XP"
    }), /*#__PURE__*/React.createElement(QuestCard, {
      title: "Keep a 30-day streak",
      icon: I('flame'),
      value: 28,
      max: 30,
      reward: "+200 XP"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: 'var(--text-strong)',
        fontSize: 16,
        margin: '4px 0 14px'
      }
    }, "Boss challenges"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        paddingBottom: 6
      }
    }, /*#__PURE__*/React.createElement(BossNode, {
      state: "defeated",
      size: "sm",
      label: "Kana Kappa"
    }), /*#__PURE__*/React.createElement(BossNode, {
      label: "Hiragana Oni",
      onClick: onBoss
    }), /*#__PURE__*/React.createElement(BossNode, {
      state: "locked",
      size: "sm",
      flag: "POWER 60+",
      label: "Grammar Oni"
    }))));
  };
}();
Object.assign(window, {
  CharacterSheet
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/CharacterSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/GatePassage.jsx
try { (() => {
// Kotoba — Gate passage ceremony. The verbose improvement recap, shown when the
// learner passes a torii checkpoint (unit complete). Exposes window.GatePassage.

const GatePassage = function () {
  const NS = window.MichiDesignSystem_2b01f5;
  const {
    ToriiGate,
    Button
  } = NS;
  const I = (n, props = {}) => React.createElement('i', {
    'data-lucide': n,
    ...props
  });
  function Stat({
    label,
    value,
    icon
  }) {
    const iconEl = icon === 'xp' ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-num)',
        fontWeight: 900,
        fontSize: 13,
        letterSpacing: '-0.01em'
      }
    }, "XP") : I(icon, {
      style: {
        width: 18,
        height: 18
      }
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: 'rgba(255,255,255,0.14)',
        borderRadius: 'var(--radius-md)',
        padding: '14px 6px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgba(255,255,255,0.9)',
        display: 'inline-flex',
        alignItems: 'center'
      }
    }, iconEl), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-num)',
        fontWeight: 800,
        fontSize: 20,
        color: '#fff',
        marginTop: 4
      }
    }, value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'rgba(255,255,255,0.8)'
      }
    }, label));
  }
  function LevelProgress({
    from = 60,
    to = 68
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        background: 'rgba(255,255,255,0.14)',
        borderRadius: 'var(--radius-md)',
        padding: '14px 16px',
        boxSizing: 'border-box',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: 'rgba(255,255,255,0.85)'
      }
    }, "N5 progress"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-num)',
        fontWeight: 800,
        fontSize: 14,
        color: '#fff'
      }
    }, from, "% ", /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 0.6
      }
    }, "\u2192"), " ", to, "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 10,
        borderRadius: 999,
        background: 'rgba(255,255,255,0.18)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        width: `${to}%`,
        borderRadius: 999,
        background: 'var(--accent)',
        transition: 'width .6s var(--ease-out)'
      }
    })));
  }
  return function GatePassage({
    onEnter,
    xp = 220,
    accuracy = 92,
    streak = 29
  }) {
    React.useEffect(() => {
      window.lucide && window.lucide.createIcons();
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '70px 26px 32px',
        boxSizing: 'border-box',
        background: 'var(--brand)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        opacity: 0.16,
        backgroundImage: 'url(../../assets/seigaiha.svg)',
        backgroundSize: 120
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.75)',
        marginBottom: 14
      }
    }, "Checkpoint \xB7 Unit 1"), /*#__PURE__*/React.createElement("span", {
      style: {
        animation: 'kotoba-pop .5s var(--ease-spring) both'
      }
    }, /*#__PURE__*/React.createElement(ToriiGate, {
      size: 128,
      state: "passed",
      plaque: "\u4E8C"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 30,
        color: '#fff',
        marginTop: 14
      }
    }, "Gate passed!"), /*#__PURE__*/React.createElement("div", {
      className: "jp-display",
      style: {
        fontSize: 17,
        color: 'rgba(255,255,255,0.85)',
        marginTop: 2
      }
    }, "\u9CE5\u5C45\u3092\u304F\u3050\u3063\u305F"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.8)',
        marginTop: 8
      }
    }, "Hiragana basics complete \u2014 here's how you grew."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 24,
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      label: "XP earned",
      value: `+${xp}`,
      icon: "xp"
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "Accuracy",
      value: `${accuracy}%`,
      icon: "target"
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "Streak",
      value: streak,
      icon: "flame"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(LevelProgress, {
      from: 60,
      to: 68
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        marginTop: 12,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        textAlign: 'left',
        background: 'rgba(255,255,255,0.14)',
        borderRadius: 'var(--radius-md)',
        padding: '12px 16px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        borderRadius: '50%',
        flex: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--accent)',
        color: '#fff'
      }
    }, I('lock-open', {
      style: {
        width: 18,
        height: 18
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 14,
        color: '#fff'
      }
    }, "Unit 2 unlocked \u2014 First words"), /*#__PURE__*/React.createElement("div", {
      className: "jp-display",
      style: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.8)'
      }
    }, "\u306F\u3058\u3081\u306E\u8A00\u8449"))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 24
      }
    }), /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      size: "lg",
      variant: "accent",
      onClick: onEnter
    }, "Enter Unit 2")));
  };
}();
Object.assign(window, {
  GatePassage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/GatePassage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/HomePath.jsx
try { (() => {
// Kotoba — Home / learning path (the signature screen)
// Exposes window.HomePath. Vertical winding stepping-stone path.

const HomePath = function () {
  const NS = window.MichiDesignSystem_2b01f5;
  const {
    StreakCounter,
    LevelBadge,
    LessonNode,
    Card,
    Badge,
    Button,
    Companion,
    ToriiGate,
    BossNode,
    QuestCard
  } = NS;
  const I = (n, props = {}) => React.createElement('i', {
    'data-lucide': n,
    ...props
  });

  // winding offsets (S-curve) in px
  const OFFSETS = [0, 64, 90, 64, 0, -64, -90, -64];
  const UNIT = {
    title: 'Hiragana basics',
    jp: 'ひらがな',
    n: 'Unit 1',
    lessons: [{
      state: 'mastered',
      label: 'あ い う',
      icon: 'star'
    }, {
      state: 'complete',
      label: 'か き く'
    }, {
      state: 'complete',
      label: 'さ し す'
    }, {
      state: 'available',
      current: true,
      label: 'Greetings'
    }, {
      state: 'locked',
      label: 'た ち つ'
    }, {
      boss: true,
      label: 'Hiragana Oni'
    }, {
      state: 'locked',
      label: 'Review'
    }]
  };
  const UNIT2 = {
    title: 'First words',
    jp: 'はじめの言葉',
    n: 'Unit 2',
    lessons: [{
      state: 'locked',
      label: 'Numbers'
    }, {
      state: 'locked',
      label: 'Family'
    }, {
      state: 'locked',
      label: 'Food'
    }]
  };
  function UnitBanner({
    unit,
    tone
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        margin: '8px 0 22px',
        padding: '16px 18px',
        borderRadius: 'var(--radius-lg)',
        background: tone === 'locked' ? 'var(--surface-sunken)' : 'var(--brand)',
        color: tone === 'locked' ? 'var(--text-muted)' : '#fff',
        boxShadow: tone === 'locked' ? 'none' : 'var(--shadow-md)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, tone !== 'locked' && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        opacity: 0.14,
        backgroundImage: 'url(../../assets/seigaiha.svg)',
        backgroundSize: 90
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        opacity: 0.85
      }
    }, unit.n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 20,
        marginTop: 2
      }
    }, unit.title), /*#__PURE__*/React.createElement("div", {
      className: "jp-display",
      style: {
        fontSize: 14,
        opacity: 0.85,
        marginTop: 1
      }
    }, unit.jp)), tone === 'locked' ? I('lock', {
      style: {
        width: 20,
        height: 20
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        display: 'inline-flex'
      }
    }, I('book-open', {
      style: {
        width: 22,
        height: 22
      }
    })));
  }
  function Path({
    unit,
    onStart,
    onBoss
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 18
      }
    }, unit.lessons.map((l, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        transform: `translateX(${OFFSETS[i % OFFSETS.length]}px)`,
        transition: 'transform .2s',
        position: 'relative'
      }
    }, l.boss ? /*#__PURE__*/React.createElement(BossNode, {
      label: l.label,
      onClick: onBoss
    }) : /*#__PURE__*/React.createElement(LessonNode, {
      state: l.state,
      current: l.current,
      icon: l.icon || 'book',
      size: l.current ? 'lg' : 'md',
      label: l.label,
      onClick: l.current ? onStart : undefined
    }), l.current && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: -66,
        bottom: 26,
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement(Companion, {
      stage: 2,
      size: 52,
      floating: true
    })))));
  }
  return function HomePath({
    onStartLesson,
    onBoss,
    onGate,
    onWordRain,
    unitDone = false,
    gatePassed = false,
    streak = 28,
    xp = 1240
  }) {
    React.useEffect(() => {
      window.lucide && window.lucide.createIcons();
    });
    const unit1 = unitDone ? {
      ...UNIT,
      lessons: UNIT.lessons.map(l => l.boss || l.state === 'mastered' ? l : {
        ...l,
        state: 'complete',
        current: false
      })
    } : UNIT;
    const unit2 = gatePassed ? {
      ...UNIT2,
      lessons: UNIT2.lessons.map((l, i) => i === 0 ? {
        ...l,
        state: 'available',
        current: true
      } : l)
    } : UNIT2;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: '100%',
        background: 'var(--bg-canvas)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 10,
        padding: '54px 20px 12px',
        background: 'rgba(247,248,251,0.86)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(LevelBadge, {
      tier: "n5",
      size: "sm",
      showCaption: false
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--text-muted)',
        fontWeight: 600
      }
    }, "Current level"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-num)',
        fontWeight: 800,
        fontSize: 14,
        color: 'var(--text-strong)'
      }
    }, "N5 \xB7 60%"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        fontFamily: 'var(--font-num)',
        fontWeight: 800,
        color: 'var(--brand)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 900,
        letterSpacing: '-0.01em',
        opacity: 0.7
      }
    }, "XP"), xp.toLocaleString()), /*#__PURE__*/React.createElement(StreakCounter, {
      days: streak,
      showLabel: false
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 20px 28px'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      elevation: "sm",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        margin: '16px 0 10px'
      }
    }, /*#__PURE__*/React.createElement(NS.ProgressRing, {
      value: unitDone ? 3 : 2,
      max: 3,
      size: 52,
      thickness: 7,
      color: "var(--accent)"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13
      }
    }, unitDone ? '3/3' : '2/3')), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: 'var(--text-strong)',
        fontSize: 15
      }
    }, unitDone ? 'Daily goal complete' : 'Daily goal — almost there'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, unitDone ? 'Streak safe for today' : '1 more lesson to keep your streak')), /*#__PURE__*/React.createElement(Badge, {
      tone: "accent",
      solid: true,
      size: "sm"
    }, "+20 XP")), /*#__PURE__*/React.createElement(QuestCard, {
      title: "Defeat the Hiragana Oni",
      icon: I('swords'),
      value: 0,
      max: 1,
      reward: "+150 XP",
      subtitle: "Boss challenge \xB7 waiting on the path",
      style: {
        marginBottom: 10
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: onWordRain,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        width: '100%',
        textAlign: 'left',
        padding: '14px 16px',
        marginBottom: 4,
        borderRadius: 'var(--radius-lg)',
        cursor: 'pointer',
        background: 'var(--surface-card)',
        border: '1.5px solid var(--border-default)',
        boxShadow: '0 3px 0 var(--sumi-200)',
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-md)',
        flex: 'none',
        background: 'var(--brand)',
        color: '#fff',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, I('cloud-rain', {
      style: {
        width: 22,
        height: 22
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontWeight: 800,
        fontSize: 15,
        color: 'var(--text-strong)'
      }
    }, "Word rain ", /*#__PURE__*/React.createElement("span", {
      className: "jp-display",
      style: {
        fontWeight: 500,
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, "\u8A00\u8449\u306E\u96E8")), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 1
      }
    }, "Timed challenge \xB7 type readings before they land")), /*#__PURE__*/React.createElement(Badge, {
      tone: "accent",
      size: "sm"
    }, "up to +126 XP")), /*#__PURE__*/React.createElement(UnitBanner, {
      unit: UNIT
    }), /*#__PURE__*/React.createElement(Path, {
      unit: unit1,
      onStart: onStartLesson,
      onBoss: onBoss
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        margin: '30px 0 8px'
      }
    }, gatePassed ? /*#__PURE__*/React.createElement(ToriiGate, {
      size: 104,
      state: "passed",
      plaque: "\u4E8C",
      caption: "Unit 2 \xB7 gate passed"
    }) : unitDone ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ToriiGate, {
      size: 104,
      state: "open",
      plaque: "\u4E8C",
      caption: "Unit 1 complete \u2014 the gate is open"
    }), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "accent",
      onClick: onGate
    }, "Pass through the gate")) : /*#__PURE__*/React.createElement(ToriiGate, {
      size: 104,
      state: "locked",
      plaque: "\u4E8C",
      caption: "Unit 2 \xB7 finish Unit 1 to pass through"
    })), /*#__PURE__*/React.createElement(UnitBanner, {
      unit: UNIT2,
      tone: gatePassed ? undefined : 'locked'
    }), /*#__PURE__*/React.createElement(Path, {
      unit: unit2,
      onStart: onStartLesson
    })));
  };
}();
Object.assign(window, {
  HomePath
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/HomePath.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/Lesson.jsx
try { (() => {
// Kotoba — Lesson on the path. Lessons run through the shared ChallengeEngine
// (the same exercise UIs used by practice drills): multiple choice, sentence
// building and listening, mixed. Exposes window.Lesson.

const Lesson = function Lesson({
  onExit,
  onDone
}) {
  const Engine = window.ChallengeEngine;
  return /*#__PURE__*/React.createElement(Engine, {
    preset: "lesson",
    sensei: true,
    completeTitle: "Lesson complete!",
    onExit: onExit,
    onDone: onDone
  });
};
Object.assign(window, {
  Lesson
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/Lesson.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/Onboarding.jsx
try { (() => {
// Kotoba — Onboarding flow (welcome → goal → level → daily goal → ready)
// Exposes window.Onboarding. Uses DS components from window.MichiDesignSystem_2b01f5.

const Onboarding = function () {
  const NS = window.MichiDesignSystem_2b01f5;
  const {
    Button,
    LevelBadge,
    Card
  } = NS;
  const I = (n, props = {}) => React.createElement('i', {
    'data-lucide': n,
    ...props
  });
  const GOALS = [['plane', 'Travel in Japan'], ['sparkles', 'Anime & manga'], ['briefcase', 'Work & career'], ['home', 'Living in Japan'], ['heart', 'Just for fun']];
  const LEVELS = [['pre', 'Brand new', 'I\u2019m starting from zero'], ['n5', 'N5', 'I know some kana'], ['n4', 'N4', 'Basic grammar & ~600 words'], ['n3', 'N3', 'Everyday conversation']];
  const DAILY = [['5', 'Casual', '5 min · 10 XP'], ['10', 'Steady', '10 min · 20 XP'], ['15', 'Serious', '15 min · 30 XP'], ['20', 'Intense', '20 min · 40 XP']];
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '70px 24px 28px',
    boxSizing: 'border-box',
    background: 'var(--bg-canvas)'
  };
  const optionCard = active => ({
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    width: '100%',
    cursor: 'pointer',
    textAlign: 'left',
    border: active ? '2px solid var(--ai-400)' : '2px solid var(--border-subtle)',
    background: active ? 'var(--brand-soft)' : 'var(--surface-card)'
  });
  function Dots({
    step,
    total
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        marginBottom: 24
      }
    }, Array.from({
      length: total
    }).map((_, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        height: 6,
        flex: 1,
        borderRadius: 999,
        background: i <= step ? 'var(--brand)' : 'var(--surface-sunken)',
        transition: 'background var(--dur-base) var(--ease-out)'
      }
    })));
  }
  return function Onboarding({
    onDone
  }) {
    const [step, setStep] = React.useState(0);
    const [goal, setGoal] = React.useState(null);
    const [level, setLevel] = React.useState(null);
    const [daily, setDaily] = React.useState('10');
    React.useEffect(() => {
      window.lucide && window.lucide.createIcons();
    });
    const next = () => setStep(s => s + 1);
    const back = () => setStep(s => Math.max(0, s - 1));

    // Step 0 — welcome (no dots/back)
    if (step === 0) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          ...wrap,
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          inset: 0,
          opacity: 0.10,
          zIndex: 0,
          backgroundImage: 'url(../../assets/seigaiha.svg)',
          backgroundSize: 130
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: "../../assets/kotoba-mark.svg",
        alt: "Kotoba",
        width: "104",
        height: "104",
        style: {
          filter: 'drop-shadow(var(--shadow-lg))'
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 48,
          color: 'var(--text-strong)',
          marginTop: 22,
          letterSpacing: '-0.02em'
        }
      }, "Kotoba"), /*#__PURE__*/React.createElement("div", {
        className: "jp-display",
        style: {
          fontSize: 22,
          color: 'var(--brand)',
          marginTop: 2
        }
      }, "\u6BCE\u65E5\u4E00\u6B69\u305A\u3064"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 17,
          color: 'var(--text-muted)',
          marginTop: 14,
          maxWidth: 260,
          lineHeight: 1.5
        }
      }, "Learn Japanese one step at a time. Build a streak you\\u2019ll actually keep."), /*#__PURE__*/React.createElement("div", {
        style: {
          height: 36
        }
      }), /*#__PURE__*/React.createElement(Button, {
        size: "lg",
        fullWidth: true,
        onClick: next,
        style: {
          minWidth: 280
        }
      }, "Get started"), /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        size: "md",
        onClick: () => onDone(),
        style: {
          marginTop: 8
        }
      }, "I already have an account")));
    }
    const Header = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: back,
      "aria-label": "Back",
      style: {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        color: 'var(--text-muted)',
        marginBottom: 16,
        marginLeft: -6,
        display: 'inline-flex'
      }
    }, I('arrow-left', {
      style: {
        width: 24,
        height: 24
      }
    })), /*#__PURE__*/React.createElement(Dots, {
      step: step - 1,
      total: 4
    }));
    let title,
      sub,
      body,
      cta = 'Continue',
      ctaEnabled = true,
      onCta = next;
    if (step === 1) {
      title = 'Why are you learning?';
      sub = 'We\u2019ll tailor your path. Pick one.';
      ctaEnabled = !!goal;
      body = /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 10
        }
      }, GOALS.map(([icon, label]) => /*#__PURE__*/React.createElement(Card, {
        key: label,
        as: "button",
        pad: "sm",
        elevation: "flat",
        onClick: () => setGoal(label),
        style: optionCard(goal === label)
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--brand)',
          display: 'inline-flex'
        }
      }, I(icon, {
        style: {
          width: 22,
          height: 22
        }
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600,
          color: 'var(--text-strong)',
          fontSize: 16
        }
      }, label))));
    } else if (step === 2) {
      title = 'Where are you starting?';
      sub = 'Be honest \u2014 you can change this anytime.';
      ctaEnabled = !!level;
      body = /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 10
        }
      }, LEVELS.map(([tier, label, desc]) => /*#__PURE__*/React.createElement(Card, {
        key: tier,
        as: "button",
        pad: "sm",
        elevation: "flat",
        onClick: () => setLevel(tier),
        style: optionCard(level === tier)
      }, /*#__PURE__*/React.createElement(LevelBadge, {
        tier: tier,
        size: "sm",
        showCaption: false
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 700,
          color: 'var(--text-strong)',
          fontSize: 16
        }
      }, label), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          color: 'var(--text-muted)'
        }
      }, desc)))));
    } else if (step === 3) {
      title = 'Pick a daily goal';
      sub = 'Small and steady wins. You can raise it later.';
      body = /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 10
        }
      }, DAILY.map(([v, label, desc]) => /*#__PURE__*/React.createElement(Card, {
        key: v,
        as: "button",
        elevation: "flat",
        onClick: () => setDaily(v),
        style: {
          ...optionCard(daily === v),
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 4
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 700,
          color: 'var(--text-strong)',
          fontSize: 16
        }
      }, label), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          color: 'var(--text-muted)'
        }
      }, desc))));
    } else {
      title = 'Your path is ready';
      sub = null;
      cta = 'Start learning';
      onCta = () => onDone();
      body = /*#__PURE__*/React.createElement(Card, {
        tone: "brand",
        pad: "lg",
        style: {
          marginTop: 8
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }
      }, /*#__PURE__*/React.createElement(Row, {
        k: "Goal",
        v: goal || 'Just for fun'
      }), /*#__PURE__*/React.createElement(Row, {
        k: "Starting level",
        v: level ? level === 'pre' ? 'Brand new' : level.toUpperCase() : 'Brand new'
      }), /*#__PURE__*/React.createElement(Row, {
        k: "Daily goal",
        v: `${daily} min`
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          height: 1,
          background: 'var(--ai-100)'
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 15,
          color: 'var(--text-body)',
          lineHeight: 1.5
        }
      }, "First stop: ", /*#__PURE__*/React.createElement("strong", {
        style: {
          color: 'var(--text-strong)'
        }
      }, "Hiragana basics"), ". Let\\u2019s take your first step.")));
    }
    return /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 28
      }
    }, title), sub && /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-muted)',
        marginTop: 6,
        marginBottom: 20,
        fontSize: 15
      }
    }, sub), !sub && /*#__PURE__*/React.createElement("div", {
      style: {
        height: 8
      }
    }), body), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      fullWidth: true,
      onClick: onCta,
      disabled: !ctaEnabled,
      style: {
        marginTop: 16
      }
    }, cta));
  };
  function Row({
    k,
    v
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 14
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-strong)',
        fontWeight: 700,
        fontSize: 15
      }
    }, v));
  }
}();
Object.assign(window, {
  Onboarding
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/Onboarding.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/Profile.jsx
try { (() => {
// Kotoba — Profile (stats, JLPT tier ladder, achievements)
// Exposes window.Profile.

const Profile = function () {
  const NS = window.MichiDesignSystem_2b01f5;
  const {
    Avatar,
    Card,
    LevelBadge,
    StreakCounter,
    Button,
    Badge
  } = NS;
  const I = (n, props = {}) => React.createElement('i', {
    'data-lucide': n,
    ...props
  });
  const TIERS = ['pre', 'n5', 'n4', 'n3', 'n2', 'n1'];
  const CURRENT = 'n5';
  const ACHIEVEMENTS = [{
    icon: 'flame',
    label: '7-day streak',
    earned: true
  }, {
    icon: 'sunrise',
    label: 'Early bird',
    earned: true
  }, {
    icon: 'star',
    label: 'First lesson',
    earned: true
  }, {
    icon: 'zap',
    label: '500 XP',
    earned: true
  }, {
    icon: 'crown',
    label: 'Hiragana master',
    earned: false
  }, {
    icon: 'xp',
    label: '30-day streak',
    earned: false
  }];
  function Stat({
    icon,
    value,
    label,
    tone
  }) {
    const iconEl = icon === 'xp' ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-num)',
        fontWeight: 900,
        fontSize: 13,
        letterSpacing: '-0.01em'
      }
    }, "XP") : I(icon, {
      style: {
        width: 22,
        height: 22
      }
    });
    return /*#__PURE__*/React.createElement(Card, {
      pad: "sm",
      style: {
        flex: 1,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: tone || 'var(--brand)',
        display: 'inline-flex',
        alignItems: 'center'
      }
    }, iconEl), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-num)',
        fontWeight: 800,
        fontSize: 22,
        color: 'var(--text-strong)',
        marginTop: 4
      }
    }, value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, label));
  }
  return function Profile({
    onReplayIntro
  }) {
    React.useEffect(() => {
      window.lucide && window.lucide.createIcons();
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: '100%',
        background: 'var(--bg-canvas)',
        padding: '54px 20px 28px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 26
      }
    }, "Profile"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)',
        display: 'inline-flex'
      }
    }, I('settings', {
      style: {
        width: 24,
        height: 24
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Aiko Tanaka",
      size: "xl",
      ring: true,
      ringPercent: 66
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 22,
        color: 'var(--text-strong)'
      }
    }, "Aiko Tanaka"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, "Learning since March \xB7 Tokyo time"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      solid: true,
      size: "sm"
    }, "N5 learner")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      icon: "flame",
      value: "28",
      label: "Day streak",
      tone: "var(--accent)"
    }), /*#__PURE__*/React.createElement(Stat, {
      icon: "xp",
      value: "1,240",
      label: "Total XP"
    }), /*#__PURE__*/React.createElement(Stat, {
      icon: "book-marked",
      value: "312",
      label: "Words",
      tone: "var(--success)"
    })), /*#__PURE__*/React.createElement(Card, {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: 'var(--text-strong)',
        fontSize: 16
      }
    }, "JLPT path"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-num)',
        fontWeight: 700,
        fontSize: 13,
        color: 'var(--brand)'
      }
    }, "N5 \xB7 60%")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, TIERS.map((t, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: t
    }, i > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 3,
        borderRadius: 2,
        background: TIERS.indexOf(CURRENT) >= i ? 'var(--brand)' : 'var(--border-default)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        opacity: TIERS.indexOf(CURRENT) >= i ? 1 : 0.45
      }
    }, /*#__PURE__*/React.createElement(LevelBadge, {
      tier: t,
      size: "sm",
      showCaption: false,
      progress: t === CURRENT ? 60 : undefined
    }), t === CURRENT && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: -24,
        left: '50%',
        transform: 'translateX(-50%)',
        whiteSpace: 'nowrap',
        fontSize: 10,
        fontWeight: 800,
        color: 'var(--accent)'
      }
    }, "YOU")))))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: 'var(--text-strong)',
        fontSize: 16,
        margin: '4px 0 12px'
      }
    }, "Achievements"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 12,
        marginBottom: 24
      }
    }, ACHIEVEMENTS.map(a => /*#__PURE__*/React.createElement("div", {
      key: a.label,
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        textAlign: 'center',
        opacity: a.earned ? 1 : 0.5
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 60,
        height: 60,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: a.earned ? 'var(--brand-soft)' : 'var(--surface-sunken)',
        color: a.earned ? 'var(--brand-strong)' : 'var(--text-faint)',
        border: a.earned ? '2px solid var(--ai-200)' : '2px dashed var(--border-default)'
      }
    }, a.earned && a.icon === 'xp' ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-num)',
        fontWeight: 900,
        fontSize: 16,
        letterSpacing: '-0.01em'
      }
    }, "XP") : I(a.earned ? a.icon : 'lock', {
      style: {
        width: 26,
        height: 26
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)',
        fontWeight: 600,
        lineHeight: 1.2
      }
    }, a.label)))), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      fullWidth: true,
      onClick: onReplayIntro,
      icon: I('rotate-ccw', {
        style: {
          width: 18,
          height: 18
        }
      })
    }, "Replay intro"));
  };
}();
Object.assign(window, {
  Profile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/Profile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/challenges/ChallengeEngine.jsx
try { (() => {
// Kotoba — ChallengeEngine: one runner for every lesson/drill exercise type.
//   mc-reading  "Which character reads mizu?"  (options ARE the test → no aids)
//   mc-gloss    "What does 猫 mean?"            (prompt gets reading aids)
//   mc-meaning  "Which word means 'fish'?"      (options get reading aids)
//   sentence    arrange Japanese tiles          (tiles get reading aids)
//   listen      hear it, tap the word           (sound→word is the test → no aids)
// Lessons on the path and practice drills all run through this.
// Exposes window.ChallengeEngine.

const ChallengeEngine = function () {
  const NS = window.MichiDesignSystem_2b01f5;
  const KW = window.KotobaWords;
  const KC = window.KotobaChallenge;
  const {
    Button,
    KanaTile,
    SenseiChip
  } = NS;
  const I = (n, props = {}) => React.createElement('i', {
    'data-lucide': n,
    ...props
  });

  // ── item builders ──────────────────────────────────────────
  const others = (id, n) => KW.WORDS.filter(w => w.level === 'n5' && w.id !== id).slice(0, 12).sort((a, b) => (a.id + id).localeCompare(b.id + id)).slice(0, n);
  const shuffleish = (arr, salt) => arr.slice().sort((a, b) => ((a.t || a.id) + salt).localeCompare((b.t || b.id) + salt));
  function mcItem(type, id) {
    const w = KW.word(id);
    const opts = shuffleish([{
      ...w,
      ok: true
    }, ...others(id, 3)], id);
    return {
      type,
      wordId: id,
      word: w,
      options: opts
    };
  }
  const sentenceItem = sid => {
    const s = KW.SENTENCES.find(x => x.id === sid);
    return {
      type: 'sentence',
      sentence: s,
      bank: shuffleish([...s.tokens, ...s.extras], sid)
    };
  };
  const PRESETS = {
    lesson: () => [mcItem('mc-reading', 'mizu'), mcItem('mc-gloss', 'tori'), sentenceItem('s-mizu'), mcItem('listen', 'neko'), mcItem('mc-meaning', 'sakana')],
    sentences: () => KW.SENTENCES.map(s => sentenceItem(s.id)),
    listening: () => ['neko', 'sakana', 'tori', 'mizu'].map(id => mcItem('listen', id)),
    weak: () => KW.weakest(5).map((w, i) => mcItem(i % 2 ? 'mc-meaning' : 'mc-gloss', w.id))
  };

  // ── option row (English answers) ───────────────────────────
  function ChoiceRow({
    children,
    state = 'default',
    onClick,
    disabled
  }) {
    const tones = {
      default: {
        bg: 'var(--surface-card)',
        border: 'var(--border-default)',
        edge: 'var(--sumi-200)',
        color: 'var(--text-strong)'
      },
      selected: {
        bg: 'var(--brand-soft)',
        border: 'var(--ai-300)',
        edge: 'var(--ai-300)',
        color: 'var(--brand-strong)'
      },
      correct: {
        bg: 'var(--success-soft)',
        border: 'var(--wakaba-400)',
        edge: 'var(--wakaba-400)',
        color: 'var(--wakaba-700)'
      },
      wrong: {
        bg: 'var(--danger-soft)',
        border: 'var(--beni-400)',
        edge: 'var(--beni-400)',
        color: 'var(--beni-700)'
      }
    };
    const t = tones[state];
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      disabled: disabled,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minHeight: 52,
        padding: '12px 16px',
        borderRadius: 'var(--radius-md)',
        background: t.bg,
        border: `1.5px solid ${t.border}`,
        boxShadow: `0 3px 0 ${t.edge}`,
        color: t.color,
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 16,
        cursor: disabled ? 'default' : 'pointer',
        transition: 'transform .1s, box-shadow .1s'
      }
    }, children);
  }

  // ── per-type bodies ────────────────────────────────────────
  function MCBody({
    item,
    sel,
    setSel,
    checked
  }) {
    const glyphOptions = item.type !== 'mc-gloss';
    const state = i => {
      if (!checked) return sel === i ? 'selected' : 'default';
      if (item.options[i].ok) return 'correct';
      if (sel === i) return 'wrong';
      return 'default';
    };
    // prompt
    let prompt,
      promptEl = null;
    if (item.type === 'mc-reading') {
      prompt = 'Which character reads…';
      promptEl = /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'inline-flex',
          alignItems: 'baseline',
          gap: 10,
          padding: '10px 20px',
          borderRadius: 'var(--radius-md)',
          background: 'var(--brand-soft)',
          border: '1px solid var(--ai-200)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-num)',
          fontWeight: 800,
          fontSize: 30,
          lineHeight: 1,
          color: 'var(--brand-strong)'
        }
      }, item.word.romaji), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 14,
          fontWeight: 600,
          color: 'var(--text-muted)'
        }
      }, item.word.meaning));
    } else if (item.type === 'mc-gloss') {
      prompt = 'What does this mean?';
      promptEl = /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'inline-flex',
          padding: '14px 26px',
          borderRadius: 'var(--radius-md)',
          background: 'var(--brand-soft)',
          border: '1px solid var(--ai-200)'
        }
      }, /*#__PURE__*/React.createElement(KC.JpWord, {
        word: item.word,
        size: 40,
        color: "var(--brand-strong)"
      }));
    } else if (item.type === 'mc-meaning') {
      prompt = `Which word means “${item.word.meaning}”?`;
    } else {
      prompt = 'What did you hear?';
      promptEl = /*#__PURE__*/React.createElement(ListenPrompt, {
        word: item.word
      });
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 22,
        marginTop: 12,
        lineHeight: 1.3,
        color: 'var(--text-strong)'
      }
    }, prompt), promptEl && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12
      }
    }, promptEl), glyphOptions ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 14,
        marginTop: 24,
        paddingBottom: 24
      }
    }, item.options.map((o, i) => {
      // mc-meaning: reading is NOT the test → show the learner's aid.
      // mc-reading / listen: reading IS the test → reveal only after check.
      const aid = item.type === 'mc-meaning' && !checked ? KW.aidFor(o.id) : 'none';
      const reading = checked ? o.romaji : aid === 'romaji' ? o.romaji : aid === 'furigana' ? o.kana : undefined;
      return /*#__PURE__*/React.createElement(KanaTile, {
        key: o.id,
        glyph: o.jp,
        reading: reading,
        size: "lg",
        state: state(i),
        interactive: !checked,
        onClick: () => !checked && setSel(i),
        style: {
          width: '100%',
          boxSizing: 'border-box',
          minHeight: 120,
          justifyContent: 'center'
        }
      });
    })) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        marginTop: 24,
        paddingBottom: 24
      }
    }, item.options.map((o, i) => /*#__PURE__*/React.createElement(ChoiceRow, {
      key: o.id,
      state: state(i),
      disabled: checked,
      onClick: () => !checked && setSel(i)
    }, o.meaning))));
  }
  function ListenPrompt({
    word
  }) {
    React.useEffect(() => {
      window.lucide && window.lucide.createIcons();
      const t = setTimeout(() => KC.speakJa(word.kana), 350);
      return () => clearTimeout(t);
    }, [word.id]);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => KC.speakJa(word.kana),
      "aria-label": "Play word",
      style: {
        width: 84,
        height: 84,
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        background: 'var(--brand)',
        color: '#fff',
        boxShadow: '0 4px 0 var(--ai-800), var(--shadow-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, I('volume-2', {
      style: {
        width: 36,
        height: 36
      }
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => KC.speakJa(word.kana, {
        rate: 0.5
      }),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '10px 16px',
        borderRadius: 'var(--radius-pill)',
        border: '1.5px solid var(--border-default)',
        background: 'var(--surface-card)',
        boxShadow: '0 3px 0 var(--sumi-200)',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 14,
        color: 'var(--text-body)',
        cursor: 'pointer'
      }
    }, I('snail', {
      style: {
        width: 18,
        height: 18
      }
    }), " Slower"));
  }
  function SentenceBody({
    item,
    sel,
    setSel,
    checked
  }) {
    const placed = sel || []; // array of bank indices in order
    const bank = item.bank;
    const toggle = bi => {
      if (checked) return;
      setSel(placed.includes(bi) ? placed.filter(x => x !== bi) : [...placed, bi]);
    };
    const tile = (tok, on, state, key, onClick) => {
      const tones = {
        default: on ? {
          bg: 'var(--brand-soft)',
          border: 'var(--ai-300)',
          edge: 'var(--ai-300)'
        } : {
          bg: 'var(--surface-card)',
          border: 'var(--border-default)',
          edge: 'var(--sumi-200)'
        },
        correct: {
          bg: 'var(--success-soft)',
          border: 'var(--wakaba-400)',
          edge: 'var(--wakaba-400)'
        },
        wrong: {
          bg: 'var(--danger-soft)',
          border: 'var(--beni-400)',
          edge: 'var(--beni-400)'
        }
      };
      const t = tones[state] || tones.default;
      return /*#__PURE__*/React.createElement("button", {
        key: key,
        onClick: onClick,
        disabled: checked,
        style: {
          padding: '8px 13px',
          borderRadius: 'var(--radius-md)',
          cursor: checked ? 'default' : 'pointer',
          background: t.bg,
          border: `1.5px solid ${t.border}`,
          boxShadow: `0 3px 0 ${t.edge}`,
          color: 'var(--text-strong)',
          minHeight: 48
        }
      }, /*#__PURE__*/React.createElement(KC.JpToken, {
        token: tok,
        size: 19
      }));
    };
    const rowState = !checked ? 'default' : isSentenceCorrect(item, placed) ? 'correct' : 'wrong';
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 22,
        marginTop: 12,
        lineHeight: 1.3,
        color: 'var(--text-strong)'
      }
    }, "Build the sentence"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        marginTop: 12,
        padding: '10px 20px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--brand-soft)',
        border: '1px solid var(--ai-200)',
        fontWeight: 700,
        fontSize: 18,
        color: 'var(--brand-strong)'
      }
    }, item.sentence.en), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        minHeight: 78,
        marginTop: 22,
        padding: '10px 4px',
        borderBottom: '2px dashed var(--border-default)'
      }
    }, placed.length === 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: 'var(--text-faint)',
        fontWeight: 600,
        padding: '14px 4px'
      }
    }, "Tap the tiles below in order\u2026"), placed.map(bi => tile(bank[bi], true, rowState, 'a' + bi, () => toggle(bi)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        marginTop: 22,
        paddingBottom: 24
      }
    }, bank.map((tok, bi) => placed.includes(bi) ? /*#__PURE__*/React.createElement("span", {
      key: 'g' + bi,
      style: {
        padding: '8px 13px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-sunken)',
        border: '1.5px dashed var(--border-subtle)',
        color: 'transparent',
        minHeight: 48,
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement(KC.JpToken, {
      token: tok,
      size: 19,
      challenge: true
    })) : tile(tok, false, 'default', 'b' + bi, () => toggle(bi)))));
  }

  // ── correctness ────────────────────────────────────────────
  function isSentenceCorrect(item, placed) {
    const want = item.sentence.tokens.map(t => t.t);
    const got = (placed || []).map(bi => item.bank[bi].t);
    return want.length === got.length && want.every((t, i) => t === got[i]);
  }
  function isCorrect(item, sel) {
    if (item.type === 'sentence') return isSentenceCorrect(item, sel);
    return sel != null && item.options[sel].ok;
  }
  function canCheck(item, sel) {
    if (item.type === 'sentence') return (sel || []).length > 0;
    return sel != null;
  }
  function wrongDetail(item) {
    if (item.type === 'sentence') {
      const s = item.sentence.tokens.map(t => t.t).join('');
      return /*#__PURE__*/React.createElement(React.Fragment, null, "The answer is ", /*#__PURE__*/React.createElement("strong", {
        className: "jp"
      }, s));
    }
    const a = item.options.find(o => o.ok);
    return /*#__PURE__*/React.createElement(React.Fragment, null, "The answer is ", /*#__PURE__*/React.createElement("strong", {
      className: "jp"
    }, a.jp), " \u2014 ", /*#__PURE__*/React.createElement("em", null, a.romaji), ", \u201C", a.meaning, "\u201D.");
  }
  function bumpFor(item, ok) {
    const d = ok ? 1 : -1;
    if (item.type === 'sentence') {
      item.sentence.tokens.forEach(t => t.wordId && KW.bump(t.wordId, d));
    } else if (item.wordId) KW.bump(item.wordId, d);
  }

  // ── the engine ─────────────────────────────────────────────
  return function ChallengeEngine({
    preset = 'lesson',
    title,
    completeTitle = 'Lesson complete!',
    onExit,
    onDone,
    sensei = false
  }) {
    const items = React.useMemo(() => PRESETS[preset](), [preset]);
    const [qi, setQi] = React.useState(0);
    const [sel, setSel] = React.useState(null);
    const [checked, setChecked] = React.useState(false);
    const [correctCount, setCorrectCount] = React.useState(0);
    const [hearts, loseHeart] = KC.useHearts(5);
    const [done, setDone] = React.useState(false);
    React.useEffect(() => {
      window.lucide && window.lucide.createIcons();
    });
    if (done) {
      const acc = Math.round(correctCount / items.length * 100);
      return /*#__PURE__*/React.createElement(KC.CompleteScreen, {
        title: completeTitle,
        xp: correctCount * 10,
        stats: [{
          icon: 'target',
          label: `${acc}%`
        }],
        onDone: onDone
      });
    }
    const item = items[qi];
    const ok = checked && isCorrect(item, sel);
    const onCheck = () => {
      const good = isCorrect(item, sel);
      setChecked(true);
      bumpFor(item, good);
      if (good) setCorrectCount(c => c + 1);else loseHeart();
    };
    const onNext = () => {
      if (qi + 1 >= items.length) {
        setDone(true);
        return;
      }
      setQi(qi + 1);
      setSel(null);
      setChecked(false);
    };
    const Body = item.type === 'sentence' ? SentenceBody : MCBody;
    const progress = (qi + (checked ? 1 : 0)) / items.length * 100;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg-canvas)',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(KC.ChallengeTopBar, {
      onExit: onExit,
      progress: progress,
      hearts: hearts
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        padding: '20px 24px 0',
        overflow: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--text-faint)'
      }
    }, title || `Question ${qi + 1} of ${items.length}`, title && ` · ${qi + 1}/${items.length}`), sensei && qi === 0 && /*#__PURE__*/React.createElement(SenseiChip, null)), /*#__PURE__*/React.createElement(Body, {
      item: item,
      sel: sel,
      setSel: setSel,
      checked: checked
    })), !checked && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 24px 36px'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      size: "lg",
      onClick: onCheck,
      disabled: !canCheck(item, sel)
    }, "Check")), checked && /*#__PURE__*/React.createElement(KC.FeedbackSheet, {
      correct: ok,
      detail: ok ? 'That’s correct.' : wrongDetail(item),
      onNext: onNext,
      last: qi + 1 >= items.length
    }));
  };
}();
Object.assign(window, {
  ChallengeEngine
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/challenges/ChallengeEngine.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/challenges/ChallengeShell.jsx
try { (() => {
// Kotoba — shared chrome for all challenge views.
// Exposes window.KotobaChallenge = { JpWord, Hearts, ChallengeTopBar, FeedbackSheet,
//   CompleteScreen, StrengthDots, AidChip, useWordTick, useHearts, speakJa }

const KotobaChallenge = function () {
  const NS = window.MichiDesignSystem_2b01f5;
  const KW = window.KotobaWords;
  const {
    Button,
    IconButton
  } = NS;
  const I = (n, props = {}) => React.createElement('i', {
    'data-lucide': n,
    ...props
  });

  // re-render when any word strength changes
  function useWordTick() {
    const [, setT] = React.useState(0);
    React.useEffect(() => KW.subscribe(() => setT(t => t + 1)), []);
  }

  // ── JpWord — Japanese with the learner's current reading aid ──
  // challenge=true forces aids off (the word IS the test).
  function JpWord({
    word,
    size = 30,
    challenge = false,
    color = 'var(--text-strong)',
    style = {}
  }) {
    useWordTick();
    const w = typeof word === 'string' ? KW.word(word) : word;
    if (!w) return null;
    const aid = challenge ? 'none' : KW.aidFor(w.id || '');
    const kanaOnly = w.jp === w.kana;
    const showRuby = (aid === 'furigana' || aid === 'romaji') && !kanaOnly && w.parts;
    const showRomaji = aid === 'romaji';
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: 1,
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "jp-display",
      style: {
        fontSize: size,
        color,
        lineHeight: 1.25
      }
    }, showRuby ? w.parts.map((p, i) => p.r ? /*#__PURE__*/React.createElement("ruby", {
      key: i
    }, p.t, /*#__PURE__*/React.createElement("rt", {
      style: {
        fontSize: Math.max(10, size * 0.32),
        color: 'var(--text-muted)',
        fontWeight: 500
      }
    }, p.r)) : /*#__PURE__*/React.createElement("span", {
      key: i
    }, p.t)) : w.jp), showRomaji && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-num)',
        fontWeight: 700,
        fontSize: Math.max(11, size * 0.38),
        color: 'var(--brand-strong)',
        marginTop: 5
      }
    }, w.romaji));
  }

  // Tile token version (for sentence tiles) — inline, ruby only
  function JpToken({
    token,
    size = 20,
    challenge = false
  }) {
    useWordTick();
    const aid = token.wordId && !challenge ? KW.aidFor(token.wordId) : 'none';
    const showRuby = aid !== 'none' && token.parts;
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "jp-display",
      style: {
        fontSize: size,
        lineHeight: 1.3
      }
    }, showRuby ? token.parts.map((p, i) => p.r ? /*#__PURE__*/React.createElement("ruby", {
      key: i
    }, p.t, /*#__PURE__*/React.createElement("rt", {
      style: {
        fontSize: Math.max(9, size * 0.42),
        color: 'var(--text-muted)',
        fontWeight: 500
      }
    }, p.r)) : /*#__PURE__*/React.createElement("span", {
      key: i
    }, p.t)) : token.t), aid === 'romaji' && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-num)',
        fontWeight: 600,
        fontSize: 10,
        color: 'var(--brand-strong)',
        marginTop: 2
      }
    }, token.romaji));
  }

  // ── hearts ─────────────────────────────────────────────────
  function useHearts(start = 5) {
    const [hearts, setHearts] = React.useState(start);
    const lose = React.useCallback(() => setHearts(h => Math.max(0, h - 1)), []);
    return [hearts, lose];
  }
  function Hearts({
    count
  }) {
    const on = !(window.KotobaAid && window.KotobaAid.hearts === false);
    if (!on) return null;
    return /*#__PURE__*/React.createElement("span", {
      key: count,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        color: 'var(--accent)',
        fontFamily: 'var(--font-num)',
        fontWeight: 800,
        animation: count < 5 ? 'kotoba-pop .35s var(--ease-spring) both' : 'none'
      }
    }, I('heart', {
      fill: count > 0 ? 'var(--accent)' : 'none',
      style: {
        width: 18,
        height: 18
      }
    }), count);
  }

  // ── top bar: exit · progress · hearts ──────────────────────
  function ChallengeTopBar({
    onExit,
    progress = 0,
    hearts,
    right
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '54px 18px 8px',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Exit",
      variant: "ghost",
      size: "sm",
      onClick: onExit
    }, I('x', {
      style: {
        width: 22,
        height: 22
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 12,
        borderRadius: 999,
        background: 'var(--surface-sunken)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        width: `${progress}%`,
        borderRadius: 999,
        background: 'linear-gradient(90deg,var(--kaki-400),var(--accent))',
        transition: 'width .3s var(--ease-out)'
      }
    })), right != null ? right : /*#__PURE__*/React.createElement(Hearts, {
      count: hearts
    }));
  }

  // ── feedback sheet (correct / wrong) ───────────────────────
  function FeedbackSheet({
    correct,
    detail,
    onNext,
    last = false,
    nextLabel
  }) {
    const ok = correct;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 20,
        background: ok ? 'var(--success-soft)' : 'var(--danger-soft)',
        borderTopLeftRadius: 'var(--radius-xl)',
        borderTopRightRadius: 'var(--radius-xl)',
        padding: '22px 24px 40px',
        boxShadow: 'var(--shadow-xl)',
        animation: 'kotoba-sheet-up .28s var(--ease-emphas) both'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        display: 'inline-flex',
        flex: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        background: ok ? 'var(--success)' : 'var(--danger)'
      }
    }, I(ok ? 'check' : 'x', {
      style: {
        width: 24,
        height: 24
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 20,
        color: ok ? 'var(--wakaba-700)' : 'var(--beni-700)'
      }
    }, ok ? 'Nice!' : 'Not quite'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: ok ? 'var(--wakaba-700)' : 'var(--beni-700)'
      }
    }, detail))), /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      size: "lg",
      variant: ok ? 'success' : 'danger',
      onClick: onNext
    }, nextLabel || (last ? 'Finish' : 'Continue')));
  }

  // ── completion screen ──────────────────────────────────────
  function CompleteScreen({
    title,
    jp = 'よくできました',
    xp = 40,
    stats = [],
    onDone,
    icon = 'check',
    tone = 'var(--brand)'
  }) {
    React.useEffect(() => {
      window.lucide && window.lucide.createIcons();
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '70px 28px 32px',
        boxSizing: 'border-box',
        background: tone,
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        opacity: 0.16,
        backgroundImage: 'url(../../assets/seigaiha.svg)',
        backgroundSize: 120
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 92,
        height: 92,
        borderRadius: '50%',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--glow-accent)',
        animation: 'kotoba-pop .5s var(--ease-spring) both'
      }
    }, I(icon, {
      style: {
        width: 44,
        height: 44,
        color: 'var(--success)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 30,
        color: '#fff',
        marginTop: 20
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      className: "jp-display",
      style: {
        fontSize: 18,
        color: 'rgba(255,255,255,0.85)',
        marginTop: 2
      }
    }, jp), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        marginTop: 18,
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '9px 18px',
        borderRadius: 'var(--radius-pill)',
        background: 'rgba(255,255,255,0.16)',
        color: '#fff',
        fontFamily: 'var(--font-num)',
        fontWeight: 800,
        fontSize: 16
      }
    }, /*#__PURE__*/React.createElement("span", null, "+", xp, " XP"), stats.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 0.55
      }
    }, "\xB7"), s.icon && I(s.icon, {
      style: {
        width: 16,
        height: 16
      }
    }), /*#__PURE__*/React.createElement("span", null, s.label)))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 30
      }
    }), /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      size: "lg",
      variant: "accent",
      onClick: onDone
    }, "Continue")));
  }

  // ── small bits ─────────────────────────────────────────────
  function StrengthDots({
    id
  }) {
    useWordTick();
    const s = KW.strength(id);
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        gap: 3
      }
    }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: i < s ? s >= 4 ? 'var(--success)' : 'var(--accent)' : 'var(--sumi-200)'
      }
    })));
  }
  function AidChip({
    id
  }) {
    useWordTick();
    const aid = KW.aidFor(id);
    const label = aid === 'romaji' ? 'romaji' : aid === 'furigana' ? 'furigana' : 'no aid';
    const tone = aid === 'none' ? {
      background: 'var(--success-soft)',
      color: 'var(--wakaba-700)'
    } : {
      background: 'var(--surface-sunken)',
      color: 'var(--text-muted)'
    };
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        padding: '3px 9px',
        borderRadius: 999,
        letterSpacing: '0.02em',
        ...tone
      }
    }, label);
  }

  // ── speech (listening challenge) ───────────────────────────
  function speakJa(text, {
    rate = 0.85
  } = {}) {
    try {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'ja-JP';
      u.rate = rate;
      const v = window.speechSynthesis.getVoices().find(v => v.lang && v.lang.startsWith('ja'));
      if (v) u.voice = v;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    } catch (e) {/* unsupported — UI still works */}
  }
  return {
    JpWord,
    JpToken,
    Hearts,
    ChallengeTopBar,
    FeedbackSheet,
    CompleteScreen,
    StrengthDots,
    AidChip,
    useWordTick,
    useHearts,
    speakJa
  };
}();
window.KotobaChallenge = KotobaChallenge;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/challenges/ChallengeShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/challenges/PairMatch.jsx
try { (() => {
// Kotoba — Pair match: clear the board by matching word ↔ meaning before the
// timer runs out. Matching IS the test → no reading aids on tiles.
// Mismatch costs 3 seconds. Exposes window.PairMatch.

const PairMatch = function () {
  const NS = window.MichiDesignSystem_2b01f5;
  const KW = window.KotobaWords;
  const KC = window.KotobaChallenge;
  const I = (n, props = {}) => React.createElement('i', {
    'data-lucide': n,
    ...props
  });
  const TIME = 60;
  const PENALTY = 3;
  function buildBoard() {
    const words = KW.weakest(12).slice(0, 6);
    const tiles = [];
    words.forEach(w => {
      tiles.push({
        key: w.id + '-jp',
        wordId: w.id,
        kind: 'jp',
        label: w.jp
      });
      tiles.push({
        key: w.id + '-en',
        wordId: w.id,
        kind: 'en',
        label: w.meaning
      });
    });
    return tiles.sort((a, b) => a.key.split('').reverse().join('').localeCompare(b.key.split('').reverse().join('')));
  }
  return function PairMatch({
    onExit,
    onDone
  }) {
    const [tiles] = React.useState(buildBoard);
    const [matched, setMatched] = React.useState(() => new Set());
    const [sel, setSel] = React.useState(null);
    const [wrong, setWrong] = React.useState(null); // [k1, k2]
    const [timeLeft, setTimeLeft] = React.useState(TIME);
    const [over, setOver] = React.useState(false);
    const cleared = matched.size === tiles.length;
    React.useEffect(() => {
      window.lucide && window.lucide.createIcons();
    });
    React.useEffect(() => {
      if (cleared || over) return;
      const iv = setInterval(() => setTimeLeft(t => {
        if (t <= 0.1) {
          setOver(true);
          return 0;
        }
        return t - 0.1;
      }), 100);
      return () => clearInterval(iv);
    }, [cleared, over]);
    const matches = matched.size / 2;
    if (cleared) {
      return /*#__PURE__*/React.createElement(KC.CompleteScreen, {
        title: "Board cleared!",
        jp: "\u5B8C\u74A7",
        icon: "puzzle",
        xp: 30 + Math.round(timeLeft),
        stats: [{
          icon: 'timer',
          label: `${Math.round(timeLeft)}s left`
        }],
        onDone: onDone
      });
    }
    if (over) {
      return /*#__PURE__*/React.createElement(KC.CompleteScreen, {
        title: "Time's up",
        jp: "\u307E\u305F\u6311\u6226\u3057\u3088\u3046",
        icon: "clock",
        tone: "var(--sumi-700)",
        xp: matches * 4,
        stats: [{
          icon: 'puzzle',
          label: `${matches} / ${tiles.length / 2} pairs`
        }],
        onDone: onDone
      });
    }
    const tap = t => {
      if (matched.has(t.key) || wrong) return;
      if (!sel) {
        setSel(t.key);
        return;
      }
      if (sel === t.key) {
        setSel(null);
        return;
      }
      const a = tiles.find(x => x.key === sel);
      if (a.wordId === t.wordId && a.kind !== t.kind) {
        setMatched(m => new Set([...m, a.key, t.key]));
        setSel(null);
      } else {
        setWrong([sel, t.key]);
        setSel(null);
        setTimeLeft(x => Math.max(0, x - PENALTY));
        setTimeout(() => setWrong(null), 450);
      }
    };
    const tileStyle = t => {
      const isSel = sel === t.key;
      const isWrong = wrong && wrong.includes(t.key);
      const isMatched = matched.has(t.key);
      let bg = 'var(--surface-card)',
        border = 'var(--border-default)',
        edge = 'var(--sumi-200)',
        color = 'var(--text-strong)';
      if (isSel) {
        bg = 'var(--brand-soft)';
        border = 'var(--ai-300)';
        edge = 'var(--ai-300)';
        color = 'var(--brand-strong)';
      }
      if (isWrong) {
        bg = 'var(--danger-soft)';
        border = 'var(--beni-400)';
        edge = 'var(--beni-400)';
        color = 'var(--beni-700)';
      }
      return {
        minHeight: 72,
        padding: '8px 6px',
        borderRadius: 'var(--radius-md)',
        background: bg,
        border: `1.5px solid ${border}`,
        boxShadow: isMatched ? 'none' : `0 3px 0 ${edge}`,
        color,
        cursor: isMatched ? 'default' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        opacity: isMatched ? 0 : 1,
        pointerEvents: isMatched ? 'none' : 'auto',
        transform: isMatched ? 'scale(0.7)' : 'none',
        transition: 'opacity .3s var(--ease-out), transform .3s var(--ease-out)',
        animation: isWrong ? 'kotoba-shake .4s' : 'none',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 14
      };
    };
    const urgency = timeLeft / TIME;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg-canvas)',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(KC.ChallengeTopBar, {
      onExit: onExit,
      progress: matches / (tiles.length / 2) * 100,
      right: /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 5,
          fontFamily: 'var(--font-num)',
          fontWeight: 800,
          color: urgency < 0.25 ? 'var(--danger)' : 'var(--brand)'
        }
      }, I('timer', {
        style: {
          width: 18,
          height: 18
        }
      }), Math.ceil(timeLeft), "s")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '14px 24px 0'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 22,
        lineHeight: 1.3,
        color: 'var(--text-strong)'
      }
    }, "Match the pairs"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, "Word \u2194 meaning. A miss costs ", PENALTY, " seconds.")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        padding: '18px 24px 24px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 10,
        alignContent: 'start'
      }
    }, tiles.map(t => /*#__PURE__*/React.createElement("button", {
      key: t.key,
      onClick: () => tap(t),
      style: tileStyle(t)
    }, t.kind === 'jp' ? /*#__PURE__*/React.createElement("span", {
      className: "jp-display",
      style: {
        fontSize: t.label.length > 2 ? 19 : 27
      }
    }, t.label) : t.label))));
  };
}();
Object.assign(window, {
  PairMatch
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/challenges/PairMatch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/challenges/Practice.jsx
try { (() => {
// Kotoba — Practice tab (formerly Review). Strengthens LEARNED words — nothing
// new is taught here. Weakest words surface first; each word's current reading
// aid + strength is visible so the learner can see aids fading as they improve.
// Exposes window.Practice.

const Practice = function () {
  const NS = window.MichiDesignSystem_2b01f5;
  const KW = window.KotobaWords;
  const KC = window.KotobaChallenge;
  const {
    Button,
    Card,
    Badge,
    SenseiCard,
    ProgressRing
  } = NS;
  const I = (n, props = {}) => React.createElement('i', {
    'data-lucide': n,
    ...props
  });
  function ModeCard({
    icon,
    title,
    meta,
    xp,
    onClick
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        width: '100%',
        textAlign: 'left',
        padding: '14px 16px',
        borderRadius: 'var(--radius-lg)',
        cursor: 'pointer',
        background: 'var(--surface-card)',
        border: '1.5px solid var(--border-default)',
        boxShadow: '0 3px 0 var(--sumi-200)',
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-md)',
        flex: 'none',
        background: 'var(--brand-soft)',
        color: 'var(--brand)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, I(icon, {
      style: {
        width: 22,
        height: 22
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontWeight: 800,
        fontSize: 15,
        color: 'var(--text-strong)'
      }
    }, title), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 1
      }
    }, meta)), /*#__PURE__*/React.createElement(Badge, {
      tone: "accent",
      size: "sm"
    }, xp), I('chevron-right', {
      style: {
        width: 18,
        height: 18,
        color: 'var(--text-faint)'
      }
    }));
  }
  return function Practice({
    onSRS,
    onPairs,
    onListening,
    onSentences
  }) {
    KC.useWordTick();
    React.useEffect(() => {
      window.lucide && window.lucide.createIcons();
    });
    const due = KW.dueCount();
    const weak = KW.weakest(4);
    const [w1, w2] = weak;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: '100%',
        background: 'var(--bg-canvas)',
        padding: '54px 20px 28px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 26
      }
    }, "Practice"), /*#__PURE__*/React.createElement("span", {
      className: "jp-display",
      style: {
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, "\u4ECA\u65E5\u306E\u5FA9\u7FD2")), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-muted)',
        marginTop: 6,
        marginBottom: 16,
        fontSize: 15
      }
    }, "Strengthen the words you've already met \u2014 your weakest come up first."), /*#__PURE__*/React.createElement(SenseiCard, {
      title: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
        className: "jp"
      }, w1.jp), " and ", /*#__PURE__*/React.createElement("span", {
        className: "jp"
      }, w2.jp), " keep slipping"),
      actions: /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "accent",
        onClick: onSRS
      }, "Practice 2 min"),
      style: {
        marginBottom: 14
      }
    }, "I put them at the front of today's cards \u2014 their reading aids stay on until they stick."), /*#__PURE__*/React.createElement(Card, {
      tone: "brand",
      pad: "lg",
      style: {
        marginBottom: 22,
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(ProgressRing, {
      value: due,
      max: KW.WORDS.filter(w => w.level === 'n5').length,
      size: 64,
      color: "var(--accent)"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15
      }
    }, due)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: 'var(--text-strong)',
        fontSize: 16
      }
    }, "Cards due today"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-body)'
      }
    }, "~4 min \xB7 swipe right if you know it")), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: onSRS
    }, "Start")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: 'var(--text-strong)',
        fontSize: 15,
        margin: '0 0 12px'
      }
    }, "Ways to practice"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(ModeCard, {
      icon: "layers",
      title: "Cards",
      meta: `${due} due · swipe to grade yourself`,
      xp: "+2 / card",
      onClick: onSRS
    }), /*#__PURE__*/React.createElement(ModeCard, {
      icon: "puzzle",
      title: "Pair match",
      meta: "Clear the board against the clock",
      xp: "up to +60",
      onClick: onPairs
    }), /*#__PURE__*/React.createElement(ModeCard, {
      icon: "headphones",
      title: "Listening",
      meta: "Hear it, tap the word",
      xp: "+40",
      onClick: onListening
    }), /*#__PURE__*/React.createElement(ModeCard, {
      icon: "text-quote",
      title: "Sentences",
      meta: "Rebuild sentences from your words",
      xp: "+30",
      onClick: onSentences
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: 'var(--text-strong)',
        fontSize: 15,
        margin: '26px 0 4px'
      }
    }, "Weak words"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        margin: '0 0 12px'
      }
    }, "Aids fade as a word gets stronger \u2014 romaji first, then furigana."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, weak.map(w => /*#__PURE__*/React.createElement(Card, {
      key: w.id,
      pad: "sm",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 64,
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(KC.JpWord, {
      word: w,
      size: 26
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: 'var(--text-strong)'
      }
    }, w.meaning), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 5
      }
    }, /*#__PURE__*/React.createElement(KC.StrengthDots, {
      id: w.id
    }))), /*#__PURE__*/React.createElement(KC.AidChip, {
      id: w.id
    })))));
  };
}();
Object.assign(window, {
  Practice
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/challenges/Practice.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/challenges/SRSCards.jsx
try { (() => {
// Kotoba — SRS card deck. Swipe right = knew it (+1), swipe right WITHOUT
// flipping = too easy (+2), swipe left = didn't know (−1, card returns later).
// Tap to flip. The front is the test → no reading aids; the back shows everything.
// Exposes window.SRSCards.

const SRSCards = function () {
  const NS = window.MichiDesignSystem_2b01f5;
  const KW = window.KotobaWords;
  const KC = window.KotobaChallenge;
  const {
    Button,
    Badge
  } = NS;
  const I = (n, props = {}) => React.createElement('i', {
    'data-lucide': n,
    ...props
  });
  const SWIPE_AT = 90;
  function glyphSize(jp) {
    if (jp.length <= 1) return 96;
    if (jp.length <= 3) return 64;
    return 42;
  }
  function CardFace({
    word,
    back
  }) {
    if (!back) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          gap: 18
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "jp-display",
        style: {
          fontSize: glyphSize(word.jp),
          color: 'var(--text-strong)',
          lineHeight: 1.15,
          textAlign: 'center'
        }
      }, word.jp), /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 13,
          fontWeight: 600,
          color: 'var(--text-faint)'
        }
      }, I('rotate-cw', {
        style: {
          width: 14,
          height: 14
        }
      }), " Tap to flip"));
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        gap: 6,
        padding: '0 24px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "jp-display",
      style: {
        fontSize: Math.min(glyphSize(word.jp), 56),
        color: 'var(--brand-strong)',
        lineHeight: 1.15
      }
    }, word.jp), word.kana !== word.jp && /*#__PURE__*/React.createElement("span", {
      className: "jp-display",
      style: {
        fontSize: 22,
        color: 'var(--text-body)',
        marginTop: 6
      }
    }, word.kana), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-num)',
        fontWeight: 800,
        fontSize: 18,
        color: 'var(--brand)'
      }
    }, word.romaji), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 44,
        height: 1.5,
        background: 'var(--border-default)',
        margin: '12px 0'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22,
        fontWeight: 700,
        color: 'var(--text-strong)'
      }
    }, word.meaning));
  }
  return function SRSCards({
    onExit,
    onDone
  }) {
    const [queue, setQueue] = React.useState(() => KW.weakest(8).map(w => ({
      id: w.id,
      again: 0
    })));
    const total0 = React.useRef(queue.length);
    const [resolved, setResolved] = React.useState(0);
    const [flipped, setFlipped] = React.useState(false);
    const [drag, setDrag] = React.useState(null); // {dx}
    const [leaving, setLeaving] = React.useState(null); // 'left' | 'right'
    const [counts, setCounts] = React.useState({
      easy: 0,
      knew: 0,
      again: 0
    });
    const start = React.useRef(null);
    React.useEffect(() => {
      window.lucide && window.lucide.createIcons();
    });
    const card = queue[0];
    const done = !card;
    const xp = counts.knew * 2 + counts.easy * 3;
    if (done) {
      return /*#__PURE__*/React.createElement(KC.CompleteScreen, {
        title: "Review complete!",
        jp: "\u304A\u75B2\u308C\u3055\u307E",
        xp: xp,
        icon: "layers",
        stats: [{
          icon: 'zap',
          label: `${counts.easy} too easy`
        }, {
          icon: 'check',
          label: `${counts.knew} knew`
        }, {
          icon: 'rotate-ccw',
          label: `${counts.again} again`
        }],
        onDone: onDone
      });
    }
    const word = KW.word(card.id);
    const commit = dir => {
      setLeaving(dir);
      setDrag(null);
      const wasFlipped = flipped;
      setTimeout(() => {
        setQueue(q => {
          const [top, ...rest] = q;
          if (dir === 'left' && top.again < 1) return [...rest, {
            ...top,
            again: top.again + 1
          }];
          return rest;
        });
        setResolved(r => r + (dir === 'right' || card.again >= 1 ? 1 : 0));
        setCounts(c => dir === 'left' ? {
          ...c,
          again: c.again + 1
        } : wasFlipped ? {
          ...c,
          knew: c.knew + 1
        } : {
          ...c,
          easy: c.easy + 1
        });
        KW.bump(card.id, dir === 'left' ? -1 : wasFlipped ? 1 : 2);
        setFlipped(false);
        setLeaving(null);
      }, 260);
    };
    const onPointerDown = e => {
      if (leaving) return;
      e.currentTarget.setPointerCapture(e.pointerId);
      start.current = {
        x: e.clientX,
        y: e.clientY,
        moved: false
      };
    };
    const onPointerMove = e => {
      if (!start.current || leaving) return;
      const dx = e.clientX - start.current.x;
      if (Math.abs(dx) > 6) start.current.moved = true;
      setDrag({
        dx
      });
    };
    const onPointerUp = () => {
      if (!start.current || leaving) return;
      const dx = drag ? drag.dx : 0;
      if (dx > SWIPE_AT) commit('right');else if (dx < -SWIPE_AT) commit('left');else {
        if (!start.current.moved) setFlipped(f => !f);
        setDrag(null);
      }
      start.current = null;
    };
    const dx = leaving ? leaving === 'right' ? 520 : -520 : drag ? drag.dx : 0;
    const rot = dx / 18;
    const rightLabel = flipped ? 'Knew it' : 'Too easy';
    const remaining = queue.length;
    const progress = resolved / Math.max(1, resolved + remaining) * 100;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg-canvas)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(KC.ChallengeTopBar, {
      onExit: onExit,
      progress: progress,
      hearts: 5
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '10px 24px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--text-faint)'
      }
    }, remaining, " card", remaining === 1 ? '' : 's', " left"), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral",
      size: "sm"
    }, card.again > 0 ? 'seen again' : `strength ${KW.strength(card.id)}/5`)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        position: 'relative',
        margin: '14px 24px 10px'
      }
    }, queue.slice(1, 3).map((c, i) => /*#__PURE__*/React.createElement("div", {
      key: c.id + '-' + c.again,
      style: {
        position: 'absolute',
        inset: 0,
        borderRadius: 'var(--radius-xl)',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-sm)',
        transform: `translateY(${(i + 1) * 12}px) scale(${1 - (i + 1) * 0.04})`,
        transition: 'transform .25s var(--ease-out)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      onPointerDown: onPointerDown,
      onPointerMove: onPointerMove,
      onPointerUp: onPointerUp,
      style: {
        position: 'absolute',
        inset: 0,
        touchAction: 'none',
        cursor: 'grab',
        transform: `translateX(${dx}px) rotate(${rot}deg)`,
        transition: drag ? 'none' : 'transform .26s var(--ease-out)',
        perspective: 900,
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        height: '100%',
        transformStyle: 'preserve-3d',
        transition: 'transform .45s var(--ease-spring)',
        transform: flipped ? 'rotateY(180deg)' : 'none'
      }
    }, [false, true].map(back => /*#__PURE__*/React.createElement("div", {
      key: back ? 'b' : 'f',
      style: {
        position: 'absolute',
        inset: 0,
        borderRadius: 'var(--radius-xl)',
        background: back ? 'var(--brand-soft)' : 'var(--surface-card)',
        border: back ? '1.5px solid var(--ai-200)' : '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-lg)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transform: back ? 'rotateY(180deg)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(CardFace, {
      word: word,
      back: back
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 22,
        left: 20,
        padding: '7px 14px',
        borderRadius: 'var(--radius-pill)',
        background: 'var(--success)',
        color: '#fff',
        fontWeight: 800,
        fontSize: 15,
        transform: 'rotate(-8deg)',
        opacity: Math.min(1, Math.max(0, dx) / SWIPE_AT),
        pointerEvents: 'none'
      }
    }, rightLabel, !flipped && ' +2'), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 22,
        right: 20,
        padding: '7px 14px',
        borderRadius: 'var(--radius-pill)',
        background: 'var(--danger)',
        color: '#fff',
        fontWeight: 800,
        fontSize: 15,
        transform: 'rotate(8deg)',
        opacity: Math.min(1, Math.max(0, -dx) / SWIPE_AT),
        pointerEvents: 'none'
      }
    }, "Again"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        padding: '6px 24px 36px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      fullWidth: true,
      size: "md",
      onClick: () => commit('left'),
      icon: I('rotate-ccw', {
        style: {
          width: 16,
          height: 16
        }
      })
    }, "Again"), /*#__PURE__*/React.createElement(Button, {
      variant: "success",
      fullWidth: true,
      size: "md",
      onClick: () => commit('right'),
      icon: I(flipped ? 'check' : 'zap', {
        style: {
          width: 16,
          height: 16
        }
      })
    }, rightLabel)));
  };
}();
Object.assign(window, {
  SRSCards
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/challenges/SRSCards.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/challenges/WordRain.jsx
try { (() => {
// Kotoba — Word rain. Words fall toward the ground line; type their reading
// (romaji or kana) to clear them before they land. Reading IS the test →
// NO reading aids, ever. Difficulty changes speed, simultaneous words and the
// word pool — and multiplies XP. A landed word costs a heart; 0 hearts ends it.
// Exposes window.WordRain.

const WordRain = function () {
  const NS = window.MichiDesignSystem_2b01f5;
  const KW = window.KotobaWords;
  const KC = window.KotobaChallenge;
  const {
    Button,
    Badge,
    IconButton
  } = NS;
  const I = (n, props = {}) => React.createElement('i', {
    'data-lucide': n,
    ...props
  });
  const DIFFS = [{
    id: 'drizzle',
    jp: '小雨',
    name: 'Drizzle',
    xpPer: 4,
    mult: '×1',
    speed: 0.05,
    gap: 3200,
    maxUp: 2,
    pool: 'learned',
    total: 10,
    desc: 'Slow fall · 2 words at once · words you know'
  }, {
    id: 'rain',
    jp: '雨',
    name: 'Rain',
    xpPer: 6,
    mult: '×1.5',
    speed: 0.075,
    gap: 2400,
    maxUp: 3,
    pool: 'all-n5',
    total: 12,
    desc: 'Steady fall · 3 at once · everything you\u2019ve met'
  }, {
    id: 'storm',
    jp: '嵐',
    name: 'Storm',
    xpPer: 9,
    mult: '×2',
    speed: 0.105,
    gap: 1800,
    maxUp: 4,
    pool: 'stretch',
    total: 14,
    desc: 'Fast fall · 4 at once · includes words above your level'
  }];

  // ── setup screen ───────────────────────────────────────────
  function Setup({
    diff,
    setDiff,
    onStart,
    onExit
  }) {
    React.useEffect(() => {
      window.lucide && window.lucide.createIcons();
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg-canvas)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '54px 18px 0'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Back",
      variant: "ghost",
      size: "sm",
      onClick: onExit
    }, I('arrow-left', {
      style: {
        width: 22,
        height: 22
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        padding: '12px 24px 0',
        overflow: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 52,
        height: 52,
        borderRadius: 'var(--radius-md)',
        background: 'var(--brand)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        flex: 'none'
      }
    }, I('cloud-rain', {
      style: {
        width: 28,
        height: 28
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 26,
        lineHeight: 1.2
      }
    }, "Word rain"), /*#__PURE__*/React.createElement("div", {
      className: "jp-display",
      style: {
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, "\u8A00\u8449\u306E\u96E8"))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        color: 'var(--text-muted)',
        margin: '14px 0 18px',
        lineHeight: 1.5
      }
    }, "Type each word's reading before it reaches the ground. No reading aids up there \u2014 that's the whole point."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        paddingBottom: 24
      }
    }, DIFFS.map(d => {
      const on = diff.id === d.id;
      return /*#__PURE__*/React.createElement("button", {
        key: d.id,
        onClick: () => setDiff(d),
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          textAlign: 'left',
          padding: '14px 16px',
          borderRadius: 'var(--radius-lg)',
          cursor: 'pointer',
          background: on ? 'var(--brand-soft)' : 'var(--surface-card)',
          border: `1.5px solid ${on ? 'var(--ai-300)' : 'var(--border-default)'}`,
          boxShadow: `0 3px 0 ${on ? 'var(--ai-300)' : 'var(--sumi-200)'}`
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "jp-display",
        style: {
          fontSize: 30,
          width: 48,
          textAlign: 'center',
          color: on ? 'var(--brand-strong)' : 'var(--text-strong)',
          flex: 'none'
        }
      }, d.jp), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'block',
          fontWeight: 800,
          fontSize: 16,
          color: 'var(--text-strong)'
        }
      }, d.name), /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'block',
          fontSize: 13,
          color: 'var(--text-muted)',
          marginTop: 2
        }
      }, d.desc)), /*#__PURE__*/React.createElement(Badge, {
        tone: on ? 'accent' : 'neutral',
        solid: on,
        size: "sm"
      }, d.mult, " XP"));
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 24px 36px'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      size: "lg",
      variant: "accent",
      onClick: onStart,
      icon: I('play', {
        style: {
          width: 18,
          height: 18
        }
      })
    }, "Start \xB7 up to +", diff.xpPer * diff.total, " XP")));
  }

  // ── the game ───────────────────────────────────────────────
  function Game({
    diff,
    onExit,
    onOver
  }) {
    const [, setTick] = React.useState(0);
    const [hearts, setHearts] = React.useState(5);
    const [score, setScore] = React.useState({
      cleared: 0,
      missed: 0,
      combo: 0,
      best: 0
    });
    const [typed, setTyped] = React.useState('');
    const [shake, setShake] = React.useState(false);
    const world = React.useRef({
      falling: [],
      spawned: 0,
      lastSpawn: 0,
      uid: 0,
      overSent: false
    });
    const inputRef = React.useRef(null);
    const heartsRef = React.useRef(5);
    const scoreRef = React.useRef(score);
    scoreRef.current = score;
    const speedMult = window.KotobaAid && window.KotobaAid.rainSpeed || 1;
    React.useEffect(() => {
      window.lucide && window.lucide.createIcons();
    }, []);
    React.useEffect(() => {
      const pool = KW.pool(diff.pool);
      let raf,
        last = performance.now();
      const step = now => {
        const w = world.current;
        const dt = Math.min(50, now - last);
        last = now;
        // spawn
        if (w.spawned < diff.total && w.falling.length < diff.maxUp && now - w.lastSpawn > diff.gap / speedMult) {
          const word = pool[(w.spawned * 7 + 3) % pool.length];
          if (!w.falling.some(f => f.word.id === word.id)) {
            w.falling.push({
              uid: ++w.uid,
              word,
              x: 8 + w.spawned * 37 % 60,
              y: -0.08,
              state: 'falling'
            });
            w.spawned++;
            w.lastSpawn = now;
          } else {
            w.lastSpawn = now - diff.gap / speedMult / 2;
          }
        }
        // fall
        w.falling.forEach(f => {
          if (f.state !== 'falling') return;
          f.y += diff.speed * speedMult * dt / 1000;
          if (f.y >= 0.92) {
            f.state = 'miss';
            heartsRef.current = Math.max(0, heartsRef.current - 1);
            setHearts(heartsRef.current);
            setScore(s => ({
              ...s,
              missed: s.missed + 1,
              combo: 0
            }));
            setTimeout(() => {
              w.falling = w.falling.filter(x => x.uid !== f.uid);
            }, 500);
          }
        });
        const doneSpawning = w.spawned >= diff.total && w.falling.filter(f => f.state === 'falling').length === 0;
        if ((heartsRef.current <= 0 || doneSpawning) && !w.overSent) {
          w.overSent = true;
          setTimeout(() => onOver({
            ...scoreRef.current,
            hearts: heartsRef.current
          }), 600);
        }
        setTick(t => t + 1);
        raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
      return () => cancelAnimationFrame(raf);
    }, [diff]);
    const tryClear = (value, fromEnter) => {
      const v = value.trim().toLowerCase();
      if (!v) return;
      const w = world.current;
      const hit = w.falling.find(f => f.state === 'falling' && (f.word.romaji === v || f.word.kana === v));
      if (hit) {
        hit.state = 'clear';
        setScore(s => {
          const combo = s.combo + 1;
          return {
            cleared: s.cleared + 1,
            missed: s.missed,
            combo,
            best: Math.max(s.best, combo)
          };
        });
        KW.bump(hit.word.id, 1);
        setTimeout(() => {
          w.falling = w.falling.filter(x => x.uid !== hit.uid);
        }, 350);
        setTyped('');
      } else if (fromEnter) {
        setShake(true);
        setTimeout(() => setShake(false), 400);
        setTyped('');
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, var(--ai-100) 0%, var(--ai-50) 30%, var(--bg-canvas) 75%)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '54px 18px 8px',
        position: 'relative',
        zIndex: 5
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Exit",
      variant: "ghost",
      size: "sm",
      onClick: onExit
    }, I('x', {
      style: {
        width: 22,
        height: 22
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      solid: true,
      size: "sm"
    }, diff.name), score.combo >= 3 && /*#__PURE__*/React.createElement("span", {
      key: score.combo,
      style: {
        fontFamily: 'var(--font-num)',
        fontWeight: 800,
        fontSize: 13,
        color: 'var(--accent)',
        animation: 'kotoba-pop .3s var(--ease-spring) both'
      }
    }, "\u30B3\u30F3\u30DC \xD7", score.combo)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-num)',
        fontWeight: 800,
        color: 'var(--brand)',
        fontSize: 14
      }
    }, "+", score.cleared * diff.xpPer, " XP"), /*#__PURE__*/React.createElement(KC.Hearts, {
      count: hearts
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        position: 'relative'
      }
    }, world.current.falling.map(f => /*#__PURE__*/React.createElement("div", {
      key: f.uid,
      style: {
        position: 'absolute',
        left: `${f.x}%`,
        top: `${f.y * 100}%`,
        padding: '8px 14px',
        borderRadius: 'var(--radius-md)',
        background: f.state === 'miss' ? 'var(--danger-soft)' : f.state === 'clear' ? 'var(--success-soft)' : 'var(--surface-card)',
        border: `1.5px solid ${f.state === 'miss' ? 'var(--beni-400)' : f.state === 'clear' ? 'var(--wakaba-400)' : 'var(--border-default)'}`,
        boxShadow: 'var(--shadow-md)',
        transform: f.state === 'clear' ? 'scale(1.25)' : 'none',
        opacity: f.state === 'falling' ? 1 : f.state === 'clear' ? 0 : 0.85,
        transition: f.state !== 'falling' ? 'transform .3s var(--ease-out), opacity .35s var(--ease-out)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "jp-display",
      style: {
        fontSize: 24,
        color: 'var(--text-strong)'
      }
    }, f.word.jp), f.state === 'miss' && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontFamily: 'var(--font-num)',
        fontSize: 11,
        fontWeight: 700,
        color: 'var(--beni-700)',
        textAlign: 'center'
      }
    }, f.word.romaji))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: '92%',
        height: 2.5,
        background: 'var(--accent)',
        opacity: 0.7,
        boxShadow: '0 0 12px var(--kaki-300)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 'none',
        padding: '12px 20px 40px',
        background: 'var(--surface-card)',
        borderTop: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-lg)'
      }
    }, /*#__PURE__*/React.createElement("input", {
      ref: inputRef,
      autoFocus: true,
      value: typed,
      placeholder: "Type the reading\u2026 (romaji)",
      onChange: e => {
        setTyped(e.target.value);
        tryClear(e.target.value, false);
      },
      onKeyDown: e => {
        if (e.key === 'Enter') tryClear(typed, true);
      },
      style: {
        width: '100%',
        boxSizing: 'border-box',
        height: 52,
        borderRadius: 'var(--radius-md)',
        border: `1.5px solid ${shake ? 'var(--beni-400)' : 'var(--border-default)'}`,
        background: 'var(--bg-canvas)',
        padding: '0 16px',
        fontFamily: 'var(--font-num)',
        fontWeight: 700,
        fontSize: 18,
        color: 'var(--text-strong)',
        outline: 'none',
        animation: shake ? 'kotoba-shake .4s' : 'none'
      }
    })));
  }

  // ── wrapper ────────────────────────────────────────────────
  return function WordRain({
    onExit,
    onDone
  }) {
    const [diff, setDiff] = React.useState(DIFFS[0]);
    const [phase, setPhase] = React.useState('setup'); // setup | play | over
    const [result, setResult] = React.useState(null);
    if (phase === 'setup') return /*#__PURE__*/React.createElement(Setup, {
      diff: diff,
      setDiff: setDiff,
      onExit: onExit,
      onStart: () => setPhase('play')
    });
    if (phase === 'play') return /*#__PURE__*/React.createElement(Game, {
      diff: diff,
      onExit: onExit,
      onOver: r => {
        setResult(r);
        setPhase('over');
      }
    });
    const survived = result.hearts > 0;
    return /*#__PURE__*/React.createElement(window.KotobaChallenge.CompleteScreen, {
      title: survived ? 'The rain has passed' : 'The storm won this time',
      jp: survived ? 'お見事' : 'また挑戦しよう',
      icon: survived ? 'cloud-rain' : 'umbrella',
      tone: survived ? 'var(--brand)' : 'var(--sumi-700)',
      xp: result.cleared * diff.xpPer,
      stats: [{
        icon: 'check',
        label: `${result.cleared} cleared`
      }, {
        icon: 'flame',
        label: `best ×${result.best}`
      }],
      onDone: onDone
    });
  };
}();
Object.assign(window, {
  WordRain
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/challenges/WordRain.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/challenges/words.js
try { (() => {
// Kotoba — shared word knowledge store for challenge views.
// Plain JS (no JSX). Exposes window.KotobaWords.
//
// Every word has a per-learner "strength" 0–5. Strength drives the reading aid
// shown wherever Japanese is NOT itself the challenge:
//   strength 0–1  → romaji + furigana (newest words)
//   strength 2–3  → furigana only
//   strength 4–5  → no aid (mastered)
// Strength moves silently: +1 on a correct answer, −1 on a miss.

const KotobaWords = (() => {
  const KEY = 'kotoba-word-strength-v1';

  // parts: segments for furigana ruby — {t} plain kana, {t,r} kanji + reading.
  const WORDS = [{
    id: 'mizu',
    jp: '水',
    kana: 'みず',
    romaji: 'mizu',
    meaning: 'water',
    parts: [{
      t: '水',
      r: 'みず'
    }],
    level: 'n5',
    seed: 4
  }, {
    id: 'hon',
    jp: '本',
    kana: 'ほん',
    romaji: 'hon',
    meaning: 'book',
    parts: [{
      t: '本',
      r: 'ほん'
    }],
    level: 'n5',
    seed: 3
  }, {
    id: 'yama',
    jp: '山',
    kana: 'やま',
    romaji: 'yama',
    meaning: 'mountain',
    parts: [{
      t: '山',
      r: 'やま'
    }],
    level: 'n5',
    seed: 5
  }, {
    id: 'hi-day',
    jp: '日',
    kana: 'ひ',
    romaji: 'hi',
    meaning: 'day / sun',
    parts: [{
      t: '日',
      r: 'ひ'
    }],
    level: 'n5',
    seed: 2
  }, {
    id: 'neko',
    jp: '猫',
    kana: 'ねこ',
    romaji: 'neko',
    meaning: 'cat',
    parts: [{
      t: '猫',
      r: 'ねこ'
    }],
    level: 'n5',
    seed: 2
  }, {
    id: 'inu',
    jp: '犬',
    kana: 'いぬ',
    romaji: 'inu',
    meaning: 'dog',
    parts: [{
      t: '犬',
      r: 'いぬ'
    }],
    level: 'n5',
    seed: 3
  }, {
    id: 'sakana',
    jp: '魚',
    kana: 'さかな',
    romaji: 'sakana',
    meaning: 'fish',
    parts: [{
      t: '魚',
      r: 'さかな'
    }],
    level: 'n5',
    seed: 1
  }, {
    id: 'tori',
    jp: '鳥',
    kana: 'とり',
    romaji: 'tori',
    meaning: 'bird',
    parts: [{
      t: '鳥',
      r: 'とり'
    }],
    level: 'n5',
    seed: 1
  }, {
    id: 'ki-tree',
    jp: '木',
    kana: 'き',
    romaji: 'ki',
    meaning: 'tree',
    parts: [{
      t: '木',
      r: 'き'
    }],
    level: 'n5',
    seed: 4
  }, {
    id: 'hito',
    jp: '人',
    kana: 'ひと',
    romaji: 'hito',
    meaning: 'person',
    parts: [{
      t: '人',
      r: 'ひと'
    }],
    level: 'n5',
    seed: 3
  }, {
    id: 'taberu',
    jp: '食べる',
    kana: 'たべる',
    romaji: 'taberu',
    meaning: 'to eat',
    parts: [{
      t: '食',
      r: 'た'
    }, {
      t: 'べる'
    }],
    level: 'n5',
    seed: 2
  }, {
    id: 'nomu',
    jp: '飲む',
    kana: 'のむ',
    romaji: 'nomu',
    meaning: 'to drink',
    parts: [{
      t: '飲',
      r: 'の'
    }, {
      t: 'む'
    }],
    level: 'n5',
    seed: 2
  }, {
    id: 'miru',
    jp: '見る',
    kana: 'みる',
    romaji: 'miru',
    meaning: 'to see',
    parts: [{
      t: '見',
      r: 'み'
    }, {
      t: 'る'
    }],
    level: 'n5',
    seed: 3
  }, {
    id: 'ookii',
    jp: '大きい',
    kana: 'おおきい',
    romaji: 'ookii',
    meaning: 'big',
    parts: [{
      t: '大',
      r: 'おお'
    }, {
      t: 'きい'
    }],
    level: 'n5',
    seed: 2
  }, {
    id: 'chiisai',
    jp: '小さい',
    kana: 'ちいさい',
    romaji: 'chiisai',
    meaning: 'small',
    parts: [{
      t: '小',
      r: 'ちい'
    }, {
      t: 'さい'
    }],
    level: 'n5',
    seed: 1
  }, {
    id: 'tomodachi',
    jp: '友達',
    kana: 'ともだち',
    romaji: 'tomodachi',
    meaning: 'friend',
    parts: [{
      t: '友達',
      r: 'ともだち'
    }],
    level: 'n5',
    seed: 0
  }, {
    id: 'sensei',
    jp: '先生',
    kana: 'せんせい',
    romaji: 'sensei',
    meaning: 'teacher',
    parts: [{
      t: '先生',
      r: 'せんせい'
    }],
    level: 'n5',
    seed: 1
  }, {
    id: 'gakkou',
    jp: '学校',
    kana: 'がっこう',
    romaji: 'gakkou',
    meaning: 'school',
    parts: [{
      t: '学校',
      r: 'がっこう'
    }],
    level: 'n5',
    seed: 0
  }, {
    id: 'kyou',
    jp: '今日',
    kana: 'きょう',
    romaji: 'kyou',
    meaning: 'today',
    parts: [{
      t: '今日',
      r: 'きょう'
    }],
    level: 'n5',
    seed: 1
  }, {
    id: 'konnichiwa',
    jp: 'こんにちは',
    kana: 'こんにちは',
    romaji: 'konnichiwa',
    meaning: 'hello',
    level: 'n5',
    seed: 5
  }, {
    id: 'arigatou',
    jp: 'ありがとう',
    kana: 'ありがとう',
    romaji: 'arigatou',
    meaning: 'thank you',
    level: 'n5',
    seed: 5
  }, {
    id: 'ohayou',
    jp: 'おはよう',
    kana: 'おはよう',
    romaji: 'ohayou',
    meaning: 'good morning',
    level: 'n5',
    seed: 4
  }, {
    id: 'sushi',
    jp: 'すし',
    kana: 'すし',
    romaji: 'sushi',
    meaning: 'sushi',
    level: 'n5',
    seed: 4
  },
  // Above-level pool (Storm difficulty in Word rain)
  {
    id: 'densha',
    jp: '電車',
    kana: 'でんしゃ',
    romaji: 'densha',
    meaning: 'train',
    parts: [{
      t: '電車',
      r: 'でんしゃ'
    }],
    level: 'n4',
    seed: 0
  }, {
    id: 'tenki',
    jp: '天気',
    kana: 'てんき',
    romaji: 'tenki',
    meaning: 'weather',
    parts: [{
      t: '天気',
      r: 'てんき'
    }],
    level: 'n4',
    seed: 0
  }, {
    id: 'ongaku',
    jp: '音楽',
    kana: 'おんがく',
    romaji: 'ongaku',
    meaning: 'music',
    parts: [{
      t: '音楽',
      r: 'おんがく'
    }],
    level: 'n4',
    seed: 0
  }, {
    id: 'eiga',
    jp: '映画',
    kana: 'えいが',
    romaji: 'eiga',
    meaning: 'movie',
    parts: [{
      t: '映画',
      r: 'えいが'
    }],
    level: 'n4',
    seed: 0
  }];

  // Sentence-building items. tokens are the correct order; extras are distractors.
  // Each tile may reference a wordId so reading aids follow the learner's strength.
  const SENTENCES = [{
    id: 's-mizu',
    en: 'I drink water.',
    tokens: [{
      t: '私は',
      parts: [{
        t: '私',
        r: 'わたし'
      }, {
        t: 'は'
      }],
      romaji: 'watashi wa'
    }, {
      t: '水を',
      parts: [{
        t: '水',
        r: 'みず'
      }, {
        t: 'を'
      }],
      romaji: 'mizu o',
      wordId: 'mizu'
    }, {
      t: '飲みます',
      parts: [{
        t: '飲',
        r: 'の'
      }, {
        t: 'みます'
      }],
      romaji: 'nomimasu',
      wordId: 'nomu'
    }],
    extras: [{
      t: '食べます',
      parts: [{
        t: '食',
        r: 'た'
      }, {
        t: 'べます'
      }],
      romaji: 'tabemasu',
      wordId: 'taberu'
    }, {
      t: '犬を',
      parts: [{
        t: '犬',
        r: 'いぬ'
      }, {
        t: 'を'
      }],
      romaji: 'inu o',
      wordId: 'inu'
    }]
  }, {
    id: 's-neko',
    en: 'The cat is small.',
    tokens: [{
      t: '猫は',
      parts: [{
        t: '猫',
        r: 'ねこ'
      }, {
        t: 'は'
      }],
      romaji: 'neko wa',
      wordId: 'neko'
    }, {
      t: '小さい',
      parts: [{
        t: '小',
        r: 'ちい'
      }, {
        t: 'さい'
      }],
      romaji: 'chiisai',
      wordId: 'chiisai'
    }, {
      t: 'です',
      romaji: 'desu'
    }],
    extras: [{
      t: '大きい',
      parts: [{
        t: '大',
        r: 'おお'
      }, {
        t: 'きい'
      }],
      romaji: 'ookii',
      wordId: 'ookii'
    }, {
      t: '鳥は',
      parts: [{
        t: '鳥',
        r: 'とり'
      }, {
        t: 'は'
      }],
      romaji: 'tori wa',
      wordId: 'tori'
    }]
  }, {
    id: 's-sakana',
    en: 'I eat fish today.',
    tokens: [{
      t: '今日',
      parts: [{
        t: '今日',
        r: 'きょう'
      }],
      romaji: 'kyou',
      wordId: 'kyou'
    }, {
      t: '魚を',
      parts: [{
        t: '魚',
        r: 'さかな'
      }, {
        t: 'を'
      }],
      romaji: 'sakana o',
      wordId: 'sakana'
    }, {
      t: '食べます',
      parts: [{
        t: '食',
        r: 'た'
      }, {
        t: 'べます'
      }],
      romaji: 'tabemasu',
      wordId: 'taberu'
    }],
    extras: [{
      t: '見ます',
      parts: [{
        t: '見',
        r: 'み'
      }, {
        t: 'ます'
      }],
      romaji: 'mimasu',
      wordId: 'miru'
    }, {
      t: '本を',
      parts: [{
        t: '本',
        r: 'ほん'
      }, {
        t: 'を'
      }],
      romaji: 'hon o',
      wordId: 'hon'
    }]
  }];

  // ── strength store ─────────────────────────────────────────
  const seed = {};
  WORDS.forEach(w => {
    seed[w.id] = w.seed;
  });
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem(KEY) || '{}');
  } catch (e) {
    saved = {};
  }
  const strengths = Object.assign({}, seed, saved);
  const subs = new Set();
  function persist() {
    try {
      localStorage.setItem(KEY, JSON.stringify(strengths));
    } catch (e) {/* no-op */}
  }
  function notify() {
    subs.forEach(fn => fn());
  }
  const byId = {};
  WORDS.forEach(w => {
    byId[w.id] = w;
  });
  const api = {
    WORDS,
    SENTENCES,
    word: id => byId[id],
    strength: id => strengths[id] == null ? 0 : strengths[id],
    // delta: +1 correct, −1 wrong, +2 "too easy" fling
    bump(id, delta) {
      if (!byId[id]) return;
      strengths[id] = Math.max(0, Math.min(5, api.strength(id) + delta));
      persist();
      notify();
    },
    reset() {
      WORDS.forEach(w => {
        strengths[w.id] = w.seed;
      });
      persist();
      notify();
    },
    subscribe(fn) {
      subs.add(fn);
      return () => subs.delete(fn);
    },
    // Reading-aid decision. Respects the global tweak override on window.KotobaAid.
    // kana-only words can't take furigana, so they fall straight to 'none'.
    aidFor(id) {
      const w = byId[id];
      if (!w) return 'none';
      const kanaOnly = w.jp === w.kana;
      const mode = window.KotobaAid && window.KotobaAid.mode || 'auto';
      if (mode === 'none') return 'none';
      if (mode === 'romaji') return 'romaji';
      if (mode === 'furigana') return kanaOnly ? 'none' : 'furigana';
      const s = api.strength(id);
      if (s <= 1) return 'romaji';
      if (s <= 3) return kanaOnly ? 'none' : 'furigana';
      return 'none';
    },
    // learner's known pool (anything seen before, strength >= 1) sorted weakest first
    weakest(n) {
      return WORDS.filter(w => w.level === 'n5').slice().sort((a, b) => api.strength(a.id) - api.strength(b.id)).slice(0, n || 8);
    },
    pool(kind) {
      const n5 = WORDS.filter(w => w.level === 'n5');
      if (kind === 'learned') return n5.filter(w => api.strength(w.id) >= 2);
      if (kind === 'all-n5') return n5;
      return WORDS; // 'stretch' — includes n4
    },
    dueCount() {
      return WORDS.filter(w => w.level === 'n5' && api.strength(w.id) <= 3).length;
    }
  };
  return api;
})();
window.KotobaWords = KotobaWords;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/challenges/words.js", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.SenseiCard = __ds_scope.SenseiCard;

__ds_ns.SenseiChip = __ds_scope.SenseiChip;

__ds_ns.SkillRadar = __ds_scope.SkillRadar;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.KanaTile = __ds_scope.KanaTile;

__ds_ns.LessonNode = __ds_scope.LessonNode;

__ds_ns.LevelBadge = __ds_scope.LevelBadge;

__ds_ns.ProgressRing = __ds_scope.ProgressRing;

__ds_ns.StreakCounter = __ds_scope.StreakCounter;

__ds_ns.XPBar = __ds_scope.XPBar;

__ds_ns.BossNode = __ds_scope.BossNode;

__ds_ns.PixelOni = __ds_scope.PixelOni;

__ds_ns.PixelSprite = __ds_scope.PixelSprite;

__ds_ns.Companion = __ds_scope.Companion;

__ds_ns.PowerLevel = __ds_scope.PowerLevel;

__ds_ns.QuestCard = __ds_scope.QuestCard;

__ds_ns.StatBar = __ds_scope.StatBar;

__ds_ns.ToriiGate = __ds_scope.ToriiGate;

})();
