import { Fragment } from "react";
import Header from "../../components/header/Header";
import ErrorNotFound from "../../components/errors/ErrorNotFound";
import Footer from "../../components/footer/Footer";
import "./error.scss";

const Error = () => {
    document.title = "Erreur 404";

    return (
        <Fragment>
            <div className="wrapper">
                <Header bannerIsVisible="" bannerImg bannerTitle />
                    <main className="main error-page">
                        <ErrorNotFound />
                    </main>
                <Footer />
            </div>
        </Fragment>
    );
};

export default Error;