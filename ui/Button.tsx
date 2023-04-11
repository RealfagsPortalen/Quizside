import { Interpolation, Theme } from "@emotion/react";
import { ButtonHTMLAttributes, FC } from "react";
import { colors, borderRadius } from "./design-tokens";
import { Icon } from "./Icon/Icon";
import { IconType } from "./Icon/iconlib";

export const Button: FC<
  {
    children: React.ReactNode;
    variant: "primary" | "secondary";
    icon?: IconType;
    tooltip?: string;
  } & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, variant = "primary", icon, tooltip, ...props }) => {
  const style = {
    base: {
      padding: "0.5rem 1rem",
      border: "none",
      borderRadius: borderRadius.default,
      display: "flex",
      gap: "0.5rem",
      alignItems: "center",
      height: "2.5rem", // 40px
      cursor: "pointer",
      transition: "background-color 0.2s ease-in-out",
      ":disabled": {
        backgroundColor: colors.primary[300],
      },
    },
    primary: {
      backgroundColor: colors.primary[200],
      color: colors.gray[900],
      "&:hover": {
        backgroundColor: colors.primary[300],
      },
    },
    secondary: {
      backgroundColor: colors.gray[200],
      color: colors.gray[900],
      "&:hover": {
        backgroundColor: colors.gray[300],
      },
    },
  };
  return (
    <button css={{ ...style.base, ...(style[variant] || {}) }} {...props}>
      {children}
      {icon && <Icon icon={icon} size={24} />}
    </button>
  );
};
