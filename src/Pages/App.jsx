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
import FolderModal from "../components/FolderModal";

//Hook
import { useState } from 'react';

//CSS
import '../Styles/pages/App.scss'

function App() {
    //useState
    const [appMenu, setAppMenu] = useState('playlist'); //affichage menu central
    const [audioUrl, setAudioUrl] = useState(null); //url local du fichier audio
    const [queue, setQueue] = useState([]); //playlist en attente de jouer
    const [folder, setFolder] = useState(playlist); //doublon de playlist[] pour éditer / supprimer

    //modale
    const [folderModal, setFolderModal] = useState(false); //vérifie l'activation de la modale folder
    const [editModal, setEditModal] = useState(false); //vérifie l'activation de la modale edit
    const [removeModal, setRemoveModal] = useState (false); //vérifie l'activation de la modale remove
    
    const [itemToEdit, setItemToEdit] = useState(null); //stock l'élément dragged pour l'edit
    const [itemToRemove, setItemToRemove] = useState(null); //stock l'élément dragged pour le remove
    
    const [editTitleValue, setEditTitleValue] = useState(""); //stock la valeur de l'input title
    const [editCoverUrl, setEditCoverUrl] = useState(null); //url local de l'image cover

    const [folderNameValue, setFolderNameValue] = useState(""); //stock la valeur de l'input folderModal

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
            "id": `${file.name}-${playlist.length+1}`,
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

        if(draggedAudio.folder){
            setQueue([...queue, ...draggedAudio.files]); //push tous les items de .files[] dans queue[]
        }else{
            const newAdd = {
                "id": `${draggedAudio.title}-${queue.length+1}`,
                "url": draggedAudio.url,
                "title": draggedAudio.title,
                "cover": draggedAudio.cover,
                "queue": true
            }

            setQueue([...queue, newAdd]);
        }
    }

    //Supprime du tableau folder[] l'item dragged
    function dragRemoveFolder(e){
        e.preventDefault();
        
        const draggedAudio = JSON.parse(e.dataTransfer.getData('text/plain'));
        const draggedFileId = e.dataTransfer.getData('draggedFileId'); // récupère l'id du files[x] dragged

        //Sélectionne l'audio depuis un .files[x]
        if(draggedAudio.folder && draggedFileId){
            const file = draggedAudio.files.find(f => f.id === draggedFileId);
            setItemToRemove(file);
        }
        //Sélectionne l'audio normal
        else {
            setItemToRemove(draggedAudio);
        }

        toggleRemoveModal();
        console.log(draggedAudio);
    }

    //Supprime l'élément conservé de dragRemoveFolder()
    function removeFolder(){

        //Si c'est un folder
        if(itemToRemove.folder){
            setFolder(folder.filter(f => f.id !== itemToRemove.id));
            setItemToRemove(null);
            return;
        }

        //Si c'est un file dans un folder
        let newFolder = folder.map(f => {
            if(f.folder){
                return {
                    ...f,
                    files: f.files.filter(file => file.id !== itemToRemove.id)
                };
            }
            return f;
        });

        //Si c'est hors d'un folder
        newFolder = newFolder.filter(f => f.id !== itemToRemove.id);

        setFolder(newFolder);
        setItemToRemove(null);
    }

    //Active ou désactive la modale Remove
    function toggleRemoveModal(){
        setRemoveModal(!removeModal);
    }

    //Conserve l'élement à éditer pour l'interface de la modale Edit
    function dragEditFolder(e){
        e.preventDefault();

        const draggedAudio = JSON.parse(e.dataTransfer.getData('text/plain'));
        const draggedFileId = e.dataTransfer.getData('draggedFileId'); // récupère l'id du files[x] dragged

        //Sélectionne l'audio depuis un .files[x]
        if(draggedAudio.folder && draggedFileId){
            const file = draggedAudio.files.find(f => f.id === draggedFileId);
            setItemToEdit(file);
        }
        //Sélectionne l'audio normal
        else {
            setItemToEdit(draggedAudio);
        }

        toggleEditModal();
    }

    //Edit l'élément conservé de dragEditFolder
    function editFolder(){

        //Si c'est un folder
        if(itemToEdit.folder){
            //Parcours folder pour changer title et cover édité
            setFolder(folder.map(item =>
            item.id === itemToEdit.id ? {... item, title: editTitleValue || itemToEdit.title, cover: editCoverUrl} : item));
            setItemToEdit(null);
            return;
        }

        //Si c'est un file dans un folder
        let newFolder = folder.map(f => {
            if(f.folder){
                return {
                    ...f,
                    files: f.files.map(item =>
                        item.id === itemToEdit.id ? {... item, title: editTitleValue || itemToEdit.title, cover: editCoverUrl} : item
                    )
                };
            }
            return f;
        });

        //Si c'est hors d'un folder
        newFolder = newFolder.map(item => item.id === itemToEdit.id ? {... item, title: editTitleValue || itemToEdit.title, cover: editCoverUrl} : item);

        setFolder(newFolder);
        
        //Reset les useState pour le prochain edit
        setItemToEdit(null); 
        setEditTitleValue("");
        setEditCoverUrl(null);
    }

    //Active ou désactive la modale Edit
    function toggleEditModal(){
        setEditModal(!editModal);
    }

    //Edit la cover depuis la modale
    function editUploadCover(e){
        const file = e.target.files[0];
        const url = URL.createObjectURL(file)
        setEditCoverUrl(url); //conserve l'url locale
    }

    //Active ou désactive la modale Folder
    function toggleFolderModal(){
        setFolderModal(!folderModal);
    }

    function createFolder(){
        const newFile = {
            "id": `${folderNameValue}-${playlist.length+1}`,
            "folder": true,
            "title": folderNameValue,
            "files": []
        }

        setFolder([...folder, newFile]); //push le nouveau fichier dans folder[]

        setFolderNameValue(""); //reset pour le prochain create folder
    }

    //Ajoute <audio> dans le folder dragged .files[]
    function dragAddInFolder(e, folderItem){
        e.preventDefault();
        const draggedAudio = JSON.parse(e.dataTransfer.getData('text/plain'));

        setFolder(folder.map(item =>
            item.id === folderItem.id && item.folder //parcours folder pour trouver l'audio dragged avec l'id
            ? { ...item, files: [...item.files, draggedAudio] } //push dans files[]
            : item
        )
        .filter(item => item.id !== draggedAudio.id) //enlève l'item dragged de folder
        );
    }

    //Remove l'élement de queue s'il est dragged en dehors de app__main
    function dragEnd(e, audio){

        //Récupère la position de la souris à la fin du drag
        const x = e.clientX;
        const y = e.clientY;
        
        //Obtient l'élément sous la souris
        const elementUnderCursor = document.elementsFromPoint(x, y);
        
        //Vérifie si l'élément a la classe .app__main
        const isInsideAppMain = elementUnderCursor.some(element => element.classList?.contains('app__main'));
        
        if (!isInsideAppMain && audio.queue) {
            setQueue(queue.filter(item => item.id !== audio.id));
        }
    }

    return (
    <div>
        <div className={`appDesign glass ${removeModal || editModal || folderModal ? "modalBackground" : ""}`}>
            <div className="app horizontal glass">
                <AppNavigation setAppMenu={setAppMenu}/>
                <div className="app__main vertical">
                    <AudioPanel queue={queue} setQueue={setQueue}/>
                    <AppQueue queue={queue} dragOver={dragOver} dragAddQueue={dragAddQueue} dragStart={dragStart} dragEnd={dragEnd}/>
                    <AppAddingFile upload={upload} />
                </div>
                <div className="app__folder vertical">
                    <AppFolder folder={folder} dragStart={dragStart} dragOver={dragOver} dragAddInFolder={dragAddInFolder}/>
                    <AppEdit dragOver={dragOver} dragRemoveFolder={dragRemoveFolder} dragEditFolder={dragEditFolder} toggleFolderModal={toggleFolderModal}/>
                </div>
            </div>
        </div>

        {folderModal && (
            <FolderModal toggleFolderModal={toggleFolderModal} setFolderNameValue={setFolderNameValue} createFolder={createFolder}/>
        )}

        {editModal && (
            <EditModal 
                editFolder={editFolder} 
                toggleEditModal={toggleEditModal} 
                itemToEdit={itemToEdit} 
                editUploadCover={editUploadCover}
                setEditTitleValue={setEditTitleValue}
                editCoverUrl={editCoverUrl}
            />
        )}

        {removeModal && (
            <RemoveModal removeModal={removeModal} toggleRemoveModal={toggleRemoveModal} removeFolder={removeFolder} />
        )}

    </div>
  )
}

export default App