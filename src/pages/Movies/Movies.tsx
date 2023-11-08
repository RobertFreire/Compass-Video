import MovieInfo from "../../components/MovieInfo/MovieInfo";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
import Carrosel from "../../components/Carrosel/Carrosel";
import React from "react";

function Movies(){

    console.log("Estou aqui");
    return(
        <div>
            <Header/>
            <MovieInfo location="movie"/>
            <Carrosel title = "Filmes Em alta"/>
            <Carrosel title = "Filmes Mais bem avaliados"/>
            <Carrosel title = "Drama"/>
            <Footer/>
        </div>
    )
}

export default Movies;