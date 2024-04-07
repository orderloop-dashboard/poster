// import React from "react";
import Link from "next/link";
// import Image from "next/image";

// export default function SubCategorySection(props) {
//     const { data } = props;

//     const data = [
//         {
//             title: "Business",
//             data: [
//                 {
//                     _id: "6612319482fbbfcf0c4cf6d8",
//                     name: "Quote_Business Motivation_leadership2.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468365/te4lou4yhhwggf9blbob.jpg",
//                 },
//                 {
//                     _id: "6612319582fbbfcf0c4cf6d9",
//                     name: "Quote_Business Motivation_succesfull3.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468367/fgfdtlmyabyzeym3n2yx.jpg",
//                 },
//                 {
//                     _id: "6612319682fbbfcf0c4cf6da",
//                     name: "Quote_Business Motivation_succesfull1.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468369/xb4hpjjuu0ievc26p3o1.jpg",
//                 },
//                 {
//                     _id: "6612319682fbbfcf0c4cf6db",
//                     name: "Quote_Business Motivation_successful4.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468369/unv1jtju9akcl91mx9jl.jpg",
//                 },
//                 {
//                     _id: "6612319682fbbfcf0c4cf6dc",
//                     name: "Quote_Business Motivation_successful3.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468368/vletst2fuaso4t9q3cqk.jpg",
//                 },
//                 {
//                     _id: "6612319782fbbfcf0c4cf6dd",
//                     name: "Quote_Business Motivation_Entrepreneur3.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468370/xkcuwszglucsuavgy6lv.jpg",
//                 },
//                 {
//                     _id: "6612319882fbbfcf0c4cf6de",
//                     name: "Quote_Business Motivation_leadership3.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468373/o05hgl5pxl3rshzipxmz.jpg",
//                 },
//                 {
//                     _id: "6612319982fbbfcf0c4cf6df",
//                     name: "Quote_Business Motivation_successful2.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468375/hwkf23a8w9x4d4q1yetc.jpg",
//                 },
//                 {
//                     _id: "6612319982fbbfcf0c4cf6e0",
//                     name: "Quote_Business Motivation_Entrepreneur2.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468375/sjoxjpmjtz1ftnfeawyk.jpg",
//                 },
//                 {
//                     _id: "6612319982fbbfcf0c4cf6e1",
//                     name: "Quote_Business Motivation_Entrepreneur1.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468376/rnvhsk8zrykhnsdxr9jc.jpg",
//                 },
//                 {
//                     _id: "6612319982fbbfcf0c4cf6e2",
//                     name: "Quote_Business Motivation_successful1.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468376/r06nskh8smzxqrw1vmyh.jpg",
//                 },
//                 {
//                     _id: "6612319a82fbbfcf0c4cf6e3",
//                     name: "Quote_Business Motivation_leadership1.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468377/yiszwleqxm7htf7ofeqj.jpg",
//                 },
//             ],
//         },
//         {
//             title: "Motivation",
//             data: [
//                 {
//                     _id: "6612319482fbbfcf0c4cf6d8",
//                     name: "Quote_Business Motivation_leadership2.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468365/te4lou4yhhwggf9blbob.jpg",
//                 },
//                 {
//                     _id: "6612319582fbbfcf0c4cf6d9",
//                     name: "Quote_Business Motivation_succesfull3.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468367/fgfdtlmyabyzeym3n2yx.jpg",
//                 },
//                 {
//                     _id: "6612319682fbbfcf0c4cf6da",
//                     name: "Quote_Business Motivation_succesfull1.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468369/xb4hpjjuu0ievc26p3o1.jpg",
//                 },
//                 {
//                     _id: "6612319682fbbfcf0c4cf6db",
//                     name: "Quote_Business Motivation_successful4.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468369/unv1jtju9akcl91mx9jl.jpg",
//                 },
//                 {
//                     _id: "6612319682fbbfcf0c4cf6dc",
//                     name: "Quote_Business Motivation_successful3.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468368/vletst2fuaso4t9q3cqk.jpg",
//                 },
//                 {
//                     _id: "6612319782fbbfcf0c4cf6dd",
//                     name: "Quote_Business Motivation_Entrepreneur3.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468370/xkcuwszglucsuavgy6lv.jpg",
//                 },
//                 {
//                     _id: "6612319882fbbfcf0c4cf6de",
//                     name: "Quote_Business Motivation_leadership3.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468373/o05hgl5pxl3rshzipxmz.jpg",
//                 },
//                 {
//                     _id: "6612319982fbbfcf0c4cf6df",
//                     name: "Quote_Business Motivation_successful2.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468375/hwkf23a8w9x4d4q1yetc.jpg",
//                 },
//                 {
//                     _id: "6612319982fbbfcf0c4cf6e0",
//                     name: "Quote_Business Motivation_Entrepreneur2.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468375/sjoxjpmjtz1ftnfeawyk.jpg",
//                 },
//                 {
//                     _id: "6612319982fbbfcf0c4cf6e1",
//                     name: "Quote_Business Motivation_Entrepreneur1.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468376/rnvhsk8zrykhnsdxr9jc.jpg",
//                 },
//                 {
//                     _id: "6612319982fbbfcf0c4cf6e2",
//                     name: "Quote_Business Motivation_successful1.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468376/r06nskh8smzxqrw1vmyh.jpg",
//                 },
//                 {
//                     _id: "6612319a82fbbfcf0c4cf6e3",
//                     name: "Quote_Business Motivation_leadership1.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468377/yiszwleqxm7htf7ofeqj.jpg",
//                 },
//             ],
//         },
//         {
//             title: "Devotional",
//             data: [
//                 {
//                     _id: "661231df82fbbfcf0c4cf6e4",
//                     name: "Quote_Devotional_Mahadev.jpg",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468439/fpylfq1u8yigzrjrtthy.jpg",
//                 },
//                 {
//                     _id: "661231e182fbbfcf0c4cf6e5",
//                     name: "Quote_Devotional_Khodiyar.png",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468442/v7vw8mfgi7iziwlmsuue.png",
//                 },
//                 {
//                     _id: "661231e982fbbfcf0c4cf6e6",
//                     name: "Quote_Devotional_Ganesh1.png",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468455/h7v5hviubcbtzu2wrymm.png",
//                 },
//                 {
//                     _id: "661231eb82fbbfcf0c4cf6e7",
//                     name: "Quote_Devotional_Ganesh2.png",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468457/h2cnhqsymwaas8zcnizo.png",
//                 },
//                 {
//                     _id: "661231ec82fbbfcf0c4cf6e8",
//                     name: "Quote_Devotional_Krishna.png",
//                     url: "https://res.cloudinary.com/dfmrcxoqs/image/upload/v1712468459/ypwinbml08wnncmehkmi.png",
//                 },
//             ],
//         },
//     ];

//     console.log("data ==> ", JSON.stringify(data));
//     return <div></div>;
// }

import React, { useState } from "react";
import Image from "next/image";

export default function ImageGallery({ data }) {
    const [activeSubcategory, setActiveSubcategory] = useState(data[0]?.title || null);

    const filteredData = activeSubcategory ? data.filter((item) => item.title === activeSubcategory) : data;

    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center mb-4">
                {data.map((item) => (
                    <button
                        key={item.title}
                        onClick={() => setActiveSubcategory(item.title)}
                        className={`mx-2 my-1 px-4 py-2 rounded-md ${activeSubcategory === item.title ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                    >
                        {item.title}
                    </button>
                ))}
            </div>

            <div className="flex flex-row overflow-auto w-full no-scrollbar mb-2">
                {filteredData.map((subcategory, index) =>
                    subcategory.data.map((image) => (
                        <Link href={`/image-selection/${image._id}`} key={image._id} className="first:-ml-3 mx-2 w-full">
                            <Image height={200} width={200} src={image.url} alt={`Image ${index + 1}`} className="mx-4 h-[150px] min-w-[150px] rounded-xl" />
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}
