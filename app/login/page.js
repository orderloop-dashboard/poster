// "use client";

// import { useForm } from "react-hook-form";
// import Image from "next/image";
// import loginPhoto from "@/assets/login-screen.jpg";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function Page() {
//     const { register, handleSubmit, errors } = useForm();

//     const registerUser = async (data) => {
//         try {
//             const response = await fetch("/api/register", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     username: "x",
//                     email: "x",
//                     password: "x",
//                     mobileNumber: "x",
//                 }),
//             });

//             if (response.ok) {
//                 // Handle successful registration
//                 console.log("User registered successfully");
//             } else {
//                 // Handle registration failure
//                 console.error("Registration failed");
//             }
//         } catch (error) {
//             console.error("Error during registration:", error);
//         }
//     };

//     const router = useRouter();

// //     in Next js and node js create high security login system where following functinoality
// // Login
// // Sign up
// // Forgot password

//     const loginUser = async (data) => {
//         router.push("/choose-industry");

//         try {
//             const response = await fetch("/api/login", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     username: "x",
//                     email: "x",
//                     password: "x",
//                     mobileNumber: "x",
//                 }),
//             });

//             if (response.ok) {
//                 console.log("User registered successfully");
//             } else {
//                 console.error("Registration failed");
//             }
//         } catch (error) {
//             console.error("Error during registration:", error);
//         }
//     };

//     const getOtp = async (data) => {
//         try {
//             const response = await fetch("/api/get-otp", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     username: "x",
//                     email: "x",
//                     password: "x",
//                     mobileNumber: "x",
//                 }),
//             });

//             if (response.ok) {
//                 // Handle successful registration
//                 console.log("User registered successfully");
//             } else {
//                 // Handle registration failure
//                 console.error("Registration failed");
//             }
//         } catch (error) {
//             console.error("Error during registration:", error);
//         }
//     };

//     const [pageState, setPageState] = useState("login");

//     const onSubmit = async (data) => {
//         pageState === "getOtp" && setPageState("register");

//         switch (pageState) {
//             case "login":
//                 loginUser(data);
//                 break;

//             case "getOtp":
//                 getOtp(data);
//                 break;

//             case "registerUser":
//                 registerUser(data);
//                 break;

//             default:
//                 break;
//         }
//     };

//     return (
//         <section className="h-screen flex flex-col md:flex-row justify-center items-center mx-5 md:mx-0">
//             <div className="md:w-1/3 max-w-sm mt-14 mb-20">
//                 <Image src={loginPhoto} alt="Sample" width={200} />
//             </div>

//             <section className="md:w-1/3 max-w-sm md:space-x-16">
//                 <input
//                     className={`text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded remove-arrow ${errors?.email ? "border-red-500" : ""}`}
//                     type="number"
//                     placeholder="Enter Mobile number"
//                     {...register("mobileNumber")}
//                     onWheel={(e) => e.target.blur()}
//                 />

//                 <input
//                     className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
//                     type="password"
//                     placeholder="Enter Password"
//                     {...register("password")}
//                 />

//                 {pageState === "register" && (
//                     <input
//                         className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded remove-arrow mt-5"
//                         type="number"
//                         placeholder="Enter OTP"
//                         {...register("otp")}
//                         onWheel={(e) => e.target.blur()}
//                     />
//                 )}

//                 {pageState === "login" && (
//                     <>
//                         <div className="mt-4 font-semibold text-sm flex justify-end">
//                             <a className="text-blue-600" href="#">
//                                 Forgot Password?
//                             </a>
//                         </div>
//                     </>
//                 )}

//                 <div className="text-center w-full rounded-t-xl pt-14">
//                     <button className="mt-4 py-5 rounded-xl bg-blue-600 px-4 text-white uppercase text-xs tracking-wider w-full" onClick={handleSubmit(onSubmit)}>
//                         {pageState === "login" ? "Login" : pageState === "getOtp" ? "Get OTP" : "Register"}
//                     </button>
//                 </div>

//                 {pageState === "login" && (
//                     <>
//                         <div className="mt-4 font-semibold text-sm text-slate-500 text-center w-full justify-center">
//                             Don&apos;t have an account?
//                             <button className="text-red-600 ml-2" onClick={() => setPageState("getOtp")}>
//                                 Register
//                             </button>
//                         </div>
//                     </>
//                 )}
//             </section>
//         </section>
//     );
// }

import Button from "@/components/Button/Button";
import Link from "next/link";
import React from "react";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-200 via-pink-200 to-orange-200">
            <div className="bg-white p-8 bg-opacity-50 rounded-lg shadow-lg w-80">
                <div className="flex justify-center mb-8">
                    <div className="bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center">
                        <span className="text-white text-lg font-bold">🔒</span>
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Loisbecket@gmail.com"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="********"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6 flex justify-end">
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="flex items-center justify-center">
                        <Button label="Login" />
                    </div>
                    <div className="mt-4 text-center text-gray-500">OR</div>
                    <div className="flex justify-center mt-4">
                        <button className="bg-white border border-gray-300 rounded-full p-2 mx-1">G</button>
                        <button className="bg-white border border-gray-300 rounded-full p-2 mx-1">F</button>
                        <button className="bg-white border border-gray-300 rounded-full p-2 mx-1">A</button>
                        <button className="bg-white border border-gray-300 rounded-full p-2 mx-1">M</button>
                    </div>
                    <div className="mt-4 text-center">
                        <Link href="/sign-up" className="text-blue-500 hover:text-blue-800">
                            {`Don't`} have an account? Sign Up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
