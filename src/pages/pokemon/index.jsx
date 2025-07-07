/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItems } from "../../api";
import { usePokemonContext } from "../../contexts/pokemonContext";
export const Pokemon = () => {
  const [text, setText] = useState("Hello");
  const [data, setData] = useState();
  const { pokemonUrl, setPokemonUrl } = usePokemonContext(); 
  useEffect(() => {
    let newdata = getItems().then((res) => {
      console.log(res.results);
      setData(res.results);
    });
  }, []);
  const onClick= (link)=>{
    setPokemonUrl(link)
  }
  return (
    <div className="flex flex-col justify-center">
      <div>
        {Array.isArray(data) && data.map(
          (el) => 
          { let splitted= el.url.split('/')
            let id= splitted[splitted.length-2]
            console.log(id)
            return <>
            <Link to={"/pokemon/"+id} onClick={()=>{onClick(el.url)}}>
            <div>{el.name}</div>
            </Link>
            </>
            
          }
          )}
        </div>
      <button onClick={() => setText(text + "Again")}>{text}</button>
    </div>
  );
};
