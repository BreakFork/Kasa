import "./housingTitle.scss";

const HousingTitle = ({title, location}) => {
    return (
        <hgroup>
            <h2 className="housing-title__title">{title}</h2>
            <p className="housing-title__location">{location}</p>
        </hgroup>
    )
}

export default HousingTitle;