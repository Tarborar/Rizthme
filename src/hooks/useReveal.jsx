import { useEffect } from 'react';

export function useReveal() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        }, {
            threshold: 0.1, // Déclenche quand 10% de l'élément est visible
            rootMargin: "0px 0px -50px 0px" // Petit délai pour éviter les animations trop rapides
        });

        // Observe tous les éléments avec la classe .reveal
        const revealElements = document.querySelectorAll(".reveal");
        revealElements.forEach(el => observer.observe(el));

        // Gère les délais pour les groupes .reveal-group
        const revealGroups = document.querySelectorAll(".reveal-group");
        revealGroups.forEach(group => {
            const items = group.querySelectorAll(".reveal");
            items.forEach((el, index) => {
                el.style.transitionDelay = `${index * 100}ms`;
            });
        });

        return () => {
            revealElements.forEach(el => observer.unobserve(el));
            observer.disconnect();
        };
    }, []);
}