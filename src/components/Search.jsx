import React, { useState } from "react";


import "../styles/Search.css";

function Search(props) {
  const { searchText, setSearchText } = props; 
  
  return (
    <section className="main">
      <input        
        type="text"        
        className="input"
        placeholder="Buscar..."
        value={props.searchText}
        onChange={(e) => {
          props.setSearchText(e.target.value);
        }}
      />
      <button >
        Buscar
      </button>
    </section>
  );
}

export default Search;


//debounce
