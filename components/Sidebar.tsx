import Link from "next/link";
import React from "react";
import {BsBookmark, BsBookmarkFill} from "react-icons/bs";
import {FaHome} from "react-icons/fa";
import {RiFileList3Fill} from "react-icons/ri";
const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/list",
    name: "List",
    icon: <RiFileList3Fill />,
  },
  {
    path: "/bookmarks",
    name: "Bookmarks",
    icon: <BsBookmarkFill />,
  },
];
export default function Sidebar() {
  return (
    <div className="hidden sm:block min-h-screen">
      {routes.map((route) => (
        <div key={route.path} className="mb-1">
          <Link
            href={route.path}
            className="flex items-center space-x-2 px-2.5 py-2 hover:bg-indigo-400 dark:hover:bg-indigo-600 duration-200 transition ease-linear rounded-xl "
          >
            <div className="text-lg text-slate-700 dark:text-gray-300">
              {route.icon}
            </div>
            <div className="text-lg tracking-wide text-slate-800 dark:text-gray-300 font-light">
              {route.name}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
