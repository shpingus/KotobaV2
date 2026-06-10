import * as React from 'react';

/**
 * The learner's kotodama (言霊, "word spirit") — a pixel-art companion that
 * walks the path and evolves as your Japanese grows. Pure SVG, no assets.
 *
 * @startingPoint section="RPG" subtitle="Pixel kotodama companion, 3 stages" viewport="700x190"
 */
export interface CompanionProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Evolution stage. 1 newborn spirit · 2 scarf traveler · 3 gold-touched guardian. @default 1 */
  stage?: 1 | 2 | 3;
  /** Width in px (height scales). @default 72 */
  size?: number;
  /** Gentle floating idle animation. @default false */
  floating?: boolean;
}

export function Companion(props: CompanionProps): JSX.Element;

/** Low-level pixel-matrix renderer (crisp SVG rects). Used by Companion/BossNode. */
export interface PixelSpriteProps extends React.SVGAttributes<SVGSVGElement> {
  /** Array of equal-length strings; each char indexes the palette, '.' = transparent. */
  matrix: string[];
  /** Char → CSS color map. Defaults to the kotodama palette. */
  palette?: Record<string, string>;
  /** Width in px. @default 72 */
  size?: number;
}

export function PixelSprite(props: PixelSpriteProps): JSX.Element;
