import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import BannerImg from "../../assets/banner-bkg.png";
import Footer from "../../components/footer/Footer";
import "./home.scss";

const Home = () => {
    return (
        
        <React.Fragment>
        <Header />
        <Banner imageSrc={BannerImg} title="Chez vous, partout et ailleurs" />

        <Footer />
        </React.Fragment>
    );
};

export default Home;