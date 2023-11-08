import { memo, useEffect, useState } from 'react'
import styles from "../Home/Home.module.css";
import Overlay from '../MainDetails/Overlay/Overlay'
import ButtonsMain from '../MainDetails/ButtonsMain/ButtonsMain';
import { categories, getDetails, getVideo } from '../../shared/api';
import { Movie, parseMovie, TVSeries, parseTVSeries} from '../../shared/information';
import { MovieDetails, TVSeriesDetails } from './DetailsMedia';
import { useNavigate } from 'react-router-dom';


const MovieInfo = memo(({ location, MediaId }: { location: string; MediaId?: string }) => {

  const [category, setCategory] = useState<typeof categories>(categories);
  const [idMovie, setIdMovie] = useState<string>('');
  const [details, setDetails] = useState<Movie | TVSeries | null>(null);
  const [video, setVideo] = useState();
  const navigate = useNavigate();
  const filterCategory = category.find((item) => item.mediaType === location);

  const Load = async () => {
    let category = await categories;
    setCategory(category)
  }

  const locationPath = async () => {
    if (MediaId) {
      setIdMovie(() => { return MediaId })
    }else{
      const data = await filterCategory!.fetchData;
      const random = Math.floor(Math.random() * data.results.length);
      setIdMovie(() => { return data.results[random].id });
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

  const fetchVideo =async () => {
    try {
      const video = await getVideo(location, idMovie);
      setVideo(video.results);
    } catch (error) {
      console.error("Error to get Video", error);
    }
  }

  const handleClick = () => {
   if (video ) {
    const firstVideo = video[0] as { key: string } | undefined;;
    if (firstVideo && firstVideo.key) {
      navigate(`/player/${firstVideo.key}`, { state: { idMovie, location} });
    }
   }
  }

  useEffect(() => {
    Load();
  }, []);

  
  useEffect(() => {
    locationPath();
  }, [MediaId]);
  
  useEffect(() => {
    fetchDetails();
    fetchVideo();
  }, [idMovie]);



  if (details) {
  console.log(details)
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
              <ButtonsMain trailer={!!MediaId} onSeeNowClick={handleClick}/>
            </div>
          </Overlay>
        </div>
      </div>
    </section>
    
  )
}
});




export default MovieInfo