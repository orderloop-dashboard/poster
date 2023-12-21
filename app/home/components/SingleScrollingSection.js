import React from "react";
import RightArrowIcon from "@/assets/chevron-right.svg";
import Image from "next/image";
import Link from "next/link";

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

            <div className="flex flex-row overflow-auto w-full no-scrollbar -ml-4 mb-2">
                {imageData?.map((image, index) => (
                    <Link href={`/image-selection/${index}`} key={index} className="mx-4 w-full">
                        <Image height="100%" key={index} src={image} alt={`Image ${index + 1}`} className="mx-4 h-[150px] min-w-[150px] rounded-xl" />
                    </Link>
                ))}
            </div>
        </>
    );
}
