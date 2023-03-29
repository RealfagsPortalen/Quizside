import * as React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { mockData } from "../../../../mockData";
import { css } from "@emotion/react";
import { useQuizReducer } from "@features/quiz/quizReducer";
import { QuestionCounter } from "@features/quiz/QuestionCounter";
import { ToggleSelect } from "../../../../ui/toggleSelect";
import { Button } from "../../../../ui/button";
import katex from "katex";
import { LatexText } from "../../../../ui/LatexText";

interface QuizDetailPageProps {
  quiz: typeof mockData.courses[0]["chapters"][0]["topics"][0]["quizzes"][0];
}

// Check if page is embedded or not in an iframe
// Source: https://stackoverflow.com/a/326076

const Quiz: React.FC<QuizDetailPageProps> = ({ quiz }) => {
  const [state, dispatch] = useQuizReducer(quiz);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          dispatch({ type: "UP" });
          break;
        case "ArrowDown":
          dispatch({ type: "DOWN" });
          break;
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const question = quiz.questions[state.questionNumber];

  return (
    <main>
      <QuestionCounter
        questionCount={quiz.questions.length}
        questionNumber={state.questionNumber}
      />
      <Button onClick={() => dispatch({ type: "PREVIOUS" })}>Forrige</Button>
      <Button onClick={() => dispatch({ type: "NEXT" })}>Neste</Button>
      <div>
        <h1>
          <LatexText latex={question.questionText} />
        </h1>
      </div>
      <div>
        {question.answerOptions.map((answerOption, i) => (
          <ToggleSelect
            onClick={() => dispatch({ type: "SELECT_ANSWER", answer: i })}
            label={answerOption.optionText}
            checked={state.selectedAnswer === i}
          />
        ))}
      </div>
      <Button onClick={() => dispatch({ type: "CHECK_ANSWER" })}>
        Show answer
      </Button>
      {state.showAnswer && <LatexText latex={question.solution} />}
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const quizzes = await fetch("http://localhost:3000/api/getQuizzes/");
  const data: typeof mockData = await quizzes.json();

  return {
    paths: data.courses
      .map((course) =>
        course.chapters.map((chapter) =>
          chapter.topics.map((topic) =>
            topic.quizzes.map((quiz) => ({
              courseSlug: course.id,
              chapterSlug: chapter.id,
              quizSlug: quiz.id,
            }))
          )
        )
      )
      .flat(3)
      .map((path) => ({ params: path })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const quizzes = await fetch("http://localhost:3000/api/getQuizzes/");

  const quizzesData: typeof mockData = await quizzes.json();

  const quiz = quizzesData.courses
    .find((course) => course.id === context.params.courseSlug)
    ?.chapters.find((chapter) => chapter.id === context.params.chapterSlug)
    ?.topics.map((topic) => topic.quizzes)
    .flat()
    .find((quiz) => quiz.id === context.params.quizSlug);

  return { props: { quiz: quiz } };
};

export default Quiz;
