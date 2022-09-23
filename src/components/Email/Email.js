import './Email.scss';

import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function Email() {
    const [error, setError] = useState(false)
    const [input, setInput] = useState('')

    const inn = useRef(null)
    const btn = useRef(null)

    const handleInput = (e) => {
        e.preventDefault();
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(input))
        {
            setError(false)
        }
        else {
            setError(true)
        }
    }

    useEffect(() => {
        if(error) {
            inn.current.classList.add('active')
            btn.current.classList.add('active')
        }
        else {
            inn.current.classList = 'email'
            btn.current.classList ='submit' 
        }
    }, [error])
    
  return (
    <div className='Email'>
        <div className='e-text'>
            <h4>35,000 + ALREADY JOINED</h4>
            <h1>Stay up-to-date with what<br/>
            we're doing</h1>
        </div>
        <div className='input'>
            <form onSubmit={(e) => handleInput(e)}>
                <input ref={inn} className='email' onChange={(e) => setInput(e.target.value)}  defaultValue={input} placeholder='Enter your email address' />
                {
                        error && (
                            <div className='error'>
                                <p>Whoops, make sure it's an email</p>
                            </div>
                        )
                }
                <button className='submit' ref={btn}>Contact Us</button>
            </form>
        </div>
    </div>
  )
}

export default Email