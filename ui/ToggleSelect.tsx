import { FC } from "react";
import { LatexText } from "./LatexText";

export const ToggleSelect: FC<{
  onChange: () => void;
  checked: boolean;
  label: string;
}> = ({ label, onChange, checked }) => (
  <div>
    <input type="checkbox" onChange={onChange} checked={checked} />
    <label>
      <LatexText latex={label} />
    </label>
  </div>
);
