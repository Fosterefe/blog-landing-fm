import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='Footer'>
        <nav>
            <div className='f-logo'>
                <FontAwesomeIcon icon={faBookmark}/>
                <h3>CakeLab</h3>
            </div>
            <ul>
                <li>
                    <a href='#nosotros'>NOSOTROS</a>
                </li>
                <li>
                    <a href='#content'>CONTENIDO</a>
                </li>
                <li>
                    <a href='#email'>CONTACTO</a>
                </li>
            </ul>
            <div className='f-social'>
                <a href='https://www.instagram.com/cakelab_sv/' target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        </nav>
    </div>
  )
}

/*<a><FontAwesomeIcon  icon={faFacebook}/></a>*/ 

export default Footer