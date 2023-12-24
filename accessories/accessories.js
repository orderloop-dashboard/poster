// import React, { useRef, useState, useEffect } from "react";

// const ClickOutsideComponent = () => {
//     const divRef = useRef(null);
//     const [isClickedOutside, setIsClickedOutside] = useState(false);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (divRef.current && !divRef.current.contains(event.target)) {
//                 setIsClickedOutside(true);
//             } else {
//                 setIsClickedOutside(false);
//             }
//         };

//         // Attach the event listener to the document
//         document.addEventListener("click", handleClickOutside);

//         // Cleanup the event listener on component unmount
//         return () => {
//             document.removeEventListener("click", handleClickOutside);
//         };
//     }, []);

//     return (
//         <div ref={divRef}>
//             <p>Inside the div</p>
//             {isClickedOutside && <p>Clicked outside the div</p>}
//         </div>
//     );
// };

// export default ClickOutsideComponent;

// import React, { useRef } from "react";
// import demoImage from "../../assets/demo-patter-image.jpeg";
// import logo from "../../assets/demo-patter-image.jpeg";
// import Image from "next/image";
// import { toPng } from "html-to-image";

// const COnvertHTMLtoJpgs = () => {
//     const name = "Your Name";
//     const company = "Your Company";
//     const mobileNumber = "123-456-7890";
//     const email = "your.email@example.com";

//     const elementRef = useRef(null);

//     const htmlToImageConvert = () => {
//         toPng(elementRef.current, { cacheBust: false })
//             .then((dataUrl) => {
//                 const link = document.createElement("a");
//                 link.download = "my-image-name.png";
//                 link.href = dataUrl;
//                 link.click();
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

//     return (
//         <>
//             <div className="" ref={elementRef}>
//                 <div className="relative h-[500px]">
//                     <Image width={500} height={500} src={demoImage} alt="Selectedd" className="w-full h-full object-cover" />
//                     <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-gray-900 to-gray-800 p-4">
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center space-x-4">
//                                 <Image height={12} width={12} src={logo} alt="Logo" className="h-12 w-12 rounded-full" />
//                                 <div className="text-white">
//                                     <div className="text-lg font-semibold">{name}</div>
//                                     <div>{company}</div>
//                                 </div>
//                             </div>
//                             <div className="text-white space-x-4">
//                                 <div>{mobileNumber}</div>
//                                 <div>{email}</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <button onClick={htmlToImageConvert}>Capture Screenshot</button>
//         </>
//     );
// };

// export default BottomFrame;

"use client";

// import React, { useState } from "react";
// import { Frame1, Frame2, Frame3, Frame4, Frame5 } from "./Frames";
// import Slider from "react-slick";
// import { Frame1, Frame2, Frame3, Frame4, Frame5 } from "./Frames";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const SwipeableFrames = () => {
//     const frames = [Frame1, Frame2, Frame3, Frame4, Frame5];

//     const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

//     const [touchStart, setTouchStart] = useState(null);

//     const [touchEnd, setTouchEnd] = useState(null);

//     const handleSwipe = (direction) => {
//         const newIndex =
//             direction === "right" ? (currentFrameIndex === 0 ? frames.length - 1 : currentFrameIndex - 1) : currentFrameIndex === frames.length - 1 ? 0 : currentFrameIndex + 1;

//         setCurrentFrameIndex(newIndex);
//     };

//     const onTouchStart = (e) => {
//         setTouchEnd(null);
//         setTouchStart(e.targetTouches[0].clientX);
//     };

//     const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
//     const minSwipeDistance = 50;
//     const onTouchEnd = () => {
//         if (!touchStart || !touchEnd) return;

//         const distance = touchStart - touchEnd;

//         const isLeftSwipe = distance > minSwipeDistance;
//         const isRightSwipe = distance < -minSwipeDistance;

//         if (isRightSwipe) {
//             setCurrentFrameIndex((prevState) => (prevState === 0 ? frames.length - 1 : prevState - 1));
//         }

//         if (isLeftSwipe) {
//             setCurrentFrameIndex((prevState) => (prevState === frames.length - 1 ? 0 : prevState + 1));
//         }
//     };

//     return (
//         <>
//             <div className="w-full flex justify-center mb-4">
//                 <div
//                     className="swipe-container relative h-[300px] w-[200px] bg-white overflow-hidden"
//                     onTouchStart={(e) => onTouchStart(e)}
//                     onTouchMove={(e) => onTouchMove(e)}
//                     onTouchEnd={(e) => onTouchEnd(e, handleSwipe)}
//                 >
//                     <div className="swipe-frames flex h-full" style={{ transform: `translateX(${-currentFrameIndex * 200}px)`, transition: "transform 0.3s ease-in-out" }}>
//                         {frames.map((Frame, index) => (
//                             <React.Fragment key={index}>
//                                 <Frame />
//                             </React.Fragment>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default SwipeableFrames;

{
    /* <button
                className={`p-2 border rounded-xl font-bold ${activeButton.includes("font-bold") ? "bg-neutral-500" : "bg-neutral-200"}`}
                onClick={() => handleStyle("font-bold")}
            >
                B
            </button>
            <button className={`p-2 border rounded-xl mx-2 italic ${activeButton.includes("italic") ? "bg-neutral-500" : "bg-neutral-200"}`} onClick={() => handleStyle("italic")}>
                I
            </button>
            <button
                className={`p-2 border rounded-xl underline ${activeButton.includes("underline") ? "bg-neutral-500" : "bg-neutral-200"}`}
                onClick={() => handleStyle("underline")}
            >
                U
            </button>

            <button className="py-2 pl-4 pr-2 border bg-neutral-200 rounded-xl" onClick={() => handleTextStyle("text-left")}>
                <LeftIcon width="20" />
            </button>

            <button className="py-2 pl-4 pr-2 border bg-neutral-200 rounded-xl mx-2" onClick={() => handleTextStyle("text-center")}>
                <MiddleIcon width="20" />
            </button>

            <button className="py-2 pl-4 pr-2 border bg-neutral-200 rounded-xl" onClick={() => handleTextStyle("text-right")}>
                <RightIcon width="20" />
            </button>

            <button className="p-2 border bg-neutral-200 rounded-xl" onClick={() => handleFontCase("uppercase")}>
                AA
            </button>
            <button className="p-2 border bg-neutral-200 rounded-xl mx-2" onClick={() => handleFontCase("lowercase")}>
                Aa
            </button>
            <button className="p-2 border bg-neutral-200 rounded-xl" onClick={() => handleFontCase("capitalize")}>
                aa
            </button> */
}
