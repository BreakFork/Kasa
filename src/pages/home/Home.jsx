import { Fragment } from "react";
import Header from "../../components/header/Header";
import BannerImg from "../../assets/banner-bkg.png";
import Gallery from "../../components/gallery/Gallery";
import Footer from "../../components/footer/Footer";

const Home = () => {
    document.title = "Accueil";

    return (
        <Fragment>
            <div className="wrapper" role="presentation">
                <Header bannerIsVisible bannerImg={BannerImg} bannerTitle="generic" />
                <main className="main">
                    <Gallery />
                </main>
                <Footer />
            </div>
        </Fragment>
    )
};

export default Home;