import * as React from 'react';

/**
 * One character skill stat — kanji chip + label + bar + value. Canonical
 * stats: Vocabulary 語彙 · Grammar 文法 · Listening 聴解 · Reading 読解.
 */
export interface StatBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** English skill name, e.g. "Vocabulary". */
  label: string;
  /** Kanji chip, e.g. "語彙". */
  jp?: string;
  /** Current stat value. @default 0 */
  value?: number;
  /** Stat cap. @default 100 */
  max?: number;
  /** Color tone. @default "brand" */
  tone?: 'brand' | 'accent' | 'success' | 'gold' | 'torii';
  /** Mark as the learner's weak stat (sensei focus). */
  weak?: boolean;
}

export function StatBar(props: StatBarProps): JSX.Element;
