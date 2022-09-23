import './Extentions.scss'
import Card from './Card'
import { Chrome, FireFox, Opera } from '../Icons/Icons'

function Extentions() {
  return (
    <div className='extentions'>
        <div className='ex-text'>
            <h1>
                Download the extention
            </h1>
            <p>
                We've got more browsers in the pipleine. Please do let us know if <br/> you've got a favourite you'd like us to prioratize.
            </p>
        </div>
        <div className='ex-cards'>
            <Card icon={<Chrome />}  browser={'Chrome'}   version={'62'}  marginTop={0}/>
            <Card icon={<FireFox />} browser={'FireFox'}  version={'55'}  marginTop={2}/>
            <Card icon={<Opera />}   browser={'Opera'}    version={'46'}  marginTop={3.5}/>
        </div>

    </div>
  )
}

export default Extentions