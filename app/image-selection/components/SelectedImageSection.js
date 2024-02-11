"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import { Frame1, Frame2, Frame3, Frame4, Frame5 } from "./Frames";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MusicIcon from "@/assets/music-icon.svg";
import EditIcon from "@/assets/edit-icon.svg";
import Link from "next/link";
import imag from "@/assets/poste300x200.jpg";
import Image from "next/image";
import IsntACtivatedYetPopup from "./IsntACtivatedYetPopup/IsntACtivatedYetPopup ";

export default function SelectedImageSection(props) {
    const { setShowMusicSelectionSection } = props;

    const [showYetToComePopup, setShowYetToComePopup] = useState(false);

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
                    <Image src={imag} alt="xx" className="absolute top-0" width={200} height={300} />
                    <Slider {...settings} className="">
                        {frames.map((Frame, index) => (
                            <React.Fragment key={index}>
                                <Frame />
                            </React.Fragment>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="flex flex-row items-center justify-end pr-4 mb-2">
                {/* <span className="mr-4 h-8 flex justify-center pt-1 w-8 rounded-full bg-white" onClick={() => setShowMusicSelectionSection(true)}>
                    <MusicIcon height={20} width={20} />
                </span> */}

                {/* <Link href={`/customize/1`}> */}

                <div className="flex flex-row justify-center h-8 rounded-xl bg-white pt-1 px-3" onClick={() => setShowYetToComePopup(true)}>
                    <EditIcon height={20} width={20} />
                    <span className="ml-2">Edit</span>
                </div>
                {/* </Link> */}
            </div>

            {showYetToComePopup && <IsntACtivatedYetPopup handleClickClose={() => setShowYetToComePopup(false)} />}
        </>
    );
}
