import React from 'react';
import '../styles/Search.css';

function Search (props) {
  return (
    <section className="main">
    <h2 className="main__title">Todas las noticias en un solo lugar</h2>
    <input type="text" className="input" placeholder="Buscar..."/>
  </section>
  );
}

export default Search;