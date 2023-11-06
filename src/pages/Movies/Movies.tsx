import MovieInfo from "../../components/MovieInfo/MovieInfo";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Carrosel from "../../components/Carrosel/Carrosel";

function Movies(){
    return(
        <div>
            <Header/>
            <MovieInfo/>
            <Carrosel title = "Filmes Em alta"/>
            <Carrosel title = "Filmes Mais bem avaliados"/>
            <Carrosel title = "Drama"/>
            <Footer/>
        </div>
    )
}

export default Movies;