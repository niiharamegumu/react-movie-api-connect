import axios from "axios";

const API_KEY = import.meta.env.VITE_MOVIE_API_API_KEY;
const BASE_URL = import.meta.env.VITE_MOVIE_API_BASE_URL;
export const ImageBaseUrl = "https://image.tmdb.org/t/p/original/";

export const mvAxs = axios.create({
  baseURL: BASE_URL,
});

export const mvReqUrls = {
  feachTrending: `/trending/all/week?api_key=${API_KEY}&language=ja`,
  feachNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  feactTopRated: `/discover/tv?api_key=${API_KEY}&languager=en-us`,
  feactActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
  feactComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  feactHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
  feactRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  feactDocumentMovies: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};
