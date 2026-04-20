import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import '../Styles/Pages/Home.scss';
import Logo from '../assets/Logo.svg';

function Home() {
    return (
    <div className="home center gap vertical">
        <h1>Elevate your conversation with bot music</h1>
        <button className="home__button glass glassHover buttonPadding buttonText center">
            <FontAwesomeIcon icon={faDiscord} className='discordIcon'/>
            Open
        </button>
        <div className='home__logo logo'>
            <img src={Logo} alt="Logo" />
        </div>
        <button className='home__buttonConnection buttonPadding buttonText'>Connection</button>
    </div>
  )
}

export default Home
