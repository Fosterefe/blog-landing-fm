import React from 'react'
import rellenoChocolate from '../../images/rellenoChocolate.jpg'
import rellenoCaramelo from '../../images/rellenoCaramelo.jfif'
import rellenoMoca from '../../images/rellenoMoca.jfif'
import cremadeMantequilla from '../../images/cremadeMantequilla.jpg'
import rellenoFresa from '../../images/rellenoFresa.jpg'
import Navbar from '../Navbar/Navbar'

function Rellenos() {
    return (
        <div className='Cakes'>
            <Navbar change={true}/>
            <div className='wrapper'>
                <div className='header-cakes'>
                    <h1>Rellenos</h1>
                </div>
                <div className='cakes-content'>
                    <Relleno img={rellenoChocolate} name={'Relleno de chocolate'}/>
                    <Relleno img={rellenoMoca} name={'Relleno de Moca'}/>
                    <Relleno img={rellenoCaramelo} name={'Relleno de Caramelo'}/>
                    <Relleno img={cremadeMantequilla} name={'Relleno de Mantequilla'} />
                    <Relleno img={rellenoFresa} name={'Relleno de Fresa'} />
                </div>
            </div>
        </div>
    )
}

function Relleno({img, name}) {
  return (
      <div className='cake'>
          <img src={img}/>
          <p>{name}</p>
      </div>
  )
}

export default Rellenos