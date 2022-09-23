import './Tabs.scss'
import { Tab1, Tab2, Tab3 } from '../Icons/Icons'
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
                        <Tab1/>
                    </div>
                    <div className='tf-bg'></div>
                    <div className='tf-right'>
                        <h1>Bookmark in one click</h1>
                        <p>Organize your bookmarks however you like. Our
                        <br/>
                        siple drag-and-drop gives you complete
                        <br/>
                        control over how you manage you favourite sites.</p>
                        <button>More Info</button>
                    </div>
                </>
            )
        } 
        if (currentTab === 2) {
            return (
                <>
                    <div className='tf-left'>
                        <Tab2/>
                    </div>
                    <div className='tf-bg'></div>
                    <div className='tf-right'>
                        <h1>Intelligent search</h1>
                        <p>Our powerful search feature will help you find saved <br/>
                        sites in no time at all. No need to trawl through all of<br/>
                        your bookmarks</p>
                        <button>More Info</button>
                    </div>
                </>
            )
        }
        if (currentTab === 3) {
            return (
                <>
                    <div className='tf-left'>
                        <Tab3/>
                    </div>
                    <div className='tf-bg'></div>
                    <div className='tf-right'>
                        <h1>Share your bookmarks</h1>
                        <p>Easily share your bookmarks and collection with<br/>
                        others.Create a shareable link that you can send at<br/>
                        the click of a button.</p>
                        <button>More Info</button>
                    </div>
                </>
            )
        }
    }

  return (
<div className='Tabs'>
    <div className='f'>
        <h1>Features</h1>
        <p>Our aim is to make it quick and easy for you to access your
            <br/>
            favourite websites. Your bookmarks sync between your devices
            <b/>
            so you can access them in the go.</p>
    </div>
    <div className='tab-changer'>
        <div className='tc-container'>
            <h3 onClick={(e) => clickHandler(e)} data-id={1} >Simple Bookmarking</h3>
            <h3 onClick={(e) => clickHandler(e)} data-id={2} >Speedy searching</h3>
            <h3 onClick={(e) => clickHandler(e)} data-id={3} >Easy Sharing</h3>
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