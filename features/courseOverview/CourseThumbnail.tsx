import Link from "next/link";
import { FC } from "react";
import { Course } from "../../mockData";
import { Button } from "../../ui/Button";
import { Image } from "../../ui/Image";
import { PieChart } from "@ui/PieChart";
import { Card } from "@ui/Card";

export const CourseThumbnail: FC<{ course: Course }> = ({ course }) => {
  return (
    <Link href={`/kurs/${course.id}`} css={{}}>
      <Card
        css={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}
      >
        <div>
          <h2>{course.title}</h2>
          <p>2 uløste quizer [hardkodet]</p>
        </div>
        <div css={{ width: 50 }}>
          <PieChart completedPercentage={0.3} attemptedPercentage={0.5} />
        </div>
      </Card>
    </Link>
  );
};
