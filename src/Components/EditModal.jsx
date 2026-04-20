import "../Styles/components/EditModal.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faImage } from '@fortawesome/free-solid-svg-icons';

function EditModal({ editFolder, toggleEditModal, itemToEdit, editUploadCover, setEditTitleValue, editCoverUrl }){

    //Récupère la valeur de l'input text
    function getTitleValue(e){
        setEditTitleValue(e.target.value);
    }

    return(
        <div className="editModal glass vertical gap">
            <p className="smallTitle">Edit the file</p>
            <div className="horizontal smallGap">
                <label htmlFor="editModal__inputFile" className="editModal__coverButton glass glassHover">
                    <input id='editModal__inputFile' type='file' accept="image/png, image/jpeg" onChange={editUploadCover}/>
                    {editCoverUrl ? (
                        <img src={editCoverUrl} alt="cover" className="editModal__cover"/>
                    ) :(
                        <FontAwesomeIcon icon={faImage} className='app__icon'/>
                    )}
                </label>
                <div className="editModal__titleInput">
                    <input type="text" defaultValue={itemToEdit.title} className='editModal__inputText audioPadding buttonText' onInput={getTitleValue} />
                    <FontAwesomeIcon icon={faPenToSquare} className='app__icon editModal__inputTextIcon'/>
                </div>
            </div>
            <div className="horizontal gap editModal__buttons">
                <button className="glass glassHover buttonPadding buttonText" onClick={ () =>{
                    editFolder();
                    toggleEditModal();
                }}>Accept</button>
                <button className="glass glassHover buttonPadding buttonText" onClick={toggleEditModal}>Cancel</button>
            </div>
        </div>
    )
}

export default EditModal