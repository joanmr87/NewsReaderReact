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
  const [articlesGeneral, setArticlesGeneral] = useState([]);
  const [articlesTech, setArticlesTech] = useState([]);
  const [articlesSports, setArticlesSports] = useState([]);

  const urlGeneral =
    "https://newsapi.org/v2/top-headlines?country=ar&category=general&apiKey=f849d4721dfc4523a60c3730b7d544af";
  const urlTech =
    "https://newsapi.org/v2/top-headlines?country=ar&category=technology&apiKey=f849d4721dfc4523a60c3730b7d544af";
  const urlSports =
    "https://newsapi.org/v2/top-headlines?country=ar&category=sports&apiKey=f849d4721dfc4523a60c3730b7d544af";

  async function getNews(url,set) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => set(data.articles))
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getNews(urlGeneral, setArticlesGeneral);
  }, []);

  useEffect(() => {
    getNews(urlTech, setArticlesTech);
  }, []);

  useEffect(() => {
    getNews(urlSports, setArticlesSports);
  }, []);

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
      
        <Categories title="General">
          <Carousel articles= {articlesGeneral} setArticles={setArticlesGeneral}/>
        </Categories>
        
       
      
      
        <Categories title="Tecnologia">
          <Carousel articles= {articlesTech} setArticles={setArticlesTech}/>
        </Categories>
        
     
    
        <Categories title="Deportes">
          <Carousel articles={articlesSports} setArticles={setArticlesSports}/>
        </Categories >
       
      <Footer />
    </div>
  );
}

export default App;

/*

*/
