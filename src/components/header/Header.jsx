import { useRef }  from "react";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import BannerImgAboutPage from "../../assets/about.png";
import BannerGenericImg from "../../assets/banner-bkg.png";

/**
 * HEADER COMPONENT
 * This component displays Navbar and Banner Components.
 * Sets the Banner component.
 * 
 * @param {hidden} bool - If no value, display the Banner component | void String {""} or any, hides the Banner, return : null.
 * @param {bannerImg} string - void {""} or any return : BannerGenericImg | the value : "aboutPage" (String) return : BannerImgAboutPage.
 * @param {bannerTitle} string - If no value or any, return : null | the value : "generic" (String) return : title array[1]
 * @returns 
 */

function Header({ hidden, bannerImg, bannerTitle }) {

    const bannerImgSrc = useRef(null);
    const bannerGenericTitle = useRef(null);

    const img = [BannerGenericImg, BannerImgAboutPage];
    bannerImg !== "aboutPage" ? bannerImgSrc.current = img[0] : bannerImgSrc.current = img[1]; //console.log(img)

    const title = [null, "Chez vous, partout et ailleurs"];
    bannerTitle !== "generic" ? bannerGenericTitle.current = title[0] : bannerGenericTitle.current = title[1];

    return (
        <header className="header">
            <Navbar />
            { hidden ? <Banner imageSrc={bannerImgSrc.current} title={bannerGenericTitle.current} /> : null } 
        </header>
    );
}

export default Header;