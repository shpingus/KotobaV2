import * as React from 'react';

/** Horizontal XP bar toward the next level, with level chip and value/goal. */
export interface XPBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current XP. @default 0 */
  value?: number;
  /** XP needed for the next level. @default 100 */
  max?: number;
  /** Current level number — shows the "Lv N" chip when set. */
  level?: number;
  /** Fill color theme. @default "accent" */
  tone?: 'accent' | 'brand' | 'success';
  /** Show the value/goal count. @default true */
  showCount?: boolean;
  /** Unit label. @default "XP" */
  unit?: string;
}

export function XPBar(props: XPBarProps): JSX.Element;
