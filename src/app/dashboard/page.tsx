import Image from "next/image";
import React from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import CardComponent from "@/components/shared/CardComponent";
import { SelectComponent } from "./components/SelectComponent";
import Revenue from "./components/Revenue";
import Transactions from "./components/Transactions";
import SystemHealth from "./components/SystemHealth";

export default function Dashboard() {
  const monthOptions = [
    { value: "1", label: "Last month" },
    { value: "2", label: "Last 2 months" },
    { value: "3", label: "This year" },
    { value: "4", label: "Last year" },
    { value: "5", label: "This month" },
    // Add more months as needed
  ];

  return (
    <section className="  ">
      <div className=" py-5 lg:flex ">
        <div className="">
          <Navbar />
        </div>

        <div className="w-full  ">
          <div>
            <Searchbar />
          </div>
          <div className="sm:mt-1 py-8 bg-[#FAFAFA] lg:px-20 px-3 md:px-10  ">
            <div className="py-5 lg:pb-10 flex justify-between">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <div className="hidden lg:block">
                <SelectComponent
                  label="Select Month"
                  placeholder="Choose a month"
                  options={monthOptions}
                />
              </div>
            </div>
            {/* Dashboard Cards */}
            <div className=" max-height-[120px] pb-3 flex  sm:overflow-x-auto md:overflow-x-auto gap-5 ">
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
            {/* Revenue */}
            <div className="lg:flex gap-5 ">
              <Revenue />
              <Transactions />
            </div>
            {/* Dashboard Second Cards */}
            <div className=" max-height-[120px] py-5 -mt-8 flex  sm:overflow-x-auto md:overflow-x-auto gap-5 ">
              <CardComponent
                amount="750,000"
                title="Registered Wallet"
                percentage={15}
                month="Last month"
              />

              <CardComponent
                amount="133,581"
                title="Active Wallet"
                percentage={5}
                month="Last month"
              />

              <CardComponent
                amount="1,291"
                title="New Wallet Created"
                percentage={15}
                month="Last month"
              />

              <CardComponent
                amount="₦1,300"
                title="Dormant Wallet"
                percentage={15}
                month="Last month"
              />
            </div>
            {/* System Health */}
            <SystemHealth />
          </div>
        </div>
      </div>
    </section>
  );
}
