export default function ChatItem() {
  return (
    <div className="py-2 rounded-3xl flex items-center w-full gap-x-3">
      <img
        className="border-2 border-primary-white rounded-full h-10 w-10 "
        src={"https://randomuser.me/api/portraits/men/33.jpg"}
        alt=""
      />
      <div className="bg-primary-white rounded-lg p-2">
        <span className="text-[10px] font-medium text-secondary-60">
          Kathryn Murphy
        </span>
        <p className="text-xs text-secondary-100 font-medium">
          Good afternoon, everyone.
        </p>
      </div>
      <span className="text-[10px] font-medium text-secondary-60">
        11:01 AM
      </span>
    </div>
  );
}
