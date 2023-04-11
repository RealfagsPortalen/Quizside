import * as React from "react";
import { Button } from "@ui/Button";
import { QuizActions, QuizState } from "../quizReducer";
import styled from "@emotion/styled";
import { colors } from "@ui/design-tokens";
import { IconType } from "@ui/Icon/iconlib";

interface QuestionButtonRowProps {
  state: QuizState;
  dispatch: React.Dispatch<QuizActions>;
  hasAnswered: boolean;
}

export const QuestionButtonRow: React.FC<QuestionButtonRowProps> = ({
  state,
  dispatch,
  hasAnswered,
}) => {
  const Container = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  `;

  const isLastQuestion =
    state.questionNumber === state.quiz.questions.length - 1;

  const ButtonWithTooltip = ({
    children,
    onClick,
    icon,
  }: {
    children: React.ReactNode;
    onClick: () => void;
    icon?: IconType;
  }) => {
    return (
      <div>
        <Button variant="primary" onClick={onClick} icon={icon}>
          {children}
        </Button>
        <span css={{ fontSize: "0.75rem", color: colors.gray[600] }}>
          Eller trykk Enter ↵
        </span>
      </div>
    );
  };

  if (!hasAnswered) {
    return (
      <Container>
        <ButtonWithTooltip onClick={() => dispatch({ type: "CHECK_ANSWER" })}>
          Sjekk svar
        </ButtonWithTooltip>
      </Container>
    );
  }

  return (
    <Container>
      <Button
        variant="secondary"
        onClick={() =>
          dispatch({ type: "SHOW_ANSWER", show: !state.showAnswer })
        }
      >
        {state.showAnswer ? "Skjul løsningsforslag" : "Vis løsningsforslag"}
      </Button>
      <ButtonWithTooltip
        icon="rightArrow"
        onClick={() => dispatch({ type: "NEXT" })}
      >
        {isLastQuestion ? "Se resultat" : "Neste spørsmål"}
      </ButtonWithTooltip>
    </Container>
  );
};
