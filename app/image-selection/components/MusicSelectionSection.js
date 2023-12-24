import React from "react";
import CancelIcon from "@/assets/cancel-icon.svg";
import UploadIcon from "@/assets/upload-icon.svg";
import SearchIcon from "@/assets/search.svg";
import MusicComponent from "./MusicComponent";

export default function MusicSelectionSection(props) {
    const { handleClickClose } = props;

    return (
        <>
            <div className="flex flex-row w-full justify-between items-center p-3">
                <div className="flex flex-row items-center">
                    <span className="mr-2 h-8 flex justify-center pt-1 w-8 rounded-full bg-white" onClick={handleClickClose}>
                        <CancelIcon className="-mt-0.5" />
                    </span>

                    <span>Select Music</span>
                </div>

                <div className="flex flex-row items-center">
                    <UploadIcon height={20} width={20} />
                    <span className="ml-4">Audio file</span>
                </div>
            </div>

            <div className="relative h-12 mx-4 mt-1">
                <input type="text" className="h-full rounded-xl absolute top-0 -z-10 w-full" />

                <span className="top-2.5 absolute left-2">
                    <SearchIcon height="20" className="" />
                </span>
            </div>

            <div className="px-4 mt-4">
                <MusicComponent />
                <MusicComponent />
                <MusicComponent />
                <MusicComponent />
            </div>
        </>
    );
}
