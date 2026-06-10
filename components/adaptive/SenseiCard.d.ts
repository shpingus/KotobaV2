import * as React from 'react';

/**
 * The adaptive-learning voice — sensei notices patterns (confusions, weak
 * skills) and offers a crafted practice set. The LLM layer's UI surface:
 * specific, kind, actionable.
 *
 * @startingPoint section="Adaptive" subtitle="Adaptive insight card" viewport="700x220"
 */
export interface SenseiCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tiny overline. @default "Sensei noticed" */
  eyebrow?: string;
  /** Headline insight, e.g. "You mix up ね and ぬ". */
  title?: string;
  /** Body content; wrap Japanese in <span className="jp"> for highlight chips. */
  children?: React.ReactNode;
  /** Action row (Buttons). */
  actions?: React.ReactNode;
}

export function SenseiCard(props: SenseiCardProps): JSX.Element;

/** Small inline chip marking adaptive content (e.g. a tuned lesson). */
export interface SenseiChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Chip text. @default "Tuned for you" */
  children?: React.ReactNode;
}

export function SenseiChip(props: SenseiChipProps): JSX.Element;
