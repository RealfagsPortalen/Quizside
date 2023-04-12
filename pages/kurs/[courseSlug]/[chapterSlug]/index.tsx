import { QuizThumbnail } from "@features/chapterOverview/QuizThumbnail";
import { GetStaticPaths, GetStaticProps } from "next";
import * as React from "react";
import { Chapter, Database } from "../../../../mockData";
import { colors } from "@ui/design-tokens";
import { Container } from "@ui/Container";
import { QuestionList } from "@features/chapterOverview/QuestionList";
import { Breadcrumb } from "@ui/Breadcrumb";

interface TopicOverviewPageProps {
  chapter: Chapter;
}

const TopicOverviewPage: React.FC<TopicOverviewPageProps> = ({ chapter }) => {
  return (
    <div>
      <header css={{ backgroundColor: colors.secondary[400] }}>
        <Container>
          <Breadcrumb
            items={[
              { href: "/kurs/1", label: "Matematikk 1" },
              { href: "", label: chapter.title },
            ]}
          />
          <h1>{chapter.title}</h1>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1rem",
            }}
          >
            {chapter.topics.map(({ quizzes }) =>
              quizzes.map((quiz, i) => (
                <QuizThumbnail
                  title={quiz.title}
                  href={quiz.id}
                  questions={[
                    "correct",
                    "incorrect",
                    "incorrect",
                    "correct",
                    "unanswered",
                  ]}
                  attempted={!(i % 2)}
                />
              ))
            )}
          </div>
        </Container>
      </header>
      <Container>
        <QuestionList topics={chapter.topics} />
      </Container>
    </div>
  );
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
