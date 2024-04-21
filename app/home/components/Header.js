"use client";

import React from "react";
import NextIcon from "../../../assets/chevron-right.svg";
import NotificationIcon from "../../../assets/notification.svg";
import SearchIcon from "../../../assets/search.svg";

export default function Header() {
    return (
        <div className="px-4 sticky top-0 w-full bg-[#efefef] z-50 pb-4">
            <div className="flex flex-row justify-between items-center mb-2.5">
                <div className="flex flex-col">
                    <div className="mt-2 items-center flex flow-row gap-1">
                        <span className="text-[12px] text-neutral-500 font-medium">Your business</span>
                        <span className="font-bold bg-blue-500 w-fit rounded-md px-1 py-0.5 text-white text-[10px]">Subscribe</span>
                    </div>
                    <div className="flex flex-row items-center -mt-1.5">
                        <span className="font-medium text-neutral-700">Rushit info texh</span>
                        <span className="-ml-2">
                            <NextIcon />
                        </span>
                    </div>
                </div>

                <NotificationIcon height="16" width="16" />
            </div>

            <div className="relative h-12 -mx-1">
                <input type="text" className="h-full rounded-xl absolute top-0 pl-12 w-full" placeholder="Search categories or media" />

                <span className="top-[13px] absolute left-2">
                    <SearchIcon height="20" className="" />
                </span>
            </div>
        </div>
    );
}
