"use client";
import Link from "next/link";
import {redirect} from "next/navigation";
import React, {useState} from "react";
import {FaEyeSlash, FaEye} from "react-icons/fa";

export default function Page() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const [email, password, _, checked] = e.target;
    console.log("submit");
    redirect("/accounts");
  };
  const [disabled, setDisabled] = useState(true);
  const handleButton = (e: any) => {
    const value = e.target.value;
    if (value.length >= 8) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div className="max-w-2xl mx-auto h-full w-full min-h-[calc(100vh-60px)] my-auto px-4 py-12">
      <div className="bg-white dark:bg-gradient-to-tr dark:from-[#031c32] dark:to-[#17334F] shadow-2xl dark:shadow-none rounded-lg">
        <div className="h-full w-[85%] sm:w-[65%] mx-auto py-10 md:py-20">
          <div className="ust prose dark:prose-invert max-w-full mb-16">
            <h1 className="">Login</h1>
          </div>
          <div className="form prose dark:prose-invert">
            <form className="" onSubmit={handleSubmit}>
              <div className="form-group flex flex-col mb-6">
                <label htmlFor="email" className="text-lg font-medium mb-1.5">
                  Email
                  <span className="text-sm align-text-top">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full focus:ring bg-white transition-all duration-150 ease-linear dark:bg-[#162447] text-slate-500 dark:text-slate-300 px-1.5 py-[3px] outline outline-[1.5px] outline-gray-300 dark:outline-[#1D2D50] focus:border-blue-600 focus:ring-blue-600 rounded-md"
                  placeholder="ice777@serkan.com"
                />
              </div>
              <div className="form-group flex flex-col mb-6">
                <label
                  htmlFor="password"
                  className="text-lg font-medium mb-1.5"
                >
                  Password
                  <span className="text-sm align-text-top">*</span> {""}
                  <span className="text-sm text-gray-500">(min 8)</span>
                </label>
                <div className="flex w-full">
                  <input
                    onChange={handleButton}
                    type="password"
                    name="password"
                    placeholder="********"
                    className="w-full focus:ring bg-white transition-all duration-150 ease-linear dark:bg-[#162447] text-slate-500 dark:text-slate-300 px-1.5 py-[3px] outline outline-[1.5px] outline-gray-300 dark:outline-[#1D2D50] focus:border-blue-600 focus:ring-blue-600 rounded-md"
                    id="password"
                  />
                </div>
              </div>
              <div className="flex justify-between mb-6">
                <div className="flex space-x-2 items-center">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember"
                    className="block text-sm text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm text-gray-500">
                  <Link href="/accounts/forgot-password">Forgot Password?</Link>
                </div>
              </div>
              <div className="form-group w-full mb-6">
                <button
                  type="submit"
                  id="login"
                  className="w-full py-2 disabled:bg-indigo-700/30 bg-indigo-700 rounded-xl text-white font-medium text-lg transition-all duration-150 ease-linear"
                  disabled={disabled}
                >
                  Log in
                </button>
              </div>
              <div className="form-group mb-6">
                <p className="text-sm text-gray-500">
                  Don't have an account?{" "}
                  <Link className="text-indigo-700" href="/accounts/signup">
                    Sign Up
                  </Link>
                </p>
              </div>
              <div className="mt-20 mb-0">
                <p className="text-sm text-gray-500 mb-0">
                  © 2022 ice777. All rights reserved.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
