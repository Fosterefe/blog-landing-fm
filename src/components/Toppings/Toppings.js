import React from 'react'
import toppingFresa from '../../images/toppingFresa.jpg'
import toppingGalleta from '../../images/toppingGalleta.jfif'
import toppingMarshmellow from '../../images/toppingMarshmellow.jpg'
import toppingMelocoton from '../../images/toppingMelocoton.jfif'
import toppingUvas from '../../images/toppingUvas.jpg'
import Navbar from '../Navbar/Navbar'

function Toppings() {
    return (
        <div className='Cakes'>
            <Navbar change={true}/>
            <div className='wrapper'>
                <div className='header-cakes'>
                    <h1>Toppings</h1>
                </div>
                <div className='cakes-content'>
                    <Cake img={toppingFresa} name={'Topping de Fresa'}/>
                    <Cake img={toppingMarshmellow} name={'Topping de Marshmellow'}/>
                    <Cake img={toppingGalleta} name={'Topping de Galleta'}/>
                    <Cake img={toppingMelocoton} name={'Topping de Melocoton'} />
                    <Cake img={toppingUvas} name={'Topping de Uvas'}/>
                </div>
            </div>
        </div>
    )
}

function Cake({img, name}) {
    return (
        <div className='cake'>
            <img src={img}/>
            <p>{name}</p>
        </div>
    )
}

export default Toppings