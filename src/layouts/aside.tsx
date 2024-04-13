"use client";
import React from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  ArrowIcon,
  PaperIcon,
  SendIcon,
  UserAddIcon,
} from "@/components/icons";
import { ChatItem, Participant } from "@/components";
import classNames from "classnames";

const data = [
  {
    label: "Group",
    value: "group",
  },
  {
    label: "Personal",
    value: "personal",
  },
];

export default function Aside() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  const [selectedTab, setSelectedTab] = React.useState<string>("group");

  return (
    <aside className="w-80 h-screen bg-primary-white fixed right-0 z-10 mt-[1px] ml-[1px] border-l-[1px]">
      <Accordion
        onPointerEnterCapture={""}
        onPointerLeaveCapture={""}
        placeholder={""}
        open={open === 1}
        icon={<ArrowIcon id={1} open={open} />}
      >
        <AccordionHeader
          onPointerEnterCapture={""}
          onPointerLeaveCapture={""}
          placeholder={""}
          className="text-sm font-semibold px-6 shadow-none border-none "
          onClick={() => handleOpen(1)}
          children={
            <div className="w-full flex justify-between items-center">
              <span>Participants</span>
              <div className="bg-primary-blue-accent p-2 rounded-3xl flex items-center gap-x-2">
                <span className="text-primary-blue text-xs font-semibold">
                  Add Participant
                </span>
                <UserAddIcon className="h-4 w-4" />
              </div>
            </div>
          }
        />
        <AccordionBody className="py-0 px-3 bg-secondary-70">
          <div className="py-6 pr-3 flex flex-col gap-y-3 h-[262px] overflow-y-auto">
            {[0, 1, 2, 3, 4, 5].map((item) => {
              return (
                <Participant
                  key={item}
                  activeMedia={item === 0 ? true : false}
                />
              );
            })}
          </div>
        </AccordionBody>
      </Accordion>
      <Tabs value="group">
        <Accordion
          onPointerEnterCapture={""}
          onPointerLeaveCapture={""}
          placeholder={""}
          open={true}
          icon={<ArrowIcon id={2} open={2} />}
        >
          <AccordionHeader
            onPointerEnterCapture={""}
            onPointerLeaveCapture={""}
            placeholder={""}
            className="text-sm font-semibold px-6 shadow-none border-none"
            onClick={() => {}}
            children={
              <div className="w-full flex justify-between items-center">
                <span>Chats</span>
                <TabsHeader
                  onPointerEnterCapture={""}
                  onPointerLeaveCapture={""}
                  placeholder={""}
                  className="bg-primary-blue-accent rounded-full"
                  indicatorProps={{
                    className:
                      "bg-primary-blue text-primary-white shadow-none rounded-full px-4 py-2",
                  }}
                >
                  {data.map(({ label, value }) => (
                    <Tab
                      onPointerEnterCapture={""}
                      onPointerLeaveCapture={""}
                      placeholder={""}
                      key={value}
                      value={value}
                      className="w-20"
                      onClick={() => setSelectedTab(value)}
                    >
                      <div
                        className={classNames(
                          {
                            "text-primary-white": value === selectedTab,
                            "text-primary-blue": value !== selectedTab,
                          },
                          "flex items-center gap-2 text-xs font-semibold text-primary-blue"
                        )}
                      >
                        {label}
                      </div>
                    </Tab>
                  ))}
                </TabsHeader>
              </div>
            }
          />
          <AccordionBody className="py-0 px-3 bg-secondary-70">
            <div
              className={classNames(
                {
                  "h-[262px] transition-max-h duration-500 ease-in-out":
                    open === 1,
                },
                { "max-h-[none]": open !== 1 },
                "py-6 flex flex-col gap-y-3 overflow-y-auto"
              )}
            >
              {[0, 1, 2, 3, 4, 5].map((item) => {
                return <ChatItem key={item} />;
              })}
            </div>
          </AccordionBody>
        </Accordion>
      </Tabs>
      <div className="h-24 bg-primary-white w-full px-3">
        <div className="h-full flex flex-col justify-center items-center relative">
          <PaperIcon className="absolute left-2" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Type Something..."
            className="bg-secondary-70 placeholder:text-secondary-50 placeholder:text-base placeholder:font-medium h-12 w-full rounded-3xl pl-12 pr-16"
          />
          <SendIcon className="absolute right-0" />
        </div>
      </div>
    </aside>
  );
}
