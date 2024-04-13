"use client";

import { RemoteCard } from "@/components";
import { ScreenIcon } from "@/components/icons";
import { useSocketContext } from "@/core/socket-context";
import Aside from "@/layouts/aside";
import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import { Spinner } from "@material-tailwind/react";
import { useSearchParams } from "next/navigation";
import React from "react";

const remotesList = [
  {
    mute: false,
    url: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    mute: true,
    url: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    mute: true,
    url: "https://randomuser.me/api/portraits/women/34.jpg",
  },
  {
    mute: false,
    url: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    mute: false,
    url: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    mute: false,
    url: "https://randomuser.me/api/portraits/women/37.jpg",
  },
  {
    mute: false,
    url: "https://randomuser.me/api/portraits/women/38.jpg",
  },
  {
    mute: true,
    url: "https://randomuser.me/api/portraits/women/39.jpg",
  },
  {
    mute: true,
    url: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    mute: false,
    url: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    mute: false,
    url: "https://randomuser.me/api/portraits/women/42.jpg",
  },
  {
    mute: false,
    url: "https://randomuser.me/api/portraits/men/43.jpg",
  },
];
export default function Meet() {
  const { startMeeting, isJoinMeet, joinMeeting } = useSocketContext();
  const searchParams = useSearchParams();

  const meetQuery = searchParams.get("jnm");
  React.useEffect(() => {
    console.log(meetQuery);
    if (meetQuery) {
      startMeeting("001");
    } else {
      joinMeeting("002");
    }
    return () => {};
  }, []);

  return isJoinMeet ? (
    <>
      <Header />
      <Aside />
      <main className="p-6 w-100vw-w-7 h-100vh-h-7 flex flex-row gap-x-6">
        <div
          className="flex flex-col gap-y-4 w-60 overflow-x-auto"
          style={{ scrollBehavior: "smooth", direction: "rtl" }}
        >
          {remotesList.map((item) => {
            return (
              <RemoteCard
                key={item.url}
                activeSound={item.mute}
                urlImage={item.url}
              />
            );
          })}
        </div>
        <div className="relative w-full">
          <img
            src={"/assets/moderateur.png"}
            alt=""
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute bottom-4 left-4 z-20">
            <div className="bg-gray-600/30 px-4 py-1 rounded-2xl">
              <h5 className="text-white text-base">Adam Joseph</h5>
            </div>
          </div>
          <div className="absolute top-4 right-4 z-20">
            <button className="bg-gray-600/30 hover:bg-white/20 p-4 rounded-full">
              <ScreenIcon />
            </button>
          </div>
          <div className="absolute bottom-4 right-4 z-20">
            <div className="bg-gray-600/30 p-4 rounded-full">
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 11L5 28"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 13L12 26"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 5.14583V32.8542"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26 13V26"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33 11L33 28"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  ) : (
    <section className="flex items-center justify-center h-screen w-screen bg-secondary-100 gap-x-4">
      <Spinner
        color="blue"
        className="h-8 w-8"
        onPointerEnterCapture={""}
        onPointerLeaveCapture={""}
      />
      <span className="text-4xl font-semibold text-primary-white">
        Loading...
      </span>
    </section>
  );
}
