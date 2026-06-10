import React from 'react';

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
    el.id = id; el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

export function XPBar({
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
  const pct = Math.max(0, Math.min(100, max ? (value / max) * 100 : 0));
  return (
    <div className={`kotoba-xp ${className}`} data-tone={tone === 'accent' ? undefined : tone} {...rest}>
      {(level != null || showCount) && (
        <div className="kotoba-xp-head">
          {level != null ? (
            <span className="kotoba-xp-level"><span className="lvl">Lv {level}</span></span>
          ) : <span />}
          {showCount && <span className="kotoba-xp-count">{value.toLocaleString()} / {max.toLocaleString()} {unit}</span>}
        </div>
      )}
      <div className="kotoba-xp-track">
        <div className="kotoba-xp-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
