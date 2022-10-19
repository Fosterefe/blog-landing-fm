import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import HomePage from './homePage';
import Cakes from './components/Cakes/cakes'
import Rellenos from './components/Rellenos/Rellenos'
import Toppings from './components/Toppings/Toppings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cakes' element={<Cakes/>}/>
        <Route path='/rellenos' element={<Rellenos/>}/>
        <Route path='/toppings' element={<Toppings/>}/>
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;