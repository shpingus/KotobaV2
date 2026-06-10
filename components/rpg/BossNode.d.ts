import * as React from 'react';

/**
 * An optional boss encounter on or near the path — a pixel oni guarding bonus
 * rewards. Bosses are side-quests; they never block the main path.
 */
export interface BossNodeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Encounter state. @default "available" */
  state?: 'available' | 'locked' | 'defeated';
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Caption under the node, e.g. "Hiragana Oni". */
  label?: string;
  /** Flag text above the node. @default "BOSS" (shows "CLEAR" when defeated) */
  flag?: string;
}

export function BossNode(props: BossNodeProps): JSX.Element;

/** Bare oni sprite (no node chrome) — for battle headers, intros, lists. */
export interface PixelOniProps extends React.SVGAttributes<SVGSVGElement> {
  /** Width in px. @default 40 */
  size?: number;
}

export function PixelOni(props: PixelOniProps): JSX.Element;
