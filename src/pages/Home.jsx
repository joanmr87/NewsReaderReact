import React from "react";
import "../styles/Home.css";


function Home (props) {
  return (
    <>
    <Categories title="Ultimas Noticias">
    <Carousel>
      <CarouselItem news={articles[0]} />
      <CarouselItem news={articles[1]} />
      <CarouselItem news={articles[2]} />
      <CarouselItem news={articles[3]} />
      <CarouselItem news={articles[4]} />
      <CarouselItem news={articles[5]} />
      <CarouselItem news={articles[6]} />
      <CarouselItem news={articles[7]} />
      <CarouselItem news={articles[8]} />
    </Carousel>
  </Categories>
  <Categories title="Economia">
    <Carousel>
      <CarouselItem news={articles[9]} />
      <CarouselItem news={articles[10]} />
      <CarouselItem news={articles[11]} />
      <CarouselItem news={articles[12]} />
      <CarouselItem news={articles[13]} />
      <CarouselItem news={articles[14]} />
      <CarouselItem news={articles[15]} />
      <CarouselItem news={articles[16]} />
      <CarouselItem news={articles[17]} />
    </Carousel>
  </Categories>
  <Categories title="Politica">
    <Carousel>
      <CarouselItem news={articles[18]} />
      <CarouselItem news={articles[8]} />
      <CarouselItem news={articles[9]} />
      <CarouselItem news={articles[4]} />
      <CarouselItem news={articles[5]} />
      <CarouselItem news={articles[6]} />
      <CarouselItem news={articles[7]} />
      <CarouselItem news={articles[8]} />
      <CarouselItem news={articles[9]} />
    </Carousel>
  </Categories>
  
  </>
  )
}

export default Home;
