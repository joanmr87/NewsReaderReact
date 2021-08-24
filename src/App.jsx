import React, { useState, useEffect } from "react";

import styles from "../src/styles/App.module.css";
import classnames from "classnames";
import themes from "../src/themes/Theme.module.css";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Search from "./components/Search.jsx";
import Categories from "./components/Categories.jsx";
import Carousel from "./components/Carousel";
//import RadioButtons from "./components/RadioButtons";

function App() {
  const [theme, setTheme] = useState(themes.Brown);

  const [articlesGeneral, setArticlesGeneral] = useState([]);
  const [articlesTech, setArticlesTech] = useState([]);
  const [articlesSports, setArticlesSports] = useState([]);
  //Estado del string que se ingresa en el Seach
  const [valueSearch, setValueSearch] = useState("");
  //Estado donde se guardaria el resultado de la busqueda
  const [resultSearch, setResultSearch] = useState([]);

  const urlGeneral =
    "https://newsapi.org/v2/top-headlines?country=ar&category=general&apiKey=f849d4721dfc4523a60c3730b7d544af";
  const urlTech =
    "https://newsapi.org/v2/top-headlines?country=ar&category=technology&apiKey=f849d4721dfc4523a60c3730b7d544af";
  const urlSports =
    "https://newsapi.org/v2/top-headlines?country=ar&category=sports&apiKey=f849d4721dfc4523a60c3730b7d544af";
  const urlSearch = 
  `https://newsapi.org/v2/everything?qInTitle=${valueSearch}&apiKey=f849d4721dfc4523a60c3730b7d544af`;

  async function getNews(url, set) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => set(data.articles))
      .catch((err) => {
        console.log(err);
      });
  }

  async function searchNews(url, set) {
    fetch(url)      
      .then((res) => res.json())
      .then((data) => set(data.articles))
      .catch((err) => {
        console.log(err);
      })
      //console.log(url);      
  }

  useEffect(() => {
    searchNews(urlSearch, setResultSearch);
  }, [])
  console.log(resultSearch);
  
  useEffect(() => {
    getNews(urlGeneral, setArticlesGeneral);
  }, []);

  useEffect(() => {
    getNews(urlTech, setArticlesTech);
  }, []);

  useEffect(() => {
    getNews(urlSports, setArticlesSports);
  }, []);

  return (
    <div className={classnames(styles.App, theme)}>
      <Header theme={theme} setTheme={setTheme} />
      <Search valueSearch={valueSearch} setValueSearch={setValueSearch} />

      <Categories title="General">
        <Carousel articles={articlesGeneral}/>
      </Categories>

      <Categories title="Tecnologia">
        <Carousel articles={articlesTech}/>
      </Categories>

      <Categories title="Deportes">
        <Carousel articles={articlesSports}/>
      </Categories>

      <Footer/>
    </div>
  );
}

export default App;

/*

*/
