import { CourseOverview } from "@features/courseOverview/CourseOverview";
import { GetStaticProps } from "next";
import { FC } from "react";
import { Courses } from "../mockData";
import { Layout } from "../ui/Layout";

const Page: FC<{ courses: Courses }> = ({ courses }) => {
  return (
    <Layout>
      <CourseOverview courses={courses} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const courses = await fetch("http://localhost:3000/api/getCourses/");
  return {
    props: {
      courses: await courses.json(),
    },
  };
};

export default Page;
