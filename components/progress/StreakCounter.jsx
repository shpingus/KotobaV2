import React from 'react';

/**
 * Kotoba StreakCounter — the daily flame. Shows consecutive-day count with a
 * persimmon flame. Goes muted/grey when the streak is at risk or broken.
 */

const Flame = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2c.5 3 2 4.9 4 6.5 2 1.6 3 3.5 3 5.7A7 7 0 0 1 5 14.2c0-1.6.6-3 1.6-4.2.3 1 1 1.8 2 2.1.5-2 .2-4 1.4-5.6C12.2 5 12.4 3.5 12 2z" />
  </svg>
);

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
    el.id = id; el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

export function StreakCounter({
  days = 0,
  size = 'md',
  state = 'active',
  showLabel = true,
  className = '',
  ...rest
}) {
  useInjected('kotoba-streak-css', CSS);
  return (
    <span className={`kotoba-streak ${className}`} data-size={size} data-state={state === 'active' ? undefined : state} {...rest}>
      <span className="kotoba-streak-flame"><Flame size="1em" /></span>
      <span>{days}</span>
      {showLabel && <span className="kotoba-streak-label">day{days === 1 ? '' : 's'}</span>}
    </span>
  );
}
