import './Tabs.scss'
import { Tab1, Tab2, Tab3 } from '../Icons/Icons'
import innovacion from '../../images/innovacion.jpg'
import mision1 from '../../images/mision1.webp'
import vision from '../../images/vision.jpg'
import { useState } from 'react'

function Tabs() {
    const [currentTab, setCurrentTab] = useState(1)

    const clickHandler = (e) => {
        let value = e.target.dataset.id
        setCurrentTab(parseInt(value))
    } 

    const display = () => {
        if(currentTab === 1) {
            return (
                <> 
                    <div className='tf-left'>
                        <img src={innovacion} className='tab-img'/>
                    </div>
                    <div className='tf-bg'></div>
                    <div className='tf-right'>
                        <h1>Nuestra innovación</h1>
                        <p>Somos innovadores porque tomamos el servicio preexistente de pasteles para eventos y lo llevamos a nuevas alturas, desde la personalización hasta la decoración en vivo.​</p>
                        
                    </div>
                </>
            )
        } 
        if (currentTab === 2) {
            return (
                <>
                    <div className='tf-left'>
                        <img src={mision1} className='tab-img'/>
                    </div>
                    <div className='tf-bg'></div>
                    <div className='tf-right'>
                        <h1>Nuestra Misión</h1>
                        <p>Brindar a nuestros clientes una experiencia inolvidable para sus eventos.</p>
                       
                    </div>
                </>
            )
        }
        if (currentTab === 3) {
            return (
                <>
                    <div className='tf-left'>
                        <img src={vision} className='tab-img'/>
                    </div>
                    <div className='tf-bg'></div>
                    <div className='tf-right'>
                        <h1>Nuestra Visión</h1>
                        <p>A largo plazo ser reconocidos por nuestro profesionalismo y dinámicas innovadoras.</p>
                        
                    </div>
                </>
            )
        }
    }

  return (
<div className='Tabs' id='nosotros'>
    <div className='f'>
        <h1>CakeLab</h1>
        <p>Cake Lab es una compañía en donde vendemos pasteles personalizados para eventos, con decoración en vivo para que tu día especial sea inolvidable.</p>
    </div>
    <div className='tab-changer'>
        <div className='tc-container'>
            <h3 onClick={(e) => clickHandler(e)} data-id={1} >Innovadores</h3>
            <h3 onClick={(e) => clickHandler(e)} data-id={2} >Misión</h3>
            <h3 onClick={(e) => clickHandler(e)} data-id={3} >Visión</h3>
        </div>
        <div className='bar'></div>
    </div>
    <div className='t-footer'>
        {
            display()
        }
    </div>

</div>
  )
}

export default Tabs