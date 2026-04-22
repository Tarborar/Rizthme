import { useReveal } from '../hooks/useReveal';
import '../Styles/utils/revealAnimation.scss';

import '../Styles/pages/Features.scss';
import Logo from '../assets/Logo.svg';

function Features() {
    useReveal();

    return (
    <div className="features center vertical gap reveal-group">
        <h2 className='reveal revealY'>Features</h2>
        <div className='logo reveal revealY'>
            <img src={Logo} alt="Logo" />
        </div>
        <div className='features__cards horizontal gap reveal revealY'>
            <div className='features__card glass glassHover features__cardUp'>
                <h3 className='smallTitle'>Playlist</h3>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
            </div>
            <div className='features__card glass glassHover'>
                <h3 className='smallTitle'>Interactif</h3>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
            </div>
            <div className='features__card glass glassHover features__cardUp'>
                <h3 className='smallTitle'>Sans pub</h3>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
            </div>
        </div>
    </div>
  )
}

export default Features