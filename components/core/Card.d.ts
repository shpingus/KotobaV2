import * as React from 'react';

/**
 * Base surface container with soft indigo-tinted shadow and generous radius.
 * Pass `interactive` for a hover-lift on tappable cards.
 *
 * @startingPoint section="Core" subtitle="Surface card with hover-lift" viewport="700x200"
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Inner padding. @default "md" */
  pad?: 'none' | 'sm' | 'md' | 'lg';
  /** Shadow depth. @default "sm" */
  elevation?: 'flat' | 'sm' | 'md' | 'lg';
  /** Surface tone. @default "default" */
  tone?: 'default' | 'brand' | 'inverse';
  /** Adds hover-lift + pointer cursor for tappable cards. */
  interactive?: boolean;
  /** Render element. @default "div" */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
