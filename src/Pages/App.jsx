import { useState } from 'react';
import '../Styles/pages/App.scss'

function App() {
    const [appMenu, setAppMenu] = useState('playlist');

    switch(appMenu){
        case 'playlist':
            console.log(appMenu);
            break;
        case 'folder':
            console.log(appMenu);
            break;
        case 'history':
            console.log(appMenu);
            break;
        case 'help':
            console.log(appMenu);
            break;
    }

    return (
    <div className="appDesign glass">
        <div  className="app horizontal glass">
            <nav className="app__menu">
                {/* Icon */}
                <ul className="vertical gap">
                    <li className='app__menuButton glass center' onClick={() => setAppMenu('playlist')}>Playlist</li>
                    <li className='app__menuButton glass center' onClick={() => setAppMenu('folder')}>Folder</li>
                    <li className='app__menuButton glass center' onClick={() => setAppMenu('history')}>History</li>
                    <li className='app__menuButton glass center' onClick={() => setAppMenu('help')}>Help</li>
                </ul>
            </nav>
            <div className="app__main vertical">
                <div className="app__playlist">
                    {/* Liste des musiques à jouer */}
                    <div className='center'>Menu {appMenu}</div>
                </div>
                <div className="app__add">
                    <label htmlFor="file-upload" className="app__addButton glass center">
                        <input id='file-upload' type='file' />
                        +
                    </label>
                </div>
            </div>
            <div className="app__folder vertical">
                <div>
                    <input type="text" className='glass buttonPadding buttonText' />
                    <div>
                        {/* Liste des fichiers .mp3 */}
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