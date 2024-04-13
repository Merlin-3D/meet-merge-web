import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundSize: {
      "30%": "30%",
      "16": "4rem",
    },
    extend: {
      backgroundImage: {
        group: "url('../../public/assets/group.png')",
        illustrator: "url('../../public/assets/illustrator.png')",
        grid: "url('../../public/assets/grid-join.png')",
      },
      width: {
        "100vw-w-6": "calc(100vw - 400px)",
        "100vw-w-7": "calc(100vw - 319px)",
      },
      height: {
        "100vh-h-7": "calc(100vh - 192px)",
      },
    },
    colors: {
      primary: {
        blue: "#0060FF",
        "blue-accent": "#DFEBFF",
        red: "#EB5757",
        "red-accent": "#FFC8C8",
        secondary: "#373131",
        "secondary-accent": "#ACACAC",
        grey: "#F1F0F0",
        "grey-accent": "#EAE9E9",
        white: "#FFFFFF",
      },
      secondary: {
        100: "#25293B",
        90: "#9E9E9E",
        80: "#A2A7B4",
        70: "#F6F6F6",
        60: "#AFAFAF",
        50: "#8D8F98",
      },
    },
  },
  plugins: [],
};
export default withMT(config);
