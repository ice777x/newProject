"use client";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="max-w-2xl mx-auto h-full w-full max-h-[calc(100vh-60px)] my-auto">
      <div className="bg-white dark:bg-gradient-to-tr dark:from-[#0F172A] dark:to-[#17334F] shadow-2xl dark:shadow-none rounded-lg mt-12">
        <div className="h-full w-[85%] md:w-[65%] mx-auto py-20">
          <div className="ust prose dark:prose-invert max-w-full mb-5">
            <h1 className="">Forgot Password</h1>

            <p className="text-gray-500 dark:text-gray-400">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>
            <div>
              <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div className="form-group flex flex-col mb-6">
                    <label htmlFor="email" className="font-medium mb-1.5">
                      Email Adress
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full focus:ring bg-white  transition-all duration-150 ease-linear dark:bg-[#162447] text-slate-500 dark:text-slate-300 px-1.5 py-[3px] outline outline-[1.5px] outline-gray-300 dark:outline-[#1D2D50] focus:border-blue-600 focus:ring-blue-600 rounded-md"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      onClick={() => {
                        alert("Email sent");
                      }}
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <svg
                          className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h7a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <p className="text-gray-500 dark:text-gray-400">
              If you don't receive an email, please check your spam folder.
            </p>

            <p className="text-gray-500 dark:text-gray-400">
              If you still can't find it, please{" "}
              <Link
                href="mailto:deneme@gmail.com"
                className="text-blue-500 dark:text-blue-400"
              >
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
