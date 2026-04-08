import { useState } from "react";
import "../Styles/components/AppFolder.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

function AppFolder({ folder, dragStart, dragOver, dragAddInFolder }){
    
    const [inputValue, setInputValue] = useState(""); //valeur de l'input search

    //Filtre playlist avec la valeur de l'input search
    const filteredPlaylist = folder.filter(p => p.title.toLowerCase().includes(inputValue));

    //Récupère la valeur de l'input search
    function search(e){
        setInputValue(e.target.value.toLowerCase());
    }

    return(
        <div className='vertical smallGap'>
            <p className="app__folderTitle center">Folder</p>
            <div className="app__folderInput">
                <input type="search" className='glass buttonPadding buttonText app__folderInputText' onInput={search}/>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='app__icon app__folderInputIcon'/>
            </div>
            <div className="app__folderList vertical smallGap">
                {filteredPlaylist.map((audio) =>(
                    //Si c'est un fichier
                    audio.folder ? (
                        <div 
                            key={audio.id} 
                            className="folderGlass glass" 
                            draggable 
                            onDragStart={(e) => dragStart(e, audio)}
                            onDragOver={dragOver}
                            onDrop={(e) => dragAddInFolder(e, audio)}
                        >
                            <div className="app__folderAudio vertical glass audioPadding buttonText">
                                <div className="horizontal">
                                    <div>
                                        <FontAwesomeIcon icon={faFolderOpen} className='app__icon' />
                                    </div>
                                    <div className="horizontal app__folderName">
                                        <div className="app__audioTitle paragraph">{audio.title}</div>
                                        <div className="paragraph">({audio.files.length})</div>
                                    </div>
                                </div>
                                <div className="vertical">
                                    {audio.files.map((file) =>(
                                        <div draggable className="app__folderAudio horizontal glass audioPadding buttonText">
                                            <div className="app__cover glass">
                                                {file.cover && <img src={file.cover} alt="cover" className="app__audioCover"/>}
                                            </div>
                                            <div className="app__audioTitle paragraph">{file.title}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : 
                    //Si c'est un audio
                    (
                        <div key={audio.id}>
                            <div draggable className="app__folderAudio horizontal glass audioPadding buttonText" onDragStart={(e) => dragStart(e, audio)}>
                                <div className="app__cover glass">
                                    {audio.cover && <img src={audio.cover} alt="cover" className="app__audioCover"/>}
                                </div>
                                <div className="app__audioTitle paragraph">{audio.title}</div>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    )
}

export default AppFolder