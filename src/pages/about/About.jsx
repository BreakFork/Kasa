import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import BannerImg from "../../assets/about.png";
import "./about.scss";

const About = () => {
    return (
        <>
        <Header />
        <Banner imageSrc={BannerImg} title="" />
        </>
       
    );
};

export default About;