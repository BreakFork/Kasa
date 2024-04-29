import { Fragment } from "react";
import React from "react";
import Header from "../../components/header/Header";
import Collapse from "../../components/collapse/Collapse";
import Data from "../../data/about.json";
import Footer from "../../components/footer/Footer";
import "./about.scss";

const About = () => {
    return (
        <React.Fragment>
            <div className="wrapper">
                <Header hidden bannerImg="aboutPage" bannerTitle />
                <main className="main about-page">
                    {Data.map((item) => {
                        return (
                            <Fragment key={item.id}>
                                <Collapse id={item.id} title={item.title} content={item.content} />
                            </Fragment>
                        )
                    })}
                </main>
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default About;