import React from "react";
import BackIcon from "@/assets/chevron-down.svg";
import Link from "next/link";
import Image from "next/image";
import demo from "@/assets/demo-poster-header.jpg";
import Input from "@/app/edit-profile/Component/Input";
import NameIcon from "@/assets/at-the-rate-icon.svg";

export default function Page() {
    return (
        <>
            <div className="py-4 mx-4 flex flex-row justify-between items-center sticky top-0 bg-[#efefef] z-10">
                <Link href="/my-business" className="bg-neutral-50 rounded-full h-full w-fit p-2">
                    <BackIcon className="rotate-90 w-5" />
                </Link>

                <span className="text-neutral-800 font-bold pr-3 tracking-wide text-[11px]">CONTINUE</span>
            </div>

            <div className="flex flex-col gap-1 px-4 mt-5 pr-8 mb-20">
                <span className="font-medium tracking-wide text-lg">Business Details</span>
                <span className="text-neutral-400 text-sm">Enter your valid business details to receive posts related to your business</span>
            </div>

            <div className="px-5 ">
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

                <Link href="/">
                    <button className="py-5 rounded-xl bg-blue-600 hover:bg-blue-700 px-4 text-white uppercase text-xs tracking-wider w-full mt-12">Continue</button>
                </Link>
            </div>
        </>
    );
}
