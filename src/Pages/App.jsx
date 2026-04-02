//Data
import { playlist } from "../datas/playlist"

//Composants
import AppNavigation from "../components/AppNavigation";
import AppQueue from "../components/AppQueue";
import AppAddingFile from "../components/AppAddingFile";
import AppFolder from "../components/AppFolder";
import AppEdit from "../components/AppEdit";
import AudioPanel from "../components/AudioPanel";

//Hook
import { useState } from 'react';

//CSS
import '../Styles/pages/App.scss'

/* Icon
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
*/

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
        console.log(audioUrl);

        playlist.push(
            {
                "id": `${file.name} ${playlist.length+1}`,
                "url": url,
                "title": file.name,
                "cover": ""
            }
        )
    }

    //Set les données pour le drop
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
            <AppNavigation setAppMenu={setAppMenu}/>
            <div className="app__main vertical">
                <AudioPanel />
                <AppQueue queue={queue} dragOver={dragOver} drop={drop} />
                <AppAddingFile upload={upload} />
            </div>
            <div className="app__folder vertical">
                <AppFolder playlist={playlist} dragStart={dragStart} />
                <AppEdit />
            </div>
        </div>
    </div>
  )
}

export default App