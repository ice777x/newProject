import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import {Post} from "../typings";
import Image from "next/image";
const Tags = dynamic(() => import("./Tags"), {ssr: false});

export default function PostComp({post}: {post: Post}) {
  return (
    <div className="mb-5 rounded-lg shadow-xl bg-white dark:bg-[#031c32]">
      <div className="mb-5 p-4">
        <div className="flex mb-3">
          <div className="flex items-center">
            <Link
              legacyBehavior
              passHref
              href="/user/[name]"
              as={`/user/${post?.author?.username}`}
            >
              <a>
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
              </a>
            </Link>
            <div className="ml-1">
              <Link
                href={"/user/[name]"}
                as={`/user/${post?.author?.username}`}
                className="text-slate-800 dark:text-slate-100 font-medium transition duration-200 ease-in-out hover:text-blue-600 dark:hover:text-blue-500"
              >
                {post.author.name}
              </Link>
              <div className="date">
                <p className="text-xs font-light text-gray-500">{post.date}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-10">
          <Link href="/posts/[title]" as={`/posts/${post.id}`}>
            <h1 className="text-3xl text-slate-800 break-words dark:text-slate-200 font-bold hover:text-blue-600 dark:hover:text-blue-500 transition-all duration-150 ease-linear">
              {post.title}
            </h1>
          </Link>
        </div>
        <div className="pl-10 mt-5">
          <Tags data={post.tags} />
        </div>
      </div>
    </div>
  );
}
