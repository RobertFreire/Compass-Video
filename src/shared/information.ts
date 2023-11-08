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

export interface Actor {
  id: number;
  name: string;
  original_name: string;
  media_type: string;
  popularity: number;
  gender: number;
  known_for_department: string;
  profile_path: string;
  known_for: Media[];
}

export interface Media {
  adult: boolean;
  backdrop_path: string;
  id: string;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
}

export interface Collection {
  id: number;
  name: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  parts: CollectionPart[];
}

export interface CollectionPart {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  media_type: string;
}

export function parseCollection(data: any): Collection {
  return {
    id: data.id,
    name: data.name,
    overview: data.overview,
    backdrop_path: data.backdrop_path,
    poster_path: data.poster_path,
    parts: data.parts.map((part: any) => ({
      id: part.id,
      title: part.title,
      overview: part.overview,
      poster_path: part.poster_path,
      media_type: part.media_type,
    })),
  };
}

export interface SearchResult {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  name: string;
  original_language: string;
}

export function parseActor(data: any): Actor {
  return {
    id: data.id,
    name: data.name,
    original_name: data.original_name,
    media_type: data.media_type,
    popularity: data.popularity,
    gender: data.gender,
    known_for_department: data.known_for_department,
    profile_path: data.profile_path,
    known_for: data.known_for.map((media: any) => ({
      adult: media.adult,
      backdrop_path: media.backdrop_path,
      id: media.id,
      title: media.title,
      original_language: media.original_language,
      original_title: media.original_title,
      overview: media.overview,
      poster_path: media.poster_path,
      media_type: media.media_type,
    })),
  };
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