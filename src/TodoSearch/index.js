import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {

  //Vamos a traer los datos con useContext
  const {
    searchValue,
      setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <input 
      placeholder="Cortar cebolla" 
      className="TodoSearch" 
      value={searchValue}
      onChange={ (e) => setSearchValue(e.target.value)}
    />
  );
}

export { TodoSearch };
