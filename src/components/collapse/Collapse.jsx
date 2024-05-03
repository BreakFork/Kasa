import React, { useState, useId } from "react";
import "./collapse.scss";

const Collapse = ({ id, title, content }) => {
    // HOOKS
    const [isActive, setIsActive] = useState(false);
    const [ariaIsExpanded, setAriaIsExpanded] = useState(false);
    const [rotateCssClass, setRotateCssClass] = useState('svg');
    const [viewerHiddenCssClass, setViewerHiddenCssClass] = useState(' viewer-hidden');
    const collapseId = useId();

    // COLLAPSE BUTTON ACTIONS
    const handleClick = () => {
        setIsActive(isActive => !isActive);
        setAriaIsExpanded(ariaIsExpanded => !ariaIsExpanded);
        setRotateCssClass(isActive === true ? 'svg' : 'svg rotate');
        setViewerHiddenCssClass(isActive === true ? 'viewer-hidden' : 'collapse__view--wrapper')
    };

    // COLLAPSE TEMPLATES ///////////////////////////////////////////////////////
    // TEXT TEMPLATE
    const CollapseTextTemplate = ({content}) => {     //console.log(formatedContent)
        const formatedContent = [];
        formatedContent.push(content);
        return (
            <p id={collapseId + `-${title}`} role="region" aria-labelledby={collapseId + `-${title}`} className="collapse__view—wrapper-content">
                {formatedContent} 
            </p>
        );
    };

    // LIST TEMPLATE
    const CollapseListTemplate = ({content}) => {     //console.log(formatedContent)
        const formatedContent = [];
        for (let i = 0; i < content.length; i++) {
            formatedContent.push(content[i]);
        }
        return (
            <ul id={collapseId + `-${title}`} role="region" aria-labelledby={collapseId + `-${title}`} className="collapse__view—wrapper-content">
                {formatedContent.map((equipment, index) =>
                    <li key={`${equipment}-${index}`}>{equipment}</li>
                )}
            </ul>
        );
    };
    /////////////////////////////////////////////////////////////////////////////
    return (
        <article className="collapse">
            <header className="collapse__header">
                <h2 className="collapse__header--title">{title}</h2>
                <button
                    className="collapse__header--btn"
                    type="button"
                    // next line --> only because eslint attempts a string "true" or "false"  neither 0 || 1 (for terminal purpose)
                    // eslint-disable-next-line 
                    aria-expanded={`${ariaIsExpanded}`}
                    aria-owns={collapseId + `-${title}`}
                    id={collapseId + `-${title}`}
                    focusable="true"
                    onClick={handleClick}>
                    <svg className={`${rotateCssClass}`}
                        role="presentation"
                        aria-hidden="true"
                        focusable="false" alt=""
                        viewBox="0 1 33 31"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z" />
                    </svg>
                </button>
            </header>
            <section className="collapse__view">
                <div  className={`${viewerHiddenCssClass}`} role="presentation">
                    {
                        isActive && title === "Équipements" ? <CollapseListTemplate content={content} />     
                                                            : <CollapseTextTemplate content={content} />     
                    }
                </div>
            </section>
        </article>
    )
}

export default Collapse;