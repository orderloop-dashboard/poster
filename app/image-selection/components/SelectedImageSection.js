"use client";

import React from "react";
import Slider from "react-slick";
import { Frame1, Frame2, Frame3, Frame4, Frame5 } from "./Frames";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function SelectedImageSection(props) {
    const { imageDetails, sectionRef } = props;

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
                <div className="relative h-[300px] w-[200px] bg-white" ref={sectionRef}>
                    {imageDetails?.url && <img alt="x" src={imageDetails?.url} className="absolute top-0" />}

                    <Slider {...settings} className="">
                        {frames.map((Frame, index) => (
                            <React.Fragment key={index}>
                                <Frame />
                            </React.Fragment>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}
