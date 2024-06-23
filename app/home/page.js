"use client";

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TrendingBanners from "./components/TrendingBanners";
import ThisMonthPoster from "./components/ThisMonthPoster";
import SingleScrollingSection from "./components/SingleScrollingSection";
import TimeWatch from "@/assets/time-watch.svg";
import Loader from "./components/Loader";
import { useInitializeDeviceId } from "@/hooks/useInitializeDeviceId";
import { axiosInstance } from "@/APIHelper/axios";

export default function Home() {
    const [data, setData] = useState([]);

    useInitializeDeviceId();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // api/posters
            const response = await axiosInstance.get("/posters");
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <>
            <div className="w-full mb-[80px]">
                <Header />

                <TrendingBanners />

                <ThisMonthPoster />

                {!data.length ? (
                    <>
                        <Loader />
                        <Loader />
                        <Loader />
                        <Loader />
                        <Loader />
                        <Loader />
                    </>
                ) : (
                    data.map((item) => <SingleScrollingSection key={item.category} title={item.category} icon={<TimeWatch stroke={2} height={16} width={16} />} imageData={item} />)
                )}
            </div>
        </>
    );
}
