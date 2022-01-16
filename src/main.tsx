import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SearchFilterProvider } from "./providers/SerchFilterProvider";

ReactDOM.render(
  <React.StrictMode>
    <SearchFilterProvider>
      <App />
    </SearchFilterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
