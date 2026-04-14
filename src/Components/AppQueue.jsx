import "../Styles/components/AppQueue.scss";

function AppQueue({ queue, dragOver, dragAddQueue, dragStart, dragOutQueue, dragReorderQueue}){
    return(
        <div className="app__playlist vertical smallGap">
            {queue.map((q) =>(
                <div key={q.id} className="app__queue">
                    <div 
                        className="queue__folderAudio horizontal glass audioPadding buttonText" 
                        draggable 
                        onDragStart={(e) => dragStart(e, q)} 
                        onDragEnd={(e) => dragOutQueue(e, q)} 
                        onDragOver={dragOver} 
                        onDrop={(e) => dragReorderQueue(e, q)}>
                        <div className="queue__cover glass">
                            {q.cover && <img src={q.cover} alt="cover" className="queue__audioCover"/>}
                        </div>
                        <div className="queue__audioTitle paragraph">{q.title}</div>
                    </div>
                </div>
            ))}
            <div className="app__playlistSlot" onDragOver={dragOver} onDrop={dragAddQueue}></div>
        </div>
    )
}

export default AppQueue