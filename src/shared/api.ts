import config  from "./constant";

const getData = async (path: string) => {
  try {
    const response = await fetch(`${config.BASE_URL}${path}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching movie data: ", error);
  }
};

export const categories = [
  {
    name: "trending",
    title: "Em alta",
    mediaType: "movie",
    fetchData: await getData(`/trending/all/week?api_key=${config.API_KEY}&language=pt-BR`),
  },
  {
    name: "trendingMovie",
    title: "Filmes Em alta",
    fetchData: await getData(`/trending/movie/week?api_key=${config.API_KEY}&language=pt-BR`,),
  },
  {
    name: "trendingMovie",
    title: "Series Em alta",
    fetchData: await getData(`/trending/tv/week?api_key=${config.API_KEY}&language=pt-BR`),
  },
  {
    name: "topRatedMovie",
    title: "Filmes Mais bem avaliados",
    mediaType: "movie",
    fetchData: await getData(`/movie/top_rated?api_key=${config.API_KEY}&language=pt-BR`),
  },
  {
    name: "topRatedTv",
    title: "Series Mais bem avaliadas",
    mediaType: "tv",
    fetchData: await getData(`/tv/top_rated?api_key=${config.API_KEY}&language=pt-BR`),
  },
  {
    name: "comedy",
    title: "Comédias",
    movies: await getData(`/discover/tv?api_key=${config.API_KEY}&with_genres=35`),
  },
  {
    name: "romances",
    title: "Romances",
    movies: await getData(`/discover/tv?api_key=${config.API_KEY}&with_genres=10749`),
  },
  {
    name: "documentaries",
    title: "Documentários",
    movies: await getData(`/discover/tv?api_key=${config.API_KEY}&with_genres=99`),
  },
];

