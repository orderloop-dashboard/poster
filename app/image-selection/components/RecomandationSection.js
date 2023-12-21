"use client";

import Image from "next/image";
import React from "react";
import image from "@/assets/demo-poster-header.jpg";
import { useWindowSize } from "@uidotdev/usehooks";

export default function RecomandationSection() {
    const images = [
        image,
        image,
        image,
        image,
        image,
        image,
        image,
        image,
        image,
        image,
        image,
        image,
        image,
        image,
        image,
        image,
        image,
        image,
        image,
        image,
        image,
        image,
        image,
        image,
        image,
        image,
    ];

    const screenHeight = useWindowSize().height;

    return (
        <>
            <div className="overflow-y-auto" style={{ height: screenHeight - 302 }}>
                <div className="grid grid-cols-3 gap-3 p-3">
                    {images.map((image, index) => (
                        <div key={index} className="">
                            <Image src={image} alt={`Image ${index + 1}`} className="w-full h-auto rounded-xl" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
