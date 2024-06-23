"use client";

import React, { useRef } from "react";
import { useImageData } from "@/context/ImageDataContext";
import html2canvas from "html2canvas";
import Button from "@/components/Button/Button";
import { Frame1 } from "@/components/Frames/Frame";

export default function Page() {
    const { imageData } = useImageData();
    const sectionRef = useRef();

    const handleClickDownload = async () => {
        if (sectionRef.current) {
            const canvas = await html2canvas(sectionRef.current, {
                scale: 5,
                useCORS: true,
            });

            const dataUrl = canvas.toDataURL("image/png");

            // window.handleDownload(dataUrl);

            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = "image-with-frame.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <>
            <Button label="Download" onClick={handleClickDownload} />

            <div className="w-full flex justify-center mb-4">
                <div className="relative h-[320px] w-[320px] bg-white" ref={sectionRef}>
                    {imageData?.selectedImage?.url && <img alt="x" src={imageData?.selectedImage?.url} className="absolute top-0" />}
                    <Frame1 />
                </div>
            </div>
        </>
    );
}
