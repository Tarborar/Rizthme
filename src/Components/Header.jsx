import { Link } from 'react-router-dom';
import '../Styles/Components/Header.scss';
import LogoNavigation from '../assets/logo1.svg';
import LogoNav from '../assets/LogoNavigation.svg';
import useWindowWidth from '../hooks/useWindowWidth';

function Header(){

    const windowWidth = useWindowWidth();
    const logoSrc = windowWidth < 767 ? LogoNav : LogoNavigation;

    return(
        <header className='horizontal'>
            <Link to="/"><img src={logoSrc} alt="Logo Rizthme"  className='logoNav'/></Link>
            <nav className="header__nav">
                <ul className="center glass gap buttonPadding">
                    <Link to="app"><li>App</li></Link>
                    <Link to="features"><li>Features</li></Link>
                    <Link to="changelog"><li>Changelog</li></Link>
                    <Link to="faq"><li>FAQ</li></Link>
                </ul>
            </nav>
            <button className='header__buttonConnection buttonPadding buttonText'>Connection</button>
        </header>
    )
}

export default Header