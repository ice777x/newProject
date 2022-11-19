import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import {Post} from "../typings";
import Image from "next/image";
const Tags = dynamic(() => import("./Tags"), {ssr: false});

export default function PostComp({post}: {post: Post}) {
  return (
    <div className="border dark:border-none mb-5 rounded-lg shadow-sm bg-white dark:bg-[#151F28]">
      <Link href="/posts/[title]" as={`/posts/${post.id}`}>
        <div className="mb-5 p-4">
          <div className="flex mb-3">
            <div className="flex items-center">
              <Link href="/user/[name]" as={`/user/${post?.author?.username}`}>
                <div className="mr-2 text-xl w-11 h-11 ">
                  <Image
                    alt="icon"
                    src={post.icon}
                    width={500}
                    height={500}
                    quality={100}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              </Link>
              <div className="">
                <Link
                  href={"/user/[name]"}
                  as={`/user/${post?.author?.username}`}
                  className="text-slate-800 dark:text-slate-100 font-medium"
                >
                  {post.author.name}
                </Link>
                <div className="date">
                  <p className="text-xs font-light">{post.date}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-10">
            <h1 className="text-3xl font-bold hover:text-blue-600/[0.80]">
              {post.title}
            </h1>
          </div>
          <div className="pl-10 mt-5">
            <Tags data={post.tags} />
          </div>
        </div>
      </Link>
    </div>
  );
}
