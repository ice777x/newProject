"use client";
import Link from "next/link";
import React, {useState} from "react";
import {BsSun, BsMoon, BsMoonStars} from "react-icons/bs";

export default function Header({mode}: {mode: any}) {
  const [mod, setMode] = mode;
  const [isOpen, setIsOpen] = useState(false);
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
          <div className="text-xl font-semibold">
            <div className="flex space-x-5">
              <Link href={"/"}>Profile</Link>
              <button onClick={handleButton}>
                {mod === "light" ? (
                  <BsMoonStars className="text-2xl" />
                ) : (
                  <BsSun className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
