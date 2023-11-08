import Header from "../Header/Header";
import Carrosel from "../Carrosel/Carrosel";
import MovieInfo from "../MovieInfo/MovieInfo";
import Footer from "../Footer/Footer";


const Home = () => {

  return (
    <>
      <Header />
      <MovieInfo location="movie"/>
      <Carrosel title="Em alta" />
      <Carrosel title="Documentarios" />
      <Footer />
    </>
  );
};

export default Home;
