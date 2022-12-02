import {copyFileSync} from "fs";
import Link from "next/link";
import React from "react";
import {Post} from "../typings";

export default function RightBar({posts}: {posts: Post[]}) {
  const randomPosts = new Set();
  var count = 0;
  while (count < 4) {
    const random = Math.floor(Math.random() * posts.length);
    const post = posts[random];
    if (randomPosts.has(post)) {
      const random = Math.floor(Math.random() * posts.length);
      const post = posts[random];
      randomPosts.add(post);
      count += 1;
    } else {
      randomPosts.add(post);
    }
  }
  return (
    <div className="hidden lg:block min-h-screen">
      <div className="rounded-lg bg-white dark:bg-[#031c32] w-full shadow-xl mb-8 prose prose-h4:mt-0 prose-h4:mb-2 hover:prose-a:no-underline hover:prose-h4:text-blue-600 dark:hover:prose-h4:text-blue-400 dark:prose-invert">
        <div className="p-6">
          {Array.from(randomPosts).map((post: any, i: number) => {
            return (
              <div key={i} className="flex items-center">
                <div className="mb-2">
                  <Link
                    href="/posts/[title]"
                    as={`/posts/${post.id}`}
                    className=""
                  >
                    <h4 className="duration-150 transition ease-linear">
                      {post?.title}
                    </h4>
                  </Link>
                  <div className="text-gray-500 text-xs">{post?.date}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="rounded-lg bg-blue-500 w-full h-40"></div>
    </div>
  );
}
