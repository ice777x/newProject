"use client";
import React, {useState} from "react";
import {BsHeart, BsHeartFill, BsBookmark} from "react-icons/bs";
import {FaRegComment} from "react-icons/fa";

export default function Reactions({data}: any) {
  const [isClick, setIsClick] = useState(false);
  const [det, setDet] = useState(data);
  const handleClick = (e: any) => {
    setIsClick(!isClick);
    setDet({...det, likes: isClick ? det.likes - 1 : det.likes + 1});
  };
  return (
    <div className="hidden sm:flex dark:text-white">
      <div className="flex gap-6 flex-col w-full h-max sticky top-20  items-center">
        <button
          onClick={handleClick}
          className="flex flex-col items-center group"
        >
          <div
            className={`text-xl group-hover:bg-red-200/[.34] group-hover:text-[red] rounded-full p-2.5 transition duration-500 ease-in-out ${
              isClick ? "ring ring-[red] ring-opacity-80" : ""
            }`}
          >
            {isClick ? <BsHeartFill fill="red" /> : <BsHeart />}
          </div>
          <div>{det?.likes}</div>
        </button>
        <button className="flex flex-col items-center group">
          <div className="text-xl group-hover:bg-amber-200/[.34] group-hover:text-[#FFBF00]  rounded-full p-2.5 transition duration-500 ease-in-out">
            <FaRegComment />
          </div>
          <div>{data?.comment}</div>
        </button>
        <button className="flex flex-col items-center group">
          <div className="text-xl group-hover:bg-blue-500/[.24] group-hover:text-[#1515f4]  rounded-full p-2.5 transition duration-500 ease-in-out">
            <BsBookmark />
          </div>
          <div>{data?.saved}</div>
        </button>
      </div>
    </div>
  );
}
