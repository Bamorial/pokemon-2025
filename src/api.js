import axios from "axios";
export const getItems = async () => {
  let res = await axios.get("https://pokeapi.co/api/v2/pokemon");
  return res.data;
};
