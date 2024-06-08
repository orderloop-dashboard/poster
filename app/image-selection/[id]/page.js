"use client";

import React, { useRef } from "react";
import SelectedImageSection from "../components/SelectedImageSection";
import RecommendationSection from "../components/RecommendationSection";
import Navbar from "../components/Navbar.js";
import { useImageData } from "@/context/ImageDataContext";
import { toPng } from "html-to-image";

export default function Page() {
    const { imageData } = useImageData();

    const sectionRef = useRef();

    const handleClickDownload = async () => {
        if (sectionRef.current) {
            const dataUrl = await toPng(sectionRef.current, { includeQueryParams: true, canvasHeight: 1080, canvasWidth: 1080 });
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
            <Navbar handleClickDownload={handleClickDownload} />
            <SelectedImageSection imageDetails={imageData?.selectedImage} sectionRef={sectionRef} />
            <RecommendationSection imageDetails={imageData} />
        </>
    );
}
