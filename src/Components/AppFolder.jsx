import "../Styles/components/AppFolder.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function AppFolder({ playlist, dragStart }){
    return(
        <div className='vertical smallGap'>
            <p className="app__folderTitle center">Folder</p>
            <div className="app__folderInput">
                <input type="text" className='glass buttonPadding buttonText app__folderInputText' />
                <FontAwesomeIcon icon={faMagnifyingGlass} className='app__icon app__folderInputIcon'/>
            </div>
            <div className="app__folderList vertical smallGap">
                {playlist.map((audio) =>(
                    <div key={audio.id}>
                        <div draggable className="app__folderAudio horizontal glass audioPadding buttonText" onDragStart={(e) => dragStart(e, audio)}>
                            <div className="app__audioCover glass"></div>
                            <div className="app__audioTitle paragraph">{audio.title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AppFolder