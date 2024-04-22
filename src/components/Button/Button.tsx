import { SendBtn } from "../../styled-components/Button.styles.ts";
import React from "react";

function Button({ children, isForm = true ,...props }: ButtonProps) {
  const id = React.useId();
  return (
    <SendBtn type={isForm?"submit": "button"} id={`${id}-advance`} {...props}>
      {children}
    </SendBtn>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  isForm?: boolean;
}

export default Button;
