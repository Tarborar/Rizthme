import { NavLink } from 'react-router-dom';
import '../Styles/Components/Header.scss';
import LogoNavigation from '../assets/logo1.svg';
import LogoNav from '../assets/LogoNavigation.svg';
import useWindowWidth from '../hooks/useWindowWidth';

import { useReveal } from '../hooks/useReveal';
import '../Styles/utils/revealAnimation.scss';

function Header(){
    useReveal();

    const windowWidth = useWindowWidth();
    const logoSrc = windowWidth < 767 ? LogoNav : LogoNavigation;

    return(
        <header className='horizontal reveal-group'>
            <div className="reveal reveal-X">
                <NavLink to="/"><img src={logoSrc} alt="Logo Rizthme"  className='logoNav'/></NavLink>
            </div>
            <nav className="header__nav reveal reveal-X">
                <ul className="center glass gap buttonPadding reveal-group">
                    <li className='reveal reveal-X'><NavLink to="app" className='header__navLink'>App</NavLink></li>
                    <li className='reveal reveal-X'><NavLink to="features" className='header__navLink'>Features</NavLink></li>
                    <li className='reveal reveal-X'><NavLink to="changelog" className='header__navLink'>Changelog</NavLink></li>
                    <li className='reveal reveal-X'><NavLink to="faq" className='header__navLink'>FAQ</NavLink></li>
                </ul>
            </nav>
            <button className='header__buttonConnection buttonPadding buttonText'>Connection</button>
        </header>
    )
}

export default Header