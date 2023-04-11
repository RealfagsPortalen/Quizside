import { FC } from "react";
import { LatexText } from "@ui/LatexText";

export const QuestionAnswerOption: FC<{
  onChange: () => void;
  checked: boolean;
  label: string;
  questionID: string;
  hasAnswered?: boolean;
  correct: true | false | undefined;
  id: string;
}> = ({ hasAnswered, label, onChange, checked, id, questionID, correct }) => (
  <label
    css={{
      borderRadius: "var(--rounded)",
      padding: "1rem 0.5rem",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      position: "relative",
      backgroundColor:
        hasAnswered && correct
          ? "var(--color-success-300) !important"
          : "var(--color-gray-200)",

      "&:has(input:checked)": {
        backgroundColor: "var(--color-gray-300)",
      },
      "&:hover": {
        backgroundColor: "var(--color-gray-300)",
      },
      "&+label": {
        marginTop: "1rem",
      },
      "& input": {
        position: "absolute",
        opacity: 0,
        height: 0,
        width: 0,
        userSelect: "none",
      },
      "& > div": {
        position: "relative",
        display: "inline-block",
        width: "1rem",
        height: "1rem",
        borderRadius: "50%",
        border: "1px solid var(--color-gray-900)",
        marginRight: "0.5rem",
      },
      "& > div:after": {
        content: '""',
        position: "absolute",
        display: "none",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "0.625rem",
        height: "0.625rem",
        borderRadius: "50%",
        backgroundColor: "var(--color-gray-900)",
      },
      "& input:checked ~ div:after": {
        display: "block",
      },
    }}
    htmlFor={id}
  >
    <input
      id={id}
      type="radio"
      onChange={onChange}
      checked={checked}
      name={questionID}
    />
    <div />
    <LatexText latex={label} />
  </label>
);
