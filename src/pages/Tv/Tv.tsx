import Header from "../../components/Header/Header";
import Carrosel from "../../components/Carrosel/Carrosel";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import Footer from "../../components/Footer/Footer";

function Tv() {

  return (
    <div>
      <Header />
        <MovieInfo location="tv" />
        <Carrosel title="Series Em alta" />
        <Carrosel title="Series de Comedia" />
        <Carrosel title="Series de Acao" /> 
      <Footer />
    </div>
  );
}

export default Tv;
