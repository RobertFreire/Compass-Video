import { useEffect, useState } from 'react';
import style from './Player.module.css';
import back from '../../assets/Images/arrow_back_ios.png';
import { useLocation, useParams } from 'react-router-dom';
import { getDetails } from '../../shared/api';
import { Movie, TVSeries } from '../../shared/information';

const Player = () => {    

    const { key } = useParams();
    const { state } = useLocation();
    const { idMovie, location } = state || {};
    const [details, setDetails] = useState<Movie | TVSeries | null>(null);

    console.log(idMovie)
    
    const fetchDetails = async () => {
        try {
          if (idMovie) {
            const details = await getDetails(location, idMovie);
              setDetails(details);
          }
        } catch (error) {
          console.error("Erro ao buscar detalhes:", error);
        }
      };

      useEffect(() => {
        fetchDetails();
      },[idMovie])

      console.log(details)
            

    const goBack = () => {
        window.history.back();
    };

    return (
        <div className={style['player-container']}>
            <button className={style['back-button']} onClick={goBack}>
                <img src={back} alt='Voltar' />
                <div className={style['back-text']}>
                <h1>{details && 'title' in details && details.title}</h1>
                <h1>{details && 'name' in details && details.name}</h1>
                    <p>{details && 'seasons' in details ? 'Season 1' : ''}</p>
                </div>
            </button>
            <div className={style.player}>
                <iframe
                    src={`https://www.youtube.com/embed/${key}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};


export default Player;
