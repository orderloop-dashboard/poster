import Image from "next/image";
import React from "react";
import logo from "../../../assets/demo-patter-image.jpeg";

export default function Frame1() {
    return (
        <div className="relative h-[210px] w-[150px] bg-white">
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-gray-900 to-gray-800 p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Image height={10} width={10} src={logo} alt="Logo" className="rounded-full" />
                        <div>
                            <div className="w-10 h-2 bg-slate-200" />
                            <div className="w-16 h-2 bg-slate-200 mt-2" />
                        </div>
                    </div>
                    <div className="text-white space-x-4">
                        <div className="w-10 h-2 bg-slate-200" />
                        <div className="w-10 h-2 bg-slate-200 mt-2" />
                    </div>
                </div>
            </div>
        </div>
    );
}
