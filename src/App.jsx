import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "../src/styles/App.module.css";
import classnames from "classnames";
import themes from "../src/themes/Theme.module.css";

//import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Search from "./components/Search.jsx";
import Categories from "./components/Categories.jsx";
import Carousel from "./components/Carousel";
import CarouselItem from "./components/CarouselItem";
import { GeneralContext } from "./context/ContextGeneral";
import { TechContext } from "./context/TechContext";
import { SportsContext } from "./context/ContextGeneral";


function App() {
  const [theme, setTheme] = useState(themes.Brown);
  const [cargarNoticias, setCargarNoticias] = useState(false);

  //console.log(articles);

  return (
    <div className={classnames(styles.App, theme)}>
      <Header />
      <Search
        theme={theme}
        setTheme={setTheme}
        cargarNoticias={cargarNoticias}
        setCargarNoticias={setCargarNoticias}
      />
      <GeneralContext>
        <Categories title="General">
          <Carousel />
        </Categories>
        </GeneralContext>
      
      <TechContext>
        <Categories title="Tecnologia">
          <Carousel />
        </Categories>
        </TechContext>
     
      <SportsContext>
        <Categories title="Deportes">
          <Carousel />
        </Categories>
        </SportsContext>
      <Footer />
    </div>
  );
}

export default App;

/*

*/
