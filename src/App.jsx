// import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { NotFound } from './pages/not-found'
import { Pokemon } from './pages/pokemon'
import { Navigation } from './components/navigation'

function App() {

  return ( 
    <>
    <Navigation>
    </Navigation>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
      <Route path="/pokemon/:id" element={<Pokemon />} />
      <Route path="/pokemon" element={<Pokemon />} />
    </Routes> 
    </>
  )
}

export default App
