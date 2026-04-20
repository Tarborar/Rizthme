import { NavLink } from 'react-router-dom';
import '../Styles/Components/Header.scss';
import LogoNavigation from '../assets/logo1.svg';
import LogoNav from '../assets/LogoNavigation.svg';
import useWindowWidth from '../hooks/useWindowWidth';

function Header(){

    const windowWidth = useWindowWidth();
    const logoSrc = windowWidth < 767 ? LogoNav : LogoNavigation;

    return(
        <header className='horizontal'>
            <NavLink to="/"><img src={logoSrc} alt="Logo Rizthme"  className='logoNav'/></NavLink>
            <nav className="header__nav">
                <ul className="center glass gap buttonPadding">
                    <li><NavLink to="app" className='header__navLink'>App</NavLink></li>
                    <li><NavLink to="features" className='header__navLink'>Features</NavLink></li>
                    <li><NavLink to="changelog" className='header__navLink'>Changelog</NavLink></li>
                    <li><NavLink to="faq" className='header__navLink'>FAQ</NavLink></li>
                </ul>
            </nav>
            <button className='header__buttonConnection buttonPadding buttonText'>Connection</button>
        </header>
    )
}

export default Header