// import React, { useRef, useState, useEffect } from "react";

// const ClickOutsideComponent = () => {
//     const divRef = useRef(null);
//     const [isClickedOutside, setIsClickedOutside] = useState(false);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (divRef.current && !divRef.current.contains(event.target)) {
//                 setIsClickedOutside(true);
//             } else {
//                 setIsClickedOutside(false);
//             }
//         };

//         // Attach the event listener to the document
//         document.addEventListener("click", handleClickOutside);

//         // Cleanup the event listener on component unmount
//         return () => {
//             document.removeEventListener("click", handleClickOutside);
//         };
//     }, []);

//     return (
//         <div ref={divRef}>
//             <p>Inside the div</p>
//             {isClickedOutside && <p>Clicked outside the div</p>}
//         </div>
//     );
// };

// export default ClickOutsideComponent;

// import React, { useRef } from "react";
// import demoImage from "../../assets/demo-patter-image.jpeg";
// import logo from "../../assets/demo-patter-image.jpeg";
// import Image from "next/image";
// import { toPng } from "html-to-image";

// const COnvertHTMLtoJpgs = () => {
//     const name = "Your Name";
//     const company = "Your Company";
//     const mobileNumber = "123-456-7890";
//     const email = "your.email@example.com";

//     const elementRef = useRef(null);

//     const htmlToImageConvert = () => {
//         toPng(elementRef.current, { cacheBust: false })
//             .then((dataUrl) => {
//                 const link = document.createElement("a");
//                 link.download = "my-image-name.png";
//                 link.href = dataUrl;
//                 link.click();
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

//     return (
//         <>
//             <div className="" ref={elementRef}>
//                 <div className="relative h-[500px]">
//                     <Image width={500} height={500} src={demoImage} alt="Selectedd" className="w-full h-full object-cover" />
//                     <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-gray-900 to-gray-800 p-4">
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center space-x-4">
//                                 <Image height={12} width={12} src={logo} alt="Logo" className="h-12 w-12 rounded-full" />
//                                 <div className="text-white">
//                                     <div className="text-lg font-semibold">{name}</div>
//                                     <div>{company}</div>
//                                 </div>
//                             </div>
//                             <div className="text-white space-x-4">
//                                 <div>{mobileNumber}</div>
//                                 <div>{email}</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <button onClick={htmlToImageConvert}>Capture Screenshot</button>
//         </>
//     );
// };

// export default BottomFrame;
