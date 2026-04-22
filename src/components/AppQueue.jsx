import { useReveal } from '../hooks/useReveal';
import '../Styles/utils/revealAnimation.scss';

import "../Styles/components/AppQueue.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';

function AppQueue({ queue, setQueue, dragOver, dragAddQueue, dragStart, dragOutQueue, dragReorderQueue}){
    useReveal();

    //Shuffle la queue
    function shuffleQueue(array){
        const firstInQueue = array[0]; //sauvegarde queue[0] pour l'ajouter à la fin du shuffle
        const newArray = array.slice(1); //copie queue sans queue[0] pour ne pas le shuffle

        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        
        setQueue([firstInQueue, ...newArray]);
    }

    return(
        <div className="app__playlist vertical smallGap">
            {queue.map((q) =>(
                <div key={q.id} className="app__queue">
                    <div 
                        className="queue__folderAudio horizontal glass glassHover audioPadding buttonText" 
                        draggable
                        onDragStart={(e) => dragStart(e, q)} 
                        onDragEnd={(e) => dragOutQueue(e, q)} 
                        onDragOver={dragOver} 
                        onDrop={(e) => dragReorderQueue(e, q)}>
                        <div className="queue__cover ">
                            {q.cover && <img src={q.cover} alt="cover" className="queue__audioCover"/>}
                        </div>
                        <div className="queue__audioTitle paragraph">{q.title}</div>
                    </div>
                </div>
            ))}
            <div className="app__playlistSlot reveal-group reveal revealY" onDragOver={dragOver} onDrop={dragAddQueue}></div>
            <FontAwesomeIcon icon={faShuffle} className='app__icon app__randomize' onClick={() => shuffleQueue(queue)} />
        </div>
    )
}

export default AppQueue