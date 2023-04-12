import { GetStaticPaths, GetStaticProps } from "next";
import * as React from "react";
import { Chapter, Database } from "../../../../mockData";

interface TopicOverviewPageProps {
  chapter: Chapter;
}

const TopicOverviewPage: React.FC<TopicOverviewPageProps> = ({ chapter }) => {
  console.log(chapter);
  return <div></div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const quizzes = await fetch("http://localhost:3000/api/getQuizzes/");
  const data: Database = await quizzes.json();

  return {
    paths: data.courses
      .map((course) =>
        course.chapters.map((chapter) => ({
          courseSlug: course.id,
          chapterSlug: chapter.id,
        }))
      )
      .flat(3)
      .map((path) => ({ params: path })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const quizzes = await fetch("http://localhost:3000/api/getQuizzes/");

  const quizzesData: Database = await quizzes.json();

  const chapter = quizzesData.courses
    .find((course) => course.id === context.params.courseSlug)
    ?.chapters.find((chapter) => chapter.id === context.params.chapterSlug);

  return { props: { chapter: chapter } };
};

export default TopicOverviewPage;
