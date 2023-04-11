import { ButtonHTMLAttributes, FC } from "react";
import { css, Interpolation, Theme } from "@emotion/react";
import { colors } from "./colors";

export const Button: FC<
  {
    children: React.ReactNode;
    css?: Interpolation<Theme>;
  } & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }) => {
  return (
    <button
      css={{
        padding: "0.5rem 1rem",
        backgroundColor: colors.primary[200],
        border: "none",
        borderRadius: "0.5rem",
        display: "flex",
        gap: "0.5rem",
        alignItems: "center",
        ":disabled": {
          backgroundColor: colors.primary[300],
        },
        ...css,
      }}
      {...props}
    >
      {children}
    </button>
  );
};
