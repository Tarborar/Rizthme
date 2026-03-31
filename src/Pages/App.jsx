//Data
import { playlist } from "../datas/playlist"

//Composants
import AppNavigation from "../components/AppNavigation";

//Hook
import { useState } from 'react';

//CSS
import '../Styles/pages/App.scss'

//Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function App() {
    //useState
    const [appMenu, setAppMenu] = useState('playlist'); //affichage menu central
    const [audioUrl, setAudioUrl] = useState(null); //url local du fichier audio
    const [queue, setQueue] = useState([]); //playlist en attente de jouer

    console.log(playlist);

    //Affichage de la page centrale de l'application
    switch(appMenu){
        case 'playlist':
            console.log(appMenu);
            break;
        case 'folder':
            console.log(appMenu);
            break;
        case 'help':
            console.log(appMenu);
            break;
        case 'discord':
            console.log(appMenu);
            break;
    }

    //Ajoute à la playlist[] le fichier ajouté
    function upload(e){
        const file = e.target.files[0];
        const url = URL.createObjectURL(file)
        setAudioUrl(url);

        playlist.push(
            {
                "id": `${file.name} ${playlist.length+1}`,
                "url": url,
                "title": file.name,
                "cover": ""
            }
        )
    }

    function dragStart(e, audio){
        e.dataTransfer.setData('text/plain', JSON.stringify(audio)); //obligé de convertir en chaine de caractère pour stocker l'élément glissé
        e.dataTransfer.effectAllowed = 'move'; //dessine le curseur move
    }

    function dragOver(e){
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }

    //Ajoute au tableau queue[] l'item dragged
    function drop(e){
        e.preventDefault();
        const draggedAudio = JSON.parse(e.dataTransfer.getData('text/plain'));

        setQueue([...queue, draggedAudio]); //push l'item dans queue[]
    }

    return (
    <div className="appDesign glass">
        <div className="app horizontal glass">
            {/*#########-- Menu Gauche --######### */}
            <AppNavigation setAppMenu={setAppMenu}/>
            {/*#########-- Main Central --######### */}
            <div className="app__main vertical">
                <div className="app__playlist vertical smallGap center">
                    <div className="app__playlistSlot glass" onDragOver={dragOver} onDrop={drop}>
                    </div>
                    {queue.map((q) =>(
                        <audio key={q.id} controls src={q.url}></audio>
                    ))}
                </div>
                {/*#########-- Bouton Ajout de fichier --######### */}
                <div className="app__add">
                    <label htmlFor="app__inputFile" className="app__addButton glass center">
                        <input id='app__inputFile' type='file' accept='.mp3,audio/*' onChange={upload}/>
                        <FontAwesomeIcon icon={faPlus} className='app__icon'/>
                    </label>
                </div>
            </div>
            {/*#########-- Menu Droite --######### */}
            <div className="app__folder vertical">
                <div className='vertical smallGap'>
                    <div className="app__folderTitle center">Folder</div>
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
            </div>
        </div>
    </div>
  )
}

export default App