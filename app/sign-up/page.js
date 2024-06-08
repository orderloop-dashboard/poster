import Button from "@/components/Button/Button";
import Link from "next/link";
import React from "react";

const SignUp = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-200 via-pink-200 to-orange-200 relative">
            <div className="absolute top-14 left-6">
                <Link href="/login" className="bg-transparent border-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </Link>
            </div>

            <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg w-80 mt-12">
                <h2 className="text-2xl font-bold mb-2 text-center">Sign Up</h2>
                <p className="text-center text-gray-600 mb-8">Create an account to continue!</p>
                <form>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Lois"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Becket"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Loisbecket@gmail.com"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="18/03/2024"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="tel"
                            placeholder="(454) 726-0592"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4 relative">
                        <input
                            type="password"
                            placeholder="********"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                            <svg className="h-5 w-5 text-gray-400" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0A9 9 0 1112 3a9 9 0 0112 9z" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Button label="Register" />
                    </div>

                    <div className="mt-4 text-center">
                        <Link href="/login" className="text-blue-500 hover:text-blue-800">
                            Already have an account? Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
