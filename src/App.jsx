import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "../src/styles/App.module.css";
import classnames from 'classnames';
import themes from '../src/themes/Theme.module.css';

//import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Search from "./components/Search.jsx";
import Categories from "./components/Categories.jsx";
import Carousel from "./components/Carousel";
import CarouselItem from "./components/CarouselItem";
import DataContext from "./context/ContextGeneral";


function App() {
  
  const [theme, setTheme] = useState(themes.Brown);

  //console.log(articles);
  
  return (
    <div className={classnames(styles.App, theme)}>
      <DataContext> 
      <Header />
      <Search theme={theme} setTheme={setTheme}/>
      <Router>
        <Categories title="Ultimas Noticias">
          <Carousel/>         
        </Categories>
        <Categories title="Economia">
          <Carousel/>            
        </Categories>
        <Categories title="Politica">
          <Carousel/>      
        </Categories>
      </Router>
      <Footer />
      </DataContext>
    </div>
  );
}

export default App;

/*

*/
