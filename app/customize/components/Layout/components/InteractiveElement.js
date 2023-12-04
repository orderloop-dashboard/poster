"use client";

import React, { useEffect, useRef, useState } from "react";
import Moveable from "react-moveable";
import "./styles.css";
import DeleteIcon from "../../../../../assets/delete-icon.svg";

export default function InteractiveElement({ children, toggleSection }) {
    const targetRef = useRef(null);

    const [ref, setRef] = useState(null);

    const [isInteractive, setIsInteractive] = useState(false);

    const handleClickTarget = () => {
        setRef(targetRef);
        setIsInteractive(true);
        toggleSection();
    };

    const divRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (divRef.current && !divRef.current.contains(event.target)) {
                setIsInteractive(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="root" ref={divRef}>
            <div className="container">
                <div className="target" ref={ref} onClick={handleClickTarget}>
                    {children}
                </div>

                {isInteractive && (
                    <>
                        <Moveable
                            target={targetRef}
                            draggable={true}
                            startDragRotate={0}
                            scalable={true}
                            // keepRatio={false}
                            rotatable={true}
                            rotationPosition={"top-left"}
                            onRender={(e) => {
                                e.target.style.transform = e.transform;
                            }}
                        />
                    </>
                )}
            </div>
        </div>
    );
}
