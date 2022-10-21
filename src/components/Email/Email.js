import './Email.scss';
import emailjs from '@emailjs/browser';
import React from 'react'
import {useState} from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';

function Email() {
    const [error, setError] = useState(false)
    const [input, setInput] = useState('')
    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const [fields, setFields] = useState(false);

    const inn = useRef(null)
    const form = useRef(null)
    const btn = useRef(null)

    //var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const handleInput = (e) => {
        e.preventDefault();

        if (input.trim() === '' || text.trim() === '' || name.trim() === '') 
            return setFields(true)

        emailjs
            .sendForm(
                'service_txau0x5',
                'template_xjhevgm',
                form.current,
                '1HM2kbzEYrjjOkWRT'
            )
            .then((result) => {
                console.log(result.text);
                setError(false)
                setText('')
                setInput('')
                setName('')
                setFields(false)
            }, (error) => {
                console.log(error.text);
                setError(true)
            });
    }

    useEffect(() => {
        if (error) {
            inn
                .current
                .classList
                .add('active')
            btn
                .current
                .classList
                .add('active')
        } else {
            inn.current.classList = 'email'
            btn.current.classList = 'submit'
        }
    }, [error])

    return (
        <div className='Email' id='email'>
            <div className='e-text'>
                <h4>Contactanos para organizar tu evento</h4>
                <h1>Envianos un mensaje a nuestro email
                    <br/>
                    para empezar a organizar tu evento o tu pedido
                </h1>
            </div>
            <div className='input'>
                <form ref={form} onSubmit={(e) => handleInput(e)}>
                    <div className='i-div'>
                        <input
                            className='name'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            name='user_name'
                            placeholder='Ingresa tu nombre o el nombre de tu compañia'/>
                        <textarea
                            type='text'
                            placeholder='Detalla tu pedido o evento'
                            value={text}
                            onChange={e => setText(e.target.value)}/>
                        <div className='email-class'>
                            <input
                                ref={inn}
                                className='email'
                                onChange={(e) => setInput(e.target.value)}
                                value={input}
                                name='user_email'
                                placeholder='Ingresa tu direccion de email'/> {
                                error && (
                                    <div className='error'>
                                        <p>Whoops, asegurate que el correo sea valido!</p>
                                    </div>
                                )
                            }
                        </div>
                        <button className='submit' ref={btn}>Contactanos</button>

                        {
                            fields
                                ? <p className='fields'>Procura llenar todos los campos</p>
                                : <></>
                        }
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Email