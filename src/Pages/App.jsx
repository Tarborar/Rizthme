import { playlist } from "../datas/playlist"

import { useState } from 'react';
import '../Styles/pages/App.scss'

function App() {
    const [appMenu, setAppMenu] = useState('playlist'); //affichage menu central
    const [audioUrl, setAudioUrl] = useState(null); //url local du fichier audio
    const [queue, setQueue] = useState([]); //playlist en attente de jouer

    console.log(playlist);

    //Affichage de la page centrale de l'application
    switch(appMenu){
        case 'playlist':
            // console.log(appMenu);
            break;
        case 'folder':
            // console.log(appMenu);
            break;
        case 'history':
            // console.log(appMenu);
            break;
        case 'help':
            // console.log(appMenu);
            break;
    }

    //Ajoute à la playlist[] le fichier sélectionné
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
        <div  className="app horizontal glass">
            {/*#########-- Menu Gauche --######### */}
            <nav className="app__menu">
                <ul className="vertical gap">
                    <li className='app__menuButton glass center' onClick={() => setAppMenu('playlist')}>Playlist</li>
                    <li className='app__menuButton glass center' onClick={() => setAppMenu('folder')}>Folder</li>
                    <li className='app__menuButton glass center' onClick={() => setAppMenu('history')}>History</li>
                    <li className='app__menuButton glass center' onClick={() => setAppMenu('help')}>Help</li>
                </ul>
            </nav>
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
                        +
                    </label>
                </div>
            </div>
            {/*#########-- Menu Droite --######### */}
            <div className="app__folder vertical">
                <div className='vertical smallGap'>
                    <div className="app__folderTitle center">Folder</div>
                    <input type="text" className='glass buttonPadding buttonText' />
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
                    <button className='app__editButton glass center'>Folder</button>
                    <button className='app__editButton glass center'>Edit</button>
                    <button className='app__editButton glass center'>Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App