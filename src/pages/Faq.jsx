import { useReveal } from '../hooks/useReveal';
import '../Styles/utils/revealAnimation.scss';

import { useState } from 'react';
import '../Styles/pages/Faq.scss';
import useWindowWidth from '../hooks/useWindowWidth';

function Faq() {
    useReveal();
    
    const [faqClicked, setFaqClicked] = useState(null);

    const windowWidth = useWindowWidth();
    const isTablet = windowWidth < 1024;
    const isMobile = windowWidth < 767;

    //Diamètre du cercle extérieur
    const size = isMobile ? 410 : (isTablet ? 800 : 1100);
    const center = size / 2;
    const outerRadius = isMobile ? 140 : (isTablet ? 300 : 520);

    //Diamètre du second cercle intérieur
    const innerRadius = isMobile ? 190 : (isTablet ? 390 : 390);

    //Nombre de segment
    const segments = 3;

    //Amplitude de l'arc de cercle
    const spacing = 0.35;
    const startAngle = -Math.PI * (0.5 + spacing);
    const endAngle = -Math.PI * (0.5 - spacing);

    //Espace entre les segments
    const gapPx = isMobile ? 16 : (isTablet ? 25 : 50);
    const gapAngle = gapPx / outerRadius;

    //Convertit les coordonnées (rayon, angle) en coordonnées (x, y) pour placer <path />
    function polarToCartesian(cx, cy, r, angle){
        return {
            x: cx + r * Math.cos(angle),
            y: cy + r * Math.sin(angle),
        }
    }

    function createSlicePath(i){
        const totalAngle = endAngle - startAngle; //amplitude totale

        const totalGap = gapAngle * (segments - 1); //amplitude totale des espaces

        const usableAngle = totalAngle - totalGap; //amplitude totale des segments (sans les espaces)

        const sliceAngle = usableAngle / segments; //amplitude de chaque segment[i]

        const angleStart = startAngle + i * (sliceAngle + gapAngle); //position de départ du segment[i] + adapte le décalage pour segment[i+1]

        const angleEnd = angleStart + sliceAngle; //position de fin du segment[i]

        //Récupère les coordonnées (x, y) de fin et de début de l'arc[i] extérieur
        const outerStart = polarToCartesian(center, center, outerRadius, angleStart);
        const outerEnd = polarToCartesian(center, center, outerRadius, angleEnd);

        //Récupère les coordonnées (x, y) de fin et de début de l'arc[i] intérieur
        const innerStart = polarToCartesian(center, center, innerRadius, angleStart);
        const innerEnd = polarToCartesian(center, center, innerRadius, angleEnd);

        /*
        (M)Move to
        (A)Arc

        (L)Line to
        (A)Arc

        (Z)Close path
        */
        return `
            M ${outerStart.x} ${outerStart.y}
            A ${outerRadius} ${outerRadius} 0 0 1 ${outerEnd.x} ${outerEnd.y}
            L ${innerEnd.x} ${innerEnd.y}
            A ${innerRadius} ${innerRadius} 0 0 0 ${innerStart.x} ${innerStart.y}
            Z
        `;
    }

    let inputContent;
    let titleContent;
    let answerContent;

    switch(faqClicked){
        case 0:
            inputContent = "Menu 1";
            titleContent = "Comment utiliser Discord ?"
            answerContent = " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy nibh"
            break;
        case 1:
            inputContent = "Menu 2";
            titleContent = "Comment changer de musique ?"
            answerContent = " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat"
            break;
        case 2:
            inputContent = "Menu 3";
            titleContent = "Est-ce que c'est gratuit ?"
            answerContent = " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy nibh consectetuer adipiscing elit, sed diam"
            break;
        default:
            inputContent = "Une question ?";
            titleContent = "Appuyez sur un bouton"
            answerContent = " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam consectetuer adipiscing elit, sed diam nonummy nibh"
            break;
    }

    return (
        <div className="faq vertical center gap reveal-group">
            <h2 className='reveal revealY'>FAQ</h2>
            <svg
                viewBox={`0 0 ${size} ${size}`}
                className="faq-svg reveal revealY"
            >
                {Array.from({ length: segments }).map((_, i) => (
                    <a key={i} href={`#${i}`}>
                        <path 
                            className='path' 
                            d={createSlicePath(i)} 
                            onClick={() => setFaqClicked(i)}
                        />
                    </a>
                ))}
            </svg>
            
            <button className='faq__button glass glassHover buttonPadding buttonText reveal revealY'>{inputContent}</button>
            <h3 className='faq__title smallTitle reveal revealY'>{titleContent}</h3>
            <p className='faq__paragraph paragraph glass glassHover'>{answerContent}</p>
        </div>
    )
}

export default Faq