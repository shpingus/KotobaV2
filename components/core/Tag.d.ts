import * as React from 'react';

/** Chip for topics/filters. Selectable (toggle) and/or removable. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Selected (active filter) state. */
  selected?: boolean;
  /** When provided, shows a × and calls this on remove. */
  onRemove?: (e: React.MouseEvent) => void;
  /** Leading icon node. */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export function Tag(props: TagProps): JSX.Element;
