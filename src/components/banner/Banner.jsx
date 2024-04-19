import React from "react";
import "./banner.scss";

const Banner = ({imageSrc, title}) => {
    return (
        <section className="banner">
            <img className="banner__img" src={imageSrc} alt="" />
            <span className="banner__title">
                {title}                
            </span>
        </section>
    );
};

export default Banner