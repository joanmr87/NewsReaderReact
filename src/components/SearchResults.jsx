import React from "react";
import { useQuery } from 'react-query'
import { getNewsSearch, getNewsOptions } from "../services/api";


import "../styles/Carousel.css";
import SearchResultsItems from "./SearchResultsItems";

const SearchResults = (props) => {

  const { searchText } = props;
  console.log(searchText)

  const urlSearch = `https://newsapi.org/v2/everything?qInTitle=${searchText}&apiKey=f849d4721dfc4523a60c3730b7d544af`;

  const { isLoading, isError, data, error } = useQuery('searchNews', getNewsSearch(urlSearch, searchText))
 
  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }


  return (
    <section className="carousel">
      <div className="carousel__container">
        {data.length > 0 && (
          <>
            {data.map((elemento) => {
              const news = { elemento };
              //console.log(news);
              return <SearchResultsItems article={news} />;
            })}
          </>
        )}        
       
      </div>
    </section>
  );
};

export default SearchResults;
