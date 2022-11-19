import {NextApiRequest, NextApiResponse} from "next";
import fs from "fs";
import path from "path";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const {
      title,
      image,
      content,
      author: {name, username},
      date,
      icon,
      likes = 0,
      comment = 0,
      saved = 0,
      tags,
    } = JSON.parse(req.body);
    if (fs.existsSync(path.join(process.cwd(), "data", "posts.json"))) {
      const posts = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), "data", "posts.json"), "utf-8")
      );
      const newPost = {
        id: posts.length + 1,
        title,
        image,
        content,
        author: {name, username},
        date,
        icon,
        likes,
        comment,
        saved,
        tags,
      };
      posts.push(newPost);
      fs.writeFileSync(
        path.join(process.cwd(), "data", "posts.json"),
        JSON.stringify(posts)
      );
    } else {
      const newPost = {
        id: 1,
        title,
        image,
        content,
        author: {username, name},
        date,
        icon,
        likes,
        comment,
        saved,
        tags,
      };
      fs.writeFileSync(
        path.join(process.cwd(), "data", "posts.json"),
        JSON.stringify([newPost])
      );
    }
    res.end();
  } else {
    res.status(405).json({message: "Method not allowed"});
  }
}
