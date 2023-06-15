import * as React from "react";
import { Icon } from "./Icon/Icon";
import { IconType } from "./Icon/iconlib";
import { colors } from "@ui/design-tokens";

interface CorrectSymbolProps {
  variant: "correct" | "incorrect" | "unanswered";
  size: 24 | 32 | 48;
}

export const CorrectSymbol: React.FC<CorrectSymbolProps> = ({
  size,
  variant,
}) => {
  return (
    <div
      css={{
        backgroundColor: {
          correct: colors.success[300],
          incorrect: colors.error[300],
          unanswered: colors.secondary[200],
        }[variant],
        width: size,
        height: size,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon
        icon={
          {
            correct: "check",
            incorrect: "close",
            unanswered: "question",
          }[variant] as IconType
        }
        size={(size - 8) as 24}
      />
    </div>
  );
};
