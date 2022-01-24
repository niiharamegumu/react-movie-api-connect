import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { filterOpt } from "../config/search/settings";
import { SearchFilter } from "../type/SearchFilter";

type Props = {
  children: ReactNode;
};
export type SearchFilterContextType = {
  searchFilter: SearchFilter;
  setSearchFilter: Dispatch<SetStateAction<SearchFilter>>;
};

export const SearchFilterContext = createContext<SearchFilterContextType>(
  {} as SearchFilterContextType
);

export const SearchFilterProvider = (props: Props) => {
  const { children } = props;
  const [searchFilter, setSearchFilter] = useState<SearchFilter>({
    language: filterOpt.language.default,
    media: filterOpt.media.default,
    terms: filterOpt.terms.default,
    mvGenreId: filterOpt.mvGenres.default,
    tvGenreId: filterOpt.tvGenres.default,
  });
  return (
    <SearchFilterContext.Provider value={{ searchFilter, setSearchFilter }}>
      {children}
    </SearchFilterContext.Provider>
  );
};
