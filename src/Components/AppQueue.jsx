import "../Styles/components/AppQueue.scss";

function AppQueue({ queue, dragOver, dragAddQueue, dragStart, dragEnd }){
    return(
        <div className="app__playlist vertical smallGap">
            {queue.map((q) =>(
                <div key={q.id} className="app__queue">
                    <div draggable className="queue__folderAudio horizontal glass audioPadding buttonText" onDragStart={(e) => dragStart(e, q)} onDragEnd={(e) => dragEnd(e, q)}>
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