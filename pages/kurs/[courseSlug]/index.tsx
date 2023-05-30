import * as React from "react";
import { mockData } from "../../../mockData";
import { ChapterThumbnail } from "@features/chapter/ChapterThumbnail";
import { ChapterType, ChapterUserStatisticsType, CourseType } from "@types";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { getUserID } from "../../../lib/user";
import { Layout } from "@ui/Layout";
import { Global } from "@emotion/react";
import { colors } from "@ui/design-tokens";
import { Container } from "@ui/Container";

interface TopicOverviewPageProps {
  chapters: (ChapterType & { userStatistics: ChapterUserStatisticsType })[];
  course: CourseType;
}

const TopicOverviewPage: React.FC<TopicOverviewPageProps> = ({
  chapters,
  course,
}) => {
  return (
    <Layout>
      <Global styles={{ body: { backgroundColor: colors.bg } }} />
      <Container
        className={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <h1>{course.name}</h1>
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          {chapters.map((chapter) => (
            <ChapterThumbnail
              key={chapter.id}
              title={chapter.name}
              href={`/kurs/${course.id}/${chapter.id}`}
              unsolvedQuizzes={
                chapter.userStatistics.totalQuestions -
                chapter.userStatistics.totalCorrectlyAnswered
              }
              solvedQuestions={chapter.userStatistics.totalCorrectlyAnswered}
              attemptedQuestions={chapter.userStatistics.totalAnswered}
              totalQuestions={chapter.userStatistics.totalQuestions}
            />
          ))}
        </div>
      </Container>
    </Layout>
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

  let chaptersData = fetch(
    `${process.env.API_URL}/chapters/user-statistics/${
      params && params.courseSlug
    }`,
    {
      method: "POST",
      body: JSON.stringify({
        userId: query?.userId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());

  let coursesData = fetch(`${process.env.API_URL}/courses/user-statistics/`, {
    method: "POST",
    body: JSON.stringify({
      userId: query?.userId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.json();
  });

  let [chapters, courses] = await Promise.all([chaptersData, coursesData]);

  courses = courses.find(
    ({ id }: ChapterType) =>
      id === (params && params.courseSlug && +params.courseSlug)
  );

  return {
    props: {
      chapters,
      course: courses,
    },
  };
};

export default TopicOverviewPage;
