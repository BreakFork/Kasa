import "./card.scss";

const Announcement = ({ id, cover, title }) => {
    return (
        <article className="card">
            <img className="card__img" src={cover} alt={title} />
            <div className="card__img--mask"></div>
            <h3 className="card__title">{title}</h3>    
        </article>
    );
};

export default Announcement;