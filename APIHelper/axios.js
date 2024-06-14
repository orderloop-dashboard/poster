import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.BASE_API || "http://localhost:5000/api", // Default to localhost:5000/api if BASE_API is not set
    headers: {
        "Content-Type": "application/json",
    },
});

const axiosLocalInstance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
    },
});

export { axiosInstance, axiosLocalInstance };
