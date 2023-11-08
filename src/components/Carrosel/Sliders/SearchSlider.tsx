import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import '../Slider.css'
import 'swiper/css';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';
import config from '../../../shared/constant.ts';
import { CollectionPart, SearchResult } from '../../../shared/information'

const SearchSlider = ({ result, media }: { result: SearchResult[] | CollectionPart[] , media?: string }) => {

    const navigate = useNavigate();

    const navigateToSeason = (result_id : number, media:string) => {
        if (media == 'multi') {
            media = 'movie'
        }
        navigate(`/${media}/${result_id}`);
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
            {result.map((result: any) => {
                const mediaToUse = media ? media : result.media_type;
                return (
                <SwiperSlide key={result.id} onClick={() => navigateToSeason(result.id , mediaToUse)}>
                    <img src={`${config.IMAGE_URL}${result.poster_path}`} alt={result.name} />
                </SwiperSlide>
                );
            })}


        </Swiper >
    </div>
</section>
  )
}

export default SearchSlider