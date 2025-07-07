import { createContext, useContext, useState } from "react";

export const PokemonContext = createContext();

export const usePokemonValue = () => {
    const [pokemonUrl, setPokemonUrl] = useState('https://pokeapi.co/api/v2/pokemon/1/');
    const [pokemonSpeciesUrl, setPokemonSpeciesUrl]= useState();

    return {
        pokemonUrl,
        setPokemonUrl,
        pokemonSpeciesUrl,
        setPokemonSpeciesUrl
    }
};

export const usePokemonContext = () => useContext(PokemonContext);