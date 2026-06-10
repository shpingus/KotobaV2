import React from 'react';

/**
 * Kotoba IconButton — a compact, icon-only action.
 * Circular by default; used for nav, close, audio replay, etc.
 */

const CSS = `
.kotoba-iconbtn{
  display:inline-flex; align-items:center; justify-content:center;
  border:none; cursor:pointer; padding:0;
  border-radius:var(--radius-pill);
  background:var(--surface-sunken); color:var(--text-body);
  transition:background var(--dur-fast) var(--ease-out),
             transform var(--dur-fast) var(--ease-out),
             color var(--dur-fast) var(--ease-out);
  -webkit-tap-highlight-color:transparent;
}
.kotoba-iconbtn:hover{ background:var(--sumi-200); }
.kotoba-iconbtn:active{ transform:scale(0.92); }
.kotoba-iconbtn:focus-visible{ outline:none; box-shadow:var(--ring); }
.kotoba-iconbtn[data-size="sm"]{ width:36px; height:36px; }
.kotoba-iconbtn[data-size="md"]{ width:44px; height:44px; }
.kotoba-iconbtn[data-size="lg"]{ width:52px; height:52px; }
.kotoba-iconbtn[data-variant="brand"]{ background:var(--brand-soft); color:var(--brand-strong); }
.kotoba-iconbtn[data-variant="brand"]:hover{ background:var(--ai-200); }
.kotoba-iconbtn[data-variant="accent"]{ background:var(--accent); color:var(--on-accent); }
.kotoba-iconbtn[data-variant="accent"]:hover{ filter:brightness(1.05); background:var(--accent); }
.kotoba-iconbtn[data-variant="ghost"]{ background:transparent; }
.kotoba-iconbtn[data-variant="ghost"]:hover{ background:var(--surface-sunken); }
.kotoba-iconbtn[data-square="true"]{ border-radius:var(--radius-md); }
.kotoba-iconbtn[disabled]{ opacity:0.45; cursor:not-allowed; }
.kotoba-iconbtn svg, .kotoba-iconbtn i{ width:55%; height:55%; }
`;

function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id; el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

export function IconButton({
  children,
  variant = 'neutral',
  size = 'md',
  square = false,
  label,
  className = '',
  ...rest
}) {
  useInjected('kotoba-iconbtn-css', CSS);
  const v = variant === 'neutral' ? undefined : variant;
  return (
    <button
      className={`kotoba-iconbtn ${className}`}
      data-variant={v}
      data-size={size}
      data-square={square || undefined}
      aria-label={label}
      {...rest}
    >
      {children}
    </button>
  );
}
