// import { Fragment } from "react";
import "./housingHostAvatar.scss";

const HousingHostAvatar = ({ picture }) => {
    return (
        <img className="housing__references--avatar" src={`${picture}`} alt="Avatar du propriétaire" />
    );
};

export default HousingHostAvatar;