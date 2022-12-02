import Link from "next/link";
import React from "react";

export default function Tags({data}: any) {
  return (
    <div className="flex flex-wrap">
      {data?.map((tag: any, i: number) => (
        <div
          key={i}
          className="text-sm font-medium hover:bg-gray-100 group dark:hover:bg-blue-600/40 dark:hover:border-blue-900 dark:hover:text-slate-400 text-slate-500 hover:text-slate-900 border border-transparent transition-all duration-200 ease-linear  hover:border-slate-300 rounded-lg px-2 py-1 mr-2"
        >
          <Link href="/t/[tag]" as={`/t/${tag}`}>
            <span className="group-hover:text-blue-500">#</span>
            {tag}
          </Link>
        </div>
      ))}
    </div>
  );
}
