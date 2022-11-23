import React from "react";
import PostComp from "../components/PostComp";
// import posts from "../lib/posts";
import RightBar from "../components/RightBar";
import Sidebar from "../components/Sidebar";
import {Post} from "../typings";

async function getPosts() {
  const posts = await fetch("https://ice777dev.vercel.app/api/posts");
  const result = await posts.json();
  return result;
}

async function Home() {
  const posts = await getPosts();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[auto_75%] md:grid-cols-[15%_55%_auto] p-3 gap-2 md:gap-3 lg:gap-6">
      <Sidebar />
      <div className="">
        <div className="mb-20">
          <div>
            {posts &&
              posts?.map((post: Post, i: number) => (
                <PostComp post={post} key={i} />
              ))}
          </div>
        </div>
      </div>
      <RightBar posts={posts} />
    </div>
  );
}

export default Home;
