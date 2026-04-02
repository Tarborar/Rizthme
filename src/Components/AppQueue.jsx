import "../Styles/components/AppQueue.scss";

function AppQueue({ queue, dragOver, drop }){
    return(
        <div className="app__playlist vertical smallGap center">
            <div className="app__playlistSlot glass" onDragOver={dragOver} onDrop={drop}>
            </div>
            {queue.map((q) =>(
                <audio key={q.id} controls src={q.url}></audio>
            ))}
        </div>
    )
}

export default AppQueue