import React from "react";
import logo from '../../assets/kasa-footer-logo.svg';
import "./footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <img className="footer__logo" src={logo} alt="Logo du site Kasa" />
            <span className="footer__copyright">© 2024 Kasa. All rights reserved</span>
        </footer>
    );
};

export default Footer;