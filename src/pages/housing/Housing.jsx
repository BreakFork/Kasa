import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Data from "../../data/data.json";
import Error from "../error/Error";
import Header from "../../components/header/Header";
import SliderArrowLeft from "../../assets/slider-arrow-left.svg";
import SliderArrowRight from "../../assets/slider-arrow-right.svg";
import Slider from "../../components/slider/Slider";
import HousingTitle from "../../components/housingTitle/HousingTitle";
import HousingTags from "../../components/housingTags/HousingTags";
import HousingHostName from "../../components/housingHost/HousingHostName.jsx";
import HousingHostAvatar from "../../components/housingHostAvatar/HousingHostAvatar.jsx";
import StarActive from "../../assets/rating-active-item.svg";
import StarUnactive from "../../assets/rating-unactive-item.svg";
import HousingRating from "../../components/housingRating/HousingRating.jsx";
import Collapse from "../../components/collapse/Collapse";
import Footer from "../../components/footer/Footer";
import "./housing.scss";

const Housing = () => {
    document.title = "Location";

    // DATA 
    const { id } = useParams();                     //console.log("USEPARAM : " + id);   
    const housing = Data.find((e) => e.id === id);  //console.log("TEST : " + housing.pictures[2])

    return (
        housing ? 
        <Fragment>
        <div className="wrapper">
                <Header bannerIsVisible="" bannerImg bannerTitle />
            <main className="main housing-page">
                <Slider btnLeft={SliderArrowLeft} btnRight={SliderArrowRight} pictures={housing.pictures} />
                <div className="housing__wrapper" role={"presentation".toString()}>
                    <div className="housing__title--wrapper" role={"presentation".toString()}>
                        <HousingTitle title={housing.title} location={housing.location} />
                        <HousingTags tags={housing.tags} />
                    </div>
                    <section className="housing__references"> 
                        <HousingRating rating={housing.rating} starActive={StarActive} starUnactive={StarUnactive} />
                        <div className="housing__references--host-wrapper" role={"presentation".toString()}>
                            <HousingHostName hostName={housing.host.name} />
                            <HousingHostAvatar picture={housing.host.picture} />
                        </div>
                    </section>
                </div>
                <section className="housing__collapse">
                    <Collapse id={housing.id} title="Description" content={housing.description} />
                    <Collapse id={housing.id} title="Équipements" content={housing.equipments} />
                </section>
            </main>
            <Footer />
        </div>
        </Fragment> 
        :
        <Error />
    )
};

export default Housing;