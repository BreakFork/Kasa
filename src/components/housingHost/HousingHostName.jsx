import { Fragment } from "react";
import "./housingHostName.scss";

const HousingHost = ({ hostName }) => {

    const [firstName, lastName] = hostName.split(' ');
    
    return (
        <Fragment>
            <div className="housing__references-name" role="presentation">
                <span className="housing__references--first-name">{firstName}</span>
                <span className="housing__references--last-name">{lastName}</span>
            </div>
        </Fragment>
    );
};

export default HousingHost;