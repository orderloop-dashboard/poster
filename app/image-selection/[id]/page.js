"use client";

import React, { useEffect, useRef, useState } from "react";
import SelectedImageSection from "../components/SelectedImageSection";
import RecommendationSection from "../components/RecommendationSection";
import Navbar from "../components/Navbar.js";
import { useImageData } from "@/context/ImageDataContext";
import { toPng } from "html-to-image";
import MakeLoginPopup from "../components/MakeLoginPopup/MakeLoginPopup";

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

    const [showLoginPopup, setShowLoginPopup] = useState(true);

    useEffect(() => {
        const token = localStorage?.getItem("authToken");

        setShowLoginPopup(!token);
    }, []);

    console.log("showLoginPopup ==> ", showLoginPopup);

    return (
        <>
            <Navbar handleClickDownload={handleClickDownload} />
            <SelectedImageSection imageDetails={imageData?.selectedImage} sectionRef={sectionRef} />
            <RecommendationSection imageDetails={imageData} />

            {showLoginPopup && <MakeLoginPopup />}
        </>
    );
}
