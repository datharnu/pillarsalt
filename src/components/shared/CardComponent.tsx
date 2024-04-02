import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  amount: string;
  percentage: number; // Change type to number
  month: string;
}

export default function CardComponent({
  title,
  amount,
  percentage,
  month,
}: Props) {
  // Determine the className and arrow icon dynamically based on the percentage value
  const percentageClassName =
    percentage > 10 ? "text-green-500" : "text-red-500";
  const arrowIcon =
    percentage > 10 ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-green-500 inline-block"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10.293 5.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L11 8.414V16a1 1 0 1 1-2 0V8.414l-2.293 2.293a1 1 0 1 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-red-500 inline-block"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10.293 14.707a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L9 11.586V4a1 1 0 1 1 2 0v7.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3z"
          clipRule="evenodd"
        />
      </svg>
    );

  return (
    <div className="bg-[#FFFFFF] min-w-[260px] w-full sm:mx-[2px] md:mx-[2px]   rounded-xl shadow-[#959595] shadow ">
      <div className="py-5   space-y-2 pl-8">
        <div>
          <h1 className="text-[#959595] sm:text-sm ">{title}</h1>
        </div>
        <div>
          <h1 className="text-3xl sm:text-2xl">{amount}</h1>
        </div>
        <div className="space-x-2">
          <span className={percentageClassName}>
            {arrowIcon} {percentage}%
          </span>
          <span className="text-[#959595] sm:text-sm ">{month}</span>
        </div>
      </div>
    </div>
  );
}
