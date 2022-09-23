import React from 'react'

function Card({ icon, browser, version, marginTop }) {
  return (
<div className='Card' style={{ marginTop: `${marginTop}rem` }}>
    <div className='c-content'>
        <div className='Icon'>
            {icon}
        </div>
        <div className='c-text'>
            <h4>Add to {browser}</h4>
            <p>Minimum version {version}</p>
        </div>
    </div>
    <div className='c-btn'>
      <button>Add & Install Extention</button>
    </div>
</div>
  )
}

export default Card