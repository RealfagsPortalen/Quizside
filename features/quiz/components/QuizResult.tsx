import { Button } from "@ui/Button";
import { inIframe } from "../lib";
import { CorrectSymbol } from "@ui/CorrectSymbol";
import { QuizActions, QuizState } from "../quizReducer";

interface QuzResultProps {
  state: QuizState;
  dispatch: React.Dispatch<QuizActions>;
}

export const QuizResult: React.FC<QuzResultProps> = ({ state, dispatch }) => {
  const correct = state.answers.filter((answer) => answer.correct).length;
  return (
    <div
      css={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <h1>
        Du klarte {correct} / {state.answers.length}
      </h1>
      <div css={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        {state.answers.map((answer, index) => {
          return (
            <CorrectSymbol correct={answer.correct} key={index} size={48} />
          );
        })}
      </div>
      <div css={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
        {inIframe() && (
          <>
            <p>Fortsett til neste leksjon</p>
            <p>eller</p>
          </>
        )}
        <Button
          variant="secondary"
          onClick={() => dispatch({ type: "RESTART" })}
        >
          Prøv igjen
        </Button>
      </div>
    </div>
  );
};
