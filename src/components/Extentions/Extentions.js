import './Extentions.scss'
import Card from './Card'
import cakerepo from '../../images/cakerepo.jfif'
import manga from '../../images/manga.png'
import topping from '../../images/topping.jpg'

function Extentions() {
    return (
        <div className='extentions' id='content'>
            <div className='ex-text'>
                <h1>
                    Tabla de Contenido
                </h1>
                <p>
                    Hecha un vistazo a nuestros produtos
                </p>
            </div>
            <div className='ex-cards'>
                <Card
                    icon={cakerepo}
                    browser={'Pasteles'}
                    version={'62'}
                    marginTop={0}
                    url={'/cakes'}/>
                <Card
                    icon={manga}
                    browser={'Rellenos'}
                    version={'55'}
                    marginTop={2}
                    url={'/rellenos'}/>
                <Card
                    icon={topping}
                    browser={'Toppings'}
                    version={'46'}
                    marginTop={3.5}
                    url={'/toppings'}/>
            </div>

        </div>
    )
}

export default Extentions