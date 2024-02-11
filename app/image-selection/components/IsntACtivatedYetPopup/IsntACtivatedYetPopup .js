import React from "react";
import ChevronLeft from "@/assets/chevron-right.svg";
import Image from "next/image";
import called from "@/assets/poste300x200.jpg";

export default function IsntACtivatedYetPopup(props) {
    const { handleClickClose } = props;

    return (
        <>
            <div className="fixed bg-black bg-opacity-50 inset-0 md:z-[9] z-50 flex justify-center items-center overflow-auto md:bg-white md:relative px-8 py-4 md:py-0 md:px-0">
                <div className="max-w-[1123px] lg:max-w-[701px] w-full rounded-xl md:rounded-none bg-shades-50 px-3 pt-2 pb-10 md:px-4 m-auto bg-white md:max-w-full h-auto relative md:py-4 md:h-full lg:max-h-[899px] md:max-h-full">
                    <div className="flex paragraph-medium-medium flex-row mb-4 cursor-pointer items-center" onClick={handleClickClose}>
                        <ChevronLeft className="rotate-180" />

                        <span className="paragraph-medium-medium font-bold pl-1">Back</span>
                    </div>

                    <Image src={called} alt="called" className="flex m-auto" />

                    <div className="px-4">Please hold tight we are just launching it</div>
                </div>
            </div>
        </>
    );
}
