import "../Styles/components/AppEdit.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function AppEdit(){
    return(
        <div className="app__edit glass horizontal">
            <button className='app__editButton glass center'>
                <FontAwesomeIcon icon={faFolderOpen} className='app__icon'/>
            </button>
            <button className='app__editButton glass center'>
                <FontAwesomeIcon icon={faPenToSquare} className='app__icon'/>
            </button>
            <button className='app__editButton glass center'>
                <FontAwesomeIcon icon={faTrash} className='app__icon'/>
            </button>
        </div>
    )
}

export default AppEdit