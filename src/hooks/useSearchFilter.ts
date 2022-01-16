import { useContext } from "react";
import {
  SearchFilterContext,
  SearchFilterContextType,
} from "../providers/SerchFilterProvider";

export const useSearchFilter = (): SearchFilterContextType =>
  useContext(SearchFilterContext);
