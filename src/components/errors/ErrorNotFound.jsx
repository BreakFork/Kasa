import React from "react";
import { NavLink } from "react-router-dom"; 
import "./errorNotFound.scss";

const ErrorNotFound = () => {
    return (
        <React.Fragment>
            <section className="error">
                <span className="error__type">404</span>
                <div className="error__message-wrapper-sm">
                    <span className="error__message">Oups! La page que</span><br />
                    <span className="error__message">vous demandez n'existe pas.</span>
                </div>
                <div className="error__message-wrapper-md">
                    <span className="error__message">Oups! La page que vous demandez n'existe pas.</span>
                </div>
                <NavLink to="/" className="error__link">Retourner sur la page d'accueil</NavLink>
            </section>
        </React.Fragment>
    );
};

export default ErrorNotFound;