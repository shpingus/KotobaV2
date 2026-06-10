import * as React from 'react';

/** Labelled text field with helper/error states and optional leading icon. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label rendered above the input. */
  label?: string;
  /** Helper text below the field. */
  helperText?: string;
  /** Error message — sets the invalid styling and replaces helper text. */
  error?: string;
  /** Leading icon node. */
  icon?: React.ReactNode;
  /** Marks the field required (adds * and required attr). */
  required?: boolean;
}

export function Input(props: InputProps): JSX.Element;
