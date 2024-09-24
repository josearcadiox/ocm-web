import React from "react";
import "./Proyectos.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../../utils/common";
import data from "../../utils/slider.json";

const Proyectos = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head">
          <div className="flexColStart">
            <span className="greenText">Proyectos</span>
            <span className="primaryText">Destacados</span>
          </div>
        </div>

        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="proyecto" />

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className=" r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

export default Proyectos;
