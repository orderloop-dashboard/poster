import Link from "next/link";

export const TrayItem = (props) => {
    const { label, icon, isActive, handleIconClick, link } = props;

    return (
        <>
            <Link className="flex justify-center items-center flex-col" onClick={() => handleIconClick(label)} href={`/${link}`}>
                <div
                    className={`w-14 py-2 flex justify-center -mb-2 ${isActive && "bg-gradient-to-r from-violet-200 to-pink-200 rounded-full -translate-y-[15px]"}`}
                    style={{ transform: isActive && "translateY(-15px)", transition: "transform 0.2s ease-in-out" }}
                >
                    {icon}
                </div>
                <span className="text-xs">{label.charAt(0).toUpperCase() + label.slice(1)}</span>
            </Link>
        </>
    );
};
