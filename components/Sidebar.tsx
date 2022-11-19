import Link from "next/link";
import React from "react";
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
];
export default function Sidebar() {
  return (
    <div className="hidden sm:block min-h-screen">
      {routes.map((route) => (
        <div key={route.path} className="mb-1">
          <Link
            href={route.path}
            className="flex items-center space-x-2 px-2.5 py-2 hover:bg-blue-600 duration-200 transition ease-linear rounded-xl "
          >
            <div className="text-lg text-gray-300">{route.icon}</div>
            <div className="text-lg tracking-wide text-gray-300 font-light">
              {route.name}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
