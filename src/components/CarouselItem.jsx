import React from "react";
//import { DataContext } from "../context/ContextGeneral";

import "../styles/CarouselItem.css";

function CarouselItem(props) {
  const news = props.article.elemento;
  //console.log(news)

  return (
    <div className="carousel-item">
      <a
        
        onClick={() => {
          console.log("clickkkk");
        }}
        href={news.url}
        target="blank"
      >
        <img className="carousel-item__img" src={news.urlToImage} alt="" />
        <div className="carousel-item__details">
          <p className="carousel-item__details--title">{news.source.name}</p>
          <p className="carousel-item__details--subtitle">{news.title}</p>
        </div>
      </a>
    </div>
  );
}

export default CarouselItem;
