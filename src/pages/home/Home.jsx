import "./home.scss";
import React from "react";
import Header from "../../components/header/Header";
import Gallery from "../../components/gallery/Gallery";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <div class="wrapper">
        <React.Fragment>
                <Header hidden bannerImg bannerTitle="generic" />
                <main className="main">
                    <Gallery />
                </main>
                <Footer />
        </React.Fragment>
        </div>
    );
};

export default Home;