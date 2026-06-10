import * as React from 'react';

/**
 * Compact, icon-only button (nav, close, audio replay, etc). Circular by
 * default; pass `square` for a rounded-square. Always provide `label` for a11y.
 */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "neutral" */
  variant?: 'neutral' | 'brand' | 'accent' | 'ghost';
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Rounded-square instead of circular. */
  square?: boolean;
  /** Accessible label (sets aria-label). */
  label?: string;
  /** The icon node. */
  children?: React.ReactNode;
}

export function IconButton(props: IconButtonProps): JSX.Element;
