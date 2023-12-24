import React from "react";
import RightArrowIcon from "@/assets/chevron-right.svg";
import SearchIcon from "@/assets/search.svg";
import DownloadIcon from "@/assets/download-icon.svg";

export default function Navbar() {
    return (
        <>
            <div className="flex flex-row w-full justify-between items-center p-3">
                <div className="flex flex-row items-center">
                    <span className="rounded-full h-8 w-8 bg-white mr-2">
                        <RightArrowIcon className="rotate-180 -ml-1 -mt-1" />
                    </span>

                    <span className="-mr-1.5">My Business</span>
                </div>

                <div className="flex flex-row">
                    <span className="mr-4">
                        <SearchIcon height={20} width={20} />
                    </span>

                    <span>
                        <DownloadIcon height={20} width={20} />
                    </span>
                </div>
            </div>
        </>
    );
}
