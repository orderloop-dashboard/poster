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
                <div className="flex flex-row items-center mt-2 mx-3">
                    <div className="rounded-full h-7 w-7 bg-white flex justify-center items-center">{icon}</div>
                    <span className="ml-2 font-bold">{title}</span>
                </div>

                <div className="flex flex-row items-center">
                    <span className="mr-1 tracking-wider text-neutral-500 text-sm">View All</span>
                    <div className="rounded-full h-5 w-5 bg-white flex justify-center items-center">
                        <RightArrowIcon className="stroke-neutral-500" />
                    </div>
                </div>
            </div>

            {imageData.subcategory && imageData.subcategory.length > 0 ? (
                <SubCategorySection data={imageData.subcategory} />
            ) : (
                <div className="flex flex-row overflow-auto w-full no-scrollbar mb-2 px-4">
                    {imageData.data &&
                        imageData.data.map((image, index) => (
                            <Link href={`/image-selection/${index}`} key={index} className="first:-ml-4 mx-0.5 w-full">
                                <Image height={200} width={200} src={image.url} alt={`Image ${index + 1}`} className="mx-4 h-[104px] min-w-[78px] rounded-xl" />
                            </Link>
                        ))}
                </div>
            )}
        </>
    );
}
