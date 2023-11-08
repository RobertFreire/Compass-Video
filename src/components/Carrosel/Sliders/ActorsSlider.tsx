import style from './ActoresSlider.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import '../Slider.css'
import 'swiper/css';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';
import config from '../../../shared/constant.ts';
import { Media } from '../../../shared/information.ts';

const ActorsSlider = ({ name, photo, actorMedia }: { name: string, photo: string, actorMedia: Media[] }) => {


    const navigate = useNavigate();

    const navigateToSeason = (media_type: string, movie_id: number) => {
        navigate(`/${media_type}/${movie_id}`);
    }
    console.log(actorMedia)
    return (
        <>
            <div className={style['Actors-carrosel']}>
                <div className={style['Actors-information']}>
                    <h1>{name}</h1>
                </div>
                <div className={style['Actors-image']}>
                    <img className={style['Actor-photo']} src={`${config.IMAGE200_URL}${photo}`} alt="Actor Photo" />
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
                                    
                                {actorMedia.map((media: any) => (
                                    <SwiperSlide key={media.id} onClick={() => navigateToSeason(media.media_type, media.id )}>
                                        <img src={`${config.IMAGE_URL}${media.poster_path}`} alt={media.name} />
                                    </SwiperSlide>
                                ))}


                            </Swiper >
                        </div>

                    </section>
                </div>

            </div>
        </>
    )
}

export default ActorsSlider