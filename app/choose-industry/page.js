"use client";

import SearchIcon from "@/assets/search.svg";
import Link from "next/link";
import React, { useState } from "react";

export default function Page() {
    const [searchQuery, setSearchQuery] = useState("");

    const sectors = [
        "Real Estate",
        "Real Estate",
        "Real Estate",
        "Real Estate",
        "Real Estate",
        "Real Estate",
        "Real Estate",
        "Real Estate",
        "Real Estate",
        "Plywood and Laminates",
        "Education",
        "BJP",
        "COngress",
        "R. O. Water & Softner",
        "Jewellery",
        "Paints",
        "Pipes",
        "Solar",
        "Textile",
    ];

    const filteredSectors = sectors.filter((sector) => sector.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <>
            <section className="py-[52px] pl-5 bg-neutral-200">
                <div className="mb-1 font-bold">Choose Your Industry</div>
                <div className="text-neutral-500 max-w-[290px]">Find bussiness category that matches your products / services</div>
            </section>

            <div className="sticky top-0 py-8 bg-purple-200">
                <div className="relative h-12 mx-6">
                    <input type="text" className="h-full rounded-xl absolute top-0 pl-16 w-full" placeholder="Search industry" onChange={(e) => setSearchQuery(e.target.value)} />

                    <span className="top-2.5 absolute left-2">
                        <SearchIcon height="20" className="" />
                    </span>
                </div>
            </div>

            <div className="mb-3">
                {filteredSectors.map((el, index) => (
                    <Link href="/fill-details" key={index}>
                        <div className="bg-neutral-100 rounded-xl mt-3 py-2 px-5 mx-6">{el}</div>
                    </Link>
                ))}
            </div>
        </>
    );
}
