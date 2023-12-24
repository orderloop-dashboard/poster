"use client";

import React from "react";
import Slider from "react-slick";
import { Frame1, Frame2, Frame3, Frame4, Frame5 } from "./Frames";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MusicIcon from "@/assets/music-icon.svg";
import EditIcon from "@/assets/edit-icon.svg";
import Link from "next/link";

export default function SelectedImageSection(props) {
    const { setShowMusicSelectionSection } = props;

    const frames = [Frame1, Frame2, Frame3, Frame4, Frame5];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
    };

    return (
        <>
            <div className="w-full flex justify-center mb-4">
                <div className="relative h-[300px] w-[200px] bg-white">
                    <Slider {...settings}>
                        {frames.map((Frame, index) => (
                            <React.Fragment key={index}>
                                <Frame />
                            </React.Fragment>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="flex flex-row items-center justify-end pr-4 mb-2">
                <span className="mr-4 h-8 flex justify-center pt-1 w-8 rounded-full bg-white" onClick={() => setShowMusicSelectionSection(true)}>
                    <MusicIcon height={20} width={20} />
                </span>

                <Link href={`/customize/1`}>
                    <div className="flex flex-row justify-center h-8 rounded-xl bg-white pt-1 px-3">
                        <EditIcon height={20} width={20} />
                        <span className="ml-2">Edit</span>
                    </div>
                </Link>
            </div>
        </>
    );
}
