import { useState } from "react";
import "../Styles/components/AppFolder.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

import { useReveal } from '../hooks/useReveal';
import '../Styles/utils/revealAnimation.scss';

function AppFolder({ folder, dragStart, dragOver, dragAddInFolder }){
    useReveal();
    
    const [inputValue, setInputValue] = useState(""); //valeur de l'input search

    //Filtre playlist avec la valeur de l'input search
    const filteredPlaylist = folder.filter(p => {
        if(p.folder){
            if(p.title.toLowerCase().includes(inputValue)) return true; //titre du fichier
            if(p.files.some(file => file.title.toLowerCase().includes(inputValue))) return true; //titre parmis .files du fichier
            return false;
        }
        return p.title.toLowerCase().includes(inputValue); //titre de l'audio
    });
    
    //Récupère la valeur de l'input search
    function search(e){
        setInputValue(e.target.value.toLowerCase());
    }

    //Récupère l'id du .files pour le cibler dans folder
    function handleFileDragStart(e, file){
        e.stopPropagation();
        e.dataTransfer.setData('draggedFileId', file.id); //stock l'id dans draggedFiledId
        dragStart(e, file);
    }

    return(
        <div className='vertical smallGap reveal-group'>
            <p className="app__folderTitle center">Folder</p>
            <div className="app__folderInput">
                <input type="search" className='buttonPadding buttonText app__folderInputText' onInput={search}/>
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
                            <div className="app__folderAudio vertical glass glassHover folderPadding buttonText">
                                <div className="horizontal app__folderAudioFileName">
                                    <div>
                                        <FontAwesomeIcon icon={faFolderOpen} className='app__icon'/>
                                    </div>
                                    <div className="horizontal app__folderName">
                                        <div className="app__audioTitle paragraph">{audio.title}</div>
                                        <div className="paragraph">({audio.files.length})</div>
                                    </div>
                                </div>
                                <div className={`vertical smallGap ${audio.files.length > 0 ? "app__folderFiles" : ""}`}>
                                    {audio.files.map((file) =>(
                                        <div draggable className="app__folderAudio horizontal glass audioPadding buttonText" onDragStart={(e) => handleFileDragStart(e, file)}>
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
                            <div draggable className="app__folderAudio horizontal glass glassHover audioPadding buttonText reveal revealY" onDragStart={(e) => dragStart(e, audio)}>
                                <div className="app__cover">
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