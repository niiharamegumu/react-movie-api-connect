import { memo, VFC } from "react";
import { feachNetflixOriginals } from "../../config/mv-api/settings";
import { MvList } from "../organisms/MvList";

export const PageNetflixOriginal: VFC = memo(() => {
  return (
    <MvList
      title="Netflex Originals Japan."
      isLargeRow={true}
      fetchUrl={feachNetflixOriginals()}
    />
  );
});
