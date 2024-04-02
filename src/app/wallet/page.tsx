import React from "react";
import Navbar from "../dashboard/components/Navbar";
import Searchbar from "../dashboard/components/Searchbar";
import CardComponent from "./components/cardComponent";

export default function Wallet() {
  return (
    <div className=" py-5 lg:flex ">
      <div>
        <Navbar />
      </div>
      <div className="w-full">
        <Searchbar />
        <div className="sm:mt-1 py-8 bg-[#FAFAFA]   lg:px-20 px-3 ">
          <div className="py-5 lg:pb-10 flex justify-between">
            <h1 className="text-3xl font-bold">Wallet Management</h1>
          </div>
          <div>
            <CardComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
