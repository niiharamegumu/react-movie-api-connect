import axios from "axios";
import { SearchFilter } from "../../type/SearchFilter";

const API_KEY = import.meta.env.VITE_MOVIE_API_API_KEY;
const BASE_URL = import.meta.env.VITE_MOVIE_API_BASE_URL;
export const ImageBaseUrl = "https://image.tmdb.org/t/p/original/";

export const mvAxs = axios.create({
  baseURL: BASE_URL,
});

export const feachTrending = (
  media: string = "all",
  terms: string = "day",
  language: string = "ja"
) => {
  return `/trending/${media}/${terms}?api_key=${API_KEY}&language=${language}`;
};

export const feachNetflixOriginals = (tvGenreId: string = "all") => {
  return `/discover/tv?api_key=${API_KEY}&with_networks=213${
    tvGenreId === "all" ? "" : "&with_genres=" + tvGenreId
  }&language=ja`;
};

export const findMvByGenres = (mvGenreId: string = "all") => {
  return `/discover/movie?api_key=${API_KEY}${
    mvGenreId === "all" ? "" : "&with_genres=" + mvGenreId
  }&language=ja`;
};
