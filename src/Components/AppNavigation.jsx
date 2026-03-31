import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

function AppNavigation( {setAppMenu} ){
    return(
        <nav className="app__menu">
            <ul className="vertical smallGap">
                <li className='app__menuButton glass center' onClick={() => setAppMenu('playlist')}>
                    <FontAwesomeIcon icon={faPlay} className='app__icon'/>
                </li>
                <li className='app__menuButton glass center' onClick={() => setAppMenu('folder')}>
                    <FontAwesomeIcon icon={faFolderOpen} className='app__icon'/>
                </li>
                <li className='app__menuButton glass center' onClick={() => setAppMenu('help')}>
                    <FontAwesomeIcon icon={faQuestion} className='app__icon'/>
                </li>
                <li className='app__menuButton glass center' onClick={() => setAppMenu('discord')}>
                    <FontAwesomeIcon icon={faDiscord} className='app__icon'/>
                </li>
            </ul>
        </nav>
    )
}

export default AppNavigation