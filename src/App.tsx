import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/cormorant-garamond";
import "@fontsource/noto-sans-georgian";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./component/organisms/Header";

import { Router } from "./router/Router";
import theme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
