import React from 'react';

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
    el.id = id; el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

const LABELS = { pre: 'PRE', n5: 'N5', n4: 'N4', n3: 'N3', n2: 'N2', n1: 'N1' };

export function LevelBadge({
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
  return (
    <span className={`kotoba-level ${className}`} data-tier={tier} data-size={size} data-soft={soft || undefined} {...rest}>
      {showCaption && !isPre && <span className="kotoba-level-cap">JLPT</span>}
      <span>{isPre ? 'Pre' : LABELS[tier].replace('N', 'N')}</span>
      {progress != null && (
        <span className="kotoba-level-prog"><i style={{ width: `${Math.max(0, Math.min(100, progress))}%` }} /></span>
      )}
    </span>
  );
}
