import * as React from 'react';

/**
 * The aggregate "word power" (言力) medallion — one number summing the four
 * skill stats. Gates boss challenges ("requires Power 40+").
 */
export interface PowerLevelProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The power number. @default 0 */
  value?: number;
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Text under the number. @default "Power" */
  label?: string;
  /** @default true */
  showLabel?: boolean;
}

export function PowerLevel(props: PowerLevelProps): JSX.Element;
