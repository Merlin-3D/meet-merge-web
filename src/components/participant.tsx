import { SoundIcon, SoundMuteIcon, VideoIcon, VideoMuteIcon } from "./icons";

interface ParticipantProps {
  activeMedia: boolean;
}

export default function Participant({ activeMedia }: ParticipantProps) {
  return (
    <div className="bg-primary-white py-2 px-3 rounded-3xl flex justify-between items-center w-full">
      <div className="flex items-center gap-x-4">
        <img
          className="rounded-full h-10 w-10 "
          src={"https://randomuser.me/api/portraits/men/21.jpg"}
          alt=""
        />
        <span className="text-secondary-100 text-sm font-medium">
          Adam Joseph
        </span>
      </div>
      {activeMedia ? (
        <div className="flex gap-x-4">
          <SoundIcon className="text-primary-blue h-6 w-6" />
          <VideoIcon className="text-primary-blue h-6 w-6" />
        </div>
      ) : (
        <div className="flex gap-x-4">
          <SoundMuteIcon className="text-primary-red" />
          <VideoMuteIcon className="text-primary-red" />
        </div>
      )}
    </div>
  );
}
