import React from "react";

interface VideoPlayerProps {
  //   stream: MediaStream;
  mute: boolean;
  videoRef: React.RefObject<HTMLVideoElement>;
}

export default function VideoPlayer({
  //   stream,
  mute,
  videoRef,
}: VideoPlayerProps) {
  //   React.useEffect(() => {
  //     if (videoRef.current) videoRef.current.srcObject = stream;
  //   }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted={mute}
      className="h-full w-full"
      controls={false}
      style={{ width: "100%", objectFit: "cover" }}
    />
  );
}
