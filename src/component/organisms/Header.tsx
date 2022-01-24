import { Flex, Wrap } from "@chakra-ui/react";
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
      <Wrap fontWeight="800" fontSize={{ base: "md", md: "xl" }}>
        <Link to="/">TREND</Link>
      </Wrap>
      <Wrap fontWeight="800" fontSize={{ base: "md", md: "xl" }}>
        <Link to="/netflix-original">NETFLIX</Link>
      </Wrap>
      <Wrap fontWeight="800" fontSize={{ base: "md", md: "xl" }}>
        <Link to="/find-mv">FIND MOVIE</Link>
      </Wrap>
    </Flex>
  );
};
