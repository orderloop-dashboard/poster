import React from "react";
import ContentLoader from "react-content-loader";

export function SingleLoader(props) {
    const { width, height, className } = props;

    return (
        <>
            <ContentLoader speed={1} width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={className} backgroundColor="#DDDDDF" foregroundColor="#ecebeb">
                <rect x="0" y="0" rx="8" ry="8" width={width} height={height} />
            </ContentLoader>
        </>
    );
}
