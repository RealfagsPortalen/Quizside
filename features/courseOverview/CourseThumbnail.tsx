import Link from "next/link";
import { FC } from "react";
import { Course } from "../../mockData";
import { Button } from "../../ui/Button";
import { Image } from "../../ui/Image";
import { PieChart } from "@ui/PieChart";
import { Card } from "@ui/Card";
import { CourseType } from "@types";
import { getUserID } from "../../lib/user";
import { useRouter } from "next/router";

export const CourseThumbnail: FC<{ course: CourseType }> = ({ course }) => {
  return (
    <Link
      href={{
        pathname: `/kurs/${course.id}`,
        query: { userId: getUserID(useRouter()) },
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
