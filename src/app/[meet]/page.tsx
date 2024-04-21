"use client";

import { RemoteCard, VideoPlayer } from "@/components";
import { ScreenIcon } from "@/components/icons";
import { useSocketContext } from "@/core/socket-context";
import Aside from "@/layouts/aside";
import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import { Spinner } from "@material-tailwind/react";
import { useSearchParams } from "next/navigation";
import { io, Socket } from "socket.io-client";
import React from "react";
import Peer, { SignalData } from "simple-peer";
import { debuglog } from "util";
import _, { isEmpty } from "lodash";

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

const Video = (props: any) => {
  const ref = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.srcObject = props.peer.peer.streams[0];
    }
  }, []);

  return <video playsInline autoPlay muted ref={ref} />;
};

export default function Meet({
  params: { meet },
}: {
  params: { meet: string };
}) {
  const searchParams = useSearchParams();
  const uuid = searchParams.get("uuid");

  const socket = io("http://localhost:5000", {
    query: { userId: uuid, roomName: meet },
  });

  const [peers, setPeers] = React.useState<any[]>([]);
  const peersRef = React.useRef<any[]>([]);

  const [muteSound, setMuteSound] = React.useState(true);

  const videoRef = React.useRef<HTMLVideoElement>(null);

  const role = searchParams.get("rl");

  React.useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        if (role === "mdr") {
          socket.emit("creat room", { roomID: meet, role: "OWNER" });
        } else {
          socket.emit("join room", { roomID: meet, role: "INVITE" });
        }

        socket.on("all users", (users: any[]) => {
          let peers: any = [];

          users.forEach((userID: string, i) => {
            console.log({ userID });
            const peer = creatPeer(userID, socket.id!, stream);

            // peersRef.current.push({
            //   peerID: userID,
            //   peer,
            // });

            const existingPeer = _.find(peersRef.current, {
              peerID: userID,
            });

            if (!existingPeer) {
              peersRef.current.push({
                peerID: userID,
                peer,
              });
            }
            peers.push(peer);
          });

          // setPeers(peers);
          setPeers((prevPeers: any) => [...prevPeers, peers]);
        });

        socket.on("user joined", (payload) => {
          let peers: any = [];

          const peer = addPeer(payload.signal, payload.callerID, stream);

          peers.push(peer);

          const existingPeer = _.find(peersRef.current, {
            peerID: payload.callerID,
          });

          if (!existingPeer) {
            peersRef.current.push({
              peerID: payload.callerID,
              peer,
            });
          }
          setPeers((prevPeers: any) => [...prevPeers, peers]);
        });

        socket.on("receiving returned signal", (payload) => {
          // const item = peersRef.current.find(
          //   (p: any) => p.peerID === payload.id
          // );
          // item.peer.signal(payload.signal);
        });
      });
  }, []);

  function creatPeer(
    userToSignal: string,
    callerID: string,
    stream: MediaStream
  ) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
      config: {
        iceServers: [
          {
            urls: [
              "turn:192.158.29.39:3478?transport=udp",
              "turn:192.158.29.39:3478?transport=tcp",
            ],
            credential: "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
            username: "28224511:1379330808",
          },
          {
            urls: "turn:turn.bistri.com:80",
            credential: "homeo",
            username: "homeo",
          },
        ],
      },
    });
    peer.on("signal", (signal) => {
      socket.emit("sending signal", {
        userToSignal,
        callerID,
        signal,
      });
    });
    return peer;
  }

  function addPeer(
    incomingSignal: SignalData,
    callerID: string,
    stream: MediaStream
  ) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (signal) => {
      socket.emit("returning signal", {
        signal,
        callerID,
      });
    });
    peer.on("stream", (currentStream) => {
      // console.log(currentStream);
    });

    peer.signal(incomingSignal);
    return peer;
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
      videoRef.current.controls = false;
    }
  };

  const setLocalVideo = async () => {
    if (videoRef.current) {
      const stream = videoRef.current.srcObject as MediaStream;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => {
          if (track.kind === "video") {
            track.stop();
          }
        });
      }
    } else {
    }
  };

  return (
    <>
      <Header />
      <Aside />
      <main className="p-6 w-100vw-w-7 h-100vh-h-7 flex flex-row gap-x-6">
        <div
          className="flex flex-col gap-y-4 w-60 overflow-x-auto"
          style={{ scrollBehavior: "smooth", direction: "rtl" }}
        >
          {/* {remotesList.map((item) => {
            return (
              <RemoteCard
                key={item.url}
                activeSound={item.mute}
                urlImage={item.url}
              />
            );
          })} */}

          {!isEmpty(peersRef) ? (
            peersRef.current.map((peer: any, index: any) => {
              if (peer) {
                return <Video key={index} peer={peer} />;
              }
            })
          ) : (
            <></>
          )}
        </div>
        <div className="relative w-full">
          <div className="h-full w-full">
            <VideoPlayer mute={muteSound} videoRef={videoRef} />
          </div>
          <div className="absolute bottom-4 left-4 z-20">
            <div className="bg-gray-600/30 px-4 py-1 rounded-2xl">
              <h5 className="text-white text-base">Adam Joseph</h5>
            </div>
          </div>
          <div className="absolute top-4 right-4 z-20">
            <button
              onClick={toggleFullscreen}
              className="bg-gray-600/30 hover:bg-white/20 p-4 rounded-full"
            >
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
      <Footer
        muted={muteSound}
        setMuted={() => setMuteSound(!muteSound)}
        desableVideo={() => setLocalVideo()}
      />
    </>
  );
}
