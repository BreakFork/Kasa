import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ErrorNotFound from "../../components/errors/ErrorNotFound";
import Footer from "../../components/footer/Footer";
import "./error.scss";

const Error = () => {
    return (
        <React.Fragment>
            <div className="wrapper">
                <header className="header">
                    <Navbar />
                </header>
                <main className="main error-page">
                    <ErrorNotFound />
                </main>
            </div>
            <Footer />
        </React.Fragment> 
    );
};

export default Error;