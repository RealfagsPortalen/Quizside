import { FC } from "react";
import { Course } from "../../mockData";
import Image from "next/image";

export const CourseThumbnail: FC<{ course: Course }> = ({ course }) => {
  return (
    <article css={{ width: "100%" }}>
      <Image
        src={course.img}
        alt={course.img + " image"}
        width={500}
        height={250}
      />
      <h2>{course.title}</h2>
      <p>{course.description}</p>
    </article>
  );
};
