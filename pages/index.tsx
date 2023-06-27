import { Global } from "@emotion/react";
import { CourseOverview } from "@features/courseOverview/CourseOverview";
import { CourseType, User } from "@types";
import { Container } from "@ui/Container";
import { colors } from "@ui/design-tokens";
import { GetServerSideProps } from "next";
import { FC } from "react";
import { getUserIDFromLearnWorldsId } from "../lib/user";
import { Layout } from "../ui/Layout";

const Page: FC<{ courses: CourseType[]; userId: string }> = ({
  courses,
  userId,
}) => {
  return (
    <Layout>
      <Global styles={{ body: { backgroundColor: colors.bg } }} />
      <Container
        className={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <CourseOverview courses={courses} userId={userId} />
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const userId: string | null = await getUserIDFromLearnWorldsId(query);
  if (!userId) {
    return {
      redirect: {
        permanent: false,
        destination: "/no-user",
      },
      props: {},
    };
  }

  const coursesPromise = fetch(
    `${process.env.API_URL}/courses/user-statistics/`,
    {
      method: "POST",
      body: JSON.stringify({
        userId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => {
    return res.json();
  });

  let courses = await coursesPromise;
  return {
    props: {
      courses,
      userId,
    },
  };
};

export default Page;
