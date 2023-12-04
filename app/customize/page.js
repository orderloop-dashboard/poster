"use client";

import React, { useState } from "react";
import Footer from "./components/Footer";
import CancelIcon from "../../assets/cancel-icon.svg";
import FrameSection from "./components/sections/FrameSection";
import TextSection from "./components/sections/TextSection";
import EditLayout from "./components/Layout/EditLayout";

const Page = () => {
    const [openSection, setOpenSection] = useState("text");

    const toggleSection = (section, id) => {
        setOpenSection(openSection === section ? null : section);
        id && setEdittingTextId(id);
    };

    const [edittingTextId, setEdittingTextId] = useState(0);

    const [textData, setTextData] = useState([{ text: "Helo owrld", fontSize: "12px", color: "#000000", fontFamily: "Roboto, Roboto", fontStyle: [] }]);

    return (
        <>
            <EditLayout toggleSection={toggleSection} textData={textData} />
            {openSection && (
                <div className="h-[280px] bg-gradient-to-t from-slate-100 to-amber-100 bottom-[60px] w-full px-2 fixed rounded-t-xl">
                    <div className="flex flex-row items-center mt-2 ml-2 mb-5">
                        <span onClick={() => setOpenSection(null)}>
                            <CancelIcon />
                        </span>

                        <span className="ml-2">Frames</span>
                    </div>

                    {openSection === "frame" && <FrameSection />}

                    {openSection === "text" && <TextSection setTextData={setTextData} edittingTextId={edittingTextId} textData={textData} />}
                </div>
            )}
            ]<Footer toggleSection={toggleSection} openSection={openSection} />
        </>
    );
};

export default Page;
