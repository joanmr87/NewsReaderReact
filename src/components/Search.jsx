import React from "react";
import "../styles/Search.css";
import themes from "../themes/Theme.module.css";

const { Brown, Summer } = themes;

function Search(props) {
  return (
    <section className="main">
      <button
        onClick={() => {
          if (props.theme === Summer) {
            props.setTheme(Brown);
          } else {
            props.setTheme(Summer);
          }
        }}
        type="button"
        class="btn btn-outline-dark"
      >
        Change theme
      </button>

      <input type="text" className="input" placeholder="Buscar..." />
    </section>
  );
}

export default Search;
