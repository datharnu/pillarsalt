"use client";
import React from "react";
import Navbar from "../dashboard/components/Navbar";
import Searchbar from "../dashboard/components/Searchbar";
import WalletCard from "./components/WalletCard";
import Icon from "../../../public/icon-holder.png";
import Image from "next/image";
import wallet from "../../../public/Brown wallet with money.png";
import Zenith from "../../../public/1200px-Zenith_Bank_Logo 2.png";
import TableComponent from "@/components/shared/TableComponent";
import LargeScreenTable from "@/components/shared/LargeScreenTable";
import { FundWallet } from "./fundwallet/page";
export default function Wallet() {
  return (
    <div className=" py-5 lg:flex ">
      <div>
        <Navbar />
      </div>
      <div className="w-full">
        <Searchbar />
        <div className="sm:mt-1 py-8 bg-[#FAFAFA] h-full  lg:px-20 px-5 ">
          <div className="py-5 lg:pb-10 flex justify-between">
            <h1 className="text-3xl font-bold">Wallet Management</h1>
          </div>
          <div className="flex flex-col gap-5 lg:flex lg:flex-row lg:gap-10 ">
            {/* Account Details */}
            <div className="lg:w-full">
              <WalletCard title="Account Details" avatar={Icon}>
                <div className="py-5 lg:py-[1.7rem] flex justify-between items-center ">
                  <div className="space-y-2">
                    <h1 className="text-xl">James Ajayi</h1>
                    <p className="text-[#959595] sm:text-sm font-light ">
                      Wallet ID: 18273928
                    </p>
                  </div>
                  <Image src={Icon} alt="Icon-holder" className="mr-2" />
                </div>
              </WalletCard>
            </div>
            {/* Account Balance */}
            <div className="lg:w-full">
              <WalletCard title="Account Balance" avatar={Icon}>
                <div className="py-5 flex justify-between items-center ">
                  <div className="space-y-2">
                    <h1 className="text-xl">₦12,750,000</h1>
                    <div className=" flex  gap-2 text-[10px]  ">
                      <FundWallet />
                      <button className="border border-[#056839] text-[#219653] p-1 px-2 rounded-[6px]">
                        Withdraw
                      </button>
                    </div>
                  </div>
                  <Image src={wallet} alt="Icon-holder" className="mr-2" />
                </div>
              </WalletCard>
            </div>
            {/* Bank Account */}
            <div className="lg:w-full">
              <WalletCard title="Bank Account" avatar={Icon}>
                <div className="py-8  flex gap-2 ">
                  <Image src={Zenith} alt="Icon-holder" className="mr-2" />

                  <div className="">
                    <h1 className="text-xl">Zenith Bank</h1>
                    <p className="text-[#959595] sm:text-xs ">
                      Account Connected
                    </p>
                  </div>
                </div>
              </WalletCard>
            </div>
          </div>
          {/* Transactio HIstory */}
          <div>
            <div className="flex justify-between items-center py-5 font-semibold lg: mt-10">
              <h1 className="text-2xl ">Transaction History</h1>
              <p className="text-[#056839]">See all</p>
            </div>
            <TableComponent />
            <LargeScreenTable />
          </div>
        </div>
      </div>
    </div>
  );
}
