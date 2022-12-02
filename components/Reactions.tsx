"use client";
import React, {useState} from "react";
import {BsHeart, BsHeartFill, BsBookmark, BsThreeDots} from "react-icons/bs";
import {FaRegComment} from "react-icons/fa";

export default function Reactions({data, horizontal = false}: any) {
  const [isClick, setIsClick] = useState(false);
  const [det, setDet] = useState(data);
  const handleClick = (e: any) => {
    setIsClick(!isClick);
  };
  return (
    <div
      className={`${
        horizontal
          ? "flex sm:hidden border-t  border-slate-300 dark:border-slate-800 fixed bottom-0 z-40 left-0 bg-white dark:bg-[#031c32] w-full justify-between items-center"
          : "hidden sm:flex"
      } dark:text-white`}
    >
      <div
        className={`${
          horizontal
            ? "flex flex-row px-8 my-2 justify-between"
            : "flex flex-col"
        } gap-6 w-full h-max sticky top-20  items-center`}
      >
        <button
          onClick={handleClick}
          className={`${
            horizontal ? "flex flex-row space-x-1" : "flex flex-col"
          } items-center group`}
        >
          <div
            className={`text-xl group-hover:bg-red-200/[.34] group-hover:text-[red] rounded-full p-2.5 transition duration-500 ease-in-out ${
              isClick ? "ring ring-[red] ring-opacity-80" : ""
            }`}
          >
            {isClick ? <BsHeartFill fill="red" /> : <BsHeart />}
          </div>
          <div>{13}</div>
        </button>
        <button
          className={`${
            horizontal ? "flex flex-row space-x-1" : "flex flex-col"
          } items-center group`}
        >
          <div className="text-xl group-hover:bg-amber-200/[.34] group-hover:text-[#FFBF00]  rounded-full p-2.5 transition duration-500 ease-in-out">
            <FaRegComment />
          </div>
          <div>{11}</div>
        </button>
        <button
          className={`${
            horizontal ? "flex flex-row space-x-1" : "flex flex-col"
          } items-center group`}
        >
          <div className="text-xl group-hover:bg-blue-500/[.24] group-hover:text-[#1515f4]  rounded-full p-2.5 transition duration-500 ease-in-out">
            <BsBookmark />
          </div>
          <div>{1}</div>
        </button>
        <button className={`text-2xl`}>
          <BsThreeDots />
        </button>
      </div>
    </div>
  );
}
