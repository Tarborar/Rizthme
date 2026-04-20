import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function GridEffect() {
    const location = useLocation();
    const isAppPage = location.pathname === '/app'

    useEffect(() => {
        if(isAppPage) return; //pas d'animation pour la page App

        const gridSize = 80;
        
        const createGridDots = () => {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            
            //Récupère la position du body pour aligner les points
            const bodyRect = document.body.getBoundingClientRect();
            const offsetX = bodyRect.left % gridSize;
            const offsetY = bodyRect.top % gridSize;
            
            //Calcul le nombre de points nécessaire
            const cols = Math.ceil(viewportWidth / gridSize) + 2;
            const rows = Math.ceil(viewportHeight / gridSize) + 2;
            
            document.querySelectorAll('.gridDot').forEach(dot => dot.remove());
            
            //Créé des points alignés avec le quadrillage du body
            for (let i = -1; i <= cols; i++) {
                for (let j = -1; j <= rows; j++) {
                    const dot = document.createElement('div');
                    dot.className = 'gridDot';
                    dot.style.left = `${(i * gridSize) + offsetX}px`;
                    dot.style.top = `${(j * gridSize) + offsetY}px`;
                    document.body.appendChild(dot);
                }
            }
        };
        
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            document.querySelectorAll('.gridDot').forEach(dot => {
                const dotX = parseInt(dot.style.left);
                const dotY = parseInt(dot.style.top);
                
                const distance = Math.sqrt(
                    Math.pow(mouseX - dotX, 2) + 
                    Math.pow(mouseY - dotY, 2)
                );
                
                const maxDistance = 240;
                
                if (distance < maxDistance) {
                    const opacity = Math.max(0, 1 - (distance / maxDistance));
                    dot.style.opacity = opacity;
                } else {
                    dot.style.opacity = '0';
                }
            });
        };
        
        createGridDots();
        window.addEventListener('resize', createGridDots);
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('resize', createGridDots);
            window.removeEventListener('mousemove', handleMouseMove);
            document.querySelectorAll('.gridDot').forEach(dot => dot.remove());
        };
    }, [isAppPage]);
    
    return null;
}

export default GridEffect;