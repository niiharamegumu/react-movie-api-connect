import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/cormorant-garamond";
import "@fontsource/noto-sans-georgian";

import { Row } from "./component/organisms/Row";
import { mvReqUrls } from "./config/mv-api/settings";
import theme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Row
        title="Trending Now."
        fetchUrl={mvReqUrls.feachTrending}
        isLargeRow={false}
      />
    </ChakraProvider>
  );
}

export default App;
