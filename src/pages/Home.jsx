import React from 'react';
import '../styles/Home.css';

function Home (props) {
    const { news } = props;
    return  <div className="App">
    <h1>InfoNews</h1>
    <ul>
      {news.map((e) => {
        return (
          <li>
            <img className="images" src={e.urlToImage} alt={e.title} />
            {e.title}
          </li>
        );
      })}
    </ul>
  </div>
}

export default Home;