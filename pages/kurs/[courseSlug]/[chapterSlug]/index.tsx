import { QuizThumbnail } from "@features/chapterOverview/QuizThumbnail";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import * as React from "react";
import { colors } from "@ui/design-tokens";
import { Container } from "@ui/Container";
import { QuestionList } from "@features/chapterOverview/QuestionList";
import { Breadcrumb } from "@ui/Breadcrumb";
import { ChapterType, CourseType, QuizType, TopicType } from "@types";
import { getUserID } from "../../../../lib/user";
import { useRouter } from "next/router";

interface TopicOverviewPageProps {
  chapter: ChapterType;
  course: CourseType;
  topics: TopicType[];
}

const TopicOverviewPage: React.FC<TopicOverviewPageProps> = ({
  chapter,
  course,
  topics,
}) => {
  return (
    <div>
      <header
        css={{
          backgroundColor: colors.secondary[200],
        }}
      >
        <Container
          className={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <Breadcrumb
            items={[
              { href: "/kurs/1", label: course.name },
              { href: "", label: chapter.name },
            ]}
          />
          <h1>{chapter.name}</h1>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1rem",
            }}
          >
            {topics.map(({ quizzes }, i) =>
              quizzes.map((quiz) => (
                <QuizThumbnail
                  key={quiz.id}
                  title={quiz.name}
                  href={`/kurs/${course.id}/${chapter.id}/${quiz.id}`}
                  questions={quiz.questions}
                  attempted={
                    quiz.userStatistics.totalAnswered != 0 ||
                    quiz.userStatistics.totalCorrectlyAnswered != 0
                  }
                />
              ))
            )}
          </div>
        </Container>
      </header>
      {
        <Container>
          <QuestionList topics={topics} chapterName={chapter.name} />
        </Container>
      }
    </div>
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
        userId: query.userId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());

  let coursesData = fetch(`${process.env.API_URL}/courses/user-statistics/`, {
    method: "POST",
    body: JSON.stringify({
      userId: query.userId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.json();
  });

  let topicsData = fetch(
    `${process.env.API_URL}/topics/${params && params.chapterSlug}/nested/${
      query.userId
    }`
  ).then((res) => res.json());

  let [chapters, courses, topics] = await Promise.all([
    chaptersData,
    coursesData,
    topicsData,
  ]);

  courses = courses.find(
    ({ id }: ChapterType) =>
      id === (params && params.courseSlug && +params.courseSlug)
  );

  chapters = chapters.find(
    ({ id }: ChapterType) =>
      id === (params && params.chapterSlug && +params.chapterSlug)
  );

  return {
    props: {
      chapter: chapters,
      course: courses,
      topics,
    },
  };
};

export default TopicOverviewPage;
