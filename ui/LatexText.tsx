import * as React from "react";
import { BlockMath } from "react-katex";

interface LatexTextProps {
  latex: string;
}

export const LatexText: React.FC<LatexTextProps> = ({ latex }) => {
  return (
    <BlockMath
      math={latex}
      renderError={(error) => {
        console.error(error);

        return <div>Fail: {error.name}</div>;
      }}
    />
  );
};
