import React from "react";
import { SelectComponent } from "./SelectComponent";
import Barchart from "../../../../public/Bar Chart.svg";
import Image from "next/image";
export default function Revenue() {
  const revenueType = [
    { value: "1", label: "By Pos" },
    { value: "2", label: "By Service" },
    { value: "3", label: "By Card" },
  ];
  return (
    <div className="bg-[#FFFFFF] my-10 py-5 mt-4 lg:py-5 rounded-xl px-4 lg:px-10 lg:max-w-[90%] lg:h-[350px] shadow-[#959595] shadow ">
      <div className=" lg:pb-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold sm:text-xl">Revenue</h1>
        <div className="block">
          <SelectComponent
            label=""
            placeholder="Transactions"
            options={revenueType}
          />
        </div>
      </div>
      <div className="lg:flex gap-10 ">
        <div className="sm:flex md:flex justify-between items-center ">
          <div className="space-y-2 py-3">
            <p className="text-2xl sm:text-xl ">₦2,750,000</p>
            <h1 className="text-[#959595]  sm:text-sm ">Total Revenue</h1>
          </div>
          <div className="space-y-2 py-3">
            <p className="text-2xl sm:text-xl">₦313,489</p>
            <h1 className="text-[#959595]  sm:text-sm">Avg./Transaction</h1>
          </div>
        </div>
        <div>
          <Image
            src={Barchart}
            alt="bar-chart"
            className="w-full lg:w-[30rem] "
          />
        </div>
      </div>
    </div>
  );
}
