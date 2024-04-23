import React from "react";
import { NavLink } from "react-router-dom"; 
import "./errorNotFound.scss";

const ErrorNotFound = () => {
    return (
        <React.Fragment>
            <section className="error">
                <span className="error__type">404</span>
                <span className="error__message">Oups! La page que vous demandez n'existe pas.</span>
                <NavLink to="/" className="error__link">Retourner sur la page d'accueil</NavLink>
            </section>
        </React.Fragment>
    );
};

export default ErrorNotFound;