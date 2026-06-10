import React from 'react';

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
    el.id = id; el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

export function ToriiGate({
  size = 96,
  state = 'open',          // open | locked | passed
  plaque,                  // short label on the gaku (e.g. "二" or "N4")
  caption,                 // text under the gate
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
  return (
    <span className={`kotoba-torii ${className}`} data-state={state} {...rest}>
      <svg width={w} height={h} viewBox="0 0 120 110" fill="none" aria-hidden="true">
        {/* kasagi — top lintel, gently upswept */}
        <path d="M4 22 Q60 8 116 22 L116 13 Q60 -1 4 13 Z" fill={deep} />
        {/* shimaki — band under the kasagi */}
        <path d="M10 24 Q60 13 110 24 L110 32 Q60 22 10 32 Z" fill={main} />
        {/* gakuzuka — center strut */}
        <rect x="55.5" y="30" width="9" height="22" fill={main} />
        {/* nuki — crossbar */}
        <rect x="14" y="50" width="92" height="9" rx="1.5" fill={main} />
        {/* pillars — slight inward lean */}
        <path d="M22 30 L34 30 L31 104 L19 104 Z" fill={main} />
        <path d="M86 30 L98 30 L101 104 L89 104 Z" fill={main} />
        {/* pillar feet */}
        <rect x="16.5" y="100" width="17" height="7" rx="2" fill={deep} />
        <rect x="86.5" y="100" width="17" height="7" rx="2" fill={deep} />
        {/* gaku — hanging plaque */}
        {plaque != null && (
          <g>
            <rect x="48" y="31" width="24" height="20" rx="3" fill={plaqueBg} stroke={deep} strokeWidth="2" />
            <text x="60" y="45.5" textAnchor="middle" fontFamily="'Zen Maru Gothic','Space Grotesk',sans-serif"
                  fontWeight="700" fontSize="12" fill={plaqueInk}>{plaque}</text>
          </g>
        )}
        {/* passed — small check seal on the right pillar */}
        {state === 'passed' && (
          <g>
            <circle cx="94" cy="72" r="10" fill="var(--success)" stroke="#fff" strokeWidth="2.5" />
            <path d="M89.5 72 L92.8 75.3 L98.5 68.8" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
        )}
      </svg>
      {caption && <span className="kotoba-torii-caption">{caption}</span>}
    </span>
  );
}
