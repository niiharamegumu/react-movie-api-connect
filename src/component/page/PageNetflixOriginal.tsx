import { memo, VFC } from "react";
import { feachNetflixOriginals } from "../../config/mv-api/settings";
import { useSearchFilter } from "../../hooks/useSearchFilter";
import { MvList } from "../organisms/MvList";
import { SearchMv } from "../organisms/SearchMv";

export const PageNetflixOriginal: VFC = memo(() => {
  const { searchFilter } = useSearchFilter();
  return (
    <>
      <SearchMv filters={["tvGenre"]} />
      <MvList
        title="Netflex."
        isLargeRow={true}
        fetchUrl={feachNetflixOriginals(searchFilter.tvGenreId)}
      />
    </>
  );
});
