import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import cakelabicon from '../../images/cakelabicon.png'

function Navbar({change}) {

    const [open, setOpen] = useState(false)

    const click = (e) => {
        setOpen((value) => value ? false : true)

        console.log(e.target)

    }

    const close = () => {
        setOpen(false)
    }


    return (
<div className='Nabvar'>
    <nav className={open ? 'nav active' : 'nav'}>
        <Link to={'/'} className='Logo'>
            <img src={cakelabicon} alt='logo-img' className='logo-icon'/>
            <h3>CakeLab</h3>
        </Link>
        <ul className='nav-links'>
            {
                change ?
                <><li onClick={e => close()}>
                <a href='/cakes'>PASTELLES</a>
                </li>
                <li onClick={e => close()}>
                <a href='/rellenos'>RELLENOS</a>
                </li>
                <li className='contact' onClick={e => close()}>
                <a href='/toppings'>TOPPINGS</a>
                </li></>
                :
                <>
                <li onClick={e => close()}>
                <a href='#nosotros'>NOSOTROS</a>
                </li>
                 <li onClick={e => close()}>
                <a href='#content'>CONTENIDO</a>
                </li>
                <li className='contact' onClick={e => close()}>
                <a href='#email'>CONTACTO</a>
                </li></>
            }
        </ul>
        <div className='burger' onClick={e => click(e)}>
            <FontAwesomeIcon icon={faBars}/>
        </div>
        {
        open && (
            <div className='socials'>
                <a href='https://www.instagram.com/cakelab_sv/'><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        )
        }
    </nav>
</div>
    )
}
/*<FontAwesomeIcon icon={faBookmark} className='logo-svg'/> */
/*<FontAwesomeIcon  icon={faFacebook}/>*/
export default Navbar