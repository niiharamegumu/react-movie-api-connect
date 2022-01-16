import axios from "axios";
import { SearchFilter } from "../../type/SearchFilter";

const API_KEY = import.meta.env.VITE_MOVIE_API_API_KEY;
const BASE_URL = import.meta.env.VITE_MOVIE_API_BASE_URL;
export const ImageBaseUrl = "https://image.tmdb.org/t/p/original/";

export const mvAxs = axios.create({
  baseURL: BASE_URL,
});

export const feachTrending = (searchFilter: SearchFilter) => {
  return `/trending/${searchFilter.media}/${searchFilter.terms}?api_key=${API_KEY}&language=${searchFilter.language}`;
};
