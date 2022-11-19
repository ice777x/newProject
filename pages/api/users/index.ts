import {NextApiRequest, NextApiResponse} from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    if (fs.existsSync(path.join(process.cwd(), "data", "users.json"))) {
      const users = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), "data", "users.json"), "utf-8")
      );
      res.status(200).json(users);
    } else {
      res.status(200).json([]);
    }
  } else {
    res.status(404).end();
  }
}
