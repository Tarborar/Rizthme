import {useState, useEffect } from 'react';

//Récupère la taille de l'écran pour le responsive
function useWindowWidth(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    return windowWidth;
}

export default useWindowWidth;