import React from "react";
import poster from "@/assets/demo-poster-header.jpg";
import Image from "next/image";
import BackIcon from "@/assets/chevron-down.svg";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <div className="py-3 mx-4 flex flex-row justify-between items-center sticky top-0 bg-[#efefef] z-10">
                <div className="flex flex-row items-center gap-3">
                    <Link href="/menu" className="bg-neutral-50 rounded-full h-full w-fit p-2">
                        <BackIcon className="rotate-90 w-5" />
                    </Link>

                    <span className="font-medium text-sm tracking-wide">My Business</span>
                </div>
            </div>

            <div className="bg-white border-blue-400 rounded-xl border p-3 mx-3 mt-2">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-3">
                        <Image src={poster} alt="" className="rounded-lg border border-neutral-300 h-20 w-20" />

                        <div className="flex flex-col">
                            <div className="font-bold text-base">Rushit Info Tech</div>
                            <div className="mt-0.5 text-neutral-400 text-xs">Network marketing industry</div>
                            <div className="mt-0.5 text-xs text-blue-500">Free business</div>
                        </div>
                    </div>

                    <Link href="/add-business-details/:2" className="text-neutral-800 font-semibold text-sm">
                        EDIT
                    </Link>
                </div>

                <button className="rounded-3xl py-2 px-4 bg-blue-500 text-xs font-bold text-white mt-3">Subscribe</button>
            </div>
        </>
    );
}
