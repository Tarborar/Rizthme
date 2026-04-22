import "../Styles/components/AppEdit.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import { useReveal } from '../hooks/useReveal';
import '../Styles/utils/revealAnimation.scss';

function AppEdit({ dragOver, dragRemoveFolder, dragEditFolder, toggleFolderModal}){
    useReveal();

    return(
        <div>
            <div className="app__edit glass horizontal reveal-group">
                <button className='app__editButton glass glassHover center reveal reveal-X' onClick={toggleFolderModal}>
                    <FontAwesomeIcon icon={faFolderOpen} className='app__icon' />
                </button>
                <button className='app__editButton glass glassHover center reveal reveal-X' onDragOver={dragOver} onDrop={dragEditFolder}>
                    <FontAwesomeIcon icon={faPenToSquare} className='app__icon' />
                </button>
                <button className='app__editButton glass glassHover center reveal reveal-X' onDragOver={dragOver} onDrop={dragRemoveFolder}>
                    <FontAwesomeIcon icon={faTrash} className='app__icon' />
                </button>
            </div>
        </div>
    )
}

export default AppEdit