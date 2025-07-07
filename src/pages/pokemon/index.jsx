/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { getItems } from "../../api";
export const Pokemon = () => {
  const [text, setText] = useState("Hello");
  const [data, setData] = useState();
  useEffect(() => {
    let newdata = getItems().then((res) => {
      console.log(res.results);
      setData(res.results);
    });
  }, []);
  return (
    <div className="flex flex-col justify-center">
      <div className="font-mono">Home Page</div>
      <div>{Array.isArray(data) && data.map((el) => <div>{el.name}</div>)}</div>
      <button onClick={() => setText(text + "Again")}>{text}</button>
    </div>
  );
};
