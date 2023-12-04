import React from "react";
import Frame1 from "../Frame";

export default function FrameSection() {
    return (
        <>
            <div className="overflow-x-auto flex">
                <div className="px-5">
                    <Frame1 />
                </div>
                <div className="px-5">
                    <Frame1 />
                </div>
                <div className="px-5">
                    <Frame1 />
                </div>
                <div className="px-5">
                    <Frame1 />
                </div>
            </div>
        </>
    );
}
