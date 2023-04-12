import * as React from "react";
import { mockData } from "../../../mockData";
import { ChapterThumbnail } from "@features/chapter/ChapterThumbnail";

interface TopicOverviewPageProps {
  chapter: any[];
  questions: any[];
}

const course = mockData.courses[0];

const TopicOverviewPage: React.FC<TopicOverviewPageProps> = ({}) => {
  return (
    <main>
      <h1>{course.title}</h1>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        }}
      >
        {course.chapters.map((chapter) => (
          <ChapterThumbnail
            key={chapter.id}
            title={chapter.title}
            href={`/kurs/${course.id}/${chapter.id}`}
            unsolvedQuizzes={2}
            solvedQuestions={6}
            attemptedQuestions={12}
            totalQuestions={20}
          />
        ))}
      </div>
    </main>
  );
};

export default TopicOverviewPage;
