"use client";

import React, { createContext, ReactNode } from "react";
import { io, Socket } from "socket.io-client";

interface Props {
  children?: ReactNode;
  query: {
    [key: string]: any;
  };
}

export const SocketContext = createContext({
  socket: {} as Socket,
});

export const SocketProvider = ({ children, query }: Props) => {
  const socket = io("http://localhost:5000", {
    query,
  });

  React.useEffect(() => {}, []);

  // const PeerConnection = (initiator: boolean, stream: MediaStream) =>
  //   new Peer({
  //     initiator: initiator,
  //     trickle: false,
  //     stream: stream,
  //     config: {
  //       iceServers: [
  //         {
  //           urls: [
  //             "turn:192.158.29.39:3478?transport=udp",
  //             "turn:192.158.29.39:3478?transport=tcp",
  //           ],
  //           credential: "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
  //           username: "28224511:1379330808",
  //         },
  //         {
  //           urls: "turn:turn.bistri.com:80",
  //           credential: "homeo",
  //           username: "homeo",
  //         },
  //       ],
  //     },
  //   });

  // const startMeeting = async (moderatorId: string) => {
  //   const peer = await startPeer(true);

  //   peer.on("signal", (data) => {
  //     socket.emit("iceCandidate", {
  //       offerCandidate: data,
  //     });

  //     socket.emit("createRoom", {
  //       moderatorId,
  //       room: query.roomName,
  //       sdpOffer: data,
  //     });
  //   });
  //   peer.on("error", (error) => {
  //     console.log(error);
  //   });
  // };

  // const joinMeeting = async (roomName: string) => {
  //   // router.push(`/${query.roomName}/join`)
  //   socket.emit("joinedRoom", {
  //     participantId: "02",
  //     room: query.roomName,
  //   });

  //   //   router.push(`/${roomName}?ptc=${roomName}`);
  // };

  const value = {
    socket,
  };

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};

export const useSocketContext = () => React.useContext(SocketContext);
