import { NextRouter } from "next/router";

export const getUserID = (router: NextRouter) => {
  return router.query.userId;
};
