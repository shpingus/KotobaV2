import React from 'react';

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
    el.id = id; el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

export function QuestCard({
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
  const pct = done ? 100 : Math.max(0, Math.min(100, max ? (value / max) * 100 : 0));
  return (
    <div className={`kotoba-quest ${className}`} data-done={done || undefined} {...rest}>
      {icon && <span className="kotoba-quest-icon">{icon}</span>}
      <div className="kotoba-quest-main">
        <div className="kotoba-quest-title">{title}</div>
        <div className="kotoba-quest-sub">{subtitle || `${value} / ${max}`}</div>
        <div className="kotoba-quest-track"><div className="kotoba-quest-fill" style={{ width: `${pct}%` }} /></div>
      </div>
      {reward && <span className="kotoba-quest-reward">{reward}</span>}
    </div>
  );
}
