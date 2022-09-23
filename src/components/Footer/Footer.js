import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='Footer'>
        <nav>
            <div className='f-logo'>
                <FontAwesomeIcon icon={faBookmark}/>
                <h3>BOOKMARK</h3>
            </div>
            <ul>
                <li>
                    <a>FEATURES</a>
                </li>
                <li>
                    <a>PRICING</a>
                </li>
                <li>
                    <a>CONTACT</a>
                </li>
            </ul>
            <div className='f-social'>
                <FontAwesomeIcon  icon={faFacebook}/>
                <FontAwesomeIcon icon={faTwitter} />
            </div>
        </nav>
    </div>
  )
}

export default Footer