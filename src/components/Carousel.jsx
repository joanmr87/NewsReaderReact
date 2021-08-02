import React from 'react';
import '../styles/Carousel.css';

function Carousel ({ children }, props) {
    //const { news } = props;
    //console.log(news);
    return (
    <section className="carousel">
        <div className="carousel__container">
            {children}
        </div>
    </section>
    )
}

export default Carousel;


