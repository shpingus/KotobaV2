import * as React from 'react';

/**
 * The primary tactile action button. Pill-shaped with a 3-D bottom edge
 * that compresses on press. Use `primary` for the main path-forward action,
 * `accent` for energetic/streak CTAs, `secondary`/`ghost` for lesser actions.
 *
 * @startingPoint section="Core" subtitle="Tactile pill button with 3-D press" viewport="700x160"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'accent' | 'success' | 'secondary' | 'ghost' | 'danger';
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to fill container width. */
  fullWidth?: boolean;
  /** Element/icon rendered before the label. */
  icon?: React.ReactNode;
  /** Element/icon rendered after the label. */
  iconRight?: React.ReactNode;
  /** Render as a different element, e.g. "a". @default "button" */
  as?: 'button' | 'a';
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
