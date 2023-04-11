import { CourseThumbnail } from "@features/courseOverview/CourseThumbnail";
import { FC } from "react";
import { Courses } from "../../mockData";
export const CourseOverview: FC<{ courses: Courses }> = ({ courses }) => {
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
        <CourseThumbnail key={i} course={course} />
      ))}
    </section>
  );
};
