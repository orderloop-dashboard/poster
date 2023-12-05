"use client";

import React, { useState } from "react";
import "./styles.css";
import LeftIcon from "../../../../assets/text-align-left-icon.svg";
import RightIcon from "../../../../assets/text-align-right-icon.svg";
import MiddleIcon from "../../../../assets/text-align-center-icon.svg";

export default function TextSection(props) {
    const { setTextData, textData, edittingTextId } = props;

    const [activeFontFamily, setActiveFontFamily] = useState("Open Sans");

    const handleSliderChange = (value) => {
        const formattedValue = parseInt(value, 10);

        setTextData((prevState) => {
            return prevState.map((el, index) => {
                if (index === edittingTextId) {
                    return { ...el, fontSize: formattedValue };
                }
            });
        });
    };

    const handleChangeFontFamily = (fontFamily) => {
        setActiveFontFamily(fontFamily);

        setTextData((prevState) => {
            return prevState.map((el, index) => {
                if (index === edittingTextId) {
                    return { ...el, fontFamily };
                }
            });
        });
    };

    const colorCode = [
        "#e6194b",
        "#3cb44b",
        "#ffe119",
        "#4363d8",
        "#f58231",
        "#911eb4",
        "#46f0f0",
        "#f032e6",
        "#bcf60c",
        "#fabebe",
        "#008080",
        "#e6beff",
        "#9a6324",
        "#fffac8",
        "#800000",
        "#aaffc3",
        "#808000",
        "#ffd8b1",
        "#000075",
        "#808080",
        "#ffffff",
        "#000000",
    ];

    const handleClickColor = (color) => {
        setTextData((prevState) => {
            return prevState.map((el, index) => {
                if (index === edittingTextId) {
                    return { ...el, color };
                }
            });
        });
    };

    const [activeButton, setActiveButton] = useState([]);

    const handleStyle = (value) => {
        let fontStyle;

        fontStyle = activeButton.includes(value) ? activeButton.filter((el) => el !== value) : [...activeButton, value];

        setActiveButton(fontStyle);

        setTextData((prevState) => {
            return prevState.map((el, index) => {
                if (index === edittingTextId) {
                    return { ...el, fontStyle };
                }
            });
        });
    };

    const handleChangeInput = (text) => {
        setTextData((prevState) => {
            return prevState.map((el, index) => {
                if (index === edittingTextId) {
                    return { ...el, text };
                }
            });
        });
    };

    const handleTextStyle = (value) => {
        const textAlignment = ["text-left", "text-center", "text-right"];

        let fontStyle;

        if (activeButton.includes(value)) {
            fontStyle = activeButton.filter((el) => el !== value);
        } else {
            const removedAlignmentItem = activeButton.filter((el) => !textAlignment.includes(el));

            fontStyle = [...removedAlignmentItem, value];
        }

        setActiveButton(fontStyle);

        setTextData((prevState) => {
            return prevState.map((el, index) => {
                if (index === edittingTextId) {
                    return { ...el, fontStyle };
                }
            });
        });
    };

    const handleFontCase = (value) => {
        const cases = ["uppercase", "lowercase", "capitalize"];

        let fontStyle;

        if (activeButton.includes(value)) {
            fontStyle = activeButton.filter((el) => el !== value);
        } else {
            const removeCase = activeButton.filter((el) => !cases.includes(el));

            fontStyle = [...removeCase, value];
        }

        setActiveButton(fontStyle);

        setTextData((prevState) => {
            return prevState.map((el, index) => {
                if (index === edittingTextId) {
                    return { ...el, fontStyle };
                }
            });
        });
    };

    return (
        <>
            <textarea
                type="text"
                name="text"
                className="border-b border-neutral-300 w-full px-4 rounded-lg mb-2"
                value={textData[edittingTextId].text}
                onChange={(e) => handleChangeInput(e.target.value)}
                placeholder="Type here..."
            />

            <div className="text-neutral-300">Font size</div>

            <input type="range" min="12" max="36" step="1" value={textData[edittingTextId].fontSize} onChange={(e) => handleSliderChange(e.target.value)} className="w-full" />

            <div className="overflow-auto flex flex-row w-screen">
                {colorCode.map((el, index) => (
                    <div className="w-8 h-8 rounded-full flex-none mx-2" style={{ backgroundColor: el }} key={index} onClick={() => handleClickColor(el)} />
                ))}
            </div>

            <div className="flex flex-row my-2">
                <div className="w-1/2">
                    {/* <FontPicker
                        apiKey="AIzaSyAq1H72SVivt8f71tZZu_Rd-syDiHjgKak"
                        activeFontFamily={activeFontFamily}
                        onChange={(nextFont) => handleChangeFontFamily(nextFont.family)}
                    /> */}
                </div>
            </div>

            <div className="overflow-auto flex flex-row w-screen">
                <FontStyleButton label="B" handleClick={() => handleStyle("font-bold")} isActive={activeButton.includes("font-bold")} styles="font-bold" />
                <FontStyleButton label="I" handleClick={() => handleStyle("italic")} isActive={activeButton.includes("italic")} styles="italic" />
                <FontStyleButton label="U" handleClick={() => handleStyle("underline")} isActive={activeButton.includes("underline")} styles="underline" />
                <FontStyleButton label={<LeftIcon width="20" />} handleClick={() => handleTextStyle("text-left")} isActive={activeButton.includes("text-left")} />
                <FontStyleButton label={<MiddleIcon width="20" />} handleClick={() => handleTextStyle("text-center")} isActive={activeButton.includes("text-center")} />
                <FontStyleButton label={<RightIcon width="20" />} handleClick={() => handleTextStyle("text-right")} isActive={activeButton.includes("text-right")} />
                <FontStyleButton label="AA" handleClick={() => handleFontCase("uppercase")} isActive={activeButton.includes("uppercase")} />
                <FontStyleButton label="aa" handleClick={() => handleFontCase("lowercase")} isActive={activeButton.includes("lowercase")} />
                <FontStyleButton label="Aa" handleClick={() => handleFontCase("capitalize")} isActive={activeButton.includes("capitalize")} />
            </div>

            {/* <button
                className={`p-2 border rounded-xl font-bold ${activeButton.includes("font-bold") ? "bg-neutral-500" : "bg-neutral-200"}`}
                onClick={() => handleStyle("font-bold")}
            >
                B
            </button>
            <button className={`p-2 border rounded-xl mx-2 italic ${activeButton.includes("italic") ? "bg-neutral-500" : "bg-neutral-200"}`} onClick={() => handleStyle("italic")}>
                I
            </button>
            <button
                className={`p-2 border rounded-xl underline ${activeButton.includes("underline") ? "bg-neutral-500" : "bg-neutral-200"}`}
                onClick={() => handleStyle("underline")}
            >
                U
            </button>

            <button className="py-2 pl-4 pr-2 border bg-neutral-200 rounded-xl" onClick={() => handleTextStyle("text-left")}>
                <LeftIcon width="20" />
            </button>

            <button className="py-2 pl-4 pr-2 border bg-neutral-200 rounded-xl mx-2" onClick={() => handleTextStyle("text-center")}>
                <MiddleIcon width="20" />
            </button>

            <button className="py-2 pl-4 pr-2 border bg-neutral-200 rounded-xl" onClick={() => handleTextStyle("text-right")}>
                <RightIcon width="20" />
            </button>

            <button className="p-2 border bg-neutral-200 rounded-xl" onClick={() => handleFontCase("uppercase")}>
                AA
            </button>
            <button className="p-2 border bg-neutral-200 rounded-xl mx-2" onClick={() => handleFontCase("lowercase")}>
                Aa
            </button>
            <button className="p-2 border bg-neutral-200 rounded-xl" onClick={() => handleFontCase("capitalize")}>
                aa
            </button> */}
        </>
    );
}

const FontStyleButton = (props) => {
    const { label, handleClick, isActive, styles } = props;

    return (
        <>
            <button
                className={`p-2 border rounded-xl flex-none w-[56px] mx-2 items-center justify-center ${styles} ${isActive ? "bg-neutral-500" : "bg-neutral-200"}`}
                onClick={handleClick}
            >
                {label}
            </button>
        </>
    );
};
