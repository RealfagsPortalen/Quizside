import Link from "next/link";
import { FC } from "react";
import { Course } from "../../mockData";
import { Button } from "../../ui/Button";
import { Image } from "../../ui/Image";

export const CourseThumbnail: FC<{ course: Course }> = ({ course }) => {
  return (
    <Link href={"/kurs/"}>
      <article>
        <div>
          <Image src={course.img} aspectRatio={2} alt={course.title} />
          <h2>{course.title}</h2>
          <p>{course.description}</p>
        </div>
        <Button>Fortsett</Button>
      </article>
    </Link>
  );
};
