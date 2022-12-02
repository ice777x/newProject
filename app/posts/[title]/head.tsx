import React from "react";
import {redirect} from "next/navigation";

async function getPosts() {
  const posts = await fetch("http://localhost:3000/api/posts");
  const post = await posts.json();
  return post;
}

export default async function Head({params: {title}}: any) {
  const posts = await getPosts();
  const data = posts.find((post: any) => {
    return post.id === Number(title);
  });
  if (!data) return redirect("/");
  return (
    <>
      <title>{data.title}</title>
    </>
  );
}
