import { SVGProps } from "react";

export default function RecordIcon({ ...pros }: SVGProps<SVGSVGElement>) {
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
        d="M13.965 25.6666C20.4083 25.6666 25.6317 20.4433 25.6317 14C25.6317 7.55666 20.4083 2.33331 13.965 2.33331C7.52168 2.33331 2.29834 7.55666 2.29834 14C2.29834 20.4433 7.52168 25.6666 13.965 25.6666Z"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.0004 18.935C16.726 18.935 18.9354 16.7255 18.9354 14C18.9354 11.2745 16.726 9.065 14.0004 9.065C11.2749 9.065 9.06543 11.2745 9.06543 14C9.06543 16.7255 11.2749 18.935 14.0004 18.935Z"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="14" r="4" fill="currentColor" fillOpacity="0.6" />
    </svg>
  );
}
