import * as React from "react";
import { LatexText } from "../../../ui/LatexText";
import { borderRadius } from "@ui/design-tokens";

interface QuestionSolutionProps {
  solution: string;
}

export const QuestionSolution: React.FC<QuestionSolutionProps> = ({
  solution,
}) => {
  return (
    <div
      css={{
        backgroundColor: "var(--color-gray-100)",
        borderRadius: borderRadius.default,
        padding: "1rem",
        marginTop: "2rem",
      }}
    >
      <h4 css={{ marginBottom: "1rem" }}>Løsningsforslag</h4>
      <LatexText latex={solution} />
    </div>
  );
};
