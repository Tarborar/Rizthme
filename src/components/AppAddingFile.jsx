import "../Styles/components/AppAddingFile.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function AppAddingFile({ upload }){
    return(
        <div className="app__add">
            <label htmlFor="app__inputFile" className="app__addButton glass glassHover center">
                <input id='app__inputFile' type='file' accept='.mp3,audio/*' onChange={upload}/>
                <FontAwesomeIcon icon={faPlus} className='app__icon'/>
            </label>
        </div>
    )
}

export default AppAddingFile