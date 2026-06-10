import React from 'react';

/**
 * Kotoba ProgressRing — circular progress indicator (SVG). Renders any content
 * in the center (a number, icon, or %). Used for daily goals and lesson sets.
 */

export function ProgressRing({
  value = 0,
  max = 100,
  size = 72,
  thickness = 8,
  color = 'var(--brand)',
  track = 'var(--surface-sunken)',
  rounded = true,
  children,
  className = '',
  ...rest
}) {
  const pct = Math.max(0, Math.min(1, max ? value / max : 0));
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - pct);
  return (
    <div
      className={`kotoba-ring ${className}`}
      style={{ position: 'relative', width: size, height: size, display: 'inline-flex' }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      {...rest}
    >
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={thickness} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={thickness}
          strokeLinecap={rounded ? 'round' : 'butt'}
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset var(--dur-slow) var(--ease-out)' }}
        />
      </svg>
      <div
        style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-num)', fontWeight: 700, color: 'var(--text-strong)',
        }}
      >
        {children}
      </div>
    </div>
  );
}
