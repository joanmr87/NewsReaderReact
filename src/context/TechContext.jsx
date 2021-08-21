import React, { useState, useEffect } from 'react';
//import newsData from "../data/newsdata.json";

export const TechContext = React.createContext();

const ContextTech = (props) => {
    
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(
          "https://newsapi.org/v2/top-headlines?country=ar&category=technology&apiKey=f849d4721dfc4523a60c3730b7d544af"
        )
          .then((res) => res.json())
          .then((data) => setArticles(data.articles))
          .catch((err) => {
              console.log(err)
          })          
      }, []);     
    
   
    return (
        <TechContext.Provider value= {{articles}}>
            {props.children}
        </TechContext.Provider>
    )
}

export default ContextTech;


