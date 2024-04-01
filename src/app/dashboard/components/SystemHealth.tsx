import React from "react";
import Health from "../../../../public/Group 12825.png";
import Image from "next/image";
import Green from "../../../../public/Rectangle 13160.png";
import Yellow from "../../../../public/Rectangle 13160 (1).png";
import Red from "../../../../public/Rectangle 13160 (2).png";
export default function SystemHealth() {
  return (
    <div className="bg-[#FFFFFF] my-10 mt-1 py-5 lg:py-5 rounded-xl px-4 lg:px-10 lg:max-w-full lg:h-[410px] shadow-[#959595] shadow ">
      <div className=" lg:pb-5 flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold sm:text-xl">System Health</h1>
      </div>
      <div className="">
        <h1 className="text-2xl  text-center">20% Below Limit</h1>

        <div className="flex justify-center items-center py-2">
          <Image src={Health} alt="healthBar" className="  " />
        </div>
        <div className="flex justify-center items-center pt-3 pb-7 gap-5 ">
          {/* Safe zone */}
          <span className="flex items-center gap-2 text-[#959595] text-lg">
            <Image src={Green} alt="healthBar" className="  " /> Safe zone
          </span>
          {/* Caution */}
          <span className="flex items-center gap-2 text-[#959595] text-lg">
            <Image src={Yellow} alt="healthBar" className="  " /> Caution
          </span>
          {/* Danger */}
          <span className="flex items-center gap-2 text-[#959595] text-lg ">
            <Image src={Red} alt="Danger" className="  " /> Danger
          </span>
        </div>
      </div>
    </div>
  );
}
