"use client";

import Image from "next/image";
import CalenderIcon from "../../../assets/calendar-icon.svg";
import image from "../../../assets/demo-poster-header.jpg";
import React, { useRef } from "react";
import Link from "next/link";

export default function ThisMonthPoster() {
    const data = [
        { date: 18, image: [image, image, image, image, image] },
        { date: 19, image: [image, image, image] },
        { date: 20, image: [] },
        { date: 21, image: [image, image, image, image, image, image, image] },
        { date: 22, image: [] },
        { date: 23, image: [image, image, image] },
        { date: 24, image: [image, image, image] },
        { date: 25, image: [image, image, image, image, image] },
        { date: 26, image: [image, image, image] },
        { date: 27, image: [] },
        { date: 28, image: [image, image, image, image, image, image, image] },
        { date: 29, image: [] },
        { date: 30, image: [image, image, image] },
    ];

    const dateRefs = data.reduce((acc, el) => {
        // eslint-disable-next-line
        acc[el.date] = useRef(null);
        return acc;
    }, {});

    const scrollToImages = (date) => {
        if (dateRefs[date] && dateRefs[date].current) {
            dateRefs[date].current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="flex flex-row items-center mt-2 mx-4">
                <div className="rounded-full h-8 w-8 bg-white">
                    <CalenderIcon height={20} width={20} className="ml-1 pt-1" />
                </div>

                <span className="ml-4 font-bold">Festival Calender 2023</span>
            </div>

            <div className="flex flex-row overflow-auto mt-3 mx-3 mb-2 no-scrollbar" style={{ scrollbarColor: "transparent transparent" }}>
                {data.map((el, index) => (
                    <div className="h-12 w-12 mx-2 bg-white rounded-lg flex-none cursor-pointer" key={index} onClick={() => scrollToImages(el.date)}>
                        <div className="flex items-center justify-center pt-2.5">{el.date}</div>
                    </div>
                ))}
            </div>

            <div className="flex flex-row overflow-auto w-full no-scrollbar">
                {data.map((el) =>
                    el.image.map((image, index) => (
                        <Link href={`/image-selection/${index}`} key={index} ref={dateRefs[el.date]} className="flex flex-row items-center justify-center mx-2 w-full">
                            <Image height="100%" key={index} src={image} alt={`Image ${index + 1}`} className="flex-none mx-4 h-[150px] min-w-[150px] rounded-xl" />
                        </Link>
                    ))
                )}
            </div>
        </>
    );
}
