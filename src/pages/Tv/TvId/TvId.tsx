import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getDetails, getSimilar } from '../../../shared/api';
import Header from '../../../components/header/Header';
import MovieInfo from '../../../components/MovieInfo/MovieInfo';
import Carrosel from '../../../components/Carrosel/Carrosel';
import { Season, TVSeries, parseTVSeries } from '../../../shared/information';
import Footer from '../../../components/footer/Footer';

const TvId = () => {

    const { id } = useParams();
    const [details, setDetails] = useState<TVSeries | null>(null);
    const [similarMovies, setSimilarMovies] = useState();

    const fetchDetails = async () => {
        try {
            const details = await getDetails("tv", id!);
            setDetails(() => parseTVSeries(details));
        } catch (error) {
            console.error("Erro ao buscar detalhes:", error);
        };
    }

    const fetchSimilarMovies = async () => {
        try {
            const data = await getSimilar('tv', id!);
            setSimilarMovies(() => data);
        } catch (error) {
            console.error("Erro ao buscar filmes similares:", error);
        }
    };

    useEffect(() => {
        fetchSimilarMovies();
        fetchDetails();
    }, [id]);

    console.log(details);

    
    if (details) {
    return (
        <div>
            <Header />
            <MovieInfo location="tv" MediaId={id} />
            <Carrosel title='Temporadas' items={details.seasons} />
            <Carrosel title='Series Similares' items={similarMovies} location='tv' />
            <Footer />
        </div>
    )
}
}
export default TvId