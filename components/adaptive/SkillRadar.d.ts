import * as React from 'react';

/**
 * A 4-axis radar of the learner's skills — the shape makes weakness obvious
 * at a glance. The weakest axis is automatically marked in torii red.
 */
export interface SkillRadarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Axes, typically the 4 canonical stats: [{ label, jp, value }]. */
  stats: { label: string; jp: string; value: number }[];
  /** Axis max. @default 100 */
  max?: number;
  /** Square size in px. @default 180 */
  size?: number;
  /** Fill/stroke color. @default "var(--brand)" */
  color?: string;
}

export function SkillRadar(props: SkillRadarProps): JSX.Element;
