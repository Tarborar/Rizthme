import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

import '../Styles/components/FolderModal.scss';

function FolderModal({ toggleFolderModal, setFolderNameValue, createFolder }){

    function getFolderName(e){
        setFolderNameValue(e.target.value);
    }

    return(
        <div className="folderModal glass vertical gap">
            <p className="smallTitle">Create folder</p>
            <div className="horizontal smallGap">
                <div className='folderModalIcon glass center'>
                    <FontAwesomeIcon icon={faFolderOpen} className='app__icon' />
                </div>
                <input type="text" placeholder="New folder" className='glass audioPadding buttonText' onInput={getFolderName} />
            </div>
            <div className="horizontal gap folderModal__buttons">
                <button className="glass buttonPadding buttonText" onClick={ () =>{
                    createFolder();
                    toggleFolderModal();
                }}>Accept</button>
                <button className="glass buttonPadding buttonText" onClick={toggleFolderModal}>Cancel</button>
            </div>
        </div>
    )
}

export default FolderModal