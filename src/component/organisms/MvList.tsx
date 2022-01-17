import { VFC, useState, useEffect, useCallback } from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import {
  feachTrending,
  ImageBaseUrl,
  mvAxs,
} from "../../config/mv-api/settings";
import { useSearchFilter } from "../../hooks/useSearchFilter";
import { SelectMvModal } from "./SelectMvModal";
import { Movie } from "../../type/movie";

type Props = {
  title: string;
  isLargeRow?: boolean;
};

export const MvList: VFC<Props> = (props) => {
  const { title, isLargeRow } = props;
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movie, setMovie] = useState<Movie>({} as Movie);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { searchFilter } = useSearchFilter();
  const fetchUrl = feachTrending(searchFilter);

  useEffect(() => {
    async function fetchData() {
      console.log(fetchUrl);
      const request = await mvAxs.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const openMvModal = useCallback(
    (movie: Movie) => {
      onOpen();
      setMovie(movie);
    },
    [movie]
  );

  return (
    <Box mb={6}>
      <Heading
        as="h2"
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        mb={4}
        pl=".5em"
      >
        {title}
      </Heading>
      <Grid
        gap={5}
        justify="center"
        templateColumns={{
          base: "100%",
          sm: "repeat(auto-fill, minmax(360px, 1fr))",
        }}
      >
        {movies.map((movie, index) => (
          <GridItem
            key={movie.id}
            cursor="pointer"
            onClick={() => openMvModal(movie)}
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
                w="100%"
                alt={movie.title || movie.name}
              />
            </Box>
            <Text
              fontSize={{ base: "sm", lg: "md" }}
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
            >
              {index + 1} : {movie.title || movie.name}
            </Text>
          </GridItem>
        ))}
      </Grid>
      <SelectMvModal isOpen={isOpen} onClose={onClose} movie={movie} />
    </Box>
  );
};
