import { NavLink } from "react-router-dom";
import logo from '../../assets/kasa-logo.svg';
import './header.scss';

const Header = () => {
    return (
        <div> 
            <nav className="navbar">
                <img className='navbar__logo' src={logo} alt="Logo du site Kasa" />
                <div className="navbar__links">
                    <NavLink className="navbar__link" to="/" >
                        Accueil
                    </NavLink>
                    <NavLink className="navbar__link" to="/About" >
                        À propos
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;