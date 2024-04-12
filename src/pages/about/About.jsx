import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import BannerImg from "../../assets/about.png";

const About = () => {
    return (
        <>
        <Header />
        <Banner imageSrc={BannerImg} title="" />
        <h2>Page À propos</h2>
        </>
       
    );
};

export default About;