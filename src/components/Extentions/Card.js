import React from 'react'
import { NavLink } from 'react-router-dom'

function Card({ icon, browser, version, marginTop, url }) {
  return (
<div className='Card' style={{ marginTop: `${marginTop}rem` }}>
    <div className='c-content'>
        <div className='Icon'>
            <img src={icon}  />
        </div>
        <div className='c-text'>
            <h4>{browser}</h4>
        </div>
    </div>
    <div className='c-btn'>
      <NavLink to={url}>Ver</NavLink>
    </div>
</div>
  )
}

export default Card