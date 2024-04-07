"use client";

import React from "react";
import RightArrowIcon from "@/assets/chevron-right.svg";
import Image from "next/image";
import Link from "next/link";
import SubCategorySection from "./SubCategorySection";

export default function SingleScrollingSection(props) {
    const { icon, title, imageData } = props;

    return (
        <>
            <div className="flex flex-row justify-between w-full items-center mt-3 mb-2">
                <div className="flex flex-row items-center mt-2 mx-4">
                    <div className="rounded-full h-8 w-8 bg-white">{icon}</div>
                    <span className="ml-4 font-bold">{title}</span>
                </div>

                <div className="flex flex-row items-center">
                    <span className="-mr-1.5 tracking-wider">View all</span>
                    <span>
                        <RightArrowIcon />
                    </span>
                </div>
            </div>

            {imageData.subcategory && imageData.subcategory.length > 0 ? (
                <>
                    <SubCategorySection data={imageData.subcategory} />
                </>
            ) : (
                <div className="flex flex-row overflow-auto w-full no-scrollbar mb-2">
                    {imageData.data &&
                        imageData.data.map((image, index) => (
                            <Link href={`/image-selection/${index}`} key={index} className="first:-ml-3 mx-2 w-full">
                                <Image height={200} width={200} src={image.url} alt={`Image ${index + 1}`} className="mx-4 h-[150px] min-w-[150px] rounded-xl" />
                            </Link>
                        ))}
                </div>
            )}
        </>
    );
}
