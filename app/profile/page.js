import React from "react";
import RedirectIcon from "@/assets/redirect.svg";
import poster from "@/assets/demo-poster-header.jpg";
import Image from "next/image";
import Email from "@/assets/email.svg";
import Call from "@/assets/call.svg";
import Grid from "@/assets/Grid.svg";
import Lock from "@/assets/lock.svg";
import PencilEdit from "@/assets/pencil-edit.svg";

export default function page() {
    return (
        <>
            <div className="px-4 pt-5 bg-neutral-50">
                <div className="flex flex-row justify-between w-full">
                    <span className="font-medium text-neutral-700">Business Profile</span>
                    <RedirectIcon />
                </div>

                <div className="flex flex-row items-center gap-3 mt-10">
                    <Image src={poster} className="rounded-xl h-16 w-16" alt="img" />

                    <div className="flex flex-col gap-1">
                        <span className="font-medium text-[16px] text-neutral-700">Rushit info tech</span>
                        <span className="font-medium text-[13px] text-neutral-400 tracking-wide">Network marketing industry</span>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-2 mt-5">
                    <Email className="h-4 w-4" />
                    <span className="text-neutral-600 font-normal text-[13px]">rushirpatoliya22@gmail.com</span>
                </div>

                <div className="flex flex-row items-center gap-2 mt-4">
                    <Call className="h-4 w-4" />
                    <span className="text-neutral-600 font-normal text-[13px]">7485964163</span>
                </div>

                <button className="bg-neutral-200 text-neutral-800 py-1.5 px-2.5 rounded-xl font-medium text-[13px] my-3">Edit Business Profile</button>
            </div>

            <div className="px-4 pt-8">
                <div className="flex flex-row gap-1.5 items-center">
                    <Grid className="rounded-full bg-neutral-50 p-5 h-3 w-3" />
                    <div className="">
                        <span className="font-medium text-neutral-700">Business Frames</span>

                        <div className="flex flex-row gap-2 pt-0.5 items-center">
                            <Lock className="h-3 w-3" />
                            <span className="font-medium text-[13px] text-neutral-400 tracking-wide">Private for you</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-2">
                    <PencilEdit />
                    <span>EDIT</span>
                </div>
            </div>
        </>
    );
}
