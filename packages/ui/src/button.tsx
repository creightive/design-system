import React, { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ children, ...other }: ButtonProps, ref): JSX.Element {
    return (
      <button type="button" {...other} ref={ref}>
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";
