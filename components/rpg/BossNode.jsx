import React from 'react';
import { PixelSprite } from './Companion.jsx';

/**
 * Kotoba BossNode — an optional boss encounter on (or near) the path. A pixel
 * oni guards bonus rewards; defeating it is a special challenge that uses the
 * learner's stats. Never blocks the main path — bosses are side-quests.
 */

const ONI_PALETTE = {
  O: '#571C12',  // outline · shu-900
  R: '#DA5839',  // body · shu-400
  D: '#A82E16',  // shade · shu-600
  W: '#FFFFFF',  // eyes/teeth
  K: '#171A24',  // pupil/brow
  G: '#ECBC49',  // horns · gold
};

const ONI = [
  '.G........G.',
  '.GG......GG.',
  '..OOOOOOOO..',
  '.ORRRRRRRRO.',
  '.ORKRRRRKRO.',
  '.ORWKRRKWRO.',
  'ORRRRRRRRRRO',
  'ORWWWWWWWWRO',
  '.ORRDDDDRRO.',
  '..ORRRRRRO..',
  '..ORO..ORO..',
  '...O....O...',
];

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
    el.id = id; el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

export function BossNode({
  state = 'available',     // available | locked | defeated
  size = 'md',
  label,
  flag = 'BOSS',
  className = '',
  ...rest
}) {
  useInjected('kotoba-boss-css', CSS);
  const spriteSize = size === 'sm' ? 34 : size === 'lg' ? 60 : 46;
  return (
    <span className="kotoba-boss-wrap">
      <button
        className={`kotoba-boss ${className}`}
        data-state={state}
        data-size={size}
        disabled={state === 'locked'}
        {...rest}
      >
        {flag && <span className="kotoba-boss-flag">{state === 'defeated' ? 'CLEAR' : flag}</span>}
        <PixelSprite matrix={ONI} palette={ONI_PALETTE} size={spriteSize} />
      </button>
      {label && <span className="kotoba-boss-label">{label}</span>}
    </span>
  );
}

/** Bare oni sprite (no node chrome) — for battle headers, intros, lists. */
export function PixelOni({ size = 40, ...rest }) {
  return <PixelSprite matrix={ONI} palette={ONI_PALETTE} size={size} {...rest} />;
}
