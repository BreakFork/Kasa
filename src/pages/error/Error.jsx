import React from "react";
import Header from "../../components/header/Header";
import ErrorNotFound from "../../components/errors/ErrorNotFound";
import Footer from "../../components/footer/Footer";
import "./error.scss";

const Error = () => {
    return (
        <React.Fragment>
            <div className="wrapper">
                <Header hidden="" bannerImg bannerTitle />
                <main className="main error-page">
                    <ErrorNotFound />
                </main>
            </div>
            <Footer />
        </React.Fragment> 
    );
};

export default Error;