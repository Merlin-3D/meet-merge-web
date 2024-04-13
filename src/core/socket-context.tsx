"use client";

import { useRouter } from "next/navigation";
import React, { createContext, ReactNode, useState } from "react";
import { io } from "socket.io-client";

interface Props {
  children?: ReactNode;
  query: {
    [key: string]: any;
  };
}

export const SocketContext = createContext({
  isJoinMeet: false,
  joinMeeting: (id: string) => {},
  startMeeting: (id: string) => {},
});

export const SocketProvider = ({ children, query }: Props) => {
  const socket = io("http://localhost:5000", {
    query,
  });

  const [callEnded, setCallEnded] = useState(false);
  const [isJoinMeet, setIsJoinMeet] = useState(false);
  const router = useRouter();

  const startMeeting = (moderatorId: string) => {
    socket.emit("createRoom", { moderatorId, room: query.roomName });
    setTimeout(() => {
      setIsJoinMeet(true);
      return router.push(`/${query.roomName}`);
    }, 1000);
  };

  const joinMeeting = (id: string) => {
    setTimeout(() => {
      setIsJoinMeet(true);
      return router.push(`/${query.roomName}`);
    }, 1000);
  };

  const value = {
    startMeeting,
    joinMeeting,
    isJoinMeet,
  };

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};

export const useSocketContext = () => React.useContext(SocketContext);
