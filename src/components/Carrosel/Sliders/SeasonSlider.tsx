import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import '../Slider.css'
import 'swiper/css';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';
import config from '../../../shared/constant.ts';
import { Season } from '../../../shared/information.ts';

const SeasonSlider = ({ seasons }: { seasons: Season[] }) => {

    const navigate = useNavigate();

    const navigateToSeason = (season_id : number, season_number:number) => {
        navigate(`/tv/${season_id}/${season_number}`);
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
                    {seasons.map((season: any) => (
                        <SwiperSlide key={season.season_number} onClick={() => navigateToSeason(season.id_tv, season.season_number)}>
                            <img src={`${config.IMAGE_URL}${season.poster_path}`} alt={season.name} />
                        </SwiperSlide>
                    ))}


                </Swiper >
            </div>
        </section>
    )
}

export default SeasonSlider