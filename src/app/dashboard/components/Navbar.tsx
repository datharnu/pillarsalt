"use client";
import React, { useState } from "react";
import Logo from "../../../../public/IMG-20230417-WA0010 1.png";
import Image from "next/image";
import { AlignJustify, X } from "lucide-react";
import { Navlinks } from "@/utils/Navlinks";
import Searchbar from "../components/Searchbar";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="">
      {/* Small screen Navbar */}
      <div className=" lg:hidden  ">
        <div className="flex justify-between  wallet px-3 md:px-10 -mt-5 pt-2 ">
          <div className="w-24 h-14 ">
            <Image src={Logo} alt="Logo" />
          </div>
          <div>
            <AlignJustify onClick={toggleNav} className="mt-3 cursor-pointer" />
          </div>
        </div>

        {isNavOpen && (
          <nav className="bg-gray-100 space-y-5 h-screen w-[75%] hide absolute right-0 top-0 px-10 py-10 border">
            <X
              className="absolute right-10 lg:hidden cursor-pointer"
              onClick={closeNav}
            />
            {Navlinks.map((link) => (
              <div
                key={link.id}
                className="flex items-center text-[#959595] gap-2 hover:scale-110 hover:translate-x transition-all hover:bg-[#e2f6ed] hover:text-[#056839] p-2 "
              >
                {link.icon}
                <div className=" ">
                  <a href={link.href}>{link.name}</a>
                </div>
              </div>
            ))}
          </nav>
        )}
      </div>
      {/* Large Screen Navbar */}

      <div className="hidden lg:visible lg:flex justify-between w-full bg-[#FFFFFF]  ">
        <div className="space-y-10  w-[15rem]  border-r px-10">
          <div className="">
            <Image src={Logo} alt="Logo" />
          </div>
          <div className=" text-lg space-y-5">
            {Navlinks.map((link) => (
              <div
                key={link.id}
                className="flex items-center text-[#959595] gap-2   hover:translate-x-4 transition-all hover:bg-[#e2f6ed] hover:text-[#056839] p-2 "
              >
                {link.icon}
                <div className=" ">
                  <a href={link.href}>{link.name}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <Searchbar /> */}
      </div>
    </div>
  );
}
