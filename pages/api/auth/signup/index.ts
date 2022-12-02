import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {email, password, username} = req.body;
    console.log(email, password);
    return res.status(200).json({email: "password"});
  } else {
    return res.status(405).json({error: "Invalid request method"});
  }
}
