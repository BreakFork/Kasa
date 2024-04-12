import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import BannerImg from "../../assets/banner-bkg.png";

const Home = () => {
    return (
        <>
        <Header />
        <Banner imageSrc={BannerImg} title="Chez vous, partout et ailleurs" />
        <h2>Page d'Accueil</h2>
        </>
        
    );
};

export default Home;