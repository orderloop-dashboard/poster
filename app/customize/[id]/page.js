// "use client";

// import React, { useState } from "react";
// import CancelIcon from "@/assets/cancel-icon.svg";
// import EditLayout from "../components/Layout/EditLayout";
// import FrameSection from "../components/sections/FrameSection";
// import TextSection from "../components/sections/TextSection";
// import Footer from "../components/Footer";

// const Page = ({ params }) => {
//     const { id } = params;

//     const [openSection, setOpenSection] = useState(null);

//     const toggleSection = (section, id) => {
//         setOpenSection(openSection === section ? null : section);
//         id && setEdittingTextId(id);
//     };

//     const [edittingTextId, setEdittingTextId] = useState(0);

//     const [textData, setTextData] = useState([{ text: "Helo owrld", fontSize: "12px", color: "#000000", fontFamily: "Roboto, Roboto", fontStyle: [] }]);

//     return (
//         <>
//             <EditLayout toggleSection={toggleSection} textData={textData} />

//             {openSection && (
//                 <div className="h-[280px] bg-gradient-to-t from-slate-100 to-amber-100 bottom-[60px] w-full px-2 fixed rounded-t-xl">
//                     <div className="flex flex-row items-center mt-2 ml-2 mb-5">
//                         <span onClick={() => setOpenSection(null)}>
//                             <CancelIcon />
//                         </span>

//                         <span className="ml-2">Frames</span>
//                     </div>

//                     {openSection === "frame" && <FrameSection />}

//                     {openSection === "text" && <TextSection setTextData={setTextData} edittingTextId={edittingTextId} textData={textData} />}
//                 </div>
//             )}

//             <Footer toggleSection={toggleSection} openSection={openSection} />
//         </>
//     );
// };

// export default Page;

import Head from "next/head";

export default function ComingSoon() {
    return (
        <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-4">
            <Head>
                <title>Coming Soon</title>
            </Head>
            <div className="text-center">
                <div className="relative mb-8">
                    <div className="absolute inset-0 animate-ping rounded-full bg-white opacity-75 mt-1" style={{ width: "3.5rem", height: "3.5rem", left: "40.5%" }}></div>
                    <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-white">
                        <span className="text-xl font-bold text-blue-500">🚀</span>
                    </div>
                </div>
                <h1 className="text-4xl font-bold text-white animate-bounce">Customization Option</h1>
                <p className="mt-4 text-xl text-white">is coming soon</p>
                <div className="mt-6">
                    <svg className="mx-auto h-6 w-6 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 100 8v4a8 8 0 01-8-8z"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}
