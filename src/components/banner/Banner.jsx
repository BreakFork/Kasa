import React from "react";
import "./banner.scss";

const Banner = ({imageSrc, title}) => {
    return (
        <div className="banner">
            <img className="banner__img" src={imageSrc} alt="" />
            <h1 className="banner__title">
                {title}                
            </h1>
        </div>
    );
};

export default Banner