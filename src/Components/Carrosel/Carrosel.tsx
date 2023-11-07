import React, { useEffect, useState } from 'react'
import { categories } from '../../shared/api.ts';
import Slider from './Slider.tsx';
import './Slider.css'
import SeasonSlider from './Sliders/SeasonSlider.tsx';

const Carrosel = ({ title, items, location }: { title: string, location?:string, items?: any[] }) => {
    const [movies, setMovies] = useState<typeof categories>(categories);

    useEffect(() => {
        const Load = async () => {
            let category = await categories;
            setMovies(category)
        }
        Load();
    }, [])

    const movieCategory = movies.find((item) => item.title === title);



    return (
        <section>
      <h2 className='carrosel-h2'>{title}</h2>
      {title === 'Temporadas' && items ? (
        <SeasonSlider seasons={items} />
      ) : items ? (
        <Slider category={items} similar={true} location={location} />
      ) : movieCategory && (
        <Slider category={movieCategory} />
      )}
    </section>
    );
}

export default Carrosel