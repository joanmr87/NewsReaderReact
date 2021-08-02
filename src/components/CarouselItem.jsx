import React from 'react';
import '../styles/CarouselItem.css';


function CarouselItem (props) {
     const { news } = props;
     //console.log(news);
     return (
    <div className="carousel-item">
    <img className="carousel-item__img" src={news.urlToImage} alt=""  />
    <div className="carousel-item__details">
  
      <p className="carousel-item__details--title">{news.source.name}</p>
      <p className="carousel-item__details--subtitle">{news.title }</p>
    </div>
  </div>
  );
}

export default CarouselItem;