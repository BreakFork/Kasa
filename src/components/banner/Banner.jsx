import React from "react";
import "./banner.scss";

const Banner = ({imageSrc, title}) => {
    return (
        <div className="banner">
            <img className="banner__img" src={imageSrc} alt="" />
            <div className="banner__title">
                {title}                
            </div>
        </div>
    );
};

export default Banner