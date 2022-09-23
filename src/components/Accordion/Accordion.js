import { useRef } from 'react'
import './Accordion.scss'
import	{ Arrow } from '../Icons/Icons'

const Accordion = () => {

    const elem = useRef(null)
    const el = useRef(null)
    const arrow = useRef(null)

    const openAcc = (index) => {
        let acc = el.current.querySelectorAll('.acc')
        let elem = acc[index]
        let content = elem.querySelector('.acc-content')
        let arw = elem.querySelector('.arrow') 
        arw.classList.toggle('active')
        content.classList.toggle('active')
        //arrow.current.classList.toggle('active')
    }

  return (
<div className='Accordion'>
    <div className='a-text'>
        <h1>Frequently Asked Question</h1>
        <p>Here are some of our FAQs. If you have any other questions
            <br/>
            you'd like answered please feel free to email us.</p>
    </div>
    <div ref={el} className='accordion'>
        <div className='acc'>
            <button onClick={() => openAcc(0)}>
                <h4>What is BookMark?</h4>
                <Arrow ref={arrow}/>
            </button>
            <div ref={elem} className='acc-content'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum  11111.
                </p>
            </div>
        </div>
        <div className='acc'>
            <button onClick={() => openAcc(1)}>
                <h4>How can I request a new browser?</h4>
                <Arrow ref={arrow} />
            </button>
            <div ref={elem} className='acc-content'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum 22222.
                </p>
            </div>
        </div>
        <div className='acc'>
            <button onClick={() => openAcc(2)}>
                <h4>Is there a mobile app?</h4>
                <Arrow ref={arrow}/>
            </button>
            <div ref={elem} className='acc-content'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum 33333.
                </p>
            </div>
        </div>
        <div className='acc'>
            <button onClick={() => openAcc(3)}>
                <h4>What about other Chronium browsers?</h4>
                <Arrow ref={arrow} />
            </button>
            <div ref={elem} className='acc-content'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum  44444.
                </p>
            </div>
        </div>
    </div>
    <button className='m-info'>More Info</button>
</div>
  )
}

export default Accordion