import React from 'react';

/**
 * Kotoba Tag — a chip for topics/filters. Can be selectable or removable.
 */

const CSS = `
.kotoba-tag{
  display:inline-flex; align-items:center; gap:6px;
  font-family:var(--font-body); font-weight:600; font-size:var(--text-sm);
  padding:7px 13px; border-radius:var(--radius-pill);
  background:var(--surface-card); color:var(--text-body);
  border:var(--border-thin) solid var(--border-default);
  cursor:default; transition:all var(--dur-fast) var(--ease-out);
  -webkit-tap-highlight-color:transparent;
}
.kotoba-tag[data-clickable="true"]{ cursor:pointer; }
.kotoba-tag[data-clickable="true"]:hover{ border-color:var(--border-brand); color:var(--brand-strong); }
.kotoba-tag[data-selected="true"]{ background:var(--brand-soft); border-color:var(--ai-300); color:var(--brand-strong); }
.kotoba-tag .kotoba-tag-x{
  display:inline-flex; align-items:center; justify-content:center;
  width:16px; height:16px; border-radius:50%; margin-right:-3px;
  background:var(--surface-sunken); cursor:pointer; font-size:11px; line-height:1;
}
.kotoba-tag .kotoba-tag-x:hover{ background:var(--sumi-300); }
`;

function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id; el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

export function Tag({
  children,
  selected = false,
  onRemove,
  icon = null,
  onClick,
  className = '',
  ...rest
}) {
  useInjected('kotoba-tag-css', CSS);
  const clickable = !!onClick || selected !== undefined && onClick;
  return (
    <span
      className={`kotoba-tag ${className}`}
      data-selected={selected || undefined}
      data-clickable={onClick ? 'true' : undefined}
      onClick={onClick}
      {...rest}
    >
      {icon}
      {children}
      {onRemove && (
        <span
          className="kotoba-tag-x"
          role="button"
          aria-label="Remove"
          onClick={(e) => { e.stopPropagation(); onRemove(e); }}
        >×</span>
      )}
    </span>
  );
}
