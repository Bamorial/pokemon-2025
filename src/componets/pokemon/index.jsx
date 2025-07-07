import { useEffect, useState } from "react";
import { usePokemonContext } from "../../contexts/pokemonContext";
import { PokemonCard } from "./pokemonCard";
import axios from "axios";

export const Pokemon = () => {
    const { pokemonUrl, pokemonSpeciesUrl, setPokemonSpeciesUrl } = usePokemonContext();
    const [pokemon, setPokemon] = useState();


    useEffect(() => {
        axios.get(pokemonUrl).then(response => {
            setPokemon(response.data)
            setPokemonSpeciesUrl(response.data.species.url)
        }) 
    }, [pokemonUrl, pokemonSpeciesUrl])

    return <>
        {pokemon && <PokemonCard pokemon={pokemon}/>}
        {!pokemon && <div>Pokemon loading...</div>}
    </>
}