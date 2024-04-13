import { SocketProvider } from "@/core/socket-context";
import { randUserId } from "@/utils/common";

export default function MeetLayout({
  params: { meet },
  children,
}: {
  children: React.ReactNode;
  params: { meet: string };
}) {
  return (
    <>
      <SocketProvider query={{ callerId: 1, roomName: meet }}>
        {children}
      </SocketProvider>
    </>
  );
}
