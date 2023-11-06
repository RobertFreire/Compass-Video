import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./Slider.css";
import "swiper/css";
import "swiper/css/pagination";
import config from "../../shared/constant.ts";
import { Navigate } from "react-router-dom";

const Slider = ({ title, items }: any) => {
  return (
    <section className="slider">
      <h2 className="title-name">{title}</h2>
      <div className="Movie-list">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={20}
          modules={[Pagination]}
          breakpoints={{
            430: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            800: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5.5,
              spaceBetween: 20,
            },
          }}
        >
          {items.results.length > 0 &&
            items.results.map((movie: any) => (
              <SwiperSlide
                key={movie.id}
                onClick={() =>
                  (window.location.href = `http://localhost:5173/home?${movie.id}`)
                }
              >
                <img
                  src={`${config.IMAGE_URL}${movie.poster_path}`}
                  alt={movie.title}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
