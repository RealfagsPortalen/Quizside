// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { mockData } from "../../mockData";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<typeof mockData>
) {
  res.status(200).json(mockData);
}
