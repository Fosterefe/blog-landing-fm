import './Hero.scss'
import { Heroo } from '../Icons/Icons'

function Hero() {
  return (
<div className='Hero'>
    <div className='left'>
        <div className='h-text'>
            <h1>A Simple Boorkmark
                <br></br>
                Manager</h1>
            <p>A clean and simple interface to organize your favorite
                <br/>
                websites. Open a new browser tab and see your sites load
                <br/>
                instantly. Try it for free.</p>
        </div>
        <div className='h-btns'>
            <button>Get it on Chrome</button>
            <button>Get it on Firefox</button>
        </div>
    </div>
    <div className='right'>
        <Heroo/>
        <div className='h-b'></div>
    </div>
</div>
  )
}

export default Hero;