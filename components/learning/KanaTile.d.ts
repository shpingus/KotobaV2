import * as React from 'react';

/**
 * Character study/answer tile — big kana or kanji with optional reading and
 * meaning. Tactile by default; supports selected/correct/wrong quiz states.
 *
 * @startingPoint section="Learning" subtitle="Kana/kanji study tile" viewport="700x200"
 */
export interface KanaTileProps extends React.HTMLAttributes<HTMLElement> {
  /** The character(s) to display. */
  glyph: string;
  /** Reading (romaji or kana). */
  reading?: string;
  /** English meaning. */
  meaning?: string;
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Visual state. @default "default" */
  state?: 'default' | 'selected' | 'correct' | 'wrong';
  /** Tactile/clickable. Set false for static review tiles. @default true */
  interactive?: boolean;
  /** Override the rendered element. */
  as?: keyof JSX.IntrinsicElements;
}

export function KanaTile(props: KanaTileProps): JSX.Element;
