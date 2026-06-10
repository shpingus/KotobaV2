import React from 'react';

/**
 * Kotoba Card — the base surface. Soft indigo-tinted shadow, generous radius.
 * Pass `interactive` for a hover-lift (use on tappable cards).
 */

const CSS = `
.kotoba-card{
  background:var(--surface-card);
  border:var(--border-thin) solid var(--border-subtle);
  border-radius:var(--radius-lg);
  box-shadow:var(--shadow-sm);
  padding:var(--space-5);
  transition:transform var(--dur-base) var(--ease-out),
             box-shadow var(--dur-base) var(--ease-out);
}
.kotoba-card[data-pad="sm"]{ padding:var(--space-4); }
.kotoba-card[data-pad="lg"]{ padding:var(--space-7); }
.kotoba-card[data-pad="none"]{ padding:0; }
.kotoba-card[data-elevation="flat"]{ box-shadow:none; }
.kotoba-card[data-elevation="md"]{ box-shadow:var(--shadow-md); }
.kotoba-card[data-elevation="lg"]{ box-shadow:var(--shadow-lg); }
.kotoba-card[data-interactive="true"]{ cursor:pointer; }
.kotoba-card[data-interactive="true"]:hover{ transform:translateY(-3px); box-shadow:var(--shadow-lg); }
.kotoba-card[data-interactive="true"]:active{ transform:translateY(-1px); }
.kotoba-card[data-tone="brand"]{ background:var(--brand-subtle); border-color:var(--ai-100); }
.kotoba-card[data-tone="inverse"]{ background:var(--surface-inverse); border-color:transparent; color:var(--text-on-dark); }
`;

function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id; el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

export function Card({
  children,
  pad = 'md',
  elevation = 'sm',
  tone = 'default',
  interactive = false,
  as = 'div',
  className = '',
  ...rest
}) {
  useInjected('kotoba-card-css', CSS);
  const Tag = as;
  return (
    <Tag
      className={`kotoba-card ${className}`}
      data-pad={pad === 'md' ? undefined : pad}
      data-elevation={elevation === 'sm' ? undefined : elevation}
      data-tone={tone === 'default' ? undefined : tone}
      data-interactive={interactive || undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
