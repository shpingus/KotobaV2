import React from 'react';

/**
 * Kotoba LessonNode — a stepping stone on the learning path. Circular, tactile,
 * with states for locked / available / current / complete. The "current" node
 * pulses to always show the learner their next step.
 */

const Icons = {
  check: <path d="M20 6 9 17l-5-5" />,
  lock: <g><rect width="16" height="10" x="4" y="11" rx="2.5" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></g>,
  star: <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.6l1-5.8L3.5 9.7l5.9-.9z" />,
  book: <g><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" /><path d="M4 19V5" /></g>,
  crown: <path d="M3 7l4 4 5-7 5 7 4-4-2 12H5z" />,
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
    el.id = id; el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

export function LessonNode({
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
  if (state === 'locked') glyph = 'lock';
  else if (state === 'complete') glyph = 'check';
  else if (state === 'mastered') glyph = 'crown';
  const node = Icons[glyph] || Icons.book;
  const stroke = glyph === 'check';
  return (
    <span className="kotoba-node-wrap">
      <button
        className={`kotoba-node ${className}`}
        data-state={state}
        data-size={size === 'md' ? undefined : size}
        data-current={current || undefined}
        disabled={state === 'locked'}
        {...rest}
      >
        {current && <span className="kotoba-node-start">{startLabel}</span>}
        <svg viewBox="0 0 24 24" fill={stroke ? 'none' : 'currentColor'}
             stroke={stroke ? 'currentColor' : 'none'} strokeWidth="3"
             strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {node}
        </svg>
      </button>
      {label && <span className="kotoba-node-label">{label}</span>}
    </span>
  );
}
