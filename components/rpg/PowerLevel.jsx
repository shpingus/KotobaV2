import React from 'react';

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
    el.id = id; el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

export function PowerLevel({
  value = 0,
  size = 'md',
  label = 'Power',
  showLabel = true,
  className = '',
  ...rest
}) {
  useInjected('kotoba-power-css', CSS);
  return (
    <span className={`kotoba-power ${className}`} data-size={size} {...rest}>
      <span className="kotoba-power-medal"><span className="kotoba-power-kanji">力</span></span>
      <span style={{ display: 'inline-flex', flexDirection: 'column' }}>
        <span className="kotoba-power-num">{value}</span>
        {showLabel && <span className="kotoba-power-label">{label}</span>}
      </span>
    </span>
  );
}
