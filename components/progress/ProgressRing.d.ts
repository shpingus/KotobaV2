import * as React from 'react';

/**
 * Circular SVG progress ring with free-form center content (number, icon, %).
 * Used for daily goals, lesson-set completion, and review progress.
 *
 * @startingPoint section="Progress" subtitle="Circular goal/progress ring" viewport="700x180"
 */
export interface ProgressRingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current value. @default 0 */
  value?: number;
  /** Maximum value. @default 100 */
  max?: number;
  /** Diameter in px. @default 72 */
  size?: number;
  /** Stroke width in px. @default 8 */
  thickness?: number;
  /** Progress stroke color (CSS value/var). @default "var(--brand)" */
  color?: string;
  /** Track color. @default "var(--surface-sunken)" */
  track?: string;
  /** Rounded stroke caps. @default true */
  rounded?: boolean;
  /** Center content. */
  children?: React.ReactNode;
}

export function ProgressRing(props: ProgressRingProps): JSX.Element;
