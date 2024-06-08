"use client";
import React, { useState, useEffect, useRef } from "react";
import BackIcon from "@/assets/chevron-down.svg";
import Link from "next/link";
import Image from "next/image";
import demo from "@/assets/demo-poster-header.jpg";
import Input from "@/app/edit-profile/Component/Input";
import NameIcon from "@/assets/at-the-rate-icon.svg";

export default function Page() {
    const [isBusinessDetailsInView, setIsBusinessDetailsInView] = useState(true);
    const [showMoreBusinessDetails, setShowMoreBusinessDetails] = useState(false);
    const [showSocialDetails, setShowSocialDetails] = useState(false);
    const businessDetailsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsBusinessDetailsInView(entry.isIntersecting);
                });
            },
            { threshold: 0.1 } // Adjust as needed
        );

        if (businessDetailsRef.current) {
            observer.observe(businessDetailsRef.current);
        }

        return () => {
            if (businessDetailsRef.current) {
                observer.unobserve(businessDetailsRef.current);
            }
        };
    }, []);

    const toggleMoreBusinessDetails = () => {
        setShowMoreBusinessDetails(!showMoreBusinessDetails);
    };

    const toggleSocialDetails = () => {
        setShowSocialDetails(!showSocialDetails);
    };

    return (
        <>
            <div className="p-4 flex flex-row justify-between items-center sticky top-0 bg-[#efefef] z-10">
                <div className="flex flex-row items-center gap-4">
                    <Link href="/profile" className="bg-neutral-50 rounded-full h-full w-fit p-2">
                        <BackIcon className="rotate-90 w-5" />
                    </Link>

                    {!isBusinessDetailsInView && <span className="text-neutral-800 font-medium pr-3 tracking-wide text-[16px]">Business Details</span>}
                </div>
            </div>

            <div className="flex flex-col gap-1 px-4 mt-5 pr-8 mb-20">
                <span className="font-medium tracking-wide text-lg" ref={businessDetailsRef}>
                    Business Details
                </span>
                <span className="text-neutral-400 text-sm">Enter your valid business details to receive posts related to your business</span>
            </div>

            <div className="px-5 pb-6">
                <span>Logo*</span>

                <Image src={demo} alt="" className="rounded-xl h-20 w-20" />

                <div className="mt-3">
                    <Input label="Business Name" icon={<NameIcon height={20} />} placeholder="Enter Business Name" />
                </div>

                <div className="mt-5">
                    <Input label="Email Id" placeholder="Enter Email" />
                </div>

                <div className="mt-5">
                    <Input label="Phone Number" placeholder="Enter Phone Number" />
                </div>
            </div>

            <div className="mx-4 mb-6 py-6 border-b border-t border-neutral-300">
                <div className="flex items-center gap-2 cursor-pointer" onClick={toggleMoreBusinessDetails}>
                    {showMoreBusinessDetails ? <BackIcon className="w-5 h-5" /> : <BackIcon className="w-5 h-5" />}
                    <span className="font-semibold text-neutral-700">More Business Details</span>
                </div>

                <div className={`transition-all duration-300 ease-in-out ${showMoreBusinessDetails ? "max-h-screen" : "max-h-0 overflow-hidden"}`}>
                    <div className="mt-3">
                        <Input label="Address" icon={<NameIcon height={20} />} placeholder="Enter Address" />
                    </div>

                    <div className="mt-5">
                        <Input label="Phone Number 2" placeholder="Enter Phone Number" />
                    </div>

                    <div className="mt-5">
                        <Input label="Website" placeholder="Enter Website" />
                    </div>
                </div>
            </div>

            <div className="mx-4 mb-6">
                <div className="flex items-center gap-2 cursor-pointer" onClick={toggleSocialDetails}>
                    {showSocialDetails ? <BackIcon className="w-5 h-5" /> : <BackIcon className="w-5 h-5" />}
                    <span className="font-semibold text-neutral-700">Social</span>
                </div>

                <div className={`transition-all duration-300 ease-in-out ${showSocialDetails ? "max-h-screen" : "max-h-0 overflow-hidden"}`}>
                    <div className="mt-3">
                        <Input label="Facebook" icon={<NameIcon height={20} />} placeholder="Facebook" />
                    </div>

                    <div className="mt-5">
                        <Input label="Instagram" placeholder="Instagram" />
                    </div>

                    <div className="mt-5">
                        <Input label="Twitter" placeholder="Twitter" />
                    </div>

                    <div className="mt-5">
                        <Input label="Youtube" placeholder="Youtube" />
                    </div>

                    <div className="mt-5">
                        <Input label="LinkedIn" placeholder="LinkedIn" />
                    </div>

                    <div className="mt-5">
                        <Input label="Whatsapp" placeholder="Whatsapp" />
                    </div>
                </div>
            </div>

            <div className="mx-4">
                <Link href="/profile" className="">
                    <button className="py-5 mb-6 rounded-3xl bg-blue-600 px-4 text-white uppercase text-xs tracking-wider w-full mt-12 transition duration-200 ease-in-out">
                        Save
                    </button>
                </Link>
            </div>
        </>
    );
}
