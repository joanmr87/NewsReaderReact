import React from "react";
import "../styles/Carousel.css";
import CarouselItem from "./CarouselItem";

function Carousel(props) {
  
  const articles = props.articles;

  return (
    <section className="carousel">
      <div className="carousel__container">
        {articles.length > 0 && (
          <>
            {articles.map((elemento) => {
              const news = { elemento };
              //console.log(news);
              return <CarouselItem article={news} />;
            })}
          </>
        )}        
        {//ACA FALTA EL ELSE
        articles.lenght === 0 &&           
            <h3>No hay resultados</h3>          
        }
      </div>
    </section>
  );
}

export default Carousel;
