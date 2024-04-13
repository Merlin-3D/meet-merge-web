import {
  DotHorizontalIcon,
  MessageIcon,
  RecordIcon,
  ShareIcon,
  SoundIcon,
  VideoIcon,
} from "@/components/icons";

export default function Footer() {
  return (
    <footer className="fixed w-screen h-24 bg-primary-white bottom-0">
      <div className="max-w-5xl mx-auto h-full grid grid-cols-12">
        <div className="col-span-9 flex flex-row items-center justify-center gap-x-4">
          <button className="rounded-full bg-primary-blue hover:bg-primary-blue-accent p-3 group">
            <SoundIcon className="text-primary-white group-hover:text-primary-blue h-6 w-6" />
          </button>
          <button className="rounded-full bg-primary-blue hover:bg-primary-blue-accent p-3 group">
            <VideoIcon className="text-primary-white group-hover:text-primary-blue h-6 w-6" />
          </button>
          <button className="rounded-full bg-primary-blue-accent hover:bg-primary-blue p-3 group">
            <ShareIcon className="text-primary-blue group-hover:text-primary-blue-accent h-6 w-6" />
          </button>
          <button className="rounded-full bg-primary-red-accent hover:bg-primary-red p-3 group">
            <RecordIcon className="text-primary-red group-hover:text-primary-red-accent h-6 w-6" />
          </button>
          <button className="rounded-full bg-primary-blue-accent hover:bg-primary-blue p-3 group">
            <MessageIcon className="text-primary-blue group-hover:text-primary-blue-accent h-6 w-6" />
          </button>
          <button className="rounded-full bg-primary-blue-accent hover:bg-primary-blue p-3 group">
            <DotHorizontalIcon className="text-primary-blue group-hover:text-primary-blue-accent h-6 w-6" />
          </button>
        </div>
        <div className="col-span-3 flex items-center justify-end">
          <button
            type="button"
            className="text-lg font-semibold text-primary-white bg-primary-red hover:bg-primary-red-accent hover:text-primary-red px-6 py-3 rounded-3xl"
          >
            End Call
          </button>
        </div>
      </div>
    </footer>
  );
}
