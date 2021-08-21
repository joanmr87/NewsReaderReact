import React from "react";
import "../styles/Search.css";
import themes from "../themes/Theme.module.css";

const { Brown, Summer } = themes;

function Search(props) {
  return (
    <section className="main">
      <span>

      <button
        onClick={() => {
          if (props.theme === Summer) {
            props.setTheme(Brown);
          } else {
            props.setTheme(Summer);
          }
        }}
        type="button"
        
      >
        Change Theme
      </button>

      <button
        onClick={() => {
         
        }}
        type="button"        
      >
        Cargar Noticias
      </button>

      <input type="text" className="input" placeholder="Buscar..." />
      </span>
    </section>
  );
}

export default Search;
