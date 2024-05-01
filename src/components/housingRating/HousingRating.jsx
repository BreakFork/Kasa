import { Fragment } from "react";
import "./housingRating.scss";

const HousingRating = ({ rating, starActive, starUnactive }) => {
    const limit = 5;
    const activeItems = parseInt(rating);
    const unactiveItems = limit - activeItems;

    return (
        // console.log({rating})
        <Fragment>
            <ul className="housing__references--rating-list">
                {[...Array(activeItems)].map((e, index) => (
                    <li key={'active-' + index} className="housing__references--rating-list-item">
                        <img src={starActive} alt="Etoiles actives" />
                    </li>
                ))}
                {[...Array(unactiveItems)].map((e, index) => (
                    <li key={'unactive-' + index} className="housing__references--rating-list-item">
                        <img src={starUnactive} alt="Etoiles non actives" />
                    </li>
                ))}
            </ul>
        </Fragment>
    );
};

export default HousingRating;