import * as React from 'react';

/**
 * A stepping-stone node on the learning path. Tactile circular button with
 * states for locked / available / current / complete / mastered. The current
 * node pulses to show the next step.
 *
 * @startingPoint section="Learning" subtitle="Path stepping-stone node" viewport="700x220"
 */
export interface LessonNodeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Node state. @default "available" */
  state?: 'locked' | 'available' | 'complete' | 'mastered';
  /** Built-in glyph for available nodes. @default "book" */
  icon?: 'book' | 'star';
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Marks this as the learner's current step (adds pulse + START bubble). */
  current?: boolean;
  /** Caption under the node. */
  label?: string;
  /** Text in the START bubble. @default "START" */
  startLabel?: string;
}

export function LessonNode(props: LessonNodeProps): JSX.Element;
