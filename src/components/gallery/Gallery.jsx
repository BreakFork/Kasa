import { Fragment } from "react";
import Card from "../cards/Card";
import cards from "../../data/data.json";
import { Link } from "react-router-dom";
import "./gallery.scss";

const Gallery = () => {
    return (
        <section className="gallery">
            {cards.map((card) => {
                return (
                    <Fragment key={card.id}>
                        <article>
                            <Link to={`/housing/${card.id}`}>
                                <Card title={card.title} cover={card.cover} alt={card.title} />
                            </Link>
                        </article>
                    </Fragment>
                )})
            }
        </section>
    );
};

export default Gallery;