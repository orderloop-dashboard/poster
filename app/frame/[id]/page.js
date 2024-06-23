"use client";

import { Frame1, Frame2, Frame3, Frame4, Frame5, Frame6 } from "@/components/Frames/Frame";
import React, { useRef, useState } from "react";
import BackIcon from "@/assets/chevron-right.svg";
import Link from "next/link";
import Input from "@/app/edit-profile/Component/Input";

export default function Page() {
    const sectionRef = useRef();

    const [details, setDetails] = useState({ number: "", email: "", webSite: "", address: "" });

    return (
        <>
            <div className="p-4 flex flex-row justify-between items-center sticky top-0 bg-[#efefef] z-10">
                <div className="flex flex-row items-center gap-4">
                    <Link href="/profile" className="bg-neutral-50 rounded-full h-full w-fit p-1">
                        <BackIcon className="w-8 h-8 stroke-neutral-500 rotate-180" />
                    </Link>

                    <span className="text-neutral-800 font-medium pr-3 tracking-wide text-[16px]">Edit Business profile</span>
                </div>
            </div>

            <div className="p-4 gap-2 space-y-2">
                {/* name, email, webSite, address */}
                <Frame1 sectionRef={sectionRef} number={details.number} email={details.email} webSite={details.webSite} address={details.address} />
                {/* <Frame2 sectionRef={sectionRef} />
                <Frame3 sectionRef={sectionRef} />
                <Frame4 sectionRef={sectionRef} />
                <Frame5 sectionRef={sectionRef} />
                <Frame6 sectionRef={sectionRef} /> */}
            </div>

            <Input label="number" handleChange={(e) => setDetails((prevState) => ({ ...prevState, number: e.target.value }))} placeholder="Name" value={details.number} />
            <Input label="email" handleChange={(e) => setDetails((prevState) => ({ ...prevState, email: e.target.value }))} placeholder="email" value={details.email} />
            <Input label="webSite" handleChange={(e) => setDetails((prevState) => ({ ...prevState, webSite: e.target.value }))} placeholder="webSite" value={details.webSite} />
            <Input label="address" handleChange={(e) => setDetails((prevState) => ({ ...prevState, address: e.target.value }))} placeholder="address" value={details.address} />
        </>
    );
}
