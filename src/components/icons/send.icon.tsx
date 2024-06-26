import { SVGProps } from "react";

export default function SendIcon({ ...pros }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...pros}
    >
      <g filter="url(#filter0_b_42_1421)">
        <rect width="50" height="50" rx="25" fill="#0060FF" />
      </g>
      <path
        d="M19.2501 17.9L29.8626 14.3625C34.6251 12.775 37.2126 15.375 35.6376 20.1375L32.1001 30.75C29.7251 37.8875 25.8251 37.8875 23.4501 30.75L22.4001 27.6L19.2501 26.55C12.1126 24.175 12.1126 20.2875 19.2501 17.9Z"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.6377 27.0625L27.1127 22.575"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_b_42_1421"
          x="-7"
          y="-7"
          width="64"
          height="64"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.5" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_42_1421"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_42_1421"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
