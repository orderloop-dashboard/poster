"use client";

import React from "react";

export default function Page() {
    const handleClickDownload = () => {
        const dataUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABUYAAAVGCAYAAABSQWFhAAAAAXNSR0IA.....";
        window.handleDownload(dataUrl);
    };

    return (
        <>
            <button onClick={handleClickDownload}>Click me</button>
        </>
    );
}
