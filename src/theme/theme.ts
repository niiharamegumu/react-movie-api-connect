import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: { heading: "Cormorant Garamond", body: "Noto Sans Georgian" },
  styles: {
    global: {
      body: {
        backgroundColor: "Black",
        color: "White",
      },
    },
  },
});

export default theme;
