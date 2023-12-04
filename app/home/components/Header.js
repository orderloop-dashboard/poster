"use client";

import React from "react";
import NextIcon from "../../../assets/chevron-right.svg";
import NotificationIcon from "../../../assets/notification.svg";
import SearchIcon from "../../../assets/search.svg";

export default function Header() {
    const handleCHange = () => {};

    return (
        <div className="px-4 sticky top-0 w-full">
            <div className="flex flex-row justify-between items-center mb-5">
                <div className="flex flex-row items-center">
                    <span className="font-bold">RV solution</span>
                    <span className="-ml-2">
                        <NextIcon />
                    </span>
                </div>

                <NotificationIcon height="16" width="16" />
            </div>

            <div className="relative">
                <span className="absolute top-3 left-2">
                    <SearchIcon height="20" />
                </span>
                <input />
            </div>
        </div>
    );
}
