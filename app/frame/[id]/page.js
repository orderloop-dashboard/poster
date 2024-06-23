"use client";

import { Frame1 } from "@/components/Frames/Frame";
import React, { useRef } from "react";
import BackIcon from "@/assets/chevron-right.svg";
import Link from "next/link";
import { toPng } from "html-to-image";
import Button from "@/components/Button/Button";

export default function Page() {
    const sectionRef = useRef();

    const handleClickDownload = async () => {
        if (sectionRef.current) {
            const dataUrl = await toPng(sectionRef.current, { includeQueryParams: true, canvasHeight: 1080, canvasWidth: 1080, quality: 1 });

            console.log("dataUrl ==> ", dataUrl);

            window.handleDownload(dataUrl);

            // const dataUrl =
            //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABUYAAAVGCAYAAABSQWFhAAAAAXNSR0IArs4c6QAAIABJREFUeF7s3Qe0XFXZP+CXKqBBkCJIh1ANvUgvUixABCQU6RAgUgRpAQWlBBGRDiH0jkBoBgIovQUQEnqH0KVLlyLC/7/n++Z+Nzczd8+t3Lvvc9ZysZZ3z5mzn3fPTM7v7LPPJF9+dsdXYSNAgAABAgQIECBAgAABAgQIECBAgEAfEphEMNqHqq2rBAgQIECAAAECBAgQIECAAAECBAhUBASjBgIBAgQIECBAgAABAgQIECBAgAABAn1OQDDa50quwwQIECBAgAABAgQIECBAgAABAgQICEaNAQIECBAgQIAAAQIECBAgQIAAAQIE+pyAYLTPlVyHCRAgQIAAAQIECBAgQIAAAQIECBAQjBoDBAgQIECAAAECBAgQIECAAAECBAj0OQHBaJ8ruQ4TIECAAAECBAgQIECAAAECBAgQICAYNQYIECBAgAABAgQIECBAgAABAgQIEOhzAoLRPldyHSZAgAABAgQIECB";

            // const link = document.createElement("a");
            // link.href = dataUrl;
            // link.download = "image-with-frame.png";
            // document.body.appendChild(link);
            // link.click();
            // document.body.removeChild(link);
        }
    };

    return (
        <>
            <Button label={"bbhgg"} onClick={handleClickDownload} />
            <div className="p-4 flex flex-row justify-between items-center sticky top-0 bg-[#efefef] z-10">
                <div className="flex flex-row items-center gap-4">
                    <Link href="/profile" className="bg-neutral-50 rounded-full h-full w-fit p-1">
                        <BackIcon className="w-8 h-8 stroke-neutral-500 rotate-180" />
                    </Link>

                    <span className="text-neutral-800 font-medium pr-3 tracking-wide text-[16px]">Edit Business profile</span>
                </div>
            </div>

            <div className="p-4">
                <Frame1 sectionRef={sectionRef} />
            </div>
        </>
    );
}
