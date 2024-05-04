import React from "react";
import BackIcon from "@/assets/chevron-down.svg";

export default function Page() {
    return (
        <>
            <div className="mt-3 mx-4 flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-3">
                    <div className="bg-neutral-50 rounded-full h-full w-fit p-2">
                        <BackIcon className="rotate-90 w-5" />
                    </div>

                    <span className="font-medium text-sm tracking-wide">Edit Profile</span>
                </div>

                <span className="font-normal text-[15px] tracking-widest text-blue-600">Save</span>
            </div>

            <div className="rounded-full bg-white h-24 w-24" />
        </>
    );
}
