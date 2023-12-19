import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue, loading}) {

  return (
    <input 
      placeholder="Busca tu ToDo" 
      className="TodoSearch" 
      value={searchValue}
      onChange={ (e) => setSearchValue(e.target.value)}
      disabled={loading}
    />
  );
}

export { TodoSearch };
