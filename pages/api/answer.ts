import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  const body = JSON.parse(req.body);
  const userId = body.userId;
  const questionId = +body.questionId;
  const correctAnswer = body.isCorrect;

  fetch(`${process.env.API_URL}/users/${userId}/questions`, {
    method: "POST",
    body: JSON.stringify({
      questionId,
      correctAnswer,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => console.log(response));

  return res.status(200).json({});
}
