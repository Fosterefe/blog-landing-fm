import React from 'react'
import './cakes.scss'
import Navbar from '../Navbar/Navbar'
import pastelChocolate from '../../images/pastelChocolate.jpg'
import pastelVainilla from '../../images/pastelVainilla.jpg'
import pastelFresa from '../../images/pastelFresa.jpg'

function Cakes() {

    return (
        <div className='Cakes'>
            <Navbar change={true}/>
            <div className='wrapper'>
                <div className='header-cakes'>
                    <h1>Pasteles</h1>
                </div>
                <div className='cakes-content'>
                    <Cake img={pastelChocolate} name={'Pastel de Chocolate'}/>
                    <Cake img={pastelVainilla} name={'Pastel de Vainilla'}/>
                    <Cake img={pastelFresa} name={'Pastel de Fresa'}/>
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
            <p className='covertura'>La covertura puede ser de turrón o fondan</p>
        </div>
    )
}

export default Cakes