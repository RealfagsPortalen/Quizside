import * as React from "react";
import { BlockMath, InlineMath } from "react-katex";

interface LatexTextProps {
  latex: string;
}

export const LatexText: React.FC<LatexTextProps> = ({ latex }) => {
  return (
    <InlineMath
      math={latex}
      renderError={(error) => {
        // console.error(error);

        return <p>Fail: {error.name}</p>;
      }}
    />
  );
};
