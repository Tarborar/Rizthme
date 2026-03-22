import '../Styles/Components/Header.scss';
import Logo from '../assets/logo1.svg';

function Header(){
    return(
        <header className='horizontal'>
            <img src={Logo} alt="Logo Rizthme"  className='logo'/>
            <nav className="header__nav center">
                <ul className="center glass gap buttonPadding">
                    <li>App</li>
                    <li>Features</li>
                    <li>Changelog</li>
                    <li>FAQ</li>
                </ul>
            </nav>
            <button className='header__buttonConnection buttonPadding buttonText'>Connection</button>
        </header>
    )
}

export default Header