"use client";
import Link from "next/link";
import React, {useState} from "react";
import {BsSun, BsMoon, BsMoonStars} from "react-icons/bs";

export default function Header({mode}: {mode: any}) {
  const [mod, setMode] = mode;
  const handleButton = () => {
    setMode(mod === "light" ? "dark" : "light");
  };
  return (
    <div className="sticky z-50 top-0  bg-white dark:bg-inherit dark:text-white text-gray-900">
      <div className="container mx-auto">
        <div className="px-4 py-2.5 flex justify-between items-center">
          <div className="text-3xl font-bold">
            <Link href="/">ice777</Link>
          </div>
          <div className="text-xl font-medium">
            <div className="flex space-x-5 items-center">
              <Link href={"/"} className="text-base">
                Profile
              </Link>
              <button className="order-last" onClick={handleButton}>
                {mod === "light" ? (
                  <BsMoonStars className="text-2xl hover:text-slate-600 transition-all duration-150 ease-linear" />
                ) : (
                  <BsSun className="text-2xl hover:text-amber-400 transition-all duration-150 ease-linear" />
                )}
              </button>
              <Link href={"/accounts/login"} className="text-base">
                <button className="py-1.5 px-3 hover:text-white bg-transparent hover:bg-blue-700 rounded-lg transition-all duration-150 ease-linear">
                  Sign In
                </button>
              </Link>
              <Link href={"/accounts/signup"} className="text-base">
                <button className="py-1.5 px-3 text-blue-500 hover:text-white bg-transparent border border-blue-900 hover:bg-blue-700/70 rounded-lg transition-all duration-150 ease-linear">
                  Sign Up
                </button>
              </Link>
              <Link href="/create-post" className="text-base">
                <button className="py-1.5 px-3 text-white bg-blue-500 hover:bg-blue-700 rounded-lg transition-all duration-150 ease-linear">
                  Create Post
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
