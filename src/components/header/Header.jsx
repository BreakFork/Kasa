import { useRef }  from "react";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
// import BannerImgAboutPage from "../../assets/about.png";
// import BannerGenericImg from "../../assets/banner-bkg.png";

/**
 * HEADER COMPONENT
 * This component displays Navbar and Banner Components.
 * Sets the Banner component.
 * 
 * @param {bannerIsVisible} bool - If no value, display the Banner component | void String {""} or any, hides the Banner, return : null.
 * @param {bannerImg} string 
 * @param {bannerTitle} string - If no value or any, return : null | the value : "generic" (String) return : title array[1] 
 * @returns 
 */

const Header = ({ bannerIsVisible, bannerImg, bannerTitle }) => {
    
    const bannerGenericTitle = useRef(null);
    const title = [ null, "Chez vous, partout et ailleurs" ]; 

    bannerTitle !== "generic" ? bannerGenericTitle.current = title[0] : bannerGenericTitle.current = title[1]
    
    return (
        <header className="header">
            <Navbar />
            {bannerIsVisible ? <Banner imageSrc={bannerImg} title={bannerGenericTitle.current} /> : null } 
        </header>
    );
}

export default Header;