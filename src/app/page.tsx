import { LinkIcon, LogoIcon } from "@/components/icons";
import classNames from "classnames";
import { montserratFont } from "../../styles/fonts";
import { meetLink } from "@/utils/common";

export default function Home() {
  return (
    <main
      className={classNames(
        montserratFont.className,
        "h-screen w-screen flex flex-col bg-primary-white"
      )}
    >
      <header className="bg-primary-white w-full flex flex-row h-24 z-20 border-b-[1px] border-primary-grey-accent">
        <div className="h-full border-r-[1px] border-primary-grey-accent flex justify-center items-center px-8">
          <LogoIcon />
        </div>
        <div className="px-8 flex justify-between items-center w-full">
          <div className="flex flex-col justify-center gap-y-1">
            <h1 className="text-2xl text-secondary font-medium uppercase">
              Meet Merge
            </h1>
          </div>
          <ul className="flex items-center gap-x-4">
            <li className="text-2xl text-primary-blue font-medium uppercase cursor-pointer">
              Login
            </li>
            <li className="text-2xl text-primary-blue font-medium uppercase cursor-pointer">
              Register
            </li>
          </ul>
        </div>
      </header>
      <div className="h-full w-full bg-grid bg-right-bottom bg-30% bg-no-repeat">
        <div className="h-full bg-group bg-no-repeat bg-center w-full flex flex-col justify-center items-center gap-y-8">
          <h1 className="text-4xl font-medium">JOIN MEETING</h1>
          <p className="text-center">
            Meet Merge allows for easy organizing and
            <br /> joining of secure video calls and video conferences on <br />
            any device.
          </p>
          <div className="flex gap-4 items-center">
            <a
              href={`/${meetLink}?jnm=public`}
              className="flex justify-center items-center text-lg font-semibold text-primary-white bg-primary-blue hover:bg-primary-blue-accent hover:text-primary-blue px-6 h-12"
            >
              <span>Start an instant meeting</span>
            </a>
            <div className="h-full flex flex-col justify-center items-center relative">
              <LinkIcon className="absolute left-2" />
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter a code or link to join."
                className="bg-secondary-70 placeholder:text-secondary-50 placeholder:text-base placeholder:font-normal h-12 pl-12 pr-8"
              />
            </div>
            <span className="text-secondary-50 text-base font-medium cursor-pointer">
              Join
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
