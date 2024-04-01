import React from "react";
import Image from "next/image";
import CircleChart from "../../../../public/Group 13352.png";
import color1 from "../../../../public/Color (1).png";
import color2 from "../../../../public/Color.png";
export default function Transactions() {
  return (
    <div className="bg-[#FFFFFF] my-10 py-5 lg:py-5 lg:max-w-[45%] lg:mt-4 -mt-2 rounded-xl px-4 lg:h-[350px] lg:px-10   shadow-[#959595] shadow ">
      <div className=" lg:pb-5 flex justify-between items-center ">
        <h1 className="text-2xl font-bold sm:text-xl ">Transactions</h1>
      </div>
      <article className="lg:flex gap-10 lg:h-[300px] ">
        <div className=" grid grid-cols-2 lg:space-y-5  lg:flex lg:flex-col ">
          <div className=" sm:py-3">
            <p className="text-xl  ">162,3748</p>
            <h1 className="text-[#959595]  sm:text-sm ">
              Transactions Processed
            </h1>
          </div>
          <div className=" sm:py-3">
            <p className="text-xl">₦120,293,463</p>
            <h1 className="text-[#959595] sm:text-sm ">Transaction Volume</h1>
          </div>
          <div className=" sm:py-3">
            <p className="text-xl">₦11,901,821</p>
            <h1 className="text-[#959595] sm:text-sm ">
              Average Transaction Value
            </h1>
          </div>
        </div>
        <div className="space-y-10  ">
          <div className="flex justify-center items-center">
            <Image src={CircleChart} alt="circle-chart" className="" />
          </div>
          <span className="flex justify-center gap-5 lg:space-x-10 ">
            <div className="flex items-center gap-3 sm:text-sm lg:text-xs">
              <Image src={color2} alt="color-1" className="lg:w-[20%]" />
              Wallet (55%)
            </div>
            <div className="flex items-center gap-3 sm:text-sm lg:text-xs">
              <Image src={color1} alt="color-2" className="lg:w-[20%]" />
              Deposit (45%)
            </div>
          </span>
        </div>
      </article>
    </div>
  );
}
