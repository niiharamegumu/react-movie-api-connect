import { ChakraProvider, Box } from "@chakra-ui/react";
import "@fontsource/cormorant-garamond";
import "@fontsource/noto-sans-georgian";

import { MvList } from "./component/organisms/MvList";
import { SearchMv } from "./component/organisms/SearchMv";
import theme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box p="30px 0">
        <SearchMv />
        <MvList title="Global Trending Now." isLargeRow={false} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
