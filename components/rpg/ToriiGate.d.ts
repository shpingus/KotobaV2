import * as React from 'react';

/**
 * The vermillion torii gate — marks passage. Unit checkpoints on the path,
 * grand JLPT tier gates, and celebration moments. Flat geometric SVG with an
 * optional plaque (gaku) label.
 *
 * @startingPoint section="RPG" subtitle="Vermillion gate with plaque label" viewport="700x190"
 */
export interface ToriiGateProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Width in px. @default 96 */
  size?: number;
  /** Gate state. @default "open" */
  state?: 'open' | 'locked' | 'passed';
  /** Short label on the hanging plaque, e.g. "二" or "N4". */
  plaque?: string;
  /** Caption rendered under the gate. */
  caption?: string;
}

export function ToriiGate(props: ToriiGateProps): JSX.Element;
