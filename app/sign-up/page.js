"use client";

import { axiosInstance } from "@/APIHelper/axios";
import Button from "@/components/Button/Button";
import { Input } from "@/components/InputField/Input";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const SignUp = () => {
    const [mobileNumber, setMobileNumber] = useState("12456");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    const deviceId = useSelector((state) => state.user.deviceId);

    const handleSendOtp = async () => {
        setOtpSent(true);
    };

    const handleSignUp = async () => {
        try {
            const response = await axiosInstance.post("user/login", { otp, mobileNumber, deviceId });
            console.log("response ==> ", response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-200 via-pink-200 to-orange-200">
            <div className="absolute top-14 left-6">
                <Link href="/" className="bg-transparent border-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </Link>
            </div>

            <div className="bg-white p-8 bg-opacity-50 rounded-lg shadow-lg w-80">
                <div className="flex justify-center mb-8">
                    <div className="bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center">
                        <span className="text-white text-lg font-bold">🔒</span>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mb-8 text-center">Sign Up</h2>

                {!otpSent ? (
                    <div className="mb-4">
                        <Input inputType="number" label="Mobile number" placeholder="Enter Mobile Number" value={mobileNumber} onChange={setMobileNumber} />
                        <div className="flex items-center justify-center mt-4">
                            <Button label="Send OTP" onClick={handleSendOtp} />
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="mb-4">
                            <Input inputType="number" label="Mobile number" placeholder="Enter Mobile Number" value={mobileNumber} onChange={setMobileNumber} />
                        </div>
                        <div className="mb-4">
                            <Input label="OTP" inputType="number" placeholder="Enter OTP" value={otp} onChange={setOtp} />
                        </div>
                        <div className="flex items-center justify-center">
                            <Button label="Sign Up" onClick={handleSignUp} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default SignUp;
