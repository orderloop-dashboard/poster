"use client";

import React from "react";
import NextIcon from "../../../assets/chevron-right.svg";
import NotificationIcon from "../../../assets/notification.svg";
import SearchIcon from "../../../assets/search.svg";

export default function Header() {
    return (
        <div className="px-4 sticky top-0 w-full bg-slate-300 z-50 pb-4">
            <div className="flex flex-row justify-between items-center mb-5">
                <div className="flex flex-row items-center">
                    <span className="font-bold">RV solution</span>
                    <span className="-ml-2">
                        <NextIcon />
                    </span>
                </div>

                <NotificationIcon height="16" width="16" />
            </div>

            <div className="relative h-12">
                <input type="text" className="h-full rounded-xl absolute top-0 pl-12 w-full" placeholder="Search Post" />

                <span className="top-2.5 absolute left-2">
                    <SearchIcon height="20" className="" />
                </span>
            </div>
        </div>
    );
}
