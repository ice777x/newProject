import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="sticky z-50 top-0  bg-white dark:bg-inherit dark:text-white text-gray-900">
      <div className="container mx-auto">
        <div className="px-4 md:px-0 py-2.5 flex justify-between items-center">
          <div className="text-3xl font-bold">
            <Link href="/">ice777</Link>
          </div>
          <div className="text-xl font-semibold">
            <div className="flex space-x-5">
              <Link href={"/"}>Profile</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
