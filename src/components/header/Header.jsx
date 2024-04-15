import { NavLink } from "react-router-dom";
import logo from '../../assets/kasa-logo.svg';
import './header.scss';

const Header = () => {
    return (
        <header className = "header"> 
            <img className="header__logo" src={logo} alt="Logo du site Kasa" />
            <nav className="navbar">                
                {/* <div className="navbar__links"> */}
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
                {/* </div> */}
            </nav>
        </header>
    );
};

export default Header;