import Image from "next/image";
import { SoundIcon, SoundMuteIcon } from "./icons";

interface RemoteCardProps {
  activeSound: boolean;
  urlImage: string;
}

export default function RemoteCard({ activeSound, urlImage }: RemoteCardProps) {
  return (
    <div className="relative min-w-40 ml-4">
      <img
        src={urlImage}
        alt=""
        width={500}
        height={500}
        className="rounded-lg w-full h-full object-cover"
      />

      <div className="bg-gradient inset-0 h-full w-full absolute top-0 z-20">
        <Image
          src={"/assets/gadient.png"}
          alt=""
          width={500}
          height={500}
          className="rounded-xl w-full h-full"
        />
      </div>
      <div className="absolute bottom-3 left-3 z-20">
        <div className="bg-white/30 px-4 py-1 rounded-2xl">
          <h5 className="text-white text-xs">Cassie Jung</h5>
        </div>
      </div>
      {activeSound ? (
        <div className="absolute bottom-3 right-3 z-20 rounded-full bg-primary-blue p-2 ">
          <SoundIcon className="text-primary-white h-4 w-4" />
        </div>
      ) : (
        <div className="absolute bottom-3 right-3 z-20 rounded-full bg-primary-red p-2 ">
          <SoundMuteIcon className="text-primary-white h-4 w-4" />
        </div>
      )}
    </div>
  );
}
