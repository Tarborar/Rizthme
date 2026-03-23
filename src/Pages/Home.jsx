import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import '../Styles/Pages/Home.scss';
import Logo from '../assets/Logo.svg';

function Home() {
    return (
    <div className="home center gap vertical">
        <h1>Elevate your conversation with bot music</h1>
        <button className="home__button glass buttonPadding buttonText center">
            <FontAwesomeIcon icon={faDiscord} className='discordIcon'/>
            Ouvrir
        </button>
        <div className='home__logo'>
            <img src={Logo} alt="Logo" />
        </div>
    </div>
  )
}

export default Home
