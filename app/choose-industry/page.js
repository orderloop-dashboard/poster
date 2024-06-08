"use client";

import SearchIcon from "@/assets/search.svg";
import Link from "next/link";
import React, { useState } from "react";

export default function Page() {
    const [searchQuery, setSearchQuery] = useState("");

    const sectors = [
        "Agriculture",
        "Awnings",
        "Animal Hospital",
        "Animal Food",
        "Ambulance services",
        "Architect | Interior design",
        "ART and Craft | Handicraft ",
        "Astrologer",
        "Automobile | Service center",
        "Aesthetic",
        "Ayurvedic",
        "Baby product",
        "Bag and luggage",
        "Bakery",
        "Building material",
        "Bike car showroom",
        "Book store",
        "Caterers",
        "Security",
        "Ceramic",
        "Chemical",
        "Cloth store",
        "Classes",
        "Cold drinks",
        "Cold Storage",
        "Cosmetic shop",
        "Electronic services",
        "CSC center",
        "Crockery store",
        "Crackers shop",
        "Dairy and sweet",
        "DJ",
        "Diamond",
        "Driving school",
        "Dry cleaners",
        "Educations | classes | School",
        "Electric shop",
        "Escalator | Elevator",
        "Event management",
        "Farsan",
        "Fabrication",
        "Finance",
        "Fire safety",
        "Flower shop",
        "Provision store",
        "Footwear",
        "Fruits and vegetables",
        "Furniture",
        "Gift and articles",
        "GPS tracking",
        "Graphics design",
        "Gruh udyog",
        "Health & fitness",
        "Hair salon | Spa | Beauty parlour",
        "Handloom",
        "Hardware",
        "Home appliances",
        "Homeopathy",
        "Hospital & clinic",
        "Hotel",
        "Cleaning services",
        "Import export",
        "IT company",
        "Insurance",
        "Internet broadband",
        "Jewellery",
        "Laboratory",
        "Logistics & Courier services",
        "Marriage Beuro",
        "Network marketing",
        "Medical equipment",
        "Medical store",
        "Mobile store",
        "Musical instrument store",
        "NGO",
        "Optical store",
        "Petrol pump | Gas agency",
        "P.G. | Hostel",
        "Packaging",
        "Packers and movers",
        "Paints",
        "Pan parlour",
        "Paper manufacturing",
        "Pest control",
        "Pet shop",
        "Photography",
        "Physiotherapy",
        "Placement services",
        "Plant nurseries",
        "Plastic",
        "Plywood and laminate",
        "Property broker ",
        "Plumbing service",
        "R.O. Water & Softner",
        "Real Estate | Construction company",
        "Restaurant & fast food",
        "Repair and services",
        "Stationary",
        "Scrap",
        "Security agency",
        "Solar",
        "Sports | Game zone",
        "Sports shop",
        "Sports academy",
        "Share market",
        "Tailor",
        "Tattoo",
        "Textile",
        "Taxi services",
        "Tour and Travels",
        "Toys",
        "Transport",
        "Visa consultant",
        "Warehouse",
        "Wine shop | Liquor shop | Alcohol shop",
        "Watch shop",
        "Weighting scale machine store",
        "Motivation",
        "None of the above",
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
