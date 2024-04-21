"use client";
import { SocketProvider } from "@/core/socket-context";
import { useSearchParams } from "next/navigation";

export default function MeetLayout({
  params: { meet },
  children,
}: {
  children: React.ReactNode;
  params: { meet: string };
}) {
  const searchParams = useSearchParams();
  const uuid = searchParams.get("uuid");
  return (
    <>
      <SocketProvider query={{ userId: uuid, roomName: meet }}>
        {children}
      </SocketProvider>
    </>
  );
}
