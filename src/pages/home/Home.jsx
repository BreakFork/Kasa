import "./home.scss";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import BannerImg from "../../assets/banner-bkg.png";
import Gallery from "../../components/gallery/Gallery";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <React.Fragment>
            <div className="wrapper">
                <header className="header">
                    <Navbar />
                    <Banner imageSrc={BannerImg} title="Chez vous, partout et ailleurs" />
                </header>
                <main className="main">
                    <Gallery />
                </main>
                <Footer />
            </div> 
        </React.Fragment>
    );
};

export default Home;