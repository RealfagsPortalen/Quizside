import * as React from "react";
import { Icon } from "./Icon/Icon";

interface CorrectSymbolProps {
  correct: boolean;
  size: 24 | 32 | 48;
}

export const CorrectSymbol: React.FC<CorrectSymbolProps> = ({
  size,
  correct,
}) => {
  return (
    <div
      css={{
        backgroundColor: correct
          ? "var(--color-success-300)"
          : "var(--color-error-300)",
        width: size,
        height: size,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon icon={correct ? "check" : "close"} />
    </div>
  );
};
