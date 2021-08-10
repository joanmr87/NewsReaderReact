import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "../src/styles/App.module.css";
import newsData from "../src/data/newsdata.json";
import classnames from 'classnames';
import themes from '../src/themes/Theme.module.css';

//import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Search from "./components/Search.jsx";
import Categories from "./components/Categories.jsx";
import Carousel from "./components/Carousel";
import CarouselItem from "./components/CarouselItem";


function App() {
  const { articles } = newsData;
  const [theme, setTheme] = useState(themes.Brown);

  //console.log(articles);
  
  return (
    <div className={classnames(styles.App, theme)}>      
      <Header />
      <Search theme={theme} setTheme={setTheme}/>
      <Router>
        <Categories title="Ultimas Noticias">
          <Carousel>
            <CarouselItem news={articles[0]} />
            <CarouselItem news={articles[1]} />
            <CarouselItem news={articles[2]} />
            <CarouselItem news={articles[3]} />
            <CarouselItem news={articles[4]} />
            <CarouselItem news={articles[5]} />
            <CarouselItem news={articles[6]} />
            <CarouselItem news={articles[7]} />
            <CarouselItem news={articles[8]} />
          </Carousel>
        </Categories>
        <Categories title="Economia">
          <Carousel>
            <CarouselItem news={articles[9]} />
            <CarouselItem news={articles[10]} />
            <CarouselItem news={articles[11]} />
            <CarouselItem news={articles[12]} />
            <CarouselItem news={articles[13]} />
            <CarouselItem news={articles[14]} />
            <CarouselItem news={articles[12]} />
            <CarouselItem news={articles[16]} />
            <CarouselItem news={articles[17]} />
          </Carousel>
        </Categories>
        <Categories title="Politica">
          <Carousel>
            <CarouselItem news={articles[18]} />
            <CarouselItem news={articles[8]} />
            <CarouselItem news={articles[9]} />
            <CarouselItem news={articles[4]} />
            <CarouselItem news={articles[5]} />
            <CarouselItem news={articles[6]} />
            <CarouselItem news={articles[7]} />
            <CarouselItem news={articles[8]} />
            <CarouselItem news={articles[9]} />
          </Carousel>
        </Categories>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

/*

*/
