import { tableDatas } from "@/utils/tableDatas";
import React from "react";

// Define a separate component for rendering each table row
const TableRow = ({ label, value }: { label: string; value: string }) => (
  <div className="space-y-2">
    <h1 className="text-xs text-[#959595]">{label}</h1>
    <p
      className={`text-xs ${
        ["Amount", "Transaction Ref", "Depositor"].includes(label)
          ? "text-[#056839] font-bold text-[16px] "
          : ""
      }`}
    >
      {value}
    </p>
  </div>
);

export default function TableComponent() {
  return (
    <div>
      {tableDatas.map((data) => (
        <div
          key={data.id}
          className="bg-[#FFFFFF] shadow-[#959595] shadow rounded-xl p-5 mb-5"
        >
          {/* Render the information row */}
          <div>
            <div className="flex justify-between text-sm pb-2">
              <h1>
                {data.snLabel} <span>{data.sn}</span>
              </h1>
              <h1>
                {data.dateLabel} <span>{data.date}</span>
              </h1>
              <h1 className="">
                {data.statusLabel}
                <span
                  className={` rounded-2xl font-bold ml-1.5 text-xs px-2 py-1 text-white ${
                    data.status === "Completed"
                      ? "bg-[#00B87C]"
                      : "bg-[#F08C00]"
                  }`}
                >
                  {data.status}
                </span>
              </h1>
            </div>
          </div>

          <hr className="border-[1px]" />

          {/* Render table rows dynamically */}
          <div>
            <div className="flex justify-between text-sm pt-5 pb-3">
              <TableRow label={data.amountLabel} value={data.amount} />
              <TableRow
                label={data.transactionRefLabel}
                value={data.transactionRef}
              />
              <TableRow label={data.depositorLabel} value={data.depositor} />
            </div>

            <hr className="border-[1px]" />

            <div className="flex justify-between text-sm pt-5">
              <TableRow label={data.narrationLabel} value={data.narration} />
              <TableRow label={data.branchLabel} value={data.branch} />
              <TableRow label={data.branchIdLabel} value={data.branchId} />
              <TableRow label={data.actionLabel} value={data.actions} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
