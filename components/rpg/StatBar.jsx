import React from 'react';

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
    el.id = id; el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

export function StatBar({
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
  const pct = Math.max(0, Math.min(100, max ? (value / max) * 100 : 0));
  return (
    <div className={`kotoba-stat ${className}`} data-tone={tone === 'brand' ? undefined : tone} data-weak={weak || undefined} {...rest}>
      {jp && <span className="kotoba-stat-kanji jp-display">{jp}</span>}
      <div className="kotoba-stat-main">
        <div className="kotoba-stat-head">
          <span className="kotoba-stat-label">{label}</span>
          <span className="kotoba-stat-val">{value}{weak && ' · focus'}</span>
        </div>
        <div className="kotoba-stat-track"><div className="kotoba-stat-fill" style={{ width: `${pct}%` }} /></div>
      </div>
    </div>
  );
}
