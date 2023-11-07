import React, { useEffect, useState } from 'react'
import { categories } from '../../shared/api.ts';
import Slider from './Slider.tsx';

const Carrosel = ({ title }: { title: string }) => {
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
            {movieCategory && (
                <Slider title={movieCategory.title} items={movieCategory.fetchData} />
            )}
        </section>
    );
}

export default Carrosel