"use client";

import React, { useState } from "react";
import SwipeableFrames from "../components/SelectedImageSection";
import RecomandationSection from "../components/RecomandationSection";
import Navbar from "../components/Navbar.js";
import MusicSelectionSection from "../components/MusicSelectionSection";

export default function Page() {
    const [showMusicSelectionSection, setShowMusicSelectionSection] = useState(false);

    return (
        <>
            {!showMusicSelectionSection && (
                <>
                    <Navbar />
                    <SwipeableFrames setShowMusicSelectionSection={setShowMusicSelectionSection} />
                    <RecomandationSection />
                </>
            )}

            {showMusicSelectionSection && <MusicSelectionSection handleClickClose={() => setShowMusicSelectionSection(false)} />}
        </>
    );
}
