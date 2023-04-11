import * as React from "react";
import { iconlib, IconType } from "./iconlib";

interface IconProps {
  icon: IconType;
  size?: 16 | 24 | 32 | 48;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  icon,
  size = 24,
  color = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      width={size}
      height={size}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconlib[icon]}
    </svg>
  );
};
