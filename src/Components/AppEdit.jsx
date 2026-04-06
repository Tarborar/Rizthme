import "../Styles/components/AppEdit.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function AppEdit({ dragOver, dragRemoveFolder, dragEditFolder}){
    return(
        <div>
            <div className="app__edit glass horizontal">
                <button className='app__editButton glass center'>
                    <FontAwesomeIcon icon={faFolderOpen} className='app__icon'/>
                </button>
                <button className='app__editButton glass center' onDragOver={dragOver} onDrop={dragEditFolder}>
                    <FontAwesomeIcon icon={faPenToSquare} className='app__icon' />
                </button>
                <button className='app__editButton glass center' onDragOver={dragOver} onDrop={dragRemoveFolder}>
                    <FontAwesomeIcon icon={faTrash} className='app__icon' />
                </button>
            </div>
        </div>
        
    )
}

export default AppEdit