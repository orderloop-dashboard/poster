"use client";

import { useState } from "react";
import HomeIcon from "../../assets/home-icon.svg";
import ProfileIcon from "../../assets/profile.svg";
import MenuIcon from "../../assets/menu.svg";
import CustomizeIcon from "../../assets/CustomizeIcon.svg";
import Link from "next/link";
import { TrayItem } from "./TrayItem";
import { usePathname } from "next/navigation";

const BottomNav = () => {
    const page = usePathname();

    const [activeTab, setActiveTab] = useState("Home");

    const path = page;
    const wordsBeforeSecondSlash = path.split("/").slice(1, 3).join("/");

    if (
        page === "/" ||
        page === "/choose-industry" ||
        page === "/fill-details" ||
        page === "/my-business" ||
        page === "/edit-business-details" ||
        page === "/available-plan" ||
        page === "/profile" ||
        page.startsWith("/edit-profile") ||
        page.startsWith("/add-business-details/") ||
        page.startsWith("/image-selection/")
    ) {
        return;
    }

    const handleIconClick = (iconName) => {
        setActiveTab(iconName);
    };

    return (
        <div className={`w-full px-5 pb-2 fixed h-[60px] bg-white flex items-center bottom-0 justify-between`}>
            <TrayItem
                link="home"
                label="home"
                icon={<HomeIcon fill="#000" stroke={activeTab === "home" ? "#414042" : "#BCBEC0"} height={24} width={24} />}
                isActive={activeTab === "home"}
                handleIconClick={handleIconClick}
            />

            <TrayItem
                link="customize/1"
                label="Custom"
                icon={<CustomizeIcon stroke={activeTab === "Custom" ? "#414042" : "#BCBEC0"} height={24} width={24} />}
                isActive={activeTab === "Custom"}
                handleIconClick={handleIconClick}
            />

            <TrayItem
                link="profile"
                label="profile"
                icon={<ProfileIcon stroke={activeTab === "profile" ? "#414042" : "#BCBEC0"} height={24} width={24} />}
                isActive={activeTab === "profile"}
                handleIconClick={handleIconClick}
            />

            <TrayItem
                link="menu"
                label="menu"
                icon={<MenuIcon stroke={activeTab === "menu" ? "#414042" : "#BCBEC0"} height={24} width={24} />}
                isActive={activeTab === "menu"}
                handleIconClick={handleIconClick}
            />
        </div>
    );
};

export default BottomNav;
