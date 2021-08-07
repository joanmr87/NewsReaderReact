import React from 'react';
import '../styles/Search.css';

function Search (props) {
  return (
    <section className="main">
    <h2 className="main__title"></h2>
    <button type="button" class="btn btn-outline-dark">Dark</button>
    <input type="text" className="input" placeholder="Buscar..."/>
    
  </section>
  );
}

export default Search;