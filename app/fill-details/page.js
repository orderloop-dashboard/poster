"use client";

import React from "react";
import SearchIcon from "@/assets/search.svg";
import Link from "next/link";

export default function Page() {
    const onSubmit = () => {};

    return (
        <>
            <section className="py-[52px] pl-5 bg-neutral-200">
                <div className="mb-1 font-bold">Business details</div>
                <div className="text-neutral-500 max-w-[290px]">Enter your valid business details to posts related to your business</div>
            </section>

            <section>
                <div className="relative h-12 mx-6 mt-5">
                    <input type="text" className="h-full rounded-xl absolute top-0 w-full pl-12" placeholder="Bussiness Name*" />

                    <span className="top-2.5 absolute left-2">
                        <SearchIcon height="20" className="" />
                    </span>
                </div>

                <div className="relative h-12 mx-6 mt-5">
                    <input type="email" className="h-full rounded-xl absolute top-0 w-full pl-12" placeholder="Email ID" />

                    <span className="top-2.5 absolute left-2">
                        <SearchIcon height="20" className="" />
                    </span>
                </div>

                <div className="relative h-12 mx-6 mt-5">
                    <input type="text" className="h-full rounded-xl absolute top-0 w-full pl-12" placeholder="Address" />

                    <span className="top-2.5 absolute left-2">
                        <SearchIcon height="20" className="" />
                    </span>
                </div>

                <div className="relative h-12 mx-6 mt-5">
                    <input
                        type="tel"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        maxLength={10}
                        className="h-full rounded-xl absolute top-0 w-full pl-12"
                        placeholder="Phone number 2"
                        onInput={(e) => {
                            let value = e.target.value;
                            if (value === "" || /^\d+$/.test(value)) {
                                e.target.value = value.slice(0, 10);
                            } else {
                                e.target.value = value.replace(/\D/g, "").slice(0, 10);
                            }
                        }}
                    />

                    <span className="top-2.5 absolute left-2">
                        <SearchIcon height="20" className="" />
                    </span>
                </div>

                <div className="relative h-12 mx-6 mt-5">
                    <input type="text" className="h-full rounded-xl absolute top-0 w-full pl-12" placeholder="Website" />

                    <span className="top-2.5 absolute left-2">
                        <SearchIcon height="20" className="" />
                    </span>
                </div>
            </section>

            <div className="text-center w-full left-0 rounded-xl mt-10">
                <Link href="/home" onClick={() => onSubmit()}>
                    <div className="mt-4 py-5 rounded-xl bg-blue-600 px-4 text-white uppercase mx-5 text-xs tracking-wider">Continue</div>
                </Link>
            </div>
        </>
    );
}
