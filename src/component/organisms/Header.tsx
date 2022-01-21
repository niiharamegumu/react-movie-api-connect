import { Link as ChakraLink, Flex } from "@chakra-ui/react";
import { VFC } from "react";
import { Link } from "react-router-dom";

export const Header: VFC = () => {
  return (
    <Flex
      justify="center"
      gap={10}
      p={{ base: "30px 0" }}
      bg="white"
      color="black"
      mb="20px"
      fontFamily="Cormorant Garamond"
    >
      <ChakraLink fontWeight="800" fontSize={{ base: "md", md: "xl" }}>
        <Link to="/">TREND</Link>
      </ChakraLink>
      <ChakraLink fontWeight="800" fontSize={{ base: "md", md: "xl" }}>
        <Link to="/netflix-original">NETFLIX ORIGINAL</Link>
      </ChakraLink>
    </Flex>
  );
};
