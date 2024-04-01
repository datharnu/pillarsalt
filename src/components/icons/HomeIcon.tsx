import React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
}

export default function HomeIcon({
  width = "20",
  height = "17",
  ...props
}: Props) {
  return (
    <svg
      width={width}
      {...props}
      height={height}
      viewBox="0 0 20 17"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99998 3.21583L14.5833 7.34083V14.5H12.75V9H7.24998V14.5H5.41665V7.34083L9.99998 3.21583ZM9.99998 0.75L0.833313 9H3.58331V16.3333H9.08331V10.8333H10.9166V16.3333H16.4166V9H19.1666L9.99998 0.75Z"
        fill="currentColor"
      />
    </svg>
  );
}
