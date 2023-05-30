import * as React from "react";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { mockData } from "../../../../mockData";
import { useQuizReducer } from "@features/quiz/quizReducer";
import { QuizQuestion } from "@features/quiz/components/QuizQuestion";
import { QuizResult } from "@features/quiz/components/QuizResult";
import { QuizType, TopicType } from "@types";
import { getUserID } from "../../../../lib/user";
import { useRouter } from "next/router";

interface QuizDetailPageProps {
  quiz: QuizType;
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

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query,
}) => {
  if (!query?.userId)
    return {
      redirect: {
        permanent: false,
        destination: "/no-user",
      },
      props: {},
    };

  let topicsData = fetch(
    `${process.env.API_URL}/topics/${params && params.chapterSlug}/nested/${
      query.userId
    }`
  ).then((res) => res.json());

  let topics: TopicType[] = await topicsData;

  let quiz: QuizType | undefined;

  if (params)
    quiz = topics
      .map(({ quizzes }) => quizzes)
      .flat()
      .find(({ id }) => id === +(params.quizSlug ?? "0"));

  return {
    props: {
      quiz: quiz || null,
    },
  };
};

export default Quiz;
