import { Box, Flex } from "@chakra-ui/react";
import { useState, ChangeEvent, VFC, memo, useEffect } from "react";

import { filterOpt } from "../../config/search/settings";
import { useSearchFilter } from "../../hooks/useSearchFilter";
import { SelectWithLabel } from "../molecules/input/SelectWithLabel";

export const SearchMv: VFC = memo(() => {
  const { searchFilter, setSearchFilter } = useSearchFilter();
  const [selectLanguage, setSelectLanguage] = useState(searchFilter.language);
  const [selectMedia, setSelectMedia] = useState(searchFilter.media);
  const [selectTerms, setSelectTerms] = useState(searchFilter.terms);

  useEffect(() => {
    setSearchFilter({
      language: selectLanguage,
      media: selectMedia,
      terms: selectTerms,
    });
  }, [selectLanguage, selectMedia, selectTerms]);

  const onChangeSelectLanguage = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectLanguage(e.target.value);
  const onChangeSelectMedia = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectMedia(e.target.value);
  const onChangeSelectTerms = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectTerms(e.target.value);

  return (
    <Flex
      gap={{ base: 6, md: 8, lg: 12 }}
      justify="center"
      align="center"
      flexDirection={{ base: "column", sm: "row" }}
      mb={10}
    >
      <Box>
        <SelectWithLabel
          labelText="Media"
          options={filterOpt.media.choices}
          size="sm"
          onChange={onChangeSelectMedia}
        />
      </Box>
      <Box>
        <SelectWithLabel
          labelText="Terms"
          options={filterOpt.terms.choices}
          size="sm"
          onChange={onChangeSelectTerms}
        />
      </Box>
      <Box>
        <SelectWithLabel
          labelText="Language"
          options={filterOpt.language.choices}
          size="sm"
          onChange={onChangeSelectLanguage}
        />
      </Box>
    </Flex>
  );
});
