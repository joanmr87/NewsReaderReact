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
          return <CarouselItem article={elemento} />;
        })}
      </div>
    </section>
  );
}

export default Carousel;
