import React from "react";
import Header from "./components/Header";
import TrendingBanners from "./components/TrendingBanners";
import ThisMonthPoster from "./components/ThisMonthPoster";
import SingleScrollingSection from "./components/SingleScrollingSection";
import FestivalIcon from "@/assets/background-icon.svg";
import image from "@/assets/demo-poster-header.jpg";

export default function Home() {
    return (
        <>
            <div className="mt-2 w-full">
                <Header />

                <TrendingBanners />

                <ThisMonthPoster />

                <SingleScrollingSection title="X" icon={<FestivalIcon />} imageData={[image, image, image, image]} />
                <SingleScrollingSection title="X" icon={<FestivalIcon />} imageData={[image, image, image, image]} />
                <SingleScrollingSection title="X" icon={<FestivalIcon />} imageData={[image, image, image, image]} />
                <SingleScrollingSection title="X" icon={<FestivalIcon />} imageData={[image, image, image, image]} />
                <SingleScrollingSection title="X" icon={<FestivalIcon />} imageData={[image, image, image, image]} />
            </div>
        </>
    );
}
