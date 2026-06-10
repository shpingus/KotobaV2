import * as React from 'react';

/**
 * Circular user image or initials. Optional progress ring (conic) to show
 * streak/level around the profile photo.
 */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. Falls back to initials from `name` when absent. */
  src?: string;
  /** Full name, used for initials + alt text. */
  name?: string;
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Show a progress ring around the avatar. */
  ring?: boolean;
  /** Ring fill percentage (0–100). @default 70 */
  ringPercent?: number;
}

export function Avatar(props: AvatarProps): JSX.Element;
