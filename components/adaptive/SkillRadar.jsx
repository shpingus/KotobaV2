import React from 'react';

/**
 * Kotoba SkillRadar — a 4-axis radar of the learner's skills. The shape makes
 * weakness obvious at a glance; sensei points at the dent.
 */

export function SkillRadar({
  stats = [],            // [{ label, jp, value }] — up to 6 axes, typically 4
  max = 100,
  size = 180,
  color = 'var(--brand)',
  className = '',
  ...rest
}) {
  const n = stats.length || 1;
  const cx = size / 2, cy = size / 2;
  const rMax = size * 0.34;
  const angle = (i) => (Math.PI * 2 * i) / n - Math.PI / 2;
  const pt = (i, r) => [cx + r * Math.cos(angle(i)), cy + r * Math.sin(angle(i))];
  const poly = (r) => stats.map((_, i) => pt(i, r).join(',')).join(' ');
  const dataPoly = stats.map((s, i) => pt(i, rMax * Math.max(0.05, Math.min(1, s.value / max))).join(',')).join(' ');
  const weakest = stats.reduce((w, s, i) => (s.value < stats[w].value ? i : w), 0);

  return (
    <div className={`kotoba-radar ${className}`} style={{ display: 'inline-flex' }} {...rest}>
      <svg width={size} height={size} aria-hidden="true">
        {[1, 0.66, 0.33].map((f) => (
          <polygon key={f} points={poly(rMax * f)} fill="none" stroke="var(--border-subtle)" strokeWidth="1.5" />
        ))}
        {stats.map((_, i) => {
          const [x, y] = pt(i, rMax);
          return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="var(--border-subtle)" strokeWidth="1.5" />;
        })}
        <polygon points={dataPoly} fill={color} opacity="0.22" />
        <polygon points={dataPoly} fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
        {stats.map((s, i) => {
          const [x, y] = pt(i, rMax * Math.max(0.05, Math.min(1, s.value / max)));
          const weak = i === weakest;
          return <circle key={i} cx={x} cy={y} r={weak ? 5 : 3.5} fill={weak ? 'var(--torii)' : color} stroke="#fff" strokeWidth="2" />;
        })}
        {stats.map((s, i) => {
          const [x, y] = pt(i, rMax + size * 0.105);
          return (
            <g key={i}>
              <text x={x} y={y - 3} textAnchor="middle"
                    fontFamily="var(--font-jp-display)" fontWeight="700" fontSize={size * 0.075}
                    fill={i === weakest ? 'var(--torii)' : 'var(--text-strong)'}>{s.jp}</text>
              <text x={x} y={y + size * 0.062} textAnchor="middle"
                    fontFamily="var(--font-body)" fontWeight="600" fontSize={size * 0.052}
                    fill="var(--text-muted)">{s.label}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
