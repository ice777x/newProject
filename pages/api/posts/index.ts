import {NextApiRequest, NextApiResponse} from "next";
import fs from "fs";
import path from "path";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    if (fs.existsSync(path.join(process.cwd(), "data", "posts.json"))) {
      const posts = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), "data", "posts.json"), "utf-8")
      );
      res.status(200).json(posts);
    } else {
      res.status(200).json([]);
    }
  } else {
    res.status(404).end();
  }
}
