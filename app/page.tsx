import React from "react";
import PostComp from "../components/PostComp";
// import posts from "../lib/posts";
import RightBar from "../components/RightBar";
import Sidebar from "../components/Sidebar";
import {Post} from "../typings";

async function getPosts() {
  const posts = await fetch("http://localhost:3000/api/posts");
  const result = await posts.json();
  return result;
}

async function Home() {
  const posts = await getPosts();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[auto_75%] md:grid-cols-[20%_60%_auto] p-4 gap-2 md:gap-4 lg:gap-6">
      <Sidebar />
      <div className="">
        <div className="mb-20">
          <h1 className="text-4xl font-bold">Posts</h1>
          <div className="grid-cols-1  mt-8 md:grid-cols-2  gap-x-4 md:gap-x-8 gap-y-10 md:gap-y-12">
            {posts &&
              posts?.map((post: Post, i: number) => (
                <PostComp post={post} key={i} />
              ))}
          </div>
        </div>
      </div>
      <RightBar />
    </div>
  );
}

export default Home;
