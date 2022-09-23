import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

function Navbar() {

    const [open, setOpen] = useState(false)

    const click = () => {
        setOpen((value) => value ? false : true)
    }

    return (
<div className='Nabvar'>
    <nav className={open ? 'nav active' : 'nav'}>
        <div className='Logo'>
            <FontAwesomeIcon icon={faBookmark}/>
            <h3>BOOKMARK</h3>
        </div>
        <ul className='nav-links'>
            <li>
                <a href='#'>FEATURES</a>
            </li>
            <li>
                <a href='#'>PRICING</a>
            </li>
            <li className='contact'>
                <a href='#'>CONTACT</a>
            </li>
            <li className='login'>
                <a href='#'>LOGIN</a>
            </li>
        </ul>
        <div className='burger' onClick={click}>
            <FontAwesomeIcon icon={faBars}/>
        </div>
        {
        open && (
            <div className='socials'>
                <FontAwesomeIcon  icon={faFacebook}/>
                <FontAwesomeIcon icon={faTwitter} />
            </div>
        )
        }
    </nav>
</div>
    )
}


export default Navbar