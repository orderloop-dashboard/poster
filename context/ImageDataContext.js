"use client";
// context/ImageDataContext.js
import { createContext, useContext, useState } from "react";

const ImageDataContext = createContext();

export function ImageDataProvider({ children }) {
    const [imageData, setImageData] = useState(null);

    return <ImageDataContext.Provider value={{ imageData, setImageData }}>{children}</ImageDataContext.Provider>;
}

export function useImageData() {
    return useContext(ImageDataContext);
}
