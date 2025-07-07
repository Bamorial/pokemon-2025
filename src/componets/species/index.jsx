import { useEffect, useState } from "react";
import { usePokemonContext } from "../../contexts/pokemonContext";
import axios from "axios";

export const SpeciesCard=()=>{
    const {pokemonSpeciesUrl, setPokemonSpeciesUrl}= usePokemonContext();
    const [speciesDetails, setSpeciesDetails] = useState()
    useEffect( ()=>{
        axios.get(pokemonSpeciesUrl).then(res=>{
            console.log(res.data)
            setSpeciesDetails(res.data)
        })
    },[pokemonSpeciesUrl])
    return (
        <>
        <div className="flex flex-col justify-center">
            <div>Species Name: {speciesDetails?.name}</div>
            <div>Base Happiness: {speciesDetails?.base_happiness}</div>
            <div>Capture Rate: {speciesDetails?.capture_rate}</div>
        </div>
        </>
    )
}