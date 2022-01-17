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
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

type Props = {
  title: string;
  isLargeRow?: boolean;
};

export const MvList: VFC<Props> = (props) => {
  const { title, isLargeRow } = props;
  const acticeStyle = {
    transform: "scale(1.1)",
    filter: "grayscale(100%)",
  };

  const [movies, setMovies] = useState<Movie[]>([]);
  const [movie, setMovie] = useState<Movie>({} as Movie);
  const { width } = useWindowDimensions();

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
                transition="all .2s"
                _hover={width > 500 ? acticeStyle : {}}
                _active={width <= 500 ? acticeStyle : {}}
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
