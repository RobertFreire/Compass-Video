import React, { memo, useEffect, useState } from 'react'
import styles from "../Home/Home.module.css";
import Overlay from '../MainDetails/Overlay/Overlay'
import Details from '../MainDetails/Details/Details'
import ButtonsMain from '../MainDetails/ButtonsMain/ButtonsMain';
import { categories, getDetails } from '../../shared/api';
import { Movie, parseMovie, TVSeries, parseTVSeries} from '../../shared/information';
import { MovieDetails, TVSeriesDetails } from './DetailsMedia';


const MovieInfo = memo(({ location, MediaId }: { location: string; MediaId?: string }) => {

  const [category, setCategory] = useState<typeof categories>(categories);
  const [idMovie, setIdMovie] = useState<string>('');
  const [details, setDetails] = useState<Movie | TVSeries | null>(null);
  const filterCategory = category.find((item) => item.mediaType === location);

  const Load = async () => {
    let category = await categories;
    setCategory(category)
  }

  const locationPath = () => {
    if (MediaId) {
      setIdMovie(() => { return MediaId })
    }else{
      const random = Math.floor(Math.random() * filterCategory!.fetchData.results.length);
      setIdMovie(() => { return filterCategory!.fetchData.results[random].id });
    }
  }

  const fetchDetails = async () => {
    try {
      if (idMovie) {
        const details = await getDetails(location, idMovie);
        if (location === 'movie') {
          setDetails(() => parseMovie(details));
        } else {
          setDetails(parseTVSeries(details));
        }
        
      }
    } catch (error) {
      console.error("Erro ao buscar detalhes:", error);
    }
  };

  useEffect(() => {
    Load();
  }, []);

  
  useEffect(() => {
    locationPath();
  }, [MediaId]);
  
  useEffect(() => {
    fetchDetails();
  }, [idMovie]);


  if (details) {
  return (
    <section className={styles.home}>
      <div className={styles.content} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${details.backdrop_path})`}}>
        <div className={styles.main}>
          
          <Overlay>
            <div className={styles.information}>
            {location === 'movie' ? (
                  <MovieDetails movie={details as Movie} />
                ) : (
                  <TVSeriesDetails tvSeries={details as TVSeries} />
                )}
              <ButtonsMain trailer={!!MediaId}/>
            </div>
          </Overlay>
        </div>
      </div>
    </section>
    
  )
}
});




export default MovieInfo