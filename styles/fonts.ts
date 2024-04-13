import localFont from "next/font/local";

const interFont = localFont({
  src: [
    {
      path: "./fonts/Inter/Inter-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Inter/Inter-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Inter/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Inter/Inter-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Inter/Inter-Bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Inter/Inter-ExtraBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Inter/Inter-Black.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

const montserratFont = localFont({
  src: [
    {
      path: "./fonts/Montserrat/Montserrat-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat/Montserrat-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat/Montserrat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat/Montserrat-Bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat/Montserrat-ExtraBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat/Montserrat-Black.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

export { interFont, montserratFont };
