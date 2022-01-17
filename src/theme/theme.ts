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
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: "unset",
        },
      },
    },
    ModalCloseButton: {
      baseStyle: {
        control: {
          _focus: {
            boxShadow: "none",
          },
        },
      },
    },
  },
});

export default theme;
