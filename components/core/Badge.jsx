import React from 'react';

/**
 * Kotoba Badge — a small status/count pill. Soft-filled by default.
 */

const CSS = `
.kotoba-badge{
  display:inline-flex; align-items:center; gap:5px;
  font-family:var(--font-body); font-weight:700; line-height:1;
  font-size:var(--text-2xs); letter-spacing:0.01em;
  padding:5px 10px; border-radius:var(--radius-pill);
  background:var(--brand-soft); color:var(--brand-strong);
}
.kotoba-badge[data-size="sm"]{ font-size:var(--text-3xs); padding:3px 8px; }
.kotoba-badge[data-size="lg"]{ font-size:var(--text-sm); padding:7px 13px; }
.kotoba-badge[data-tone="accent"]{ background:var(--accent-soft); color:var(--kaki-700); }
.kotoba-badge[data-tone="success"]{ background:var(--success-soft); color:var(--wakaba-700); }
.kotoba-badge[data-tone="warning"]{ background:var(--warning-soft); color:var(--kihada-700); }
.kotoba-badge[data-tone="danger"]{ background:var(--danger-soft); color:var(--beni-700); }
.kotoba-badge[data-tone="neutral"]{ background:var(--surface-sunken); color:var(--text-body); }
.kotoba-badge[data-solid="true"]{ color:#fff; }
.kotoba-badge[data-solid="true"][data-tone="brand"]{ background:var(--brand); }
.kotoba-badge[data-solid="true"][data-tone="accent"]{ background:var(--accent); }
.kotoba-badge[data-solid="true"][data-tone="success"]{ background:var(--success); }
.kotoba-badge[data-solid="true"][data-tone="danger"]{ background:var(--danger); }
.kotoba-badge .kotoba-badge-dot{ width:6px; height:6px; border-radius:50%; background:currentColor; }
`;

function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id; el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

export function Badge({
  children,
  tone = 'brand',
  size = 'md',
  solid = false,
  dot = false,
  className = '',
  ...rest
}) {
  useInjected('kotoba-badge-css', CSS);
  return (
    <span
      className={`kotoba-badge ${className}`}
      data-tone={tone}
      data-size={size === 'md' ? undefined : size}
      data-solid={solid || undefined}
      {...rest}
    >
      {dot && <span className="kotoba-badge-dot" />}
      {children}
    </span>
  );
}
