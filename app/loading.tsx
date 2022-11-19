import React from "react";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[auto_75%] md:grid-cols-[20%_60%_auto] p-4 gap-2 md:gap-4 lg:gap-6">
      <div className="h-full w-full bg-slate-700 min-h-screen"></div>
      <div className="">
        <div className="mb-20">
          <h1 className="text-4xl font-bold">Posts</h1>
          <div className="grid-cols-1  mt-8 md:grid-cols-2  gap-x-4 md:gap-x-8 gap-y-10 md:gap-y-12">
            {[1, 2, 3, 4, 5, 6].map((post, i: number) => (
              <div
                key={i}
                className="border animate-pulse dark:border-none mb-5 rounded-lg shadow-sm bg-white dark:bg-[#151F28]"
              >
                <div className="mb-5 p-4">
                  <div className="flex mb-3">
                    <div className="flex items-center">
                      <div className="mr-2 text-xl w-10 h-10 rounded-full bg-slate-600"></div>
                      <div className="">
                        <div className="bg-slate-600 w-20 h-3 mb-1 rounded-full"></div>
                        <div className="date bg-slate-600 w-16 h-2.5 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-10">
                    <div className="w-full h-4 rounded-full bg-slate-500 mb-2"></div>
                    <div className="w-40 h-4 rounded-full bg-slate-500"></div>
                  </div>
                  <div className="pl-10 mt-5 flex space-x-4">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-14 h-4 rounded-full bg-slate-500 mb-2"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-slate-700 min-h-screen"></div>
    </div>
  );
}
