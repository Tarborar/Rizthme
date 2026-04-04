import { useRef, useState } from "react";
import "../Styles/components/AudioPanel.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolume, faVolumeXmark, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

function AudioPanel(){
    const audioRef = useRef(null); //cible la balise <audio>
    const timeRangeRef = useRef(null); //cible l'input range temps de <audio>
    const [isPlaying, setIsPlaying] = useState(true); //vérifie si <audio> est en pause ou play
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isMuted, setIsMuted] = useState(false);

    //Récupère la durée de <audio>
    function loaded(){
        setDuration(audioRef.current.duration); 
    }

    //Met play ou pause <audio>
    function play(){
        if(isPlaying === false){
            audioRef.current.play();
            setIsPlaying(true);
        }else{
            audioRef.current.pause();
            setIsPlaying(false);
        }
    }

    //Récupère le temps actuel de <audio>
    function timeUpdate(){
        setCurrentTime(audioRef.current.currentTime);
        timeRangeRef.current.value = currentTime; //change la value de l'input range en fonction du temps de <audio>
    }

    //onChange du input range
    function changeTimeRange(){
        setCurrentTime(timeRangeRef.current.value);
        audioRef.current.currentTime = timeRangeRef.current.value; //change le temps de <audio> en fonction de la value de l'input range
    }

    //Change le volume de <audio>
    function changeVolume(e){
        audioRef.current.volume = e.target.value;
    }

    //Coupe le son de <audio>
    function mute(){
        isMuted ? (
            audioRef.current.muted = false,
            setIsMuted(false)
        ) : (
            audioRef.current.muted = true,
            setIsMuted(true)
        )   
    }

    return(
        <div className="app__audiopanel">
            <audio 
                src="../src/playlist/Kasbo - Horizon.mp3" 
                ref={audioRef}
                onLoadedMetadata={loaded} 
                onTimeUpdate={timeUpdate}
                autoPlay
            />
            <div className="audiopanel glass horizontal smallGap">
                <div>
                    <div className="audiopanel__cover glass"></div>
                </div>
                <div className="audiopanel__info">
                    <p className="audiopanel__title paragraph">Waiting for a music..</p>
                    <div className="audiopanel__control horizontal">
                        {isPlaying ? (
                            <FontAwesomeIcon icon={faPause} className='audiopanel__icon' onClick={play}/>
                        ) : (
                            <FontAwesomeIcon icon={faPlay} className='audiopanel__icon' onClick={play}/>
                        )}
                        <div className="audiopanel__volume glass horizontal">
                            {isMuted ? (
                                <FontAwesomeIcon icon={faVolumeXmark} className='audiopanel__icon' onClick={mute}/>
                            ) : (
                                <FontAwesomeIcon icon={faVolume} className='audiopanel__icon' onClick={mute}/>
                            )}
                            <input type="range" className="audiopanel__volumeRange" min="0" max="1" step="0.01" onChange={changeVolume} />
                        </div>
                        <div className="audiopanel__time">{Math.floor(currentTime/60)}:{Math.floor(currentTime%60)} / {Math.floor(duration/60)}:{Math.floor(duration%60)}</div>
                    </div>
                    <input type="range" className="audiopanel__timeRange" min="0" max={duration} step="1" ref={timeRangeRef} onChange={changeTimeRange}/>
                </div>
                <FontAwesomeIcon icon={faArrowsRotate} className='audiopanel__icon loopButton'/>
            </div>
        </div>
    )
}

export default AudioPanel