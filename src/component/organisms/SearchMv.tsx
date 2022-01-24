import { Box, Flex } from "@chakra-ui/react";
import {
  useState,
  ChangeEvent,
  VFC,
  memo,
  useEffect,
  useCallback,
} from "react";

import { filterOpt } from "../../config/search/settings";
import { useSearchFilter } from "../../hooks/useSearchFilter";
import { SelectWithLabel } from "../molecules/input/SelectWithLabel";

type Props = {
  filters: string[];
};

export const SearchMv: VFC<Props> = memo((props) => {
  const { filters } = props;

  const { searchFilter, setSearchFilter } = useSearchFilter();
  const [selectLanguage, setSelectLanguage] = useState(searchFilter.language);
  const [selectMedia, setSelectMedia] = useState(searchFilter.media);
  const [selectTerms, setSelectTerms] = useState(searchFilter.terms);
  const [selectMvGenreId, setSelectMvGenreId] = useState(
    searchFilter.mvGenreId
  );
  const [selectTvGenreId, setSelectTvGenreId] = useState(
    searchFilter.tvGenreId
  );

  useEffect(() => {
    setSearchFilter({
      language: selectLanguage,
      media: selectMedia,
      terms: selectTerms,
      mvGenreId: selectMvGenreId,
      tvGenreId: selectTvGenreId,
    });
  }, [
    selectLanguage,
    selectMedia,
    selectTerms,
    selectMvGenreId,
    selectTvGenreId,
  ]);

  const onChangeSelectLanguage = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectLanguage(e.target.value);
  const onChangeSelectMedia = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectMedia(e.target.value);
  const onChangeSelectTerms = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectTerms(e.target.value);
  const onChangeSelectMvGenreId = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectMvGenreId(e.target.value);
  const onChangeSelectTvGenreId = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectTvGenreId(e.target.value);

  const isExistence = useCallback(
    (filter: string) => {
      return filters.find((item) => item === filter);
    },
    [filters]
  );

  return (
    <Flex
      gap={{ base: 4, md: 8, lg: 12 }}
      justify={{ base: "space-between", sm: "center" }}
      align="center"
      flexDirection="row"
      flexWrap="wrap"
      mb={10}
      p="0 20px"
    >
      <Box display={isExistence("Media") ? "block" : "none"}>
        <SelectWithLabel
          labelText="Media"
          options={filterOpt.media.choices}
          size="sm"
          onChange={onChangeSelectMedia}
        />
      </Box>
      <Box display={isExistence("Terms") ? "block" : "none"}>
        <SelectWithLabel
          labelText="Terms"
          options={filterOpt.terms.choices}
          size="sm"
          onChange={onChangeSelectTerms}
        />
      </Box>
      <Box display={isExistence("Language") ? "block" : "none"}>
        <SelectWithLabel
          labelText="Language"
          options={filterOpt.language.choices}
          size="sm"
          onChange={onChangeSelectLanguage}
        />
      </Box>
      <Box display={isExistence("mvGenre") ? "block" : "none"}>
        <SelectWithLabel
          labelText="Genre"
          options={filterOpt.mvGenres.choices}
          size="sm"
          onChange={onChangeSelectMvGenreId}
        />
      </Box>
      <Box display={isExistence("tvGenre") ? "block" : "none"}>
        <SelectWithLabel
          labelText="Genre"
          options={filterOpt.tvGenres.choices}
          size="sm"
          onChange={onChangeSelectTvGenreId}
        />
      </Box>
    </Flex>
  );
});
