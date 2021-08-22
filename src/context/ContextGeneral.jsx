import React, { useState, useEffect } from "react";
//import newsData from "../data/newsdata.json";

export const GeneralContext = React.createContext();
export const TechContext = React.createContext();
export const SportsContext = React.createContext();

const ContextGeneral = (props) => {
  const [articles, setArticles] = useState([]);
  const [articlesTech, setArticlesTech] = useState([]);
  const [articlesSports, setArticlesSports] = useState([]);

  const urlGeneral =
    "https://newsapi.org/v2/top-headlines?country=ar&category=general&apiKey=f849d4721dfc4523a60c3730b7d544af";
  const urlTech =
    "https://newsapi.org/v2/top-headlines?country=ar&category=technology&apiKey=f849d4721dfc4523a60c3730b7d544af";
  const urlSports =
    "https://newsapi.org/v2/top-headlines?country=ar&category=sports&apiKey=f849d4721dfc4523a60c3730b7d544af";

  async function getNews(url,) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles))
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getNews(urlGeneral);
  }, []);

  useEffect(() => {
    getNews(urlTech);
  }, []);

  useEffect(() => {
    getNews(urlSports);
  }, []);

  return (<GeneralContext.Provider value={{ articles }}>
            {props.children}
         </GeneralContext.Provider>)

        ( <TechContext.Provider value={{ articles }}>
            {props.children}
        </TechContext.Provider>)
        
        (<SportsContext.Provider value={{ articles }}>
            {props.children}
        </SportsContext.Provider>
  );
};

export default ContextGeneral;
