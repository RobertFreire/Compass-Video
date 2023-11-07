import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './Slider.css'
import 'swiper/css';
import 'swiper/css/pagination';
import config from '../../shared/constant.ts';
import { Navigate, useNavigate } from 'react-router-dom';
import { getDetails } from '../../shared/api.ts';



const Slider = ({ category, similar, location }: { category: any, similar?: boolean, location?:string }) => {

    const navigate = useNavigate();
    const navigateLocation = ({ type, id }: any) => {

        if (type == undefined) {
            type = category.mediaType
            navigate(`/${type}/${id}`);
        } else {
            navigate(`/${type}/${id}`)
        }
    }

    return (
        <section className='slider'>
           
            <div className='Movie-list'>
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
                    }}>

                    {similar == true
                        ? category.results.map((similar : any) => (
                            <SwiperSlide key={similar.id} onClick={() => navigateLocation({ type: location , id: similar.id })}>
                                <img src={`${config.IMAGE_URL}${similar.poster_path}`} alt={similar.title} />
                            </SwiperSlide>
                        ))
                        : category.fetchData.results.map((movie: any) => (
                            <SwiperSlide key={movie.id} onClick={() => navigateLocation({ type: movie.media_type, id: movie.id })}>
                                <img src={`${config.IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
                            </SwiperSlide>
                        ))}
                </Swiper >
            </div>
        </section>
    )
}



export default Slider