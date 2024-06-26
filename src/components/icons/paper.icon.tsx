import { SVGProps } from "react";

export default function PaperIcon({ ...pros }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...pros}
    >
      <path
        d="M14.9624 15V19.375C14.9624 21.7875 16.9249 23.75 19.3374 23.75C21.7499 23.75 23.7124 21.7875 23.7124 19.375V12.5C23.7124 7.6625 19.7999 3.75 14.9624 3.75C10.1249 3.75 6.2124 7.6625 6.2124 12.5V20C6.2124 24.1375 9.5749 27.5 13.7124 27.5"
        stroke="#8D8F98"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
