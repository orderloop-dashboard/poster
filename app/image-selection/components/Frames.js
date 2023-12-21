import Image from "next/image";
import React from "react";
import img from "@/assets/demo-poster-header.jpg";

export function Frame1() {
    return (
        <div className="min-w-[200px] bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-gray-900 to-gray-800 p-4">
            <span className="text-white">this is t=1</span>
            <div className="flex items-center justify-between">
                <span>1</span>
                <div className="flex items-center space-x-4">
                    <Image height={10} width={10} src={img} alt="Logo" className="rounded-full" />
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
    );
}

export function Frame2() {
    return (
        <>
            <div className="min-w-[200px] bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-gray-900 to-gray-800 p-4">
                <span className="text-white">this is t=2</span>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Image height={10} width={10} src={img} alt="Logo" className="rounded-full" />
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
        </>
    );
}

export function Frame3() {
    return (
        <>
            <div className="min-w-[200px] bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-gray-900 to-gray-800 p-4">
                <span className="text-white">this is t=3</span>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Image height={10} width={10} src={img} alt="Logo" className="rounded-full" />
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
        </>
    );
}

export function Frame4() {
    return (
        <>
            <div className="min-w-[200px] bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-gray-900 to-gray-800 p-4">
                <span className="text-white">this is t=4</span>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Image height={10} width={10} src={img} alt="Logo" className="rounded-full" />
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
        </>
    );
}

export function Frame5() {
    return (
        <>
            <div className="min-w-[200px] bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-gray-900 to-gray-800 p-4">
                <span className="text-white">this is t=5</span>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Image height={10} width={10} src={img} alt="Logo" className="rounded-full" />
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
        </>
    );
}
