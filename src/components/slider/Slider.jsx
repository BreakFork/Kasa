import React, { useState } from "react";
import "./slider.scss";

const Slider = ({btnLeft, btnRight, pictures}) => {
    // HOOK
    // Initializes the current slide position to zero (first array index)
    const [currentPosition, setCurrentPosition] = useState(0);                  // console.log(currentPosition);

    // Increases or decreases the current position
    const previousSlide = () => { setCurrentPosition(currentPosition - 1) }
    const nextSlide = () => { setCurrentPosition(currentPosition + 1) }
   
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Buttons templates
    const PreviousButton = ({ icon }) => {
        return (
            <button className="carroussel__button-left" type="button" onClick={previousSlide} focusable="true" >
                <img className="carrousel__button-left-icon" src={icon} alt="Bouton flèche gauche" />
            </button>
        )
    }

    const NextButton = ({ icon }) => {
        return (
            <button className="carroussel__button-right" type="button" onClick={ nextSlide } focusable="true" >
                <img className="carrousel__button-right-icon" src={ icon } alt="Bouton flèche droite" />
            </button>
        )
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Slider's template
    return (
        <section className="carrousel">
            <ul className="carrousel__list">
                <li className="carrousel__list--item">
                    <img className="carrousel__list--item-img" src={ pictures[currentPosition] } alt="" />
                </li>
            </ul> 

            { currentPosition !== 0 ? <PreviousButton icon={ btnLeft } /> : null } 
            { currentPosition !== pictures.length - 1 ? <NextButton icon={btnRight} /> : null }
            
            <span className="carrousel__index"> { currentPosition }/{ pictures.length - 1 } </span>   
        </section>
    )
}

export default Slider;