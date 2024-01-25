import React from "react";
import { IoHome } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { GiMineralHeart } from "react-icons/gi";
import { FaServicestack } from "react-icons/fa";
import Link from "next/link";

const BottomBar = () => {
  return (
    <div className="w-full lg:max-w-[600px] lg:mx-auto py-2 fixed bottom-0 left-0 right-0 shadow bg-[#212244] flex flex-row justify-around items-center">
      <Link
        href="/"
        className="flex flex-col space-y-1 text-white justify-center items-center text-[12px] cursor-pointer transition-all hover:scale-110"
      >
        <IoHome className="w-5 h-5 text-white font-bold " />
        <span>Home</span>
      </Link>
      <Link
        href="/team"
        className="flex flex-col space-y-1 text-white justify-center items-center text-[12px] cursor-pointer transition-all hover:scale-110"
      >
        <RiTeamFill className="w-5 h-5 text-white font-bold " />
        <span>Team</span>
      </Link>
      <Link
        href="/service"
        className="flex flex-col space-y-1 text-white justify-center items-center text-[12px] cursor-pointer transition-all hover:scale-110"
      >
        <FaServicestack className="w-5 h-5 text-white font-bold " />
        <span>Service</span>
      </Link>
      <Link
        href="/mine"
        className="flex flex-col space-y-1 text-white justify-center items-center text-[12px] cursor-pointer transition-all hover:scale-110"
      >
        <GiMineralHeart className="w-5 h-5 text-white font-bold " />
        <span>Mine</span>
      </Link>
    </div>
  );
};

export default BottomBar;
