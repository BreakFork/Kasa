import React, { useState } from "react";
import "./collapse.scss";

const Collapse = ({id, title, content}) => {
    // HOOK
    const [isActive, setIsActive] = useState('');
    const [ariaIsExpanded, setAriaIsExpanded] = useState(false);
    const [rotateCssClass, setRotateCssClass] = useState('svg');


    const handleClick = () => {
        setIsActive(isActive === '' ? 'active' : '');
        setAriaIsExpanded(ariaIsExpanded => !ariaIsExpanded);
        setRotateCssClass(isActive === 'active' ? 'svg' : 'svg rotate')
    }

    return (
        <article className="collapse">
            <header className="collapse__header">
                <h2 className="collapse__header--title">{title}</h2>
                <button 
                    className="collapse__header--btn"
                    type="button"
                    // eslint-disable-next-line
                    aria-expanded={`${ariaIsExpanded}`}
                    aria-owns={`${id}${title}`}
                    id={`${id}${title}`}
                    focusable="true" 
                    onClick={handleClick}>
                    <svg className={`${rotateCssClass}`} 
                        aria-hidden="true" 
                        focusable="false" alt=""
                        viewBox="0 1 33 31"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z" />
                    </svg>
                </button>
            </header>
            <section className="collapse__view">
                <div className="collapse__view--wrapper">
                    {isActive && <p id={`${id}${title}`} role="region" aria-labelledby={`${id}${title}`} className="collapse__view--wrapper-content">{content}</p>}
                </div>
            </section>
        </article>
    )
}

export default Collapse;