import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  BsGeoAltFill,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import {FaBirthdayCake} from "react-icons/fa";
import PostComp from "../../../components/PostComp";
import {Post} from "../../../typings";

async function getUsers() {
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
  const [_, users] = await getUsers();
  return users.map((user: any) => ({name: user.username}));
}

export default async function Page({params: {name}}: {params: {name: string}}) {
  const [posts, user] = await getUsers();
  const filteredUser = user.find(
    (user: {username: string}) => user?.username === name
  );
  const userPosts = posts.filter(
    (post: {author: {username: string}}) =>
      post?.author?.username === filteredUser?.username
  );
  if (filteredUser) {
    return (
      <div className="">
        <section
          className={`relative block h-[100px] md:h-[125px] w-full`}
          style={
            filteredUser.color
              ? {backgroundColor: filteredUser.color}
              : {backgroundColor: "black"}
          }
        ></section>
        <section className="relative">
          <div className="md:max-w-[1024px] md:mx-auto md:px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-[#151f28] w-full mb-6 shadow-xl rounded-lg -mt-12">
              <div className="">
                <div className="flex justify-end ">
                  <span className="absolute justify-self-center w-full">
                    <Image
                      src={filteredUser.image}
                      alt={filteredUser.name}
                      width={600}
                      height={600}
                      className={`rounded-full bg-[${filteredUser.color}] w-[72px] md:w-32 h-[72px] ml-4 md:ml-auto overflow-hidden md:h-32 md:mr-auto p-0.5 md:p-2 -mt-10 md:-mt-16`}
                      style={
                        filteredUser.color
                          ? {backgroundColor: filteredUser.color}
                          : {backgroundColor: "black"}
                      }
                    />
                  </span>
                  <div className="z-30 pt-5 pr-5">
                    <button
                      className="bg-indigo-600 text-gray-100 hover:bg-indigo-700 tracking-wide text-xs font-bold uppercase px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-200"
                      type="button"
                    >
                      Follow
                    </button>
                  </div>
                </div>
                <div className="prose prose-h1:mb-4 prose-h1:text-3xl max-w-full md:text-center dark:prose-invert p-6">
                  <h1 className="font-extrabold">{filteredUser.name}</h1>
                  <p>{filteredUser.bio}</p>
                  <div className="flex flex-wrap md:justify-center">
                    <div className="flex items-center p-2">
                      <BsGeoAltFill className="mr-2 text-xl text-gray-400" />
                      <span className="text-sm  text-gray-400">
                        {filteredUser.location}
                      </span>
                    </div>
                    <div className="flex items-center p-2">
                      <FaBirthdayCake className="mr-2 text-xl text-gray-400" />
                      <span className="text-sm text-gray-400 uppercase">
                        {filteredUser.joined}
                      </span>
                    </div>
                    <div className="socials p-2">
                      <div className="flex justify-center">
                        <Link
                          href={filteredUser.socials.twitter}
                          className="p-1"
                        >
                          <BsTwitter className="text-xl text-gray-400 hover:text-blue-600" />
                        </Link>
                        <Link
                          href={filteredUser.socials.github}
                          className="p-1"
                        >
                          <BsGithub className="text-xl text-gray-400 hover:text-blue-600" />
                        </Link>
                        <Link
                          href={filteredUser.socials.linkedin}
                          className="p-1"
                        >
                          <BsLinkedin className="text-xl text-gray-400 hover:text-blue-600" />
                        </Link>
                        <Link
                          href={filteredUser.socials.instagram}
                          className="p-1"
                        >
                          <BsInstagram className="text-xl text-gray-400 hover:text-blue-600" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1024px] mx-auto p-4">
          {userPosts.map((post: Post) => (
            <PostComp post={post} key={post.id} />
          ))}
        </section>
      </div>
    );
  } else {
    return <h1>User not found</h1>;
  }
}
