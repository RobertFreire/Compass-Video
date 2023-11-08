import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import MovieInfo from '../../../components/MovieInfo/MovieInfo';
import Footer from '../../../components/footer/Footer';
import { getSimilar } from '../../../shared/api';
import Carrosel from '../../../components/Carrosel/Carrosel';


const MovieId = () => {
    const { id } = useParams();
    const [similarMovies, setSimilarMovies] = useState();

    const fetchSimilarMovies = async () => {
        try {
            const data = await getSimilar('movie', id!);
            setSimilarMovies(() => data);
        } catch (error) {
            console.error("Erro ao buscar filmes similares:", error);
        }
    };

    useEffect(() => {
        fetchSimilarMovies();
    }, [id]);    


    return (
        <div>
            <Header />
            <MovieInfo location="movie" MediaId={id} />
            <Carrosel title='Filmes Similares' items={similarMovies} location='movie' />
            <Footer />
        </div>
    )
}

export default MovieId