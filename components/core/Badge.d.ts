import * as React from 'react';

/** Small status/count pill. Soft-filled by default; pass `solid` for emphasis. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. @default "brand" */
  tone?: 'brand' | 'accent' | 'success' | 'warning' | 'danger' | 'neutral';
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Solid (high-emphasis) fill instead of soft. */
  solid?: boolean;
  /** Show a leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
