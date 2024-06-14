// src/services/authService.js

import axiosInstance from "@/APIHelper/axios";

export const register = async (userData) => {
    const response = await axiosInstance.post("/auth/register", userData);
    return response.data;
};

export const login = async (userData) => {
    const response = await axiosInstance.post("/auth/login", userData);
    return response.data;
};

export const forgotPassword = async (email) => {
    const response = await axiosInstance.post("/auth/forgot-password", { email });
    return response.data;
};

export const resetPassword = async (resetToken, password) => {
    const response = await axiosInstance.put(`/auth/reset-password/${resetToken}`, { password });
    return response.data;
};
