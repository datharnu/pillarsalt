interface Props extends React.SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
}

export default function ArrowRightIcon({
  width = "21",
  height = "20",
  ...props
}: Props) {
  return (
    <svg
      width={width}
      {...props}
      height={height}
      viewBox="0 0 21 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5002 3.33337L9.32516 4.50837L13.9752 9.16671H3.8335V10.8334H13.9752L9.32516 15.4917L10.5002 16.6667L17.1668 10L10.5002 3.33337Z"
        fill="currentColor"
      />
    </svg>
  );
}
