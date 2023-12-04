"use client";

import { useState } from "react";
import HomeIcon from "../../assets/home-icon.svg";
import ProfileIcon from "../../assets/profile.svg";
import MenuIcon from "../../assets/menu.svg";
import CustomizeIcon from "../../assets/CustomizeIcon.svg";
import Link from "next/link";
import { TrayItem } from "./TrayItem";

const BottomNav = () => {
    const [activeTab, setActiveTab] = useState("Home");

    const handleIconClick = (iconName) => {
        setActiveTab(iconName);
    };

    return (
        <div className={`w-full px-10 fixed h-[60px] bg-gradient-to-r from-blue-200 to-cyan-200 flex items-center bottom-0 justify-between`}>
            <TrayItem link="home" label="home" icon={<HomeIcon />} isActive={activeTab === "home"} handleIconClick={handleIconClick} />

            <TrayItem link="profile" label="profile" icon={<ProfileIcon />} isActive={activeTab === "profile"} handleIconClick={handleIconClick} />

            <TrayItem link="customize" label="customize" icon={<CustomizeIcon />} isActive={activeTab === "customize"} handleIconClick={handleIconClick} />

            <TrayItem link="menu" label="menu" icon={<MenuIcon />} isActive={activeTab === "menu"} handleIconClick={handleIconClick} />
        </div>
    );
};

export default BottomNav;
