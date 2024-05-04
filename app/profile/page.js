"use client";
import React, { useState } from "react";
import RedirectIcon from "@/assets/redirect.svg";
import poster from "@/assets/demo-poster-header.jpg";
import Image from "next/image";
import Email from "@/assets/email.svg";
import Call from "@/assets/call.svg";
import Grid from "@/assets/grid.svg";
import Lock from "@/assets/lock.svg";
import PencilEdit from "@/assets/pencil-edit.svg";
import RightArrowIcon from "@/assets/chevron-right.svg";
import frame1 from "@/assets/Themes/frame2.png";

export default function Page() {
    const [selectedColor, setSelectedColor] = useState("#ff0000"); // Default color is red

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    return (
        <>
            <div className="px-4 pt-5 bg-neutral-50">
                <div className="flex flex-row justify-between w-full">
                    <span className="font-medium text-neutral-700">Business Profile</span>
                    <RedirectIcon />
                </div>

                <div className="flex flex-row items-center gap-3 mt-10">
                    <Image src={poster} className="rounded-xl h-16 w-16" alt="img" />

                    <div className="flex flex-col gap-1">
                        <span className="font-medium text-[16px] text-neutral-700">Rushit info tech</span>
                        <span className="font-medium text-[13px] text-neutral-400 tracking-wide">Network marketing industry</span>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-2 mt-5">
                    <Email className="h-4 w-4" />
                    <span className="text-neutral-600 font-normal text-[13px]">rushirpatoliya22@gmail.com</span>
                </div>

                <div className="flex flex-row items-center gap-2 mt-4">
                    <Call className="h-4 w-4" />
                    <span className="text-neutral-600 font-normal text-[13px]">7485964163</span>
                </div>

                <button className="bg-neutral-200 text-neutral-800 py-1.5 px-2.5 rounded-xl font-medium text-[13px] my-3">Edit Business Profile</button>
            </div>

            <div className="px-4 pt-8 flex flex-row justify-between w-full items-center">
                <div className="flex flex-row gap-1.5 items-center">
                    <Grid className="rounded-full bg-neutral-50 p-5 h-3 w-3" />
                    <div className="">
                        <span className="font-medium text-neutral-700">Business Frames</span>

                        <div className="flex flex-row gap-2 pt-0.5 items-center">
                            <Lock className="h-3 w-3" />
                            <span className="font-medium text-[13px] text-neutral-400 tracking-wide">Private for you</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center">
                    <span className="mr-1 tracking-wider text-neutral-500 text-sm">View All</span>
                    <div className="rounded-full h-5 w-5 bg-white flex justify-center items-center">
                        <RightArrowIcon className="stroke-neutral-500" />
                    </div>
                </div>

                {/* <div className="flex flex-row gap-2">
                    <PencilEdit />
                    <span>EDIT</span>
                </div> */}
            </div>

            <Image src={frame1} height={240} style={{ filter: `saturate(0) sepia(100%) hue-rotate(${getHueRotation(selectedColor)}deg)` }} />

            <div>
                <ColorPicker onChange={handleColorChange} />
            </div>
            <div className="h-[250px]"></div>
        </>
    );
}

const ColorPicker = ({ onChange }) => {
    const [selectedColor, setSelectedColor] = useState("#ff0000"); // Default color is red

    const handleChange = (e) => {
        const color = e.target.value;
        setSelectedColor(color);
        onChange(color);
    };

    return <input type="color" value={selectedColor} onChange={handleChange} />;
};

const getHueRotation = (color) => {
    const hexToRgb = (hex) => {
        const bigint = parseInt(hex.substring(1), 16);
        return {
            r: (bigint >> 16) & 255,
            g: (bigint >> 8) & 255,
            b: bigint & 255,
        };
    };

    const rgbToHsl = (r, g, b) => {
        (r /= 255), (g /= 255), (b /= 255);

        const max = Math.max(r, g, b),
            min = Math.min(r, g, b);
        let h,
            s,
            l = (max + min) / 2;

        if (max === min) {
            h = s = 0; // achromatic
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }

        return [h * 360, s * 100, l * 100];
    };

    const { r, g, b } = hexToRgb(color);
    const [hue] = rgbToHsl(r, g, b);
    return hue;
};
