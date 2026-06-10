import * as React from 'react';

/** A quest card — goal, progress bar, and reward chip. Optional momentum-builders along the path. */
export interface QuestCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Quest goal, e.g. "Learn 20 food words". */
  title: string;
  /** Leading icon node (lucide icon). */
  icon?: React.ReactNode;
  /** Current progress. @default 0 */
  value?: number;
  /** Goal amount. @default 1 */
  max?: number;
  /** Reward chip text, e.g. "+80 XP". */
  reward?: string;
  /** Custom progress caption (defaults to "value / max"). */
  subtitle?: string;
  /** Completed state. */
  done?: boolean;
}

export function QuestCard(props: QuestCardProps): JSX.Element;
