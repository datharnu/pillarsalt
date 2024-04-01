import React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
}

export default function WalletIcon({
  width = "21",
  height = "20",
  ...props
}: Props) {
  return (
    <svg
      width={width}
      {...props}
      height={height}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6667 3.33325H3.33335C2.40835 3.33325 1.67502 4.07492 1.67502 4.99992L1.66669 14.9999C1.66669 15.9249 2.40835 16.6666 3.33335 16.6666H16.6667C17.5917 16.6666 18.3334 15.9249 18.3334 14.9999V4.99992C18.3334 4.07492 17.5917 3.33325 16.6667 3.33325ZM16.6667 14.9999H3.33335V9.99992H16.6667V14.9999ZM16.6667 6.66659H3.33335V4.99992H16.6667V6.66659Z"
        fill="currentColor"
      />
    </svg>
  );
}
