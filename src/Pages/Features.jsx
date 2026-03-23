import '../Styles/Pages/Features.scss';
import Logo from '../assets/Logo.svg';

function Features() {
    return (
    <div className="features center vertical gap">
        <h2>Features</h2>
        <div className='logo'>
            <img src={Logo} alt="Logo" />
        </div>
        <div className='horizontal gap'>
            <div className='features__card glass features__cardUp'>
                <h3 className='smallTitle'>Playlist</h3>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
            </div>
            <div className='features__card glass'>
                <h3 className='smallTitle'>Interactif</h3>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
            </div>
            <div className='features__card glass features__cardUp'>
                <h3 className='smallTitle'>Sans pub</h3>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
            </div>
        </div>
    </div>
  )
}

export default Features