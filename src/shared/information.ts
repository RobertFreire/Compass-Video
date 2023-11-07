export interface Movie {
  title: string;
  original_title: string;
  overview: string;
  release_date: string;
  backdrop_path: string;
  genres: Genre[];
  runtime: number;
}

export interface Genre {
  id: number;
  name: string;
}

export function parseMovie(data: any): Movie {
  return {
    title: data.title,
    original_title: data.original_title,
    overview: data.overview,
    release_date: data.release_date,
    backdrop_path: data.backdrop_path,
    genres: data.genres.map((genre: any) => ({
      id: genre.id,
      name: genre.name,
    })),
    runtime: data.runtime,
  };
}


export interface TVSeries {
  name: string;
  id: number;
  original_name: string;
  overview: string;
  first_air_date: string;
  backdrop_path: string;
  genres: Genre[];
  homepage: string;
  episode_run_time: number[];
  number_of_seasons: number;
  number_of_episodes: number;
  seasons: Season[];
}

export interface Season {
  season_id: number;
  name: string
  vote_average: number;
  season_number: number;
  episode_count: number;
  air_date: string;
  poster_path: string;
  overview: string;
  episodes: Episode[] 
}

export interface Episode {
  episode_number: number;
  name: string;
  overview: string;
  still_path: string;
  runtime: string;
}

export interface Genre {
  id: number;
  name: string;
}

export function parseSeason(data: any): Season{
  return {
    season_id: 15,
    name: data.name,
    vote_average: data.vote_average,
    season_number: data.season_number,
    episode_count: data.episode_count,
    air_date: data.air_date,
    poster_path: data.poster_path,
    overview: data.overview,
    episodes: data.episodes.map((episodes: any) => ({
      episode_number: episodes.episode_number,
      name: episodes.name,
      overview: episodes.overview,
      still_path: episodes.still_path,
      runtime: episodes.runtime
    })),
  };
}

export function parseTVSeries(data: any): TVSeries {
  return {
    name: data.name,
    id: data.id,
    original_name: data.original_name,
    overview: data.overview,
    first_air_date: data.first_air_date,
    backdrop_path: data.backdrop_path,
    genres: data.genres.map((genre: any) => ({
      id: genre.id,
      name: genre.name,
    })),
    homepage: data.homepage,
    episode_run_time: data.episode_run_time,
    number_of_seasons: data.number_of_seasons,
    number_of_episodes: data.number_of_episodes,
    seasons: data.seasons.map((season: any) => ({
      id_tv: data.id,
      season_id: season.id,
      name: season.name,
      vote_average: season.vote_average,
      season_number: season.season_number,
      episode_count: season.episode_count,
      air_date: season.air_date,
      poster_path: season.poster_path,
      overview: season.overview,
    })),
  };
}