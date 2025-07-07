// import './App.css'
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { NotFound } from "./pages/not-found";
import { Pokemon } from "./pages/pokemon";
import { Navigation } from "./components/navigation";
import { PokemonPage } from "./pages/pokemon-page";
import AppRoutes from "./Routes";
import { usePokemonContext, usePokemonValue, PokemonContext } from "./contexts/pokemonContext";

function App() {
  const value = usePokemonValue();
  return (
    <>
      <Navigation></Navigation>
      <PokemonContext.Provider value={value}>
        <AppRoutes></AppRoutes>
      </PokemonContext.Provider>
    </>
  );
}

export default App;
