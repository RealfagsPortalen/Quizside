import { Card } from "@ui/Card";
import { PieChart } from "@ui/PieChart";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { getUserID } from "../../lib/user";

interface ChapterThumbnailProps {
  title: string;
  href: string;
  unsolvedQuizzes: number;
  solvedQuestions: number;
  attemptedQuestions: number;
  totalQuestions: number;
}

export const ChapterThumbnail: React.FC<ChapterThumbnailProps> = ({
  title,
  href,
  unsolvedQuizzes,
  solvedQuestions,
  attemptedQuestions,
  totalQuestions,
}) => {
  return (
    <Link
      href={{ pathname: href, query: { userId: getUserID(useRouter().query) } }}
    >
      <Card
        css={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}
      >
        <div>
          <h2>{title}</h2>
          <p>{unsolvedQuizzes} Uløste quizer</p>
        </div>
        <div css={{ width: 50 }}>
          <PieChart
            attemptedPercentage={attemptedQuestions / totalQuestions}
            completedPercentage={solvedQuestions / totalQuestions}
          />
        </div>
      </Card>
    </Link>
  );
};
