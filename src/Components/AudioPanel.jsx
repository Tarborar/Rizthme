import { useRef, useState, useEffect } from "react";
import "../Styles/components/AudioPanel.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolume, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

function AudioPanel(){
    const audioRef = useRef(null); //cible la balise <audio>
    const [isPlaying, setIsPlaying] = useState(true); //vérifie si <audio> est en pause ou play
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(null);

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
        setCurrentTime(audioRef.current.currentTime)
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
                            <FontAwesomeIcon icon={faVolume} className='audiopanel__icon'/>
                            <input type="range" className="audiopanel__volumeRange" />
                        </div>
                        <div className="audiopanel__time">{Math.floor(currentTime/60)}:{Math.floor(currentTime%60)} / {Math.floor(duration/60)}:{Math.floor(duration%60)}</div>
                    </div>
                    <input type="range" className="audiopanel__timeRange" min="0" max={duration} step="1" value={currentTime}/>
                </div>
                <FontAwesomeIcon icon={faArrowsRotate} className='audiopanel__icon loopButton'/>
            </div>
        </div>
    )
}

export default AudioPanel