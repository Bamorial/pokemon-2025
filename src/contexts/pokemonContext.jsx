/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export const PokemonContext = createContext({
    pokemonUrl:undefined,
    setPokemonUrl: ()=>{}
});
export const usePokemonValue = () =>{

    const [pokemonUrl, setPokemonUrl]= useState(undefined);
    return {
        pokemonUrl, setPokemonUrl
    }
}
export const usePokemonContext= ()=> useContext(PokemonContext)