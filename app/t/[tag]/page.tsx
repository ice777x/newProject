import React from "react";
import PostComp from "../../../components/PostComp";
import {Post} from "../../../typings";

async function getPosts() {
  const posts = await fetch("http://localhost:3000/api/posts/");
  const result = await posts.json();
  return result;
}

export async function generateStaticParams() {
  return [
    {tag: "react"},
    {tag: "nextjs"},
    {tag: "tailwind"},
    {tag: "typescript"},
    {tag: "javascript"},
    {tag: "js"},
    {tag: "test"},
    {tag: "test2"},
  ];
}

export default async function Page({params: {tag}}: {params: {tag: string}}) {
  const posts = await getPosts();
  const filteredPosts = posts.filter((post: Post) => post.tags.includes(tag));
  return (
    <div>
      {filteredPosts?.map((post: Post, i: number) => (
        <PostComp post={post} key={i} />
      ))}
    </div>
  );
}
