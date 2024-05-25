import Link from "next/link";

export const TrayItem = (props) => {
    const { label, icon, isActive, handleIconClick, link } = props;

    return (
        <>
            <Link className="flex justify-center items-center flex-col" onClick={() => handleIconClick(label)} href={`/${link}`}>
                <div className={`w-14 py-2 flex justify-center -mb-2`}>{icon}</div>
                <span className={`text-xs font-medium ${isActive ? "text-[#414042]" : "text-[#BCBEC0]"}`}>{label.charAt(0).toUpperCase() + label.slice(1)}</span>
            </Link>
        </>
    );
};
