import { useReveal } from '../hooks/useReveal';
import '../Styles/utils/revealAnimation.scss';

import '../Styles/components/AppNavigation.scss'
import useWindowWidth from '../hooks/useWindowWidth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

function AppNavigation({ setAppMenu }){
    useReveal();
    
    const windowWidth = useWindowWidth(); //récupère la taille de l'écran pour le responsive
    const isTablet = windowWidth < 1024;

    return(
        <nav className="app__menu reveal-group">
            <ul className={`${isTablet ? 'horizontal' : 'vertical'} smallGap`}>
                <li className='app__menuButton glass glassHover center reveal revealY' onClick={() => setAppMenu('playlist')}>
                    <FontAwesomeIcon icon={faPlay} className='app__icon'/>
                </li>
                <li className='app__menuButton glass glassHover center reveal revealY' onClick={() => setAppMenu('folder')}>
                    <FontAwesomeIcon icon={faFolderOpen} className='app__icon'/>
                </li>
                <li className='app__menuButton glass glassHover center reveal revealY' onClick={() => setAppMenu('help')}>
                    <FontAwesomeIcon icon={faQuestion} className='app__icon'/>
                </li>
                <li className='app__menuButton glass glassHover center reveal revealY'>
                    <FontAwesomeIcon icon={faDiscord} className='app__icon'/>
                </li>
            </ul>
        </nav>
    )
}

export default AppNavigation