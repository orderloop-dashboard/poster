"use client";

import { axiosInstance } from "@/APIHelper/axios";
import { useImageData } from "@/context/ImageDataContext";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
    const { category } = useParams();
    const decodedCategory = decodeURIComponent(category);

    const [posters, setPosters] = useState([]);
    const [filteredPosters, setFilteredPosters] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [activeSubcategory, setActiveSubcategory] = useState("");

    const fetchPoster = async () => {
        try {
            const response = await axiosInstance.get(`/posters/${decodedCategory}`);
            const postersData = response?.data;
            setPosters(postersData);
            extractSubcategories(postersData);
        } catch (error) {
            console.log("error : ", error);
        }
    };

    const extractSubcategories = (posters) => {
        const subcategorySet = new Set();
        posters.forEach((poster) => {
            if (poster.subcategory) {
                poster.subcategory.forEach((subcat) => subcategorySet.add(subcat));
            }
        });
        setSubcategories(Array.from(subcategorySet));
    };

    useEffect(() => {
        fetchPoster();
    }, []);

    useEffect(() => {
        if (activeSubcategory) {
            setFilteredPosters(posters.filter((poster) => poster.subcategory.includes(activeSubcategory)));
        } else {
            setFilteredPosters(posters);
        }
    }, [activeSubcategory, posters]);

    const { setImageData } = useImageData();

    const handleClickImage = (image) => {
        setImageData({ allImage: filteredPosters, selectedImage: image });
    };

    return (
        <div className="p-4">
            <div className="flex flex-wrap gap-4 mb-4">
                <button className={`px-4 py-2 rounded ${!activeSubcategory ? "bg-gray-300" : "bg-gray-100"}`} onClick={() => setActiveSubcategory("")}>
                    All
                </button>
                {subcategories.map((subcat, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 rounded ${activeSubcategory === subcat ? "bg-gray-300" : "bg-gray-100"}`}
                        onClick={() => setActiveSubcategory(subcat)}
                    >
                        {subcat}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredPosters?.map((el, index) => (
                    <Link href={`/image-selection/${el._id}`} className="border p-2 rounded" key={index} onClick={() => handleClickImage(el)}>
                        <Image src={el.url} width={200} height={200} alt={el.name} className="object-cover w-full h-full" />
                    </Link>
                ))}
            </div>
        </div>
    );
}
