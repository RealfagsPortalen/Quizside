import { ButtonHTMLAttributes, FC } from "react";
import { css } from "@emotion/react";

export const Button: FC<
  {
    children: React.ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
