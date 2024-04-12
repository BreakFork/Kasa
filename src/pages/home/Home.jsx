import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import BannerImg from "../../assets/banner-bkg.png";
import "./home.scss";

const Home = () => {
    return (
        <> 
        <Header />
        <Banner imageSrc={BannerImg} title="Chez vous, partout et ailleurs" />
        </>
        
    );
};

export default Home;