"use client";

import { SingleLoader } from "@/components/Loader/Loader";
import React from "react";

export default function Loader() {
    return (
        <>
            <SingleLoader width={200} height={21} className="ml-3 mb-2 mt-5" />

            <div className="px-3 flex flex-row no-scrollbar overflow-x-auto w-full">
                <div className="flex flex-row gap-2 no-scrollbar">
                    <SingleLoader width={104} height={104} />
                    <SingleLoader width={104} height={104} />
                    <SingleLoader width={104} height={104} />
                    <SingleLoader width={104} height={104} />
                    <SingleLoader width={104} height={104} />
                </div>
            </div>
        </>
    );
}
