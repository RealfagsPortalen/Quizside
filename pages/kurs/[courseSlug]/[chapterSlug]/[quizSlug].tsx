import * as React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { mockData } from "../../../../mockData";
import { useQuizReducer } from "@features/quiz/quizReducer";
import { QuizQuestion } from "@features/quiz/components/QuizQuestion";
import { QuizResult } from "@features/quiz/components/QuizResult";

interface QuizDetailPageProps {
  quiz: typeof mockData.courses[0]["chapters"][0]["topics"][0]["quizzes"][0];
}

// Check if page is embedded or not in an iframe
// Source: https://stackoverflow.com/a/326076

const Quiz: React.FC<QuizDetailPageProps> = ({ quiz }) => {
  const [state, dispatch] = useQuizReducer(quiz);
  const question = quiz.questions[state.questionNumber];

  return state.finished ? (
    <QuizResult state={state} dispatch={dispatch} />
  ) : (
    <QuizQuestion state={state} dispatch={dispatch} question={question} />
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
