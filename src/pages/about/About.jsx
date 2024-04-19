import React from "react";
import Header from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import BannerImg from "../../assets/about.png";
import Footer from "../../components/footer/Footer";
import "./about.scss";

const About = () => {
    return (
        <React.Fragment>
            <header className="header">
                <Header />
                <Banner imageSrc={BannerImg} title="" />
            </header>
            <main>

            </main>
            <Footer />
        </React.Fragment>
       
    );
};

export default About;