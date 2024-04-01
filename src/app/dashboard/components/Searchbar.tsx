import React from "react";
import Image from "next/image";
import Notification from "../../../../public/clarity_bell-solid-badged.png";
import ProfileIcon from "../../../../public/Group 13334.png";
import wallet from "../../../../public/Vector (1).png";
export default function Searchbar() {
  return (
    <div className=" flex justify-between border-b w-full  px-20 py-1 bg-[#FFFFFF] h-16 sm:hidden md:hidden ">
      <div className="">
        <input
          type="search"
          placeholder="Search anything here"
          className="w-[25rem] p-1 border border-gray-300 rounded-md "
        />
      </div>
      {/* notification */}
      <div className=" gap-5">
        <div className="flex items-center gap-5">
          <div className="cursor-pointer">
            <Image src={Notification} alt="Notification" />
          </div>

          <div className="cursor-pointer">
            <Image src={ProfileIcon} alt="Profile Icon" className="" />
          </div>
          <div className="flex items-center gap-2 cursor-pointer ">
            <Image src={wallet} alt="wallet" />
            <span className="text-xs">N0.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
