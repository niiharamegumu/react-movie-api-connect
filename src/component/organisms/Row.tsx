import { VFC, useState, useEffect } from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import { ImageBaseUrl, mvAxs } from "../../config/mv-api/settings";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};

export const Row: VFC<Props> = (props) => {
  const { title, fetchUrl, isLargeRow } = props;
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchData() {
      const request = await mvAxs.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  return (
    <Box mb={10}>
      <Heading as="h2" fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} mb={2}>
        {title}
      </Heading>
      <Flex overflowX="scroll" overflowY="hidden" gap={{ base: 10, md: 5 }}>
        {movies.map((movie) => (
          <Box
            key={movie.id}
            minW={isLargeRow ? "50%" : "calc(100vw / 3)"}
            cursor="pointer"
          >
            <Box overflow="hidden">
              <Image
                _hover={{
                  transition: "all 0.4s",
                  transform: "scale(1.2)",
                  opacity: 0.6,
                }}
                src={`${ImageBaseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.title || movie.name}
              />
            </Box>
            <Text fontSize="lg">{movie.title || movie.name}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
