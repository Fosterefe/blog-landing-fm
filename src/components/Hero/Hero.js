import './Hero.scss'
import cshop from '../../images/cshop.svg'
import { NavLink } from 'react-router-dom'

function Hero() {
    

  return (
<div className='Hero'>
    <div className='left'>
        <div className='h-text'>
            <h1>CakeLab</h1>
            <p>Making sweet memories</p>
        </div>
        <div className='h-btns'>
            <a href='#email'>Contactanos</a>
            <a href='#content'>Productos</a>
        </div>
    </div>
    <div className='right'>
        <img src={cshop} className='hero-img'/>
        <div className='h-b'></div>
    </div>
</div>
  )
}

export default Hero;