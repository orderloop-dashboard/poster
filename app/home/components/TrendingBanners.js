"use client";

// import image from "../../../assets/demo-poster-header.jpg";
// import Image from "next/image";
// import { useWindowSize } from "@uidotdev/usehooks";

// const Home = () => {
//     const images = [image, image, image, image, image];

//     const width = useWindowSize().width;

//     return (
//         <div className="mt-5">
//             <div className="flex flex-row overflow-auto">
//                 {images.map((el, index) => (
//                     <div style={{ width: width - 50 }} className="flex-none mx-5" key={index}>
//                         <Image src={el} alt="2" height={"auto"} width={"auto"} className="rounded-xl" />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Home;

// import React, { useState, useEffect } from 'react';
// import image from '../../../assets/demo-poster-header.jpg';
// import Image from 'next/image';
// import { useWindowSize } from '@uidotdev/usehooks';

// const Home = () => {
//   const images = [image, image, image, image, image];
//   const width = useWindowSize().width;

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // Move to the next image
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000); // Change the interval duration as needed (5000ms = 5 seconds)

//     return () => {
//       // Clean up the interval when the component unmounts
//       clearInterval(intervalId);
//     };
//   }, [images.length]);

//   return (
//     <div className="mt-5">
//       <div className="flex flex-row overflow-hidden">
//         {images.map((el, index) => (
//           <div
//             key={index}
//             style={{
//               width,
//               transform: `translateX(${(index - currentIndex) * width}px)`,
//               transition: 'transform 0.5s ease-in-out',
//             }}
//             className="flex-none"
//           >
//             <Image src={el} alt="2" height={'auto'} width={'auto'} className="rounded-xl" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../../../assets/demo-poster-header.jpg";
import Image from "next/image";
import "./styles.css";
import Link from "next/link";

const Carousel = () => {
    const images = [image, image, image, image, image];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, [images.length]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        beforeChange: (current, next) => setCurrentIndex(next),
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: "10%",
    };

    return (
        <div className="mt-5">
            <Slider {...settings} className="slick-dots-custom">
                {images.map((el, index) => (
                    <Link href={`/image-selection/${index}`} key={index} className="flex justify-center px-4">
                        <Image src={el} alt={`Slide ${index + 1}`} className="max-h-96 rounded-xl" />
                    </Link>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
