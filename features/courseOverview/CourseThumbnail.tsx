import { CourseType } from "@types";
import { Card } from "@ui/Card";
import { PieChart } from "@ui/PieChart";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { getUserID } from "../../lib/user";

export const CourseThumbnail: FC<{ course: CourseType; userId: string }> = ({
  course,
  userId,
}) => {
  return (
    <Link
      href={{
        pathname: `/kurs/${course.id}`,
        query: { userId },
      }}
      css={{}}
    >
      <Card
        css={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}
      >
        <div>
          <h2>{course.name}</h2>
          <p>
            {course.userStatistics.totalQuestions -
              course.userStatistics.totalCorrectlyAnswered}{" "}
            uløste quizer
          </p>
        </div>
        <div css={{ width: 50 }}>
          <PieChart
            completedPercentage={
              course.userStatistics.totalCorrectlyAnswered /
              course.userStatistics.totalQuestions
            }
            attemptedPercentage={
              course.userStatistics.totalAnswered /
              course.userStatistics.totalQuestions
            }
          />
        </div>
      </Card>
    </Link>
  );
};
