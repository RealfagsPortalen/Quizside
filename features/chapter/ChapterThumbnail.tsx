import { PieChart } from "@ui/PieChart";
import { borderRadius, colors } from "@ui/design-tokens";
import Link from "next/link";
import * as React from "react";

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
      href={href}
      css={{
        borderRadius: borderRadius.default,
        backgroundColor: colors.gray[50],
        padding: "1rem",
        boxShadow: "-5px 5px 0px #EDE8FF",
        display: "flex",
        gap: "1rem",
        justifyContent: "space-between",
      }}
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
    </Link>
  );
};
