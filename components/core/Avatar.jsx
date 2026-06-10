import React from 'react';

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
    el.id = id; el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

export function Avatar({
  src,
  name = '',
  size = 'md',
  ring = false,
  ringPercent = 70,
  className = '',
  ...rest
}) {
  useInjected('kotoba-avatar-css', CSS);
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
  const inner = (
    <span className={`kotoba-avatar ${className}`} data-size={size} {...rest}>
      {src ? <img src={src} alt={name} /> : initials || '?'}
    </span>
  );
  if (!ring) return inner;
  return (
    <span
      className="kotoba-avatar-wrap"
      data-ring="true"
      style={{ '--ring-pct': `${ringPercent}%` }}
    >
      {inner}
    </span>
  );
}
