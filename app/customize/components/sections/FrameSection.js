import React from "react";
import Frame1 from "../Frame";

export default function FrameSection(props) {
    const { setSelectedFrame } = props;

    const frames = [Frame1, Frame1, Frame1, Frame1, Frame1];

    return (
        <>
            <div className="overflow-x-auto flex no-scrollbar">
                {frames.map((Frames, index) => (
                    <div className="px-5" key={index} onClick={() => setSelectedFrame && setSelectedFrame(Frames)}>
                        <Frames />
                    </div>
                ))}
            </div>
        </>
    );
}
