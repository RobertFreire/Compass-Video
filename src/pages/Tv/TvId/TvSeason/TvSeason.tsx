import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSeason } from '../../../../shared/api';
import Footer from '../../../../components/Footer/Footer';
import Header from '../../../../components/Header/Header';
import SeasonInfo from '../../../../components/MovieInfo/SeasonInfo';
import { Season, parseSeason } from '../../../../shared/information';
import SeriesPage from '../../../../components/EpisodeList/SeriesPage';

const TvSeason = () => {
  const { id, season_number } = useParams();
  const [season, setSeason] = useState<Season | null>(null);;

  useEffect(() => {
    async function fetchSeasonDetails() {
      try {
        const seasonData = await getSeason(id!, season_number!);
        setSeason(parseSeason(seasonData));
      } catch (error) {
        console.error('Erro ao buscar detalhes da temporada:', error);
      }
    }

    fetchSeasonDetails();
  }, [id, season_number]);

  console.log(season);

  return (
    <>
      <Header />
      {season &&
        <SeasonInfo season={season} />}
        <h1 style={{color: 'white', padding: '20px 20px'}}> Episodios</h1>
      <SeriesPage seriesId={id!} seasonNumber={season_number!}/>
      <Footer />
    </>
  )
}

export default TvSeason