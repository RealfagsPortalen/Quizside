import * as React from "react";
import { mockData } from "../../../../mockData";
import { ChapterThumbnail } from "@features/chapter/ChapterThumbnail";

interface TopicOverviewPageProps {
  chapter: any[];
  questions: any[];
}

const chapter = mockData.courses[0].chapters[0];

const TopicOverviewPage: React.FC<TopicOverviewPageProps> = ({}) => {
  return (
    <main>
      <h1>{chapter.title}</h1>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        }}
      ></div>
    </main>
  );
};

export default TopicOverviewPage;
