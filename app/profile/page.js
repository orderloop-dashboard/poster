"use client";
import React from "react";
import RedirectIcon from "@/assets/redirect.svg";
import poster from "@/assets/demo-poster-header.jpg";
import Image from "next/image";
import Email from "@/assets/email.svg";
import Call from "@/assets/call.svg";
import Grid from "@/assets/grid.svg";
import Lock from "@/assets/lock.svg";
import RightArrowIcon from "@/assets/chevron-right.svg";
import Link from "next/link";
import { Frame1, Frame2, Frame3, Frame4 } from "@/components/Frames/Frame";
import { useRouter } from "next/navigation";

export default function Page() {
    const { push } = useRouter();

    return (
        <>
            <div className="px-4 bg-neutral-50">
                <div className="flex flex-row justify-between w-full sticky top-0 py-5 bg-white">
                    <span className="font-medium text-neutral-700">Business Profile</span>
                    <RedirectIcon />
                </div>

                <div className="flex flex-row items-center gap-3 mt-10">
                    <Image src={poster} className="rounded-xl h-16 w-16" alt="img" />

                    <div className="flex flex-col gap-1">
                        <span className="font-medium text-[16px] text-neutral-700">Rushit info tech</span>
                        <span className="font-medium text-[13px] text-neutral-400 tracking-wide">Network marketing industry</span>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-2 mt-5">
                    <Email className="h-4 w-4" fill="#000000" />
                    {/* fill */}
                    <span className="text-neutral-600 font-normal text-[13px]">rushirpatoliya22@gmail.com</span>
                </div>

                <div className="flex flex-row items-center gap-2 mt-4">
                    {/* fill */}
                    <Call className="h-4 w-4" />
                    <span className="text-neutral-600 font-normal text-[13px]">7485964163</span>
                </div>

                <Link href="/edit-business-details">
                    <button className="bg-neutral-200 text-neutral-800 py-1.5 px-2.5 rounded-xl font-medium text-[13px] my-3">Edit Business Profile</button>
                </Link>
            </div>

            <div className="px-4 pt-8 flex flex-row justify-between w-full items-center">
                <div className="flex flex-row gap-1.5 items-center">
                    <Grid className="rounded-full bg-neutral-50 p-5 h-3 w-3" />
                    <div className="">
                        <span className="font-medium text-neutral-700">Business Frames</span>

                        <div className="flex flex-row gap-2 pt-0.5 items-center">
                            <Lock className="h-3 w-3" />
                            <span className="font-medium text-[13px] text-neutral-400 tracking-wide">Private for you</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center">
                    <span className="mr-1 tracking-wider text-neutral-500 text-sm">View All</span>
                    <div className="rounded-full h-5 w-5 bg-white flex justify-center items-center">
                        <RightArrowIcon className="stroke-neutral-500" />
                    </div>
                </div>
            </div>

            {/* <div className="flex flex-row overflow-auto w-[100vw]">
                <Frame1 className="w-[30vw] h-[25vh]" />
                <Frame2 className="w-[30vw] h-[25vh]" />
                <Frame3 className="w-[30vw] h-[25vh]" />
                <Frame4 className="w-[30vw] h-[25vh]" />
            </div> */}

            <div className="flex flex-row overflow-x-auto whitespace-nowrap w-[100vw] gap-4 mt-4 ml-4">
                <Frame1 className="w-[30vw] h-[25vh] flex-shrink-0" onClick={() => push("/frame/1")} />
                <Frame2 className="w-[30vw] h-[25vh] flex-shrink-0" onClick={() => push("/frame/2")} />
                <Frame3 className="w-[30vw] h-[25vh] flex-shrink-0" onClick={() => push("/frame/3")} />
                <Frame4 className="w-[30vw] h-[25vh] flex-shrink-0" onClick={() => push("/frame/4")} />
            </div>
        </>
    );
}

// import React, { useState, useEffect, useRef } from "react";

// const InfoComponent = () => {
//     const [email, setEmail] = useState("");
//     const [website, setWebsite] = useState("");
//     const [address, setAddress] = useState("");
//     const [mobileNumber, setMobileNumber] = useState("");

//     const emailRef = useRef(null);
//     const websiteRef = useRef(null);
//     const mobileRef = useRef(null);
//     const addressRef = useRef(null);

//     useEffect(() => {
//         const adjustFontSize = (ref) => {
//             if (ref.current) {
//                 ref.current.style.fontSize = "16px";
//                 while (ref.current.scrollWidth > ref.current.clientWidth) {
//                     const currentFontSize = parseFloat(window.getComputedStyle(ref.current).fontSize);
//                     ref.current.style.fontSize = `${currentFontSize - 1}px`;
//                     if (currentFontSize <= 10) break;
//                 }
//             }
//         };

//         adjustFontSize(emailRef);
//         adjustFontSize(websiteRef);
//         adjustFontSize(mobileRef);
//         adjustFontSize(addressRef);
//     }, [email, website, mobileNumber, address]);

//     return (
//         <div className="flex flex-col items-center">

//             <div className="border border-neutral-300 h-[350px] w-[250px] flex mx-auto mt-5 relative">
//                 <div className="absolute bottom-8 left-0 right-0 flex justify-between">
//                     <div
//                         ref={emailRef}
//                         className="bg-gray-500 h-8 w-[32%] rounded-r-2xl flex items-center justify-center text-white overflow-hidden text-ellipsis whitespace-nowrap"
//                     >
//                         {email || "This is email"}
//                     </div>
//                     <div
//                         ref={websiteRef}
//                         className="bg-gray-500 h-8 w-[32%] rounded-l-2xl flex items-center justify-center text-white overflow-hidden text-ellipsis whitespace-nowrap"
//                     >
//                         {website || "This is website"}
//                     </div>
//                 </div>
//                 <div
//                     ref={mobileRef}
//                     className="absolute bottom-9 left-1/2 transform -translate-x-1/2 w-[30%] flex items-center justify-center text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap"
//                 >
//                     {mobileNumber || "mobile number"}
//                 </div>
//                 <div
//                     ref={addressRef}
//                     className="absolute bottom-0 left-0 right-0 w-full text-center p-2 text-gray-500 rounded-b-2xl overflow-hidden text-ellipsis whitespace-nowrap"
//                 >
//                     {address || "This is address"}
//                 </div>
//             </div>

//             <div className="flex flex-col w-[80vw] mt-5 space-y-4">
//                 <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded" />
//                 <input type="text" placeholder="Website" value={website} onChange={(e) => setWebsite(e.target.value)} className="border p-2 rounded" />
//                 <input type="text" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className="border p-2 rounded" />
//                 <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="border p-2 rounded" />
//             </div>
//         </div>
//     );
// };

// export default InfoComponent;
