import { useEffect, useState } from "react";
import {getItem} from "../../api";
import { useParams } from "react-router-dom";
import { usePokemonContext } from "../../contexts/pokemonContext";
export const PokemonPage = () => {
  const [data, setData] = useState();
  const {id}= useParams();
  const { pokemonUrl}=usePokemonContext();
  const [image, setImage]=useState('')
  useEffect(() => {
    console.log(pokemonUrl)
    let newdata = getItem(pokemonUrl).then((res) => {
      console.log(res);
      setData(res.results);
      setImage(res.sprites.back_default)
      
    });
  }, [pokemonUrl]);
  return (
    <div className="">
        <img className="scale-200" src={image} alt="" />
    </div>
  );
};
