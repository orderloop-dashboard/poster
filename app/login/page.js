"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import loginPhoto from "@/assets/login-screen.jpg";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
    const { register, handleSubmit, errors } = useForm();

    const registerUser = async (data) => {
        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: "x",
                    email: "x",
                    password: "x",
                    mobileNumber: "x",
                }),
            });

            if (response.ok) {
                // Handle successful registration
                console.log("User registered successfully");
            } else {
                // Handle registration failure
                console.error("Registration failed");
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    const router = useRouter();

    const loginUser = async (data) => {
        router.push("/choose-industry");

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: "x",
                    email: "x",
                    password: "x",
                    mobileNumber: "x",
                }),
            });

            if (response.ok) {
                console.log("User registered successfully");
            } else {
                console.error("Registration failed");
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    const getOtp = async (data) => {
        try {
            const response = await fetch("/api/get-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: "x",
                    email: "x",
                    password: "x",
                    mobileNumber: "x",
                }),
            });

            if (response.ok) {
                // Handle successful registration
                console.log("User registered successfully");
            } else {
                // Handle registration failure
                console.error("Registration failed");
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    const [pageState, setPageState] = useState("login");

    const onSubmit = async (data) => {
        pageState === "getOtp" && setPageState("register");

        switch (pageState) {
            case "login":
                loginUser(data);
                break;

            case "getOtp":
                getOtp(data);
                break;

            case "registerUser":
                registerUser(data);
                break;

            default:
                break;
        }
    };

    return (
        <section className="h-screen flex flex-col md:flex-row justify-center items-center mx-5 md:mx-0">
            <div className="md:w-1/3 max-w-sm mt-14 mb-20">
                <Image src={loginPhoto} alt="Sample" width={200} />
            </div>

            <section className="md:w-1/3 max-w-sm md:space-x-16">
                <input
                    className={`text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded remove-arrow ${errors?.email ? "border-red-500" : ""}`}
                    type="number"
                    placeholder="Enter Mobile number"
                    {...register("mobileNumber")}
                    onWheel={(e) => e.target.blur()}
                />

                <input
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                    type="password"
                    placeholder="Enter Password"
                    {...register("password")}
                />

                {pageState === "register" && (
                    <input
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded remove-arrow mt-5"
                        type="number"
                        placeholder="Enter OTP"
                        {...register("otp")}
                        onWheel={(e) => e.target.blur()}
                    />
                )}

                {pageState === "login" && (
                    <>
                        <div className="mt-4 font-semibold text-sm flex justify-end">
                            <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </>
                )}

                <div className="text-center w-full rounded-t-xl pt-14">
                    <button className="mt-4 py-5 rounded-xl bg-blue-600 hover:bg-blue-700 px-4 text-white uppercase text-xs tracking-wider w-full" onClick={handleSubmit(onSubmit)}>
                        {pageState === "login" ? "Login" : pageState === "getOtp" ? "Get OTP" : "Register"}
                    </button>
                </div>

                {pageState === "login" && (
                    <>
                        <div className="mt-4 font-semibold text-sm text-slate-500 text-center w-full justify-center">
                            Don&apos;t have an account?
                            <button className="text-red-600 hover:underline hover:underline-offset-4 ml-2" onClick={() => setPageState("getOtp")}>
                                Register
                            </button>
                        </div>
                    </>
                )}
            </section>
        </section>
    );
}
