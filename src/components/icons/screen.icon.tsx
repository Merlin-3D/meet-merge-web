import { SVGProps } from "react";

export default function ScreenIcon({ ...pros }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...pros}
    >
      <path
        d="M2.3335 10.5V7.58331C2.3335 4.67831 4.6785 2.33331 7.5835 2.33331H10.5002"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 2.33331H20.4167C23.3217 2.33331 25.6667 4.67831 25.6667 7.58331V10.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.6665 18.6667V20.4167C25.6665 23.3217 23.3215 25.6667 20.4165 25.6667H18.6665"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5002 25.6667H7.5835C4.6785 25.6667 2.3335 23.3217 2.3335 20.4167V17.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
