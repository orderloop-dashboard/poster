import React from "react";
import FramIcon from "../../../assets/frame-icon.svg";
import TextIcon from "../../../assets/text-icon.svg";
import MediaIcon from "../../../assets/image-icon.svg";
import BackgroundIcon from "../../../assets/background-icon.svg";
import StickerIcon from "../../../assets/sticker-icon.svg";
import BrandIcon from "../../../assets/briefcase-icon.svg";

const Footer = (props) => {
    const { openSection, toggleSection } = props;

    const sections = [
        { id: "frame", label: "Frame", icon: <FramIcon height="24" width="24" /> },
        { id: "text", label: "Text", icon: <TextIcon height="24" width="24" /> },
        { id: "media", label: "Media", icon: <MediaIcon height="24" width="24" /> },
        { id: "background", label: "Background", icon: <BackgroundIcon height="24" width="24" /> },
        { id: "sticker", label: "Sticker", icon: <StickerIcon height="24" width="24" /> },
        { id: "brand", label: "Brand kit", icon: <BrandIcon height="24" width="24" /> },
    ];

    return (
        <div className="w-full px-2 fixed h-[60px] bg-gradient-to-r from-blue-200 to-cyan-200 flex items-center bottom-0 overflow-x-auto">
            {sections.map((section) => (
                <div key={section.id} className="w-[100px] flex-col flex items-center" onClick={() => toggleSection(section.id)}>
                    {section.icon}
                    <span>{section.label}</span>
                </div>
            ))}
        </div>
    );
};

export default Footer;
