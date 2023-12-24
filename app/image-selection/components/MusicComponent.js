import React, { useState, useRef } from "react";
import PlayIcon from "@/assets/play-icon.svg";
import PauseIcon from "@/assets/pause-icon.svg";

export default function MusicComponent() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const handleClickPlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            <div className="flex flex-row justify-between items-center px-2 py-3 border-neutral-500 border rounded-xl my-2">
                <div className="flex flex-row">
                    <div className="h-12 w-12 bg-neutral-300 rounded-xl flex justify-center items-center" onClick={handleClickPlay}>
                        {!isPlaying ? <PlayIcon height={20} width={20} /> : <PauseIcon height={20} width={20} />}
                    </div>

                    <div className="flex flex-col ml-3">
                        <span className="text-xl font-medium">This is audio file name</span>

                        <span className="text-neutral-400 text-xs">Music duration</span>
                    </div>
                </div>

                <span className="bg-neutral-200 rounded-lg px-3 py-1">Select</span>
            </div>

            <audio ref={audioRef} src="/assets/music/flute.mp3" />
        </>
    );
}
