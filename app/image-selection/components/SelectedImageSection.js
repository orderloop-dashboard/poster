"use client";

import React, { useState } from "react";
import { Frame1, Frame2, Frame3, Frame4, Frame5 } from "./Frames";

const SwipeableFrames = () => {
    const frames = [Frame1, Frame2, Frame3, Frame4, Frame5];

    const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

    const [touchStart, setTouchStart] = useState(null);

    const [touchEnd, setTouchEnd] = useState(null);

    const handleSwipe = (direction) => {
        const newIndex =
            direction === "right" ? (currentFrameIndex === 0 ? frames.length - 1 : currentFrameIndex - 1) : currentFrameIndex === frames.length - 1 ? 0 : currentFrameIndex + 1;

        setCurrentFrameIndex(newIndex);
    };

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
    const minSwipeDistance = 50;
    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;

        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isRightSwipe) {
            setCurrentFrameIndex((prevState) => (prevState === 0 ? frames.length - 1 : prevState - 1));
        }

        if (isLeftSwipe) {
            setCurrentFrameIndex((prevState) => (prevState === frames.length - 1 ? 0 : prevState + 1));
        }
    };

    return (
        <div className="w-full flex justify-center">
            <div
                className="swipe-container relative h-[300px] w-[200px] bg-white overflow-hidden"
                onTouchStart={(e) => onTouchStart(e)}
                onTouchMove={(e) => onTouchMove(e)}
                onTouchEnd={(e) => onTouchEnd(e, handleSwipe)}
            >
                <div className="swipe-frames flex h-full" style={{ transform: `translateX(${-currentFrameIndex * 200}px)`, transition: "transform 0.3s ease-in-out" }}>
                    {frames.map((Frame, index) => (
                        <React.Fragment key={index}>
                            <Frame />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SwipeableFrames;
