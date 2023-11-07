import config  from "./constant";

const fetchData = async (path: string) => {
  try {
    const response = await fetch(`${config.BASE_URL}${path}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching data: ", error);
    throw error;
  }
};

export const getTrending = async (mediaType: string) => {
  const path = `/trending/${mediaType}/week?api_key=${config.API_KEY}&language=pt-BR`;
  return fetchData(path);
};

export const getTopRated = async (mediaType: string) => {
  const path = `/${mediaType}/top_rated?api_key=${config.API_KEY}&language=pt-BR`;
  return fetchData(path);
};

export const getDetails = async (mediaType: string, id: string) => {
  const path = `/${mediaType}/${id}?api_key=${config.API_KEY}&language=pt-BR`;
  return fetchData(path);
};

export const getMoviesByGenre = async (genreId: number) => {
  const path = `/discover/movie?api_key=${config.API_KEY}&with_genres=${genreId}`;
  return fetchData(path);
};

export const getTVShowsByGenre = async (genreId: number) => {
  const path = `/discover/tv?api_key=${config.API_KEY}&with_genres=${genreId}`;
  return fetchData(path);
};

export const getSimilar = async (mediaType: string, id: string) => {
  const path = `/${mediaType}/${id}/similar?api_key=${config.API_KEY}&language=pt-BR`;
  return fetchData(path);
};

export const getSeason = async (tvId: string, seasonNumber: string) => {
  const path = `/tv/${tvId}/season/${seasonNumber}?api_key=${config.API_KEY}&language=en-US`;
  return fetchData(path);
};

export const getAllEpisodesForSeries = async (seriesId: number) => {
  const path = `/tv/${seriesId}?api_key=${config.API_KEY}&append_to_response=seasons&language=pt-BR`;  
  return fetchData(path);
};


export const categories = [
  {
    name: "trending",
    title: "Em alta",
    mediaType: "home",
    fetchData: await getTrending("all"),
  },
  {
    name: "trendingMovie",
    title: "Filmes Em alta",
    mediaType: "movie",
    fetchData: await getTrending("movie"),
  },
  {
    name: "trendingMovie",
    title: "Series Em alta",
    mediaType: "tv",
    fetchData: await getTrending('tv'),
  },
  {
    name: "topRatedMovie",
    title: "Filmes Mais bem avaliados",
    mediaType: "movie",
    fetchData: await getTopRated(`movie`),
  },
  {
    name: "topRatedTv",
    title: "Series Mais bem avaliadas",
    mediaType: "tv",
    fetchData: await getTopRated(`tv`),
  },
  {
    name: "comedy",
    title: "Filmes de Comedia",
    mediaType: "movie",
    fetchData: await getMoviesByGenre(35),
  },
  {
    name: "acao",
    title: "Filmes de Ação",
    mediaType: "movie",
    fetchData: await getMoviesByGenre(28),
  },
  {
    name: "romances",
    title: "Filmes de Romances",
    mediaType: "movie",
    fetchData: await getMoviesByGenre(10749),
  },
  { 
    name: "documeries",
    title: "Documentarios",
    mediaType: "movie",
    fetchData: await getMoviesByGenre(99),
  },
  { 
    name: "drama",
    title: "Drama",
    mediaType: "movie",
    fetchData: await getMoviesByGenre(18),
  },
  {
    name: "tv-action",
    title: "Series de Acao",
    mediaType: "tv",
    fetchData: await getTVShowsByGenre(10759),
  },
  {
    name: "tv-comedy",
    title: "Series de Comedia",
    mediaType: "tv",
    fetchData: await getTVShowsByGenre(35),
  },
];

