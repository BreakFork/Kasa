import { Fragment } from "react";
import "./housingTags.scss";

const HousingTags = ({ tags }) => {
    return (  
        <Fragment>
            <ul className="housing__references--tags-list">
                {tags.map((tag, index) => (
                    <li className="housing__references--tags-list-item" key={`${tag}-${index}`} >{ tag }</li>
                ))}
                
            </ul>
        </Fragment>
    );
};

export default HousingTags;  