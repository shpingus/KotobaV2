import * as React from 'react';

/**
 * JLPT tier marker (Pre-N5 → N1), each with its own belt-color. Optionally
 * shows progress *within* the tier as a base bar.
 *
 * @startingPoint section="Progress" subtitle="JLPT tier level badge" viewport="700x160"
 */
export interface LevelBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Which tier. @default "n5" */
  tier?: 'pre' | 'n5' | 'n4' | 'n3' | 'n2' | 'n1';
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Soft (tinted) fill instead of solid belt-color. */
  soft?: boolean;
  /** Show the "JLPT" caption above the level. @default true */
  showCaption?: boolean;
  /** Progress within the tier, 0–100. Renders a base bar when set. */
  progress?: number | null;
}

export function LevelBadge(props: LevelBadgeProps): JSX.Element;
