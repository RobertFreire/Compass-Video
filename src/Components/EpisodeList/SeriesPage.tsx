import React, { useEffect, useState } from "react";
import EpisodeList from "./EpisodeList";
import { getSeasonEpisodes } from "../../shared/api";

interface EpisodeFromAPI {
  id?: number;
  name: string;
  runtime: number;
  overview: string;
  still_path?: string;
}

interface EpisodeData {
  id?: number;
  name: string;
  duration: string;
  description: string;
  image?: string;
}

interface SeriesPageProps {
  seriesId: number;
  seasonNumber: number;
}

const SeriesPage: React.FC<SeriesPageProps> = ({ seriesId, seasonNumber }) => {
  const [episodes, setEpisodes] = useState<EpisodeData[]>([]);

  useEffect(() => {
    getSeasonEpisodes(seriesId, seasonNumber)
      .then((data) => {
        const baseURL = "https://image.tmdb.org/t/p/original"; // This is an example base URL

        const allEpisodes = data.episodes.map((episode: EpisodeFromAPI) => ({
          id: episode.id,
          name: episode.name,
          duration: episode.runtime.toString(),
          description: episode.overview,
          image: episode.still_path ? `${baseURL}${episode.still_path}` : 'path_to_default_image.jpg',
        }));
        
        setEpisodes(allEpisodes);
      })
      .catch((error) => {
        console.error("Erro ao obter os episódios da série", error);
        setEpisodes([]);
      });
  }, [seriesId, seasonNumber]);

  return (
    <div>
      {episodes.map((episode) => (
        <EpisodeList
          key={episode.id || episode.name}
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


