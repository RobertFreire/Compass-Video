import React, { useEffect, useState } from "react";
import EpisodeList from "./EpisodeList"; 
import { getAllEpisodesForSeries } from "../../shared/api"; 

interface EpisodeData {
  name: string;
  duration: string;
  description: string;
  episode_number: string
}

interface SeriesPageProps {
  seriesId: number;
}

const SeriesPage: React.FC<SeriesPageProps> = ({ seriesId }) => {
  const [episodes, setEpisodes] = useState<EpisodeData[]>([]);

  useEffect(() => {
    getAllEpisodesForSeries(seriesId)
      .then((data: EpisodeData[]) => {
        setEpisodes(data);
      })
      .catch((error) => {
        console.error("Erro ao obter os episódios da série", error);
      });
  }, [seriesId]);
  console.log(episodes);

  return (
    <div>
      {episodes.map((episode, index) => (
        <EpisodeList
          number={episode.episode_number}
          key={index}
          name={episode.name}
          duration={episode.duration}
          description={episode.description}
        />
      ))}
    </div>
  );
};

export default SeriesPage;
