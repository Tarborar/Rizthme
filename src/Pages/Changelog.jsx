import { useEffect } from "react"
import { changelogList } from "../datas/changelogList"
import '../Styles/pages/Changelog.scss'

function Changelog() {

    //Active le scroll uniquement pour la page ChangeLog
    useEffect(() => {
        document.body.style.overflowY = 'auto';
        return () => {
            document.body.style.overflowY = 'hidden';
        };
    }, []);

    return (
        <div className="changelog vertical gap">
            <h2 className="center">Changelog</h2>
            {
                changelogList.map((c) => (
                    <div key={c.date} className="changelog__container horizontal gap">
                        <div className="glass changelog__date buttonPadding buttonText">
                            {c.date}
                        </div>
                        <div className="changelog__info vertical gap">
                            <h3 className="changelog__title smallTitle">
                                {c.title}
                            </h3>
                            <p className="changelog__paragraph paragraph glass">
                                {/* Parcoure le tableau "paragraphs" pour le saut à la ligne entre chaque paragraphe */}
                                {c.paragraphs.map((p, i) => ( 
                                    <span key={i}>
                                        {p} 
                                        <br />
                                        <br />
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Changelog