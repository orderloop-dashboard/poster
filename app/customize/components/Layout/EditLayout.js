"use client";
import React, { useState } from "react";
import poster from "../../../../assets/demo-patter-image.jpeg";
import model from "../../../../assets/model.jpeg";
import Image from "next/image";
import InteractiveElement from "./components/InteractiveElement";

export default function EditLayout(props) {
    const { toggleSection, textData } = props;

    const [deletedItem, setDeletedItem] = useState([]);

    const handleClickDelete = (id) => {
        setDeletedItem((prevState) => [...prevState, id]);
    };

    console.log("textData==>", textData);

    return (
        <>
            <div className="w-[250px] h-[312.5px] relative">
                <Image src={poster} width={250} alt="logo" />

                <div className="absolute bottom-10 left-5">
                    <InteractiveElement handleClickDelete={() => handleClickDelete(0)} toggleSection={() => toggleSection("media")}>
                        <div className="w-20 h-20 rounded-full bg-neutral-500" />
                    </InteractiveElement>
                </div>

                <div className="absolute left-3 top-3">
                    <InteractiveElement handleClickDelete={() => handleClickDelete(1)} toggleSection={() => toggleSection("text", 0)}>
                        <div
                            className={textData[0].fontStyle.join(" ")}
                            style={{ fontSize: `${textData[0].fontSize}px`, color: textData[0].color, fontFamily: textData[0].fontFamily, whiteSpace: "pre-wrap" }}
                        >
                            {textData[0].text}
                        </div>
                    </InteractiveElement>
                </div>

                <div className="right-0 top-2 absolute">
                    <InteractiveElement handleClickDelete={() => handleClickDelete(2)} toggleSection={() => toggleSection("media")}>
                        <Image src={model} width={50} alt="model" />
                    </InteractiveElement>
                </div>
            </div>
        </>
    );
}
