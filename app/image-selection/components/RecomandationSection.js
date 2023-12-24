"use client";

import Image from "next/image";
import React from "react";
import image from "@/assets/demo-poster-header.jpg";
import { useWindowSize } from "@uidotdev/usehooks";
import Link from "next/link";

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
            <div className="overflow-y-auto" style={{ height: screenHeight - 318 }}>
                <div className="grid grid-cols-3 gap-3 p-3">
                    {images.map((image, index) => (
                        <Link key={index} href={`/image-selection/${index}`}>
                            <Image src={image} alt={`Image ${index + 1}`} className="w-full h-auto rounded-xl" />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
