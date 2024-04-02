import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  title: string;
  avatar: StaticImageData;
}

export default function WalletCart({ children, title, avatar }: Props) {
  return (
    <div className="bg-[#FFFFFF] pt-5 px-4 shadow-[#959595] shadow rounded-xl ">
      <div className="flex gap-2 items-center mb-2">
        <Image src={avatar} alt="Icon-holder" className="w-[20px]" />
        <p className="sm:text-sm">{title}</p>
      </div>
      <hr className="border-[1px]" />
      <div>{children}</div>
    </div>
  );
}
