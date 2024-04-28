import { Fragment } from "react";
import React from "react";
import Header from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import BannerImg from "../../assets/about.png";
import Collapse from "../../components/collapse/Collapse";
import Data from "../../data/about.json";
import Footer from "../../components/footer/Footer";
import "./about.scss";

const About = () => {
    return (
        <React.Fragment>
            <header className="header">
                <Header />
                <Banner imageSrc={BannerImg} title="" />
            </header>
            <main className="main about-page">
                {Data.map((item) => {
                    return (
                        <Fragment className="lg-width" key={item.id}>
                            <Collapse id={item.id} title={item.title} content={item.content} />
                        </Fragment>
                    );
                })};
            </main>
            <Footer />
        </React.Fragment>
       
    );
};

export default About;