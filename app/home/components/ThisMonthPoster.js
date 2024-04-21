"use client";

import Image from "next/image";
import CalenderIcon from "../../../assets/calendar-icon.svg";
import image from "../../../assets/demo-poster-header.jpg";
import React, { useRef } from "react";
import Link from "next/link";

const data = [
    { date: "18 Apr", image: [image, image, image, image, image] },
    { date: "19 Apr", image: [image, image, image] },
    { date: "20 Apr", image: [] },
    { date: "21 Apr", image: [image, image, image, image, image, image, image] },
    { date: "22 Apr", image: [] },
    { date: "23 Apr", image: [image, image, image] },
    { date: "24 Apr", image: [image, image, image] },
    { date: "25 Apr", image: [image, image, image, image, image] },
    { date: "26 Apr", image: [image, image, image] },
    { date: "27 Apr", image: [] },
    { date: "28 Apr", image: [image, image, image, image, image, image, image] },
    { date: "29 Apr", image: [] },
    { date: "30 Apr", image: [image, image, image] },
];

export default function ThisMonthPoster() {
    const dateRefs = data.reduce((acc, el) => {
        // eslint-disable-next-line
        acc[el.date] = useRef(null);
        return acc;
    }, {});

    const scrollToImages = (date, event) => {
        if (dateRefs[date] && dateRefs[date].current) {
            dateRefs[date].current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="flex flex-row items-center mt-8 mx-4">
                <div className="rounded-full h-7 w-7 bg-white flex items-center justify-center">
                    <CalenderIcon height={17} width={17} className="stroke-neutral-400" />
                </div>

                <span className="ml-2 font-bold text-neutral-600">Festival Calender 2023</span>
            </div>

            <div className="flex flex-row overflow-auto mt-3 mx-2 mb-2 no-scrollbar" style={{ scrollbarColor: "transparent transparent" }}>
                {data.map((el, index) => (
                    <div
                        className="h-12 w-12 mx-1 bg-white rounded-lg flex-none cursor-pointer flex items-center justify-center text-center"
                        key={index}
                        onClick={(event) => scrollToImages(el.date, event)}
                    >
                        <div className="flex items-center text-xs font-medium text-neutral-700 justify-center">{el.date}</div>
                    </div>
                ))}
            </div>

            <div className="flex flex-row overflow-auto w-full no-scrollbar mx-2">
                {data.map((el) =>
                    el.image.map((image, index) => (
                        <Link href={`/image-selection/${index}`} key={index} ref={dateRefs[el.date]} className="flex flex-row items-center justify-center mx-1 w-full">
                            <Image loading="lazy" height="100%" key={index} src={image} alt={`Image ${index + 1}`} className="flex-none mx-4 h-[104px] min-w-[78px] rounded-xl" />
                        </Link>
                    ))
                )}
            </div>
        </>
    );
}
