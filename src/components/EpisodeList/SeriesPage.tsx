import React, { useEffect, useState } from "react";
import EpisodeList from "./EpisodeList";
import { getSeason } from "../../shared/api";
import style from './SeriesPage.module.css'
import config from "../../shared/constant";

interface EpisodeFromAPI {
  id?: number;
  name: string;
  number: string;
  runtime: number;
  episode_number: string;
  overview: string;
  still_path?: string;
}

interface EpisodeData {
  id?: number;
  name: string;
  duration: string;
  episode_number: string;
  description: string;
  image?: string;
}

interface SeriesPageProps {
  seriesId: string;
  seasonNumber: string;
}

const SeriesPage: React.FC<SeriesPageProps> = ({ seriesId, seasonNumber }) => {
  const [episodes, setEpisodes] = useState<EpisodeData[]>([]);

  useEffect(() => {
    getSeason(seriesId, seasonNumber)
      .then((data) => {
        const allEpisodes = data.episodes.map((episode: EpisodeFromAPI) => ({
          id: episode.id,
          name: episode.name,
          duration: episode.runtime.toString(),
          description: episode.overview,
          episode_number: episode.episode_number,
          image: episode.still_path ? `${config.IMAGE_URL}${episode.still_path}` : 'path_to_default_image.jpg',
        }));
        
        setEpisodes(allEpisodes);
      })
      .catch((error) => {
        console.error("Erro ao obter os episódios da série", error);
        setEpisodes([]);
      });
  }, [seriesId, seasonNumber]);

  return (
    <div className={style.container}>
      {episodes.map((episode) => (
        <EpisodeList 
          key={episode.id || episode.name}
          number={episode.episode_number}
          name={episode.name}
          duration={episode.duration}
          description={episode.description}
          image={episode.image}
        />
      ))}
    </div>
  );
};

export default SeriesPage;


