import React from "react";
import "../styles/Search.css";

function Search(props) {
  return (
    <section className="main">
      <input
        onChange={(e) => {          
          props.setValueSearch(e.target.value)
        }}
        type="text"
        value={props.search}
        className="input"
        placeholder="Buscar..."
      />
    </section>
  );
}

export default Search;
