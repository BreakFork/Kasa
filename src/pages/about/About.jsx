import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import BannerImg from "../../assets/about.png";
import Footer from "../../components/footer/Footer";
import "./about.scss";

const About = () => {
    return (
        <React.Fragment>
        <Header />
        <Banner imageSrc={BannerImg} title="" />
        <Footer />
        </React.Fragment>
       
    );
};

export default About;