import React from "react";
import "../styles/Search.css";
import themes from "../themes/Theme.module.css";

const { Brown, Summer } = themes;

function Search(props) {
  return (
    <section className="main">
      <input type="text" className="input" placeholder="Buscar..." />
    </section>
  );
}

export default Search;
