import Image from "next/image";
import React from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import CardComponent from "@/components/shared/CardComponent";
import { SelectComponent } from "./components/SelectComponent";

export default function Dashboard() {
  return (
    <section className=" sm:px-3 md:px-3">
      <div className=" py-5 lg:flex ">
        <div className="">
          <Navbar />
        </div>

        <div className="w-full">
          <div>
            <Searchbar />
          </div>
          <div className="sm:-mt-10 py-8 bg-[#FAFAFA] px-3 lg:px-20   ">
            <div className="py-5 lg:pb-10 flex justify-between">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <div className="hidden lg:block">
                <SelectComponent />
              </div>
            </div>

            <div className=" max-height-[120px]  flex  sm:overflow-x-auto md:overflow-x-auto gap-5 ">
              <CardComponent
                amount="₦12,750,000"
                title="Current Balance"
                percentage={15}
                month="Last month"
              />

              <CardComponent
                amount="23,4892"
                title="Total Transaction"
                percentage={5}
                month="Last month"
              />

              <CardComponent
                amount="₦12,750,000"
                title="Total Withdrawal"
                percentage={15}
                month="Last month"
              />

              <CardComponent
                amount="₦1,291"
                title="Total Braches"
                percentage={15}
                month="Last month"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
