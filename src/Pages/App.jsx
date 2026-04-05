//Data
import { playlist } from "../datas/playlist"

//Composants
import AppNavigation from "../components/AppNavigation";
import AppQueue from "../components/AppQueue";
import AppAddingFile from "../components/AppAddingFile";
import AppFolder from "../components/AppFolder";
import AppEdit from "../components/AppEdit";
import AudioPanel from "../components/AudioPanel";
import RemoveModal from "../components/RemoveModal";
import EditModal from "../components/EditModal";

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
    const [folder, setFolder] = useState(playlist); //doublon de playlist[] pour éditer / supprimer
    const [removeModal, setRemoveModal] = useState (false); //vérifie l'activation de la modale
    const [itemToRemove, setItemToRemove] = useState(null); //stock l'élément dragged pour le remove

    //Affichage de la page centrale de l'application
    switch(appMenu){
        case 'playlist':
            //console.log(appMenu);
            break;
        case 'folder':
            //console.log(appMenu);
            break;
        case 'help':
            //console.log(appMenu);
            break;
        case 'discord':
            //console.log(appMenu);
            break;
    }

    //Ajoute à folder[] le fichier ajouté
    function upload(e){
        const file = e.target.files[0];
        const url = URL.createObjectURL(file)
        setAudioUrl(url);
        console.log(audioUrl);

        const newFile = {
            "id": `${file.name} ${playlist.length+1}`,
            "url": url,
            "title": file.name,
            "cover": ""
        }

        setFolder([...folder, newFile]); //push le nouveau fichier dans folder[]
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
    function dragAddQueue(e){
        e.preventDefault();
        const draggedAudio = JSON.parse(e.dataTransfer.getData('text/plain'));

        setQueue([...queue, draggedAudio]); //push l'item dans queue[]
    }

    //Supprime du tableau folder[] l'item dragged
    function dragRemoveFolder(e){
        e.preventDefault();
        console.log("remove !");

        //Conserve l'élément à supprimer pour le bouton Remove de la modale
        setItemToRemove(JSON.parse(e.dataTransfer.getData('text/plain'))); 

        toggleRemoveModal();
    }

    //Supprime l'élément conservé de dragRemoveFolder()
    function removeFolder(){
        setFolder(folder.filter(item => item.id !== itemToRemove.id));
        setItemToRemove(null);
    }

    //Active ou désactive la modale Remove
    function toggleRemoveModal(){
        setRemoveModal(!removeModal);
    }

    return (
    <div>
        <div className={`appDesign glass ${removeModal ? "modalBackground" : ""}`}>
            <div className="app horizontal glass">
                <AppNavigation setAppMenu={setAppMenu}/>
                <div className="app__main vertical">
                    <AudioPanel />
                    <AppQueue queue={queue} dragOver={dragOver} dragAddQueue={dragAddQueue} />
                    <AppAddingFile upload={upload} />
                </div>
                <div className="app__folder vertical">
                    <AppFolder folder={folder} dragStart={dragStart} />
                    <AppEdit dragOver={dragOver} dragRemoveFolder={dragRemoveFolder} />
                </div>
            </div>
        </div>

        {removeModal && (
            <RemoveModal removeModal={removeModal} toggleRemoveModal={toggleRemoveModal} removeFolder={removeFolder}/>
        )}

    </div>
  )
}

export default App