import React from 'react';

/**
 * Kotoba Input — labelled text field with helper/error states and optional
 * leading icon. Calm by default, indigo focus ring, persimmon-free errors.
 */

const CSS = `
.kotoba-field{ display:flex; flex-direction:column; gap:6px; font-family:var(--font-body); }
.kotoba-field-label{ font-size:var(--text-sm); font-weight:600; color:var(--text-strong); }
.kotoba-field-label .req{ color:var(--danger); margin-left:2px; }
.kotoba-input-wrap{ position:relative; display:flex; align-items:center; }
.kotoba-input-wrap .kotoba-input-icon{
  position:absolute; left:14px; display:inline-flex; color:var(--text-muted); pointer-events:none;
}
.kotoba-input-wrap .kotoba-input-icon svg, .kotoba-input-wrap .kotoba-input-icon i{ width:18px; height:18px; }
.kotoba-input{
  width:100%; box-sizing:border-box; font-family:var(--font-body); font-size:var(--text-md);
  color:var(--text-strong); background:var(--surface-card);
  border:var(--border-base) solid var(--border-default);
  border-radius:var(--radius-md); padding:12px 14px; min-height:48px;
  transition:border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
  outline:none;
}
.kotoba-input::placeholder{ color:var(--text-faint); }
.kotoba-input:hover{ border-color:var(--border-strong); }
.kotoba-input:focus{ border-color:var(--brand); box-shadow:var(--ring); }
.kotoba-input-wrap[data-has-icon="true"] .kotoba-input{ padding-left:42px; }
.kotoba-field[data-invalid="true"] .kotoba-input{ border-color:var(--danger); }
.kotoba-field[data-invalid="true"] .kotoba-input:focus{ box-shadow:0 0 0 4px var(--danger-soft); }
.kotoba-field-help{ font-size:var(--text-xs); color:var(--text-muted); }
.kotoba-field[data-invalid="true"] .kotoba-field-help{ color:var(--danger); }
.kotoba-input:disabled{ background:var(--surface-sunken); color:var(--text-faint); cursor:not-allowed; }
`;

function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id; el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

export function Input({
  label,
  helperText,
  error,
  icon = null,
  required = false,
  id,
  className = '',
  ...rest
}) {
  useInjected('kotoba-input-css', CSS);
  const autoId = React.useId();
  const fieldId = id || autoId;
  const invalid = !!error;
  const help = error || helperText;
  return (
    <div className={`kotoba-field ${className}`} data-invalid={invalid || undefined}>
      {label && (
        <label className="kotoba-field-label" htmlFor={fieldId}>
          {label}{required && <span className="req">*</span>}
        </label>
      )}
      <div className="kotoba-input-wrap" data-has-icon={icon ? 'true' : undefined}>
        {icon && <span className="kotoba-input-icon">{icon}</span>}
        <input
          id={fieldId}
          className="kotoba-input"
          aria-invalid={invalid || undefined}
          required={required}
          {...rest}
        />
      </div>
      {help && <span className="kotoba-field-help">{help}</span>}
    </div>
  );
}
