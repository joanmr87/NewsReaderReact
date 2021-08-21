import React, { useContext } from "react";
import { articlesGeneral, articlesSports, articlesTech } from "../context/ContextGeneral";
import "../styles/Carousel.css";
import CarouselItem from "./CarouselItem";

function Carousel() {
  //const { articles } = useContext(articlesGeneral);
  const { articles } = useContext(articlesTech);
  //const { articles } = useContext(articlesSports);
  //const articles = [];
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
        {articles.lenght === 0 &&           
            <h3>No hay resultados</h3>          
        }
      </div>
    </section>
  );
}

export default Carousel;
