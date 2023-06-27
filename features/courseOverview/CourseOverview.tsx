import { CourseThumbnail } from "@features/courseOverview/CourseThumbnail";
import { CourseType } from "@types";
import { FC } from "react";
export const CourseOverview: FC<{ courses: CourseType[]; userId: string }> = ({
  courses,
  userId,
}) => {
  return (
    <section
      css={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fill, minmax(min(20rem, 100%), 1fr));",
        width: "100%",
        gap: "1rem",
      }}
    >
      {courses.map((course, i) => (
        <CourseThumbnail key={i} course={course} userId={userId} />
      ))}
    </section>
  );
};
