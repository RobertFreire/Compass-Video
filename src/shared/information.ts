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
}

export interface Episode {
  episode_number: number;
  name: string;
  overview: string;
  still_path: string;
  air_date: string;
}

export interface Genre {
  id: number;
  name: string;
}

export function parseTVSeries(data: any): TVSeries {
  return {
    name: data.name,
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
      season_number: season.season_number,
      episode_count: season.episode_count,
      air_date: season.air_date,
      poster_path: season.poster_path,
      overview: season.overview,
    })),
  };
}