"use client";

import React, { useEffect, useState } from "react";
import SwipeableFrames from "../components/SelectedImageSection";
import RecomandationSection from "../components/RecomandationSection";
import Navbar from "../components/Navbar.js";
import MusicSelectionSection from "../components/MusicSelectionSection";
import { useParams, useRouter } from "next/navigation";

export default function Page(props) {
    const [showMusicSelectionSection, setShowMusicSelectionSection] = useState(false);

    const [imageDetails, setImageDetails] = useState({});

    return (
        <>
            {!showMusicSelectionSection && (
                <>
                    <Navbar />
                    <SwipeableFrames imageDetails={imageDetails} />
                    <RecomandationSection />
                </>
            )}

            {showMusicSelectionSection && <MusicSelectionSection handleClickClose={() => setShowMusicSelectionSection(false)} />}
        </>
    );
}
