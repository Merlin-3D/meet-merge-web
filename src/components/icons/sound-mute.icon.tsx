import { SVGProps } from "react";

export default function SoundMuteIcon({ ...pros }: SVGProps<SVGSVGElement>) {
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
        d="M16 6.8V6.5C16 4.29 14.21 2.5 12 2.5C9.79 2.5 8 4.29 8 6.5V11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.04004 14.69C9.77004 15.5 10.83 16 12 16C14.21 16 16 14.21 16 12V11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.77979 17.45C8.14979 18.72 9.97978 19.5 11.9998 19.5C16.2198 19.5 19.6498 16.07 19.6498 11.85V10.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.3501 10.15V11.85C4.3501 12.91 4.5601 13.91 4.9501 14.83"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.0702 3.34L3.93018 19.49"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 3.5V6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 19.5V22.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
