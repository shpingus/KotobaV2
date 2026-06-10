import * as React from 'react';

/**
 * The daily-streak flame with consecutive-day count. Persimmon when active,
 * gold when at-risk, grey when broken.
 *
 * @startingPoint section="Progress" subtitle="Daily streak flame counter" viewport="700x140"
 */
export interface StreakCounterProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Consecutive-day count. @default 0 */
  days?: number;
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Streak state. @default "active" */
  state?: 'active' | 'risk' | 'off';
  /** Show the "days" label. @default true */
  showLabel?: boolean;
}

export function StreakCounter(props: StreakCounterProps): JSX.Element;
