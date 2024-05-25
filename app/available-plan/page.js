"use client";
import Link from "next/link";
import React, { useState } from "react";
import BackIcon from "@/assets/chevron-down.svg";

export default function Page() {
    const [selectedPlan, setSelectedPlan] = useState("");

    const handleSelectPlan = (plan) => {
        setSelectedPlan(plan);
    };

    const handleBuyNow = () => {
        if (!selectedPlan) {
            alert("Please select a plan to buy.");
            return;
        }
        alert(`You have selected the ${selectedPlan} plan. Proceeding to buy now.`);
    };

    return (
        <>
            <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
                <div className="p-4 flex flex-row justify-between items-center sticky top-0 bg-white z-10 shadow-md">
                    <div className="flex flex-row items-center gap-4">
                        <Link href="/menu" className="bg-neutral-50 rounded-full h-full w-fit p-2">
                            <BackIcon className="rotate-90 w-5" />
                        </Link>
                        <span className="font-semibold text-neutral-700 tracking-wide">Plans</span>
                    </div>
                </div>

                <div className="mx-auto max-w-[80%] w-full mt-10 space-y-6 flex-grow">
                    <div
                        className={`w-full border p-6 rounded-xl transition-all duration-300 ${
                            selectedPlan === "Monthly" ? "border-blue-500 bg-blue-50" : "border-neutral-300 bg-white"
                        }`}
                        onClick={() => handleSelectPlan("Monthly")}
                    >
                        <span className="font-bold text-lg tracking-wide block mb-2">Monthly</span>
                        <span className="block text-gray-600">Price</span>
                        <span className="block text-2xl font-semibold">&#8377; 100</span>
                    </div>

                    <div
                        className={`w-full border p-6 rounded-xl transition-all duration-300 ${
                            selectedPlan === "Annual" ? "border-blue-500 bg-blue-50" : "border-neutral-300 bg-white"
                        }`}
                        onClick={() => handleSelectPlan("Annual")}
                    >
                        <span className="font-bold text-lg tracking-wide block mb-2">Annual</span>
                        <span className="block text-gray-600">Price</span>
                        <span className="block text-2xl font-semibold">&#8377; 400</span>
                    </div>
                </div>

                <div className="p-4 bg-white shadow-md">
                    <button onClick={handleBuyNow} className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold uppercase tracking-wide">
                        Buy Now
                    </button>
                </div>
            </div>
        </>
    );
}
