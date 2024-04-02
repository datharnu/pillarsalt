import Image, { StaticImageData } from "next/image";
import React from "react";
import Icon from "../../../../public/icon-holder.png";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  avatar: StaticImageData;
  Title: string;
}

export default function CardComponent({ avatar, Title }: Props) {
  return (
    <div>
      <div className="">
        <Image src={Icon} alt="Icon-holder" />
        <p>Account Details</p>
      </div>
    </div>
  );
}
