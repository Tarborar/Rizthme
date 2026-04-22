import { useReveal } from '../hooks/useReveal';
import '../Styles/utils/revealAnimation.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import '../Styles/pages/Home.scss';

import Logo from '../assets/Logo.svg';

function Home() {
    useReveal();

    return (
    <div className="home center gap vertical reveal-group">
        <h1 className='reveal revealY'>Elevate your conversation with bot music</h1>
        <button className="home__button glass glassHover buttonPadding buttonText center reveal revealY">
            <FontAwesomeIcon icon={faDiscord} className='discordIcon'/>
            Open
        </button>
        <div className='home__logo logo reveal revealY'>
            <img src={Logo} alt="Logo" />
        </div>
        <button className='home__buttonConnection buttonPadding buttonText'>Connection</button>
    </div>
  )
}

export default Home
