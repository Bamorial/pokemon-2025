import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { NotFound } from './pages/not-found'
import { Pokemon } from './pages/pokemon'
import { Navigation } from './components/navigation'
import { PokemonPage } from './pages/pokemon-page'

function AppRoutes() {

  return ( 
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
      <Route path="/pokemon/:id" element={<PokemonPage />} />
      <Route path="/pokemon" element={<Pokemon />} />
    </Routes> 
  )
}

export default AppRoutes
