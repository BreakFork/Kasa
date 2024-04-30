import { Fragment, useRef } from "react";
import "./housingTags.scss";

const HousingTags = ({ tags }) => {

    const tagMinWidth = useRef(null);
    const tagsLengthArray = [];

    for(let i = 0; i < tags.length; i++) {
        tagsLengthArray.push(tags[i].length)   
    }
    function getHighestWidthOfTagsFrom(tagsLengthArray) {
        tagMinWidth.current = Math.max.apply(null, tagsLengthArray) * 9;

        return tagMinWidth.current;
    }
    getHighestWidthOfTagsFrom(tagsLengthArray);

    return (  
        <Fragment>
            <ul className="housing__references--tags-list">
                {tags.map((tag, index) => (
                    <li className="housing__references--tags-list-item" style={{minWidth: tagMinWidth.current}} key={`${tag}-${index}`}>{ tag }</li>
                ))}
                
            </ul>
        </Fragment>
    );
};

export default HousingTags;  