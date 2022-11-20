import React from "react";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[auto_75%] md:grid-cols-[15%_55%_auto] p-4 gap-2 md:gap-4 lg:gap-6">
      <div className="hidden sm:block min-h-screen animate-pulse">
        {[1, 2, 3].map((route) => (
          <div key={route} className="mb-1">
            <div className="flex items-center space-x-2 px-2.5 py-2 hover:bg-blue-600 duration-200 transition ease-linear rounded-xl ">
              <div className="w-6 h-6 rounded-full bg-gray-500 "></div>
              <div className="w-[70%] h-4 rounded-full bg-gray-300 font-light"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <div className="mb-20">
          <div className="">
            {[1, 2, 3, 4, 5, 6].map((post, i: number) => (
              <div
                key={i}
                className="border dark:border-none mb-5 rounded-lg shadow-sm bg-white dark:bg-[#151F28]"
              >
                <div className="mb-5 p-4 animate-pulse">
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
                    {[16, 24, 20, 16, 20].map((i) => (
                      <div
                        key={i}
                        className={`w-${i} h-4 rounded-full bg-slate-500 mb-2`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:block min-h-screen">
        <div className="rounded-lg bg-white dark:bg-[#151F28] w-full mb-8">
          <div className="w-full p-4 animate-pulse grid grid-row-3 gap-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i}>
                <div className="w-3/4 h-4 mb-2 bg-slate-400 rounded-full"></div>
                <div className="flex">
                  <div className="bg-slate-600 w-[30%] mb-1.5 h-3 rounded-full"></div>
                  <div className="bg-slate-600 inline ml-3 w-[70%] h-3 rounded-full"></div>
                </div>
                <div className="flex">
                  <div className="bg-slate-600 w-[60%] h-3 rounded-full"></div>
                  <div className="bg-slate-600 inline ml-3 w-[30%] h-3 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-white dark:bg-[#151F28] w-full mb-8">
          <div className="w-full p-4 grid grid-row-3 animate-pulse gap-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <div className="w-3/4 h-4 mb-2 bg-slate-400 rounded-full"></div>
                <div className="bg-slate-600 w-full mb-1.5 h-3 rounded-full"></div>
                <div className="flex">
                  <div className="bg-slate-600 w-[60%] h-3 rounded-full"></div>
                  <div className="bg-slate-600 inline ml-3 w-[30%] h-3 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
