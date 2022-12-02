import Image from "next/image";
import React from "react";
import Reactions from "../../../components/Reactions";
import {Post} from "../../../typings";
import Link from "next/link";
import RightBar from "../../../components/RightBar";

async function getPosts(): Promise<[Post[], any]> {
  return Promise.all([
    fetch("http://localhost:3000/api/posts"),
    fetch("http://localhost:3000/api/users"),
  ]).then(async ([posts, users]) => {
    const post: Post[] = await posts.json();
    const user: any = await users.json();
    return [post, user];
  });
}

export async function generateStaticParams() {
  const [posts, _] = await getPosts();
  return posts.map((post: Post) => ({title: post.id.toString()}));
}
export default async function Page({params}: any) {
  const title = params?.title;
  const [posts, users] = await getPosts();
  const data = posts.find((post: Post) => {
    return post.id === Number(title);
  });
  const user = users.find((user: any) => {
    return user.username === data?.author?.username;
  });
  const userPosts = posts.filter((post: any) => {
    return post.author.username === user?.username;
  });
  if (!data) return <div>404</div>;
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-[60px_auto] lg:grid-cols-[60px_65%_auto] p-4 gap-2 md:gap-4">
        <Reactions data={data} />
        <div className="bg-white mb-20 dark:bg-[#031c32] shadow-lg border-slate-300 overflow-hidden rounded-lg">
          <div>
            <img
              src={data?.image || "https://via.placeholder.com/440x550"}
              alt={data?.title || ""}
              width={1920}
              height={1080}
              className="w-full h-[340px] object-cover"
            />
          </div>
          <div className="px-8 sm:px-16 pt-8">
            <div className="flex items-center mb-5">
              <Link href="/user/[name]" as={`/user/${data?.author?.username}`}>
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={data?.image || "https://via.placeholder.com/440x550"}
                    alt={data?.title || ""}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
              <div className="ml-4">
                <Link
                  href="/user/[name]"
                  as={`/user/${data?.author?.username}`}
                >
                  <div className="font-semibold text-gray-800 dark:text-gray-100">
                    {data?.author.name}
                  </div>
                </Link>
                <div className="text-gray-500 text-sm">{data?.date}</div>
              </div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl dark:text-white font-bold">
                {data?.title}
              </div>
            </div>
          </div>
          <div className="px-8 sm:px-16 prose prose-a:transition-all prose-a:duration-200 prose-a:ease-linear dark:prose-invert  py-8 prose-code:rounded-md prose-code:bg-[rgba(0,0,0,0.15)] prose-code:px-[0.1rem] prose-code:py-[0.25rem] max-w-full text-lg text-styles">
            <p>{data?.content}</p>
            <h2>Usingdefer with fetch</h2>
            <p>{data?.content}</p>
            <p>{data?.content}</p>
            <a href="#">werwer</a>
            <h2>Using aeger with fetch</h2>
            <p>{data?.content}</p>
            <p>{data?.content}</p>
            <p>{data?.content}</p>
          </div>
          <Reactions horizontal />
        </div>
        <div className="hidden lg:block min-h-screen">
          <div className="prose top-22 sticky dark:prose-p:text-slate-300 dark:prose-invert prose-img:my-0">
            <div className="rounded-lg bg-white dark:bg-[#031c32] w-full shadow-lg mb-8">
              <div className="p-4">
                <div className="flex mb-4 items-end">
                  <Link href="/user/[name]" as={`/user/${user?.username}`}>
                    <div>
                      <Image
                        src={data.icon}
                        alt=""
                        width={400}
                        height={400}
                        className="w-12 h-12 object-cover rounded-full"
                      />
                    </div>
                  </Link>
                  <Link href="/user/[name]" as={`/user/${user?.username}`}>
                    <div className="text-xl font-semibold ml-3">
                      {data.author.name}
                    </div>
                  </Link>
                </div>
                <div>
                  <div className="">
                    <p>{users[0].bio}</p>
                  </div>
                  <div>
                    <h5 className="text-slate-500 text-[15px] font-semibold">
                      JOINED
                    </h5>
                    <p className="my-0 text-[15px] leading-relaxed">
                      {new Date(`${users[0].createdAt}`).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg prose-slate shadow-lg prose-h2:mt-0 dark:prose-invert bg-white dark:bg-[#031c32] w-full">
              <div className="p-4">
                <h2 className="prose-a:font-bold">
                  More from{" "}
                  <Link
                    href="/user/[name]"
                    as={`/user/${data?.author?.username}`}
                  >
                    {data?.author?.name}
                  </Link>
                </h2>
                {userPosts.map((post: Post, i: number) => (
                  <div key={i}>
                    <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
                    <p className="line-clam-1">{post.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
