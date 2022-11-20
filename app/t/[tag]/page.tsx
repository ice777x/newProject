import React from "react";
import PostComp from "../../../components/PostComp";
import RightBar from "../../../components/RightBar";
import Sidebar from "../../../components/Sidebar";
import {Post} from "../../../typings";

async function getPosts() {
  const posts = await fetch("http://localhost:3000/api/posts/");
  const result = await posts.json();
  return result;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  const tags = new Set();
  posts.forEach((post: Post) => {
    post.tags.forEach((tag) => {
      tags.add(tag);
    });
  });
  const tag = Array.from(tags).map((tag) => {
    return {
      tag: tag,
    };
  });
  return tag;
}

export default async function Page({params: {tag}}: {params: {tag: string}}) {
  const posts = await getPosts();
  const filteredPosts = posts.filter((post: Post) => post.tags.includes(tag));
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[auto_75%] md:grid-cols-[15%_55%_auto] p-3 gap-2 md:gap-4 lg:gap-6">
      <Sidebar />
      <div className="">
        <div className="mb-20">
          <div>
            {filteredPosts?.map((post: Post, i: number) => (
              <PostComp post={post} key={i} />
            ))}
          </div>
        </div>
      </div>
      <RightBar posts={posts} />
    </div>
  );
}
