import { CourseOverview } from "@features/courseOverview/CourseOverview";
import { GetServerSideProps, GetStaticProps } from "next";
import { FC } from "react";
import { Layout } from "../ui/Layout";
import { getUserID } from "../lib/user";
import { ChapterType, CourseType } from "@types";
import { Global } from "@emotion/react";
import { colors } from "@ui/design-tokens";
import { Container } from "@ui/Container";

const Page: FC<{ courses: CourseType[] }> = ({ courses }) => {
  return (
    <Layout>
      <Global styles={{ body: { backgroundColor: colors.bg } }} />
      <Container
        className={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <CourseOverview courses={courses} />
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query?.userId)
    return {
      redirect: {
        permanent: false,
        destination: "/no-user",
      },
      props: {},
    };

  let coursesData = fetch(`${process.env.API_URL}/courses/user-statistics/`, {
    method: "POST",
    body: JSON.stringify({
      userId: query?.userId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.json();
  });

  let [courses] = await Promise.all([coursesData]);

  return {
    props: {
      courses,
    },
  };
};

export default Page;
