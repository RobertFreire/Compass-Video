import Header from '../../components/Header/Header'
import style from "./Search.module.css";
import Footer from '../../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import SearchSlider from '../../components/Carrosel/Sliders/SearchSlider';

const Search = () => {

  const { state } = useLocation();
  const { search, select, quest } = state || {};

  console.log(search,select, quest.results);

  return (
    <>
      <Header />
      <h1 className={style.description}> Resultados para a sua busca: "{search}"</h1>
      <div className={style.cards}>
        {quest.results.length > 0 ?
      (<SearchSlider result={quest.results} media={select}/>) : (<p className={style.description}> Sem resultados </p>)}
      </div>
      <Footer />
    </>
  )
}

export default Search