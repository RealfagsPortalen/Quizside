import { CourseThumbnail } from "@features/courseOverview/CourseThumbnail";
import { FC } from "react";
import { Courses } from "../../mockData";

export const CourseOverview: FC<{ courses: Courses }> = ({ courses }) => {
  return (
    <section
      css={{
        display: "grid",
        gridTemplateColumns: "33% 33% 33%",
        width: "100%",
      }}
    >
      {courses.map((course, i) => (
        <CourseThumbnail key={i} course={course} />
      ))}
    </section>
  );
};
