import React, { useContext } from "react";
import { DataContext } from "../context/ContextGeneral";
import "../styles/Carousel.css";
import CarouselItem from "./CarouselItem";

function Carousel() {
  const { articles } = useContext(DataContext);
  return (
    <section className="carousel">
      <div className="carousel__container">
        {articles.map((elemento) => {          
          const news = {elemento}
          //console.log(news);
          return <CarouselItem article={news} />
          
        })}
      </div>
    </section>
  );
}

export default Carousel;
