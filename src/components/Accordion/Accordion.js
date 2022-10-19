import {useRef} from 'react'
import './Accordion.scss'
import {Arrow} from '../Icons/Icons'

const Accordion = () => {

    const elem = useRef(null)
    const el = useRef(null)
    const arrow = useRef(null)

    const openAcc = (index) => {
        let acc = el
            .current
            .querySelectorAll('.acc')
        let elem = acc[index]
        let content = elem.querySelector('.acc-content')
        let arw = elem.querySelector('.arrow')
        arw
            .classList
            .toggle('active')
        content
            .classList
            .toggle('active')
        //arrow.current.classList.toggle('active')
    }

    return (
        <div className='Accordion'>
            <div className='a-text'>
                <h1>Preguntas Frecuentes</h1>
                <p>Aqui hay algunas de las preguntas mas frecuentes. Si tiene otras preguntas que quiera preguntar
                    <br/>
                    por favor escribanos a nuestro correo.</p>
            </div>
            <div ref={el} className='accordion'>
                <div className='acc'>
                    <button onClick={() => openAcc(0)}>
                        <h4>Donde hacemos los eventos?</h4>
                        <Arrow ref={arrow}/>
                    </button>
                    <div ref={elem} className='acc-content'>
                        <p>
                            Por ahora los hacemos en San Salvador y La Libertad, pero nos expandiremos
                            pronto.
                        </p>
                    </div>
                </div>
                <div className='acc'>
                    <button onClick={() => openAcc(1)}>
                        <h4>Como se hacen pedidos en linea?</h4>
                        <Arrow ref={arrow}/>
                    </button>
                    <div ref={elem} className='acc-content'>
                        <p>
                            Los pedidos en linea se hacen desde la sección de contacto, en la cual tiene
                            que detallar el evento que quiere organizar o pedido junto con su direccion de correo 
                            electronico, despues de llenar los campos recivirá en su email un forms donde podra
                            confirmar y detallar su evento o pedido.
                        </p>
                    </div>
                </div>
                <div className='acc'>
                    <button onClick={() => openAcc(2)}>
                        <h4>Cual es el metodo de pago?</h4>
                        <Arrow ref={arrow}/>
                    </button>
                    <div ref={elem} className='acc-content'>
                        <p>
                            El metodo de pago solo se puede llevar a cabo en linea, mediante depositos 
                            bancarios.
                        </p>
                    </div>
                </div>
                <div className='acc'>
                    <button onClick={() => openAcc(3)}>
                        <h4>Que tipo de eventos organiza CakeLab?</h4>
                        <Arrow ref={arrow}/>
                    </button>
                    <div ref={elem} className='acc-content'>
                        <p>
                            Nuestra compañia provee servicios para organizar bodas, eventos empresariales,
                            babyshowers, fiestas de 15 años y fiestas de cumpleaños.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

/*<button className='m-info'>More Info</button>*/

export default Accordion