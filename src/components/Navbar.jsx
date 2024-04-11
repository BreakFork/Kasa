import { NavLink } from "react-router-dom";
import logo from '../assets/kasa-logo.svg';
import '../styles/Navbar.scss';

const Navbar = () => {
    <nav className="navbar">
        <img className='navbar_logo' src={logo} alt="Logo du site Kasa" />
        <div className="navbar_links">
            <NavLink className="navbar_link" to="/" >
                Accueil
            </NavLink>
            <NavLink className="navbar_link" to="/About" >
                À propos
            </NavLink>
        </div>
    </nav>
};

export default Navbar;