import { NavLink } from "react-router-dom";
import logo from '../../assets/kasa-logo.svg';
import './navbar.scss';

const Navbar = () => {
    return (
        <div className = "navbar-container"> 
            <img className="navbar-container__logo" src={logo} alt="Logo du site Kasa" />
            <nav className="navbar-container__navbar">
                <NavLink 
                    to="/"
                    className="navbar__link"  
                >
                    Accueil
                </NavLink>
                <NavLink 
                    to="/about"
                    className="navbar__link"
                >
                    A propos
                </NavLink>
            </nav>
        </div>
    );
};

export default Navbar;