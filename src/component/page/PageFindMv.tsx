import { memo } from "react";
import { findMvByGenres } from "../../config/mv-api/settings";
import { useSearchFilter } from "../../hooks/useSearchFilter";
import { MvList } from "../organisms/MvList";
import { SearchMv } from "../organisms/SearchMv";

export const PageFindMv = memo(() => {
  const { searchFilter } = useSearchFilter();
  return (
    <>
      <SearchMv filters={["mvGenre"]} />
      <MvList
        title="Find Movies."
        isLargeRow={true}
        fetchUrl={findMvByGenres(searchFilter.mvGenreId)}
      />
    </>
  );
});
