import { VFC } from "react";
import { Route, Routes } from "react-router-dom";
import { Page404 } from "../component/page/Page404";
import { PageNetflixOriginal } from "../component/page/PageNetflixOriginal";
import { PageTrend } from "../component/page/PageTrend";

export const Router: VFC = () => {
  return (
    <Routes>
      <Route path="/" element={<PageTrend />} />
      <Route path="/netflix-original" element={<PageNetflixOriginal />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
