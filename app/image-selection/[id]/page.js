"use client";

import Image from "next/image";
// import Image from "next/image";
// import React from "react";
import img from "@/assets/demo-poster-header.jpg";
// import { Frame1 } from "../components/Frames";

// export default function Page({ params }) {
//     const id = params.id;

//     console.log("id ==> ", id);

//     return (
//         <>
//             <div className="w-full flex justify-center">
//                 <div className="relative h-[300px] w-[200px] bg-white">
//                     <Image src={img} width={200} className="h-[300px]" alt="img" />
//                     <Frame1 />
//                 </div>
//             </div>
//         </>
//     );
// }

// import React, { useState } from "react";
// import { Frame1 } from "../components/Frames";

// const frames = [Frame1, Frame1, Frame1, Frame1, Frame1];

// const ImageGallery = () => {
//     const [currentFrame, setCurrentFrame] = useState(0);
//     const [touchStart, setTouchStart] = useState(null);
//     const [touchEnd, setTouchEnd] = useState(null);

//     const minSwipeDistance = 50;

//     const onTouchStart = (e) => {
//         setTouchEnd(null);
//         setTouchStart(e.targetTouches[0].clientX);
//     };

//     const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

//     const onTouchEnd = () => {
//         if (!touchStart || !touchEnd) return;
//         const distance = touchStart - touchEnd;
//         const isLeftSwipe = distance > minSwipeDistance;
//         const isRightSwipe = distance < -minSwipeDistance;

//         if (isLeftSwipe) {
//             handleSwipeRight();
//         } else if (isRightSwipe) {
//             handleSwipeLeft();
//         }
//     };

//     const handleSwipeLeft = () => {
//         setCurrentFrame((prevFrame) => (prevFrame > 0 ? prevFrame - 1 : frames.length - 1));
//     };

//     const handleSwipeRight = () => {
//         setCurrentFrame((prevFrame) => (prevFrame < frames.length - 1 ? prevFrame + 1 : 0));
//     };

//     return (
//         <>
//             <div className="w-full flex justify-center">
//                 <div className="relative h-[300px] w-[200px] bg-white">
//                     <Image src={img} width={200} className="h-[300px]" alt="img" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} />

//                     <div
//                         className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-gray-900 to-gray-800 p-4"
//                         style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
//                     >
//                         {frames.map((FrameComponent, index) => (
//                             <React.Fragment key={index}>
//                                 <FrameComponent />
//                                 <span>{index}</span>
//                             </React.Fragment>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ImageGallery;

// import React, { useState } from "react";
// import { Frame1, Frame2, Frame3, Frame4, Frame5 } from "../components/Frames";

// const frames = [Frame1, Frame2, Frame3, Frame4, Frame5];

// const ImageGallery = () => {
//     const [currentFrame, setCurrentFrame] = useState(0);
//     const [touchStart, setTouchStart] = useState(null);
//     const [touchEnd, setTouchEnd] = useState(null);

//     const minSwipeDistance = 50;

//     const onTouchStart = (e) => {
//         setTouchEnd(null);
//         setTouchStart(e.targetTouches[0].clientX);
//     };

//     const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

//     const onTouchEnd = () => {
//         if (!touchStart || !touchEnd) return;
//         const distance = touchStart - touchEnd;
//         const isLeftSwipe = distance > minSwipeDistance;
//         const isRightSwipe = distance < -minSwipeDistance;

//         if (isLeftSwipe) {
//             handleSwipeRight();
//         } else if (isRightSwipe) {
//             handleSwipeLeft();
//         }
//     };

//     const handleSwipeLeft = () => {
//         setCurrentFrame((prevFrame) => (prevFrame > 0 ? prevFrame - 1 : frames.length - 1));
//     };

//     const handleSwipeRight = () => {
//         setCurrentFrame((prevFrame) => (prevFrame < frames.length - 1 ? prevFrame + 1 : 0));
//     };

//     return (
//         <>
//             <div className="w-full flex justify-center">
//                 <div className="relative h-[300px] w-[200px] bg-white overflow-hidden">
//                     <div
//                         className="frame-container"
//                         style={{
//                             transform: `translateX(${-currentFrame * 200}px)`,
//                             transition: "transform 0.3s ease",
//                             display: "flex",
//                         }}
//                     >
//                         {frames.map((FrameComponent, index) => (
//                             <div key={index} className="frame">
//                                 <FrameComponent />
//                                 <div>{index}</div>
//                                 <div className="bg-white">jb</div>
//                             </div>
//                         ))}
//                     </div>

//                     <Image src={img} width={200} className="h-[300px]" alt="img" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} />
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ImageGallery;

import React, { useState } from "react";
import { Frame1, Frame2, Frame3, Frame4, Frame5 } from "../components/Frames";

const frames = [Frame1, Frame2, Frame3, Frame4, Frame5];

const ImageGallery = () => {
    const [currentFrame, setCurrentFrame] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            handleSwipeRight();
        } else if (isRightSwipe) {
            handleSwipeLeft();
        }
    };

    const handleSwipeLeft = () => {
        setCurrentFrame((prevFrame) => (prevFrame > 0 ? prevFrame - 1 : frames.length - 1));
    };

    const handleSwipeRight = () => {
        setCurrentFrame((prevFrame) => (prevFrame < frames.length - 1 ? prevFrame + 1 : 0));
    };

    return (
        <>
            <div className="w-full flex justify-center">
                <div className="relative h-[300px] w-[200px] bg-white overflow-hidden">
                    <div
                        className="frame-container"
                        style={{
                            display: "flex",
                            transform: `translateX(-${currentFrame * 200}px)`,
                            transition: "transform 0.3s ease",
                        }}
                    >
                        {frames.map((FrameComponent, index) => (
                            <div key={index} className="frame">
                                <FrameComponent />
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-gray-900 to-gray-800 p-4"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                ></div>
            </div>
        </>
    );
};

export default ImageGallery;
