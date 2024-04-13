import { UserGroup } from "@/components";
import { LinkIcon, LogoIcon, TripleDot } from "@/components/icons";
import { usersGroup } from "@/utils/mocks";

export default function Header() {
  return (
    <header className="bg-primary-white w-full flex flex-row h-24 z-20">
      <div className="h-full border-r-[1px] border-primary-grey-accent flex justify-center items-center px-8">
        <LogoIcon />
      </div>
      <div className="px-8 flex justify-between items-center w-full">
        <div className="flex flex-col justify-center gap-y-1">
          <h1 className="text-2xl text-secondary font-medium">
            [Internal] Weekly Report Marketing + Sales
          </h1>
          <h6 className="text-sm font-medium text-primary-secondary-accent">
            June 12th, 2022 | 11:00 AM{" "}
          </h6>
        </div>
        <div className="flex items-center gap-x-10">
          <div className="flex gap-x-2">
            <UserGroup users={usersGroup} />
            <div className="bg-primary-blue-accent py-1 px-4 rounded-3xl flex items-center">
              <LinkIcon />
              <hr className="h-4 w-[1px] bg-primary-blue mx-2" />
              <span className="text-primary-blue text-sm font-medium">
                cem-jnmt-hsu
              </span>
            </div>
          </div>

          <div className="bg-secondary-70 py-2 px-3 rounded-3xl flex justify-between items-center w-64">
            <div className="flex items-center gap-x-4">
              <img
                className="border-2 border-primary-white rounded-full h-10 w-10 "
                src={"https://randomuser.me/api/portraits/men/42.jpg"}
                alt=""
              />
              <div className="flex flex-col w-full">
                <span className="text-secondary-100 text-sm font-medium">
                  Adam Joseph
                </span>
                <span className="text-secondary-90 text-xs font-medium">
                  Moderator
                </span>
              </div>
            </div>
            <TripleDot />
          </div>
        </div>
      </div>
    </header>
  );
}
