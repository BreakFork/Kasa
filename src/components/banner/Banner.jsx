import { useRef } from "react";
import "./banner.scss";

const Banner = ({ imageSrc, title }) => {

    const img = useRef(imageSrc)

    return (
        <section className="banner">
            <img className="banner__img" src={img.current} alt="" />
            <span className="banner__title">{title}</span>
        </section>
    )
};

export default Banner