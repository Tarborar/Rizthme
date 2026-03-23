import { Link } from 'react-router-dom';
import '../Styles/Components/Header.scss';
import Logo from '../assets/logo1.svg';

function Header(){
    return(
        <header className='horizontal'>
            <Link to="/"><img src={Logo} alt="Logo Rizthme"  className='logo'/></Link>
            <nav className="header__nav center">
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