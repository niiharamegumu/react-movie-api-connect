import { memo, VFC } from "react";
import { feachTrending } from "../../config/mv-api/settings";
import { useSearchFilter } from "../../hooks/useSearchFilter";
import { MvList } from "../organisms/MvList";
import { SearchMv } from "../organisms/SearchMv";

export const PageTrend: VFC = memo(() => {
  const { searchFilter } = useSearchFilter();
  return (
    <>
      <SearchMv />
      <MvList
        title="Global Trending Now."
        isLargeRow={true}
        fetchUrl={feachTrending(searchFilter)}
      />
    </>
  );
});
