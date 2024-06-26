import { SVGProps } from "react";

export default function VideoMuteIcon({ ...pros }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...pros}
    >
      <path
        d="M16.63 8.08C16.63 8.08 16.66 7.13 16.63 6.82C16.46 4.78 15.13 4.08 12.52 4.08H6.21C3.05 4.08 2 5.13 2 8.29V16.71C2 17.97 2.38 19.24 3.37 20.05L4 20.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.7398 11.45V16.71C16.7398 19.87 15.6898 20.92 12.5298 20.92H7.25977"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.0002 7.24001V16.31C22.0002 17.98 20.8802 18.56 19.5202 17.6L16.7402 15.65"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.02 2.69L2.02002 22.69"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
