import { User } from "@types";
import { ParsedUrlQuery } from "querystring";

const REALFAGS_PORTALEN_USER_ID = "realfagsPortalenUserId";

const oneHour = 60 * 60 * 1000;

export const getUserIDFromLearnWorldsId = async (
  query: ParsedUrlQuery
): Promise<string | null> => {
  const now = new Date().getTime();
  const userAndTime =
    typeof window !== "undefined"
      ? localStorage.getItem(REALFAGS_PORTALEN_USER_ID)
      : undefined;
  if (userAndTime) {
    const { userId, time }: { userId: string; time: number } =
      JSON.parse(userAndTime);
    if (now - time > oneHour) {
      localStorage.removeItem(REALFAGS_PORTALEN_USER_ID);
    } else {
      return userId;
    }
  }
  const learnWorldsUserId = query?.userId;
  if (!learnWorldsUserId) {
    return null;
  }
  const userPromise = fetch(
    `${process.env.API_URL}/users/learn-worlds/${learnWorldsUserId}`,
    {
      method: "GET",
    }
  )
    .then((res) => {
      if (res.status !== 200) {
        return null;
      }
      return res.json();
    })
    .catch((err) => {
      return null;
    });

  const user: User | null = await userPromise;
  if (!user) {
    return null;
  }
  typeof window !== "undefined" &&
    localStorage.setItem(
      REALFAGS_PORTALEN_USER_ID,
      JSON.stringify({ userId: user.id, time: now })
    );
  return user.id;
};

export const getUserID = (query: ParsedUrlQuery): string | null => {
  const userId = query?.userId;
  if (typeof userId === "string") {
    return userId;
  }
  return null;
};
