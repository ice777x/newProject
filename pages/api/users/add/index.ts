import {NextApiRequest, NextApiResponse} from "next";
import fs from "fs";
import path from "path";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const {
      name,
      username,
      password,
      image,
      email,
      country,
      bio,
      website,
      socials: {facebook, twitter, instagram, linkedin, youtube, github},
    } = JSON.parse(req.body);
    if (fs.existsSync(path.join(process.cwd(), "data", "posts.json"))) {
      const users = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), "data", "posts.json"), "utf-8")
      );
      const newUser = {
        id: users.length + 1,
        name,
        username,
        password,
        email,
        image,
        country,
        bio,
        website,
        socials: {facebook, twitter, instagram, linkedin, youtube, github},
      };
      users.push(newUser);
      fs.writeFileSync(
        path.join(process.cwd(), "data", "users.json"),
        JSON.stringify(users)
      );
    } else {
      const newUser = {
        id: 1,
        name,
        username,
        image,
        password,
        email,
        country,
        bio,
        website,
        socials: {facebook, twitter, instagram, linkedin, youtube, github},
      };
      fs.writeFileSync(
        path.join(process.cwd(), "data", "users.json"),
        JSON.stringify([newUser])
      );
    }
    res.end();
  } else {
    res.status(405).json({message: "Method not allowed"});
  }
}
