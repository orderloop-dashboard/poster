"use client";

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TrendingBanners from "./components/TrendingBanners";
import ThisMonthPoster from "./components/ThisMonthPoster";
import SingleScrollingSection from "./components/SingleScrollingSection";
import FestivalIcon from "@/assets/background-icon.svg";
import image from "@/assets/demo-poster-header.jpg";
import Link from "next/link";
import axios from "axios";

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    console.log("data ==> ", data);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://pinkly-node.vercel.app/api/category");
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <>
            <div className="w-full">
                <Header />
                <TrendingBanners />
                <ThisMonthPoster />

                {data.map((item) => (
                    <SingleScrollingSection key={item.category} title={item.category} icon={<FestivalIcon />} imageData={item} />
                ))}
            </div>
        </>
    );
}
