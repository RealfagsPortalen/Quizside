import { FC } from "react";
import { LatexText } from "./LatexText";

export const ToggleSelect: FC<{
  onClick: () => void;
  checked: boolean;
  label: string;
}> = ({ label, onClick, checked }) => (
  <div>
    <input type="checkbox" onClick={onClick} checked={checked} />
    <label>
      <LatexText latex={label} />
    </label>
  </div>
);
