import React from 'react';

/**
 * Kotoba Button — the primary tactile action.
 * Pill-shaped with a solid 3-D bottom edge that compresses on press,
 * giving the satisfying "click" that signals forward progress.
 */

const CSS = `
.kotoba-btn{
  --edge: var(--ai-800);
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  font-family:var(--font-body); font-weight:700; line-height:1;
  border:none; cursor:pointer; white-space:nowrap; text-decoration:none;
  border-radius:var(--radius-pill);
  background:var(--brand); color:var(--on-brand);
  box-shadow:0 var(--press-depth) 0 var(--edge);
  transition:transform var(--dur-fast) var(--ease-out),
             box-shadow var(--dur-fast) var(--ease-out),
             background var(--dur-fast) var(--ease-out),
             filter var(--dur-fast) var(--ease-out);
  -webkit-tap-highlight-color:transparent; user-select:none;
}
.kotoba-btn:hover{ filter:brightness(1.04); }
.kotoba-btn:active{ transform:translateY(var(--press-depth)); box-shadow:0 0 0 var(--edge); }
.kotoba-btn:focus-visible{ outline:none; box-shadow:0 var(--press-depth) 0 var(--edge), var(--ring); }

.kotoba-btn[data-size="sm"]{ padding:9px 16px; font-size:var(--text-sm); min-height:40px; }
.kotoba-btn[data-size="md"]{ padding:13px 22px; font-size:var(--text-md); min-height:48px; }
.kotoba-btn[data-size="lg"]{ padding:17px 30px; font-size:var(--text-lg); min-height:56px; }

.kotoba-btn[data-variant="accent"]{ background:var(--accent); color:var(--on-accent); --edge:var(--kaki-700); }
.kotoba-btn[data-variant="success"]{ background:var(--success); color:var(--on-success); --edge:var(--wakaba-700); }
.kotoba-btn[data-variant="danger"]{ background:var(--danger); color:var(--on-danger); --edge:var(--beni-700); }
.kotoba-btn[data-variant="secondary"]{
  background:var(--surface-card); color:var(--brand-strong);
  --edge:var(--sumi-300); box-shadow:0 var(--press-depth) 0 var(--edge); border:var(--border-thin) solid var(--border-default);
}
.kotoba-btn[data-variant="ghost"]{
  background:transparent; color:var(--text-body); box-shadow:none; font-weight:600;
}
.kotoba-btn[data-variant="ghost"]:hover{ background:var(--surface-sunken); filter:none; }
.kotoba-btn[data-variant="ghost"]:active{ transform:none; }

.kotoba-btn[data-full="true"]{ width:100%; }
.kotoba-btn[disabled]{ opacity:0.5; cursor:not-allowed; filter:none; transform:none; box-shadow:0 var(--press-depth) 0 var(--edge); }
.kotoba-btn[data-variant="ghost"][disabled]{ box-shadow:none; }
`;

function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id; el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon = null,
  iconRight = null,
  as = 'button',
  className = '',
  ...rest
}) {
  useInjected('kotoba-btn-css', CSS);
  const Tag = as;
  const v = variant === 'primary' ? undefined : variant;
  return (
    <Tag
      className={`kotoba-btn ${className}`}
      data-variant={v}
      data-size={size}
      data-full={fullWidth || undefined}
      {...rest}
    >
      {icon}
      {children}
      {iconRight}
    </Tag>
  );
}
