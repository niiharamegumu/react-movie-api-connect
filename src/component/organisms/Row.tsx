import { VFC, useState, useEffect } from "react";
import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

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
    <Box mb={6}>
      <Heading as="h2" fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} mb={2}>
        {title}
      </Heading>
      <Grid
        gap={5}
        justify="center"
        templateColumns="repeat(auto-fit, minmax(330px, 1fr))"
      >
        {movies.map((movie) => (
          <GridItem key={movie.id} cursor="pointer">
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
            <Text
              fontSize={{ base: "sm", lg: "lg" }}
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
            >
              {movie.title || movie.name}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
