import React from 'react';

/**
 * Kotoba SenseiCard — the adaptive-learning voice. Sensei notices patterns
 * (confusions, weak skills, due reviews) and offers a crafted practice set.
 * This is where the LLM layer surfaces in the UI: specific, kind, actionable.
 */

const Sparkle = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M12 2l1.9 5.7L20 9.6l-5.4 2.4L12 18l-2.6-6L4 9.6l6.1-1.9L12 2z" />
    <path d="M19 14l.9 2.6L22.5 18l-2.6 1.4L19 22l-.9-2.6L15.5 18l2.6-1.4L19 14z" opacity="0.7" />
  </svg>
);

const CSS = `
.kotoba-sensei{
  position:relative; width:100%; box-sizing:border-box;
  background:var(--brand-subtle);
  border:var(--border-base) solid var(--ai-200);
  border-radius:var(--radius-lg); padding:16px;
  font-family:var(--font-body); overflow:hidden;
}
.kotoba-sensei-head{ display:flex; align-items:center; gap:8px; margin-bottom:8px; }
.kotoba-sensei-chip{
  display:inline-flex; align-items:center; justify-content:center;
  width:30px; height:30px; border-radius:50%;
  background:var(--brand); color:#fff; flex:none;
}
.kotoba-sensei-eyebrow{
  font-size:var(--text-3xs); font-weight:800; letter-spacing:var(--tracking-caps);
  text-transform:uppercase; color:var(--brand-strong);
}
.kotoba-sensei-title{ font-size:var(--text-md); font-weight:700; color:var(--text-strong); line-height:1.3; }
.kotoba-sensei-body{ font-size:var(--text-sm); color:var(--text-body); line-height:1.5; margin-top:6px; }
.kotoba-sensei-body .jp, .kotoba-sensei-body .kotoba-sensei-jp{
  font-family:var(--font-jp-display); font-weight:700; color:var(--brand-strong);
  background:#fff; border-radius:6px; padding:1px 6px; margin:0 1px;
}
.kotoba-sensei-actions{ display:flex; gap:10px; margin-top:14px; align-items:center; }
`;

function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id; el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

export function SenseiCard({
  eyebrow = 'Sensei noticed',
  title,
  children,
  actions,
  className = '',
  ...rest
}) {
  useInjected('kotoba-sensei-css', CSS);
  return (
    <div className={`kotoba-sensei ${className}`} {...rest}>
      <div className="kotoba-sensei-head">
        <span className="kotoba-sensei-chip"><Sparkle /></span>
        <span className="kotoba-sensei-eyebrow">{eyebrow}</span>
      </div>
      {title && <div className="kotoba-sensei-title">{title}</div>}
      {children && <div className="kotoba-sensei-body">{children}</div>}
      {actions && <div className="kotoba-sensei-actions">{actions}</div>}
    </div>
  );
}

/** Small inline chip marking adaptive content, e.g. on a tuned lesson. */
export function SenseiChip({ children = 'Tuned for you', className = '', ...rest }) {
  useInjected('kotoba-sensei-css', CSS);
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 5,
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-2xs)', fontWeight: 700,
        color: 'var(--brand-strong)', background: 'var(--brand-soft)',
        padding: '4px 10px', borderRadius: 'var(--radius-pill)',
      }}
      {...rest}
    >
      <Sparkle />
      {children}
    </span>
  );
}
