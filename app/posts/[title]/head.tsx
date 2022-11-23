import React from "react";
import {redirect} from "next/navigation";

async function getPosts() {
  console.log(window.location.origin);
  const posts = await fetch("/api/posts");
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
  //   return <title>{data && data.title}</title>;
}
